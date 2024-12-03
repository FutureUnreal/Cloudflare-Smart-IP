import json
import logging
from pathlib import Path
from .ip_tester import IPTester
from .pool_updater import PoolUpdater 
from .worker_updater import WorkerUpdater

def setup_logging(name='main'):
   logging.basicConfig(
       level=logging.INFO,
       format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
   )
   return logging.getLogger(name)

def load_configs():
   root_dir = Path(__file__).parent.parent
   
   # 加载配置文件
   settings_file = root_dir / 'config' / 'settings.json'
   ip_ranges_file = root_dir / 'config' / 'ip_ranges.json'
   history_file = root_dir / 'results' / 'ip_history.json'
   
   try:
       settings = json.load(open(settings_file))
       ip_ranges = json.load(open(ip_ranges_file))
       history = json.load(open(history_file)) if history_file.exists() else {}
       
       settings.update(ip_ranges)
       settings['history'] = history
       
       return settings
   except Exception as e:
       logger.error(f"加载配置文件失败: {str(e)}")
       raise

def main():
   logger = setup_logging()
   logger.info("开始更新流程")

   cleaner = PoolUpdater(load_configs())
   cleaner.cleanup_intermediate_files()

   try:
       # 加载配置
       config = load_configs()
       
       # 创建结果目录
       Path('results').mkdir(exist_ok=True)

       # 1. 测试IP
       logger.info("开始IP测试...")
       tester = IPTester(config)
       tester.start()

       # 2. 更新IP池
       logger.info("更新IP池配置...")
       pool_updater = PoolUpdater(config)
       ip_pools = pool_updater.update()  

       # 3. 更新Worker
       logger.info("更新Cloudflare Worker...")
       worker_updater = WorkerUpdater(config)
       success = worker_updater.update(ip_pools)

       if success:
           logger.info("所有更新完成")
       else:
           logger.error("Worker更新失败")

   except Exception as e:
       logger.error(f"更新过程发生错误: {str(e)}")
       raise

   finally:
       # 确保所有handler都关闭
       for handler in logger.handlers[:]:
           handler.close()
           logger.removeHandler(handler)

if __name__ == "__main__":
   main()
