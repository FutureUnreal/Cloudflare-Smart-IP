import json
import statistics
from pathlib import Path
from typing import Dict
from .utils import setup_logging
from datetime import datetime, timedelta

class PoolUpdater:
  def __init__(self, config: Dict):
      self.config = config
      self.logger = setup_logging('pool_updater')
      self.results_dir = Path('results')
      self.ip_pools = {
          isp: {region: [] for region in config['regions']}
          for isp in config['isps']
      }
      self.max_ips_per_region = config.get('ips_per_region', 5)
      self.isp_mapping = {
          'TELECOM': 'CHINA_TELECOM',
          'UNICOM': 'CHINA_UNICOM',
          'MOBILE': 'CHINA_MOBILE'
      }
      self.history_file = Path('results/ip_history.json')
      self.ip_history = self._load_history()
      self.latency_threshold = config.get('latency_threshold', 150)
      self.stability_threshold = config.get('stability_threshold', 50) 
      self.score_threshold = config.get('score_threshold', 200)

  def _load_history(self) -> Dict:
      if self.history_file.exists():
          with open(self.history_file) as f:
              return json.load(f)
      return {}

  def _save_history(self):
      self.history_file.parent.mkdir(exist_ok=True)
      with open(self.history_file, 'w') as f:
          json.dump(self.ip_history, f, indent=2)

  def _update_history(self, ip: str, metrics: Dict):
      if ip not in self.ip_history:
          self.ip_history[ip] = []
      
      cutoff = (datetime.now() - timedelta(days=30)).isoformat()
      
      history = self.ip_history[ip]
      history = [h for h in history if h['timestamp'] > cutoff]
      
      history.append({
          'timestamp': datetime.now().isoformat(),
          'latency': metrics['latency'],
          'loss_rate': metrics.get('loss_rate', 0)
      })
      
      self.ip_history[ip] = history

  def _evaluate_ip(self, ip: str) -> float:
      history = self.ip_history.get(ip, [])
      if not history:
          return float('inf')
      
      recent = history[-5:]
      if not recent:
          return float('inf')
          
      avg_latency = sum(h['latency'] for h in recent) / len(recent)
      if len(recent) > 1:
          stability = statistics.stdev([h['latency'] for h in recent])
      else:
          stability = 0
      
      score = avg_latency + stability * 0.5
      return score

  def _is_poor_performance(self, ip: str) -> bool:
      history = self.ip_history.get(ip, [])
      if not history:
          return False
          
      recent = history[-5:]
      if len(recent) < 3:
          return False
          
      avg_latency = sum(h['latency'] for h in recent) / len(recent)
      if avg_latency > self.latency_threshold:
          return True
          
      if len(recent) > 1:
          stability = statistics.stdev([h['latency'] for h in recent])
          if stability > self.stability_threshold:
              return True
              
      score = self._evaluate_ip(ip)
      return score > self.score_threshold

  def load_test_results(self) -> Dict:
      try:
          result_files = list(self.results_dir.glob('test_results_*.json'))
          if not result_files:
              raise FileNotFoundError("没有找到测试结果文件")
              
          latest_file = max(result_files, key=lambda x: x.stat().st_mtime)
          
          with open(latest_file) as f:
              return json.load(f)
      except Exception as e:
          self.logger.error(f"加载测试结果失败: {str(e)}")
          return None

  def cleanup_intermediate_files(self):
      """清理中间文件但保留重要历史数据"""
      exclude_patterns = ['ip_history.json', 'test_results_latest.json', 'ip_pools_latest.json']
      for f in self.results_dir.glob('test_results_intermediate_*.json'):
          if f.name not in exclude_patterns and (datetime.now() - datetime.fromtimestamp(f.stat().st_mtime)).days > 1:
              try:
                  f.unlink()
                  self.logger.info(f"已删除中间文件: {f.name}")
              except Exception as e:
                  self.logger.error(f"删除文件失败 {f.name}: {str(e)}")

  def update(self) -> Dict:
      results = self.load_test_results()
      if not results:
          self.logger.error("没有可用的测试结果")
          return self.ip_pools

      organized_data = {
          isp: {region: [] for region in self.ip_pools[isp]}
          for isp in self.ip_pools
      }

      for result in results:
          if result['status'] != 'ok':
              continue

          ip = result['ip']
          for isp_short, test_data in result['tests'].items():
              full_isp = self.isp_mapping.get(isp_short)
              if not full_isp:
                  continue

              if isinstance(test_data, dict) and test_data.get('available'):
                  latency = test_data.get('latency', float('inf'))
                  loss_rate = test_data.get('loss_rate', 0)
                  
                  if latency < float('inf'):
                      node_id = test_data.get('node_id')
                      region = self._get_region_by_node(full_isp, node_id)
                      
                      if region:
                          self._update_history(ip, {
                              'latency': latency,
                              'loss_rate': loss_rate
                          })
                          
                          if self._is_poor_performance(ip):
                              self.logger.info(f"跳过表现不佳的IP: {ip}")
                              continue
                              
                          organized_data[full_isp][region].append({
                              'ip': ip,
                              'latency': latency,
                              'loss_rate': loss_rate,
                              'score': self._evaluate_ip(ip)
                          })

      for isp in organized_data:
          for region in organized_data[isp]:
              current_ips = set(self.ip_pools[isp][region])
              
              candidates = organized_data[isp][region]
              candidates.sort(key=lambda x: (x['score'], x['latency']))
              
              self.ip_pools[isp][region] = []
              seen_ips = set()
              
              for ip in current_ips:
                  if not self._is_poor_performance(ip):
                      self.ip_pools[isp][region].append(ip)
                      seen_ips.add(ip)
              
              for candidate in candidates:
                  ip = candidate['ip']
                  if ip not in seen_ips and len(self.ip_pools[isp][region]) < self.max_ips_per_region:
                      self.ip_pools[isp][region].append(ip)
                      seen_ips.add(ip)

              if candidates:
                  self.logger.info(
                      f"{isp} {region}: 保留 {len(self.ip_pools[isp][region])} 个IP，"
                      f"延迟范围 {candidates[0]['latency']:.1f}ms - "
                      f"{candidates[min(self.max_ips_per_region-1, len(candidates)-1)]['latency']:.1f}ms"
                  )

      # 清理旧的中间文件
      self.cleanup_intermediate_files()

      self._save_history()
      self.save_results()
      return self.ip_pools

  def _get_region_by_node(self, isp: str, node_id: str) -> str:
      node_mapping = self.config.get('NODE_MAPPING', {})
      if isp in node_mapping:
          for region, nodes in node_mapping[isp].items():
              if node_id in nodes:
                  return region
      return None

  def save_results(self):
      timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
      self.results_dir.mkdir(exist_ok=True)
      
      with open(self.results_dir / f'ip_pools_{timestamp}.json', 'w') as f:
          json.dump(self.ip_pools, f, indent=2)
      
      with open(self.results_dir / 'ip_pools_latest.json', 'w') as f:
          json.dump(self.ip_pools, f, indent=2)
          
      self.logger.info("IP池配置已保存")
