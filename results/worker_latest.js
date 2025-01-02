// IP池配置 - 更新时间: 2025-01-02T07:40:15.343863
const IP_POOLS = {
  "CHINA_TELECOM": {
    "EAST": [
      "104.17.190.103",
      "104.17.45.147",
      "104.16.13.160",
      "104.17.81.18",
      "104.19.23.190",
      "172.65.0.112",
      "104.22.46.14",
      "104.24.208.139",
      "104.20.180.20",
      "104.25.177.115"
    ],
    "SOUTH": [
      "172.66.40.235",
      "104.21.54.42",
      "172.67.231.139",
      "172.67.58.73",
      "104.24.3.201"
    ],
    "NORTH": [
      "104.17.221.84",
      "104.19.211.44",
      "172.65.45.227",
      "104.18.50.234",
      "104.18.185.105",
      "104.19.210.184",
      "104.16.44.84",
      "104.17.136.9",
      "172.67.33.145",
      "104.22.2.176",
      "104.25.159.123",
      "104.25.57.188",
      "104.20.75.156",
      "104.20.226.98",
      "104.24.54.165",
      "104.25.2.127",
      "104.24.45.201",
      "104.24.252.251",
      "104.20.170.168"
    ],
    "CENTRAL": [
      "104.16.77.26",
      "104.19.79.154",
      "104.18.68.229",
      "104.18.235.100",
      "172.65.225.171",
      "104.22.58.151",
      "172.67.196.40",
      "172.67.249.119",
      "104.20.3.104",
      "104.20.231.180",
      "104.27.12.144",
      "172.66.199.131"
    ],
    "SOUTHWEST": [
      "172.65.34.92",
      "104.17.233.35",
      "104.16.120.108",
      "104.16.144.46",
      "104.21.88.208",
      "104.21.1.185",
      "104.25.241.22",
      "172.67.123.53",
      "104.25.219.253",
      "104.20.15.81",
      "104.24.156.24",
      "104.25.35.98",
      "104.20.111.92"
    ],
    "NORTHWEST": [
      "172.67.167.169",
      "172.67.143.214",
      "172.65.10.242",
      "104.18.144.236",
      "104.18.41.59",
      "172.65.75.130",
      "104.24.222.23",
      "104.25.82.239",
      "172.67.116.253"
    ],
    "NORTHEAST": [
      "172.65.238.143",
      "104.19.9.214",
      "104.18.81.150",
      "172.65.53.122",
      "172.65.210.58",
      "104.16.10.80",
      "104.18.54.112",
      "172.67.31.15",
      "172.67.28.35",
      "104.25.97.57",
      "104.27.73.218",
      "104.25.195.92",
      "104.25.38.40"
    ]
  },
  "CHINA_UNICOM": {
    "EAST": [
      "104.18.112.6",
      "104.18.235.100",
      "104.17.94.30",
      "104.17.136.9",
      "104.24.75.142",
      "104.19.103.95",
      "104.19.92.164",
      "104.24.197.186",
      "172.67.33.145",
      "104.24.222.23",
      "172.65.30.231",
      "104.20.3.104",
      "104.25.241.22"
    ],
    "SOUTH": [
      "104.25.129.245",
      "104.20.204.137",
      "172.67.167.169",
      "172.67.143.214",
      "104.16.44.84",
      "104.21.54.42",
      "104.18.54.112",
      "104.25.38.40"
    ],
    "NORTH": [
      "104.19.173.225",
      "104.17.221.84",
      "104.17.87.220",
      "104.18.1.200",
      "104.24.0.188",
      "172.65.210.58",
      "104.18.144.236",
      "104.20.70.74",
      "104.19.134.87",
      "104.19.151.80",
      "104.18.41.59",
      "104.16.139.63",
      "104.17.81.18",
      "172.67.123.53",
      "104.20.180.20",
      "104.20.111.92"
    ],
    "CENTRAL": [
      "104.19.79.154",
      "172.67.42.143",
      "104.19.3.186",
      "104.16.77.26",
      "104.25.137.148",
      "104.18.68.229",
      "104.19.171.186",
      "172.65.0.112",
      "104.16.144.46",
      "104.18.195.56",
      "104.25.82.239",
      "104.24.3.201"
    ],
    "SOUTHWEST": [
      "104.16.13.160",
      "104.17.233.35",
      "172.65.34.92",
      "172.65.53.122",
      "104.16.10.80",
      "104.16.120.108",
      "104.17.45.147",
      "172.67.245.31",
      "104.19.210.184",
      "104.21.1.185",
      "104.27.30.139",
      "104.25.159.123",
      "172.66.199.131"
    ],
    "NORTHWEST": [
      "172.66.40.235",
      "172.65.45.227",
      "104.17.190.103",
      "104.18.185.105",
      "104.16.56.143",
      "172.65.10.242",
      "104.17.147.105",
      "172.67.196.40",
      "104.19.23.190",
      "172.67.249.119",
      "172.66.198.129",
      "104.24.4.132",
      "104.22.46.14",
      "172.67.58.73",
      "172.67.116.253",
      "104.20.231.180",
      "104.24.54.165",
      "104.24.208.139",
      "104.24.252.251",
      "104.24.156.24"
    ],
    "NORTHEAST": [
      "172.65.238.143",
      "104.19.227.251",
      "104.18.50.234",
      "104.21.88.208",
      "104.18.248.154",
      "104.20.75.156",
      "104.20.226.98",
      "104.20.15.81"
    ]
  },
  "CHINA_MOBILE": {
    "EAST": [
      "104.19.3.186",
      "104.19.227.251",
      "104.27.30.139",
      "104.25.2.127",
      "104.25.177.115"
    ],
    "SOUTH": [
      "104.16.49.9",
      "104.24.0.188",
      "104.16.56.143",
      "104.17.147.105",
      "172.67.245.31",
      "172.65.75.130",
      "104.25.195.92"
    ],
    "NORTH": [
      "104.19.173.225",
      "104.19.151.80",
      "104.24.4.132",
      "104.25.219.253"
    ],
    "CENTRAL": [
      "172.66.207.247",
      "104.18.195.56",
      "104.25.57.188"
    ],
    "SOUTHWEST": [
      "104.20.34.94",
      "104.19.103.95",
      "104.22.2.176"
    ],
    "NORTHWEST": [
      "172.65.225.171",
      "172.67.42.143"
    ],
    "NORTHEAST": [
      "104.17.87.220",
      "104.17.94.30",
      "104.20.204.137",
      "104.19.212.188",
      "104.19.134.87",
      "172.65.30.231",
      "104.18.248.154",
      "104.25.35.98"
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