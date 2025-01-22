// IP池配置 - 更新时间: 2025-01-22T15:34:33.663976
const IP_POOLS = {
  "CHINA_TELECOM": {
    "EAST": [
      "104.19.244.38",
      "172.65.93.208",
      "172.67.206.75",
      "104.18.95.24",
      "172.65.143.22",
      "104.17.5.23",
      "104.20.130.115",
      "104.19.111.24"
    ],
    "SOUTH": [
      "104.18.63.191",
      "172.67.164.107",
      "172.67.165.168",
      "104.21.193.165",
      "104.17.212.206",
      "104.18.171.122",
      "104.17.242.98",
      "104.18.5.106"
    ],
    "NORTH": [
      "172.67.21.130",
      "104.18.36.158",
      "104.17.59.101",
      "104.19.225.154",
      "104.19.203.30",
      "104.19.96.195",
      "104.16.2.90",
      "104.16.76.233",
      "104.19.142.220",
      "104.25.140.43",
      "172.65.72.57",
      "104.20.190.90"
    ],
    "CENTRAL": [
      "104.21.217.171",
      "104.25.185.99",
      "104.20.82.54",
      "104.20.71.228",
      "172.67.50.110",
      "104.24.27.36",
      "104.20.116.22"
    ],
    "SOUTHWEST": [
      "172.65.79.144",
      "172.65.243.205",
      "172.65.237.217",
      "172.66.44.114",
      "104.20.179.57"
    ],
    "NORTHWEST": [
      "104.21.57.252",
      "104.19.83.57",
      "172.65.130.83",
      "104.20.154.14"
    ],
    "NORTHEAST": [
      "172.65.48.53",
      "104.19.248.33",
      "104.19.49.124",
      "104.16.131.63",
      "104.17.228.23",
      "104.19.45.120",
      "172.65.178.2",
      "104.20.134.192",
      "104.20.111.144",
      "172.65.139.45"
    ]
  },
  "CHINA_UNICOM": {
    "EAST": [
      "104.24.182.63",
      "104.25.111.154",
      "104.16.74.209",
      "172.65.93.208",
      "172.65.79.144",
      "104.17.242.98",
      "172.65.178.2",
      "104.20.190.90",
      "104.21.88.62"
    ],
    "SOUTH": [
      "104.25.103.69",
      "172.65.70.233",
      "104.25.164.103",
      "104.24.138.110",
      "172.67.21.130",
      "172.65.143.22",
      "104.19.49.124",
      "104.19.83.57"
    ],
    "NORTH": [
      "172.66.170.148",
      "104.27.45.144",
      "104.18.66.230",
      "172.67.206.75",
      "104.19.96.195",
      "172.65.243.205",
      "172.66.44.114",
      "104.20.134.192"
    ],
    "CENTRAL": [
      "104.25.30.193",
      "104.18.36.102",
      "172.65.198.47",
      "104.20.109.77",
      "104.18.63.191",
      "104.18.100.251",
      "104.18.36.158",
      "104.16.131.63",
      "104.17.5.23",
      "104.20.71.228",
      "104.25.140.43"
    ],
    "SOUTHWEST": [
      "104.25.2.200",
      "104.16.108.229",
      "104.20.110.28",
      "104.18.231.98",
      "104.16.2.90"
    ],
    "NORTHWEST": [
      "172.67.164.107",
      "104.25.185.99",
      "104.21.57.252",
      "104.19.45.120",
      "104.24.27.36",
      "104.19.142.220",
      "104.20.111.144",
      "104.20.179.57"
    ],
    "NORTHEAST": [
      "104.24.166.133",
      "172.67.165.168",
      "104.18.65.49",
      "104.18.95.24",
      "172.66.31.142"
    ]
  },
  "CHINA_MOBILE": {
    "EAST": [
      "104.19.244.38",
      "104.25.30.193",
      "104.18.36.102",
      "104.21.208.36",
      "104.24.166.133",
      "104.16.108.229",
      "172.65.237.217"
    ],
    "SOUTH": [
      "172.65.5.62",
      "104.27.72.35",
      "104.24.138.110",
      "104.18.131.180",
      "172.67.204.133",
      "104.27.45.144",
      "104.18.171.122",
      "172.65.72.57"
    ],
    "NORTH": [
      "104.17.71.76",
      "104.22.75.159",
      "104.21.107.212",
      "104.18.62.155",
      "104.19.225.154",
      "104.21.88.62"
    ],
    "CENTRAL": [
      "104.25.103.69",
      "104.25.111.154",
      "172.65.213.252",
      "104.20.130.115"
    ],
    "SOUTHWEST": [
      "172.65.70.233",
      "104.21.193.165",
      "104.20.110.28",
      "104.20.116.22"
    ],
    "NORTHWEST": [
      "172.65.198.47"
    ],
    "NORTHEAST": [
      "104.18.65.49",
      "172.65.130.83",
      "172.65.139.45"
    ]
  }
};

// ASN到运营商的映射
const ASN_TO_ISP = {
  // 电信
  '4134': 'CHINA_TELECOM',
  '4809': 'CHINA_TELECOM',
  // 联通
  '4837': 'CHINA_UNICOM', 
  '9929': 'CHINA_UNICOM',
  '4808': 'CHINA_UNICOM',
  // 移动
  '9808': 'CHINA_MOBILE',
  '56040': 'CHINA_MOBILE'
};

// 区域列表
const REGIONS = [
  'EAST',
  'NORTH', 
  'SOUTH',
  'CENTRAL',
  'SOUTHWEST',
  'NORTHWEST',
  'NORTHEAST'
];

// 错误类型定义
const ERRORS = {
  NO_IP: '无可用IP',
  UNKNOWN_ISP: '未知运营商',
  INVALID_REGION: '无效区域'
};

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const clientInfo = {
    ip: request.headers.get('CF-Connecting-IP'),
    asn: request.cf.asn.toString(),
    region: request.cf.region,
    colo: request.cf.colo
  };

  try {
    const isp = determineISP(clientInfo.asn);
    const region = determineRegion(clientInfo);
    const bestIP = await selectBestIP(isp, region);

    return new Response(JSON.stringify({
      status: 'success',
      client: clientInfo,
      result: {
        isp: isp,
        region: region,
        ip: bestIP
      }
    }), {
      headers: {
        'content-type': 'application/json',
        'cache-control': 'max-age=300'
      }
    });
  } catch (error) {
    const status = error.message === ERRORS.NO_IP ? 503 : 500;
    return new Response(JSON.stringify({
      status: 'error',
      message: error.message,
      client: clientInfo
    }), {
      status: status,
      headers: { 'content-type': 'application/json' }
    });
  }
}

function determineISP(asn) {
  const isp = ASN_TO_ISP[asn];
  if (!isp) {
    throw new Error(ERRORS.UNKNOWN_ISP);
  }
  return isp;
}

function determineRegion(clientInfo) {
  const regionMap = {
    'SHA': 'EAST',   // 上海
    'BEJ': 'NORTH',  // 北京
    'GUD': 'SOUTH',  // 广东
    'HUB': 'CENTRAL' // 湖北
  };

  if (clientInfo.region && regionMap[clientInfo.region]) {
    return regionMap[clientInfo.region];
  }

  // 默认返回华东
  return 'EAST';
}

async function selectBestIP(isp, region) {
  let candidates = [];

  // 1. 优先选择同ISP同区域的IP
  if (IP_POOLS[isp] && IP_POOLS[isp][region] && IP_POOLS[isp][region].length > 0) {
    candidates = IP_POOLS[isp][region];
  }

  // 2. 如果没有找到,尝试同ISP其他区域
  if (candidates.length === 0 && IP_POOLS[isp]) {
    for (const r of REGIONS) {
      if (r !== region && IP_POOLS[isp][r] && IP_POOLS[isp][r].length > 0) {
        candidates = candidates.concat(IP_POOLS[isp][r]);
      }
    }
  }

  // 3. 如果还是没有,使用其他ISP的IP
  if (candidates.length === 0) {
    for (const otherIsp in IP_POOLS) {
      if (otherIsp !== isp && IP_POOLS[otherIsp][region] && IP_POOLS[otherIsp][region].length > 0) {
        candidates = candidates.concat(IP_POOLS[otherIsp][region]);
      }
    }
  }

  // 4. 如果还是没有找到可用IP,则抛出错误
  if (candidates.length === 0) {
    throw new Error(ERRORS.NO_IP);
  }

  // 随机选择一个IP,避免单点故障
  return candidates[Math.floor(Math.random() * candidates.length)];
}