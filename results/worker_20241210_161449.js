// IP池配置 - 更新时间: 2024-12-10T16:14:48.103029
const IP_POOLS = {
  "CHINA_TELECOM": {
    "EAST": [
      "104.18.74.161",
      "104.24.206.181",
      "104.20.131.130",
      "104.20.15.103",
      "104.27.64.65",
      "104.19.166.114",
      "104.18.232.172"
    ],
    "SOUTH": [
      "104.19.6.208",
      "104.19.225.237",
      "104.17.73.76",
      "104.17.42.135",
      "172.67.150.110",
      "172.65.55.133",
      "104.21.196.70",
      "104.25.148.157",
      "104.16.98.166",
      "172.65.169.82",
      "104.24.60.103"
    ],
    "NORTH": [
      "104.17.150.65",
      "104.17.27.136",
      "172.65.210.74",
      "104.21.127.3",
      "104.21.31.229",
      "104.21.24.88",
      "104.18.145.229",
      "104.19.130.184",
      "104.19.44.102",
      "104.20.240.169",
      "172.65.212.216",
      "104.16.166.2",
      "172.67.48.147",
      "172.66.128.127"
    ],
    "CENTRAL": [
      "104.19.31.27",
      "172.67.152.15",
      "104.27.75.83",
      "104.20.47.210",
      "172.65.8.180",
      "104.18.60.84",
      "104.20.41.242",
      "104.24.191.158",
      "104.16.101.133",
      "104.17.152.236"
    ],
    "SOUTHWEST": [
      "104.16.180.153",
      "104.17.254.88",
      "104.16.71.199",
      "104.22.56.132",
      "104.21.42.28",
      "172.67.155.50",
      "104.24.59.237",
      "104.24.134.55",
      "172.67.192.167",
      "104.20.140.39",
      "104.21.15.221",
      "172.67.4.103",
      "104.20.12.212",
      "172.67.113.63",
      "104.20.135.124",
      "172.67.82.228",
      "104.25.91.155",
      "104.25.192.186",
      "104.25.10.36",
      "104.22.15.245"
    ],
    "NORTHWEST": [
      "104.18.175.89",
      "172.65.47.112",
      "104.17.195.44",
      "104.19.108.34",
      "104.20.127.120",
      "172.66.215.229",
      "172.65.168.108",
      "104.22.6.199",
      "104.27.36.200",
      "104.16.21.125",
      "104.17.121.108",
      "104.16.0.253",
      "104.25.149.62"
    ],
    "NORTHEAST": [
      "172.65.219.135",
      "104.21.43.87",
      "104.19.76.194",
      "104.19.252.85",
      "104.16.202.72",
      "104.24.249.229",
      "104.27.33.2",
      "172.66.197.85",
      "104.25.110.76",
      "172.65.179.33",
      "104.16.200.123",
      "104.18.27.102",
      "172.65.118.133"
    ]
  },
  "CHINA_UNICOM": {
    "EAST": [
      "104.17.73.76",
      "104.17.42.135",
      "104.18.74.161",
      "104.20.131.130",
      "104.20.240.169",
      "104.25.91.155",
      "104.25.10.36",
      "172.65.179.33",
      "104.24.191.158",
      "172.65.118.133",
      "104.21.43.87",
      "104.21.127.3"
    ],
    "SOUTH": [
      "104.19.9.200",
      "104.19.113.135",
      "104.24.176.122",
      "104.19.31.27",
      "104.16.202.72",
      "172.67.48.147",
      "104.16.251.122",
      "104.24.60.103",
      "104.25.192.186",
      "172.67.192.167"
    ],
    "NORTH": [
      "104.16.220.245",
      "104.20.106.67",
      "104.19.44.102",
      "104.20.165.42",
      "104.24.249.229",
      "104.20.41.242",
      "172.66.128.127",
      "104.18.175.89",
      "172.67.4.103",
      "104.19.108.34",
      "104.16.47.162",
      "172.66.215.229",
      "104.16.21.125",
      "104.21.42.28",
      "104.21.15.221",
      "172.67.155.50",
      "104.21.30.234"
    ],
    "CENTRAL": [
      "172.66.198.216",
      "104.24.206.181",
      "104.16.166.2",
      "104.24.59.237",
      "104.19.166.114",
      "104.27.36.200",
      "104.17.121.108",
      "104.18.253.167",
      "172.65.47.112",
      "104.21.24.88",
      "172.67.150.110"
    ],
    "SOUTHWEST": [
      "104.27.73.254",
      "104.19.19.18",
      "104.16.220.244",
      "104.20.15.103",
      "172.65.8.180",
      "104.24.134.55",
      "172.65.169.82",
      "172.67.113.63",
      "172.65.168.108",
      "104.22.15.245",
      "172.65.46.120"
    ],
    "NORTHWEST": [
      "104.19.225.237",
      "104.24.175.107",
      "104.20.255.7",
      "104.20.135.124",
      "104.16.180.153",
      "104.16.200.123",
      "104.18.27.102",
      "104.25.149.62"
    ],
    "NORTHEAST": [
      "104.19.76.194",
      "172.66.154.108",
      "104.19.48.110",
      "172.65.0.230",
      "104.20.47.210",
      "104.20.127.120",
      "104.19.252.85",
      "172.67.152.15",
      "104.22.6.199",
      "104.16.101.133",
      "104.18.77.62",
      "104.16.0.253",
      "172.65.55.133"
    ]
  },
  "CHINA_MOBILE": {
    "EAST": [
      "104.27.75.83"
    ],
    "SOUTH": [
      "104.19.9.200",
      "104.19.48.110",
      "104.16.251.122",
      "104.20.140.39",
      "104.25.110.76"
    ],
    "NORTH": [
      "104.17.150.65",
      "172.65.219.135",
      "104.27.120.124",
      "172.66.154.108",
      "104.18.60.84"
    ],
    "CENTRAL": [
      "104.17.27.136",
      "104.21.31.229",
      "104.19.130.184",
      "104.20.255.7",
      "172.67.82.228",
      "172.65.46.120"
    ],
    "SOUTHWEST": [
      "104.16.71.199",
      "104.16.220.245",
      "104.27.33.2"
    ],
    "NORTHWEST": [
      "104.19.19.18"
    ],
    "NORTHEAST": [
      "104.19.113.135",
      "104.18.145.229",
      "172.67.162.169"
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