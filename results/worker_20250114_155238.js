// IP池配置 - 更新时间: 2025-01-14T15:52:36.862232
const IP_POOLS = {
  "CHINA_TELECOM": {
    "EAST": [
      "172.67.44.131",
      "172.67.131.232",
      "104.19.236.205",
      "104.20.191.166",
      "104.20.173.174",
      "104.24.0.47",
      "172.65.112.252",
      "104.25.143.49",
      "104.27.23.247"
    ],
    "SOUTH": [
      "172.65.89.3",
      "172.67.39.84",
      "104.16.158.73",
      "104.19.244.16",
      "104.18.22.87",
      "104.16.119.170",
      "104.16.217.41",
      "104.21.39.60",
      "172.65.55.42",
      "104.21.199.177",
      "104.25.93.190",
      "104.20.111.115"
    ],
    "NORTH": [
      "104.19.229.23",
      "172.67.135.51",
      "172.65.24.202",
      "104.21.127.121",
      "172.67.238.119",
      "104.22.19.90",
      "104.27.59.125",
      "104.17.249.41",
      "104.20.201.96",
      "104.17.188.13",
      "104.18.94.47",
      "104.16.200.63",
      "104.25.170.182",
      "104.22.36.173"
    ],
    "CENTRAL": [
      "104.18.18.127",
      "172.65.83.176",
      "104.17.141.33",
      "172.65.214.251",
      "104.18.81.45",
      "172.65.212.209",
      "104.17.208.182",
      "104.19.227.150",
      "104.16.86.84",
      "104.16.238.235",
      "104.25.11.27",
      "104.22.10.150",
      "104.25.143.14"
    ],
    "SOUTHWEST": [
      "104.19.195.193",
      "104.21.194.24",
      "172.65.160.44"
    ],
    "NORTHWEST": [
      "172.67.156.115",
      "104.21.219.38",
      "104.17.30.55",
      "172.67.23.215",
      "104.24.43.117",
      "104.16.89.154",
      "104.27.55.16",
      "104.20.247.235",
      "104.22.9.108",
      "104.24.11.139",
      "172.67.114.30"
    ],
    "NORTHEAST": [
      "104.17.198.80",
      "104.21.19.192",
      "104.18.192.175",
      "104.19.81.105",
      "104.18.129.101",
      "104.21.225.88",
      "104.18.39.114",
      "104.18.53.58",
      "104.17.202.75",
      "104.20.169.42",
      "104.27.8.122",
      "104.25.172.123",
      "172.67.69.251",
      "104.22.73.55"
    ]
  },
  "CHINA_UNICOM": {
    "EAST": [
      "172.67.39.84",
      "104.25.200.250",
      "104.17.198.80",
      "104.18.18.127",
      "172.65.145.145",
      "104.21.82.63",
      "104.18.192.175",
      "104.19.244.16",
      "104.20.220.42",
      "172.65.83.176",
      "104.16.133.15",
      "104.27.59.125",
      "104.16.119.170",
      "172.65.212.209",
      "104.20.191.166",
      "104.21.87.151",
      "172.67.238.119",
      "104.24.0.47",
      "104.22.36.173",
      "172.67.114.30"
    ],
    "SOUTH": [
      "104.25.218.33",
      "104.20.222.192",
      "172.67.40.79",
      "172.65.171.172",
      "104.25.218.57",
      "104.19.115.63",
      "104.16.158.73",
      "104.19.195.193",
      "104.20.73.165",
      "104.17.30.55",
      "104.18.81.45",
      "104.27.116.85",
      "104.16.86.84",
      "104.27.8.122",
      "172.67.69.251",
      "104.22.73.55"
    ],
    "NORTH": [
      "104.18.26.130",
      "104.19.156.131",
      "104.18.53.58",
      "104.17.249.41",
      "104.20.247.235",
      "104.21.199.177",
      "104.24.11.139"
    ],
    "CENTRAL": [
      "172.65.100.2",
      "104.21.19.192",
      "104.18.94.47",
      "104.25.93.190",
      "104.20.111.115",
      "104.25.143.14"
    ],
    "SOUTHWEST": [
      "172.65.66.66",
      "104.20.120.75",
      "104.18.22.87",
      "104.24.172.25",
      "172.65.214.251",
      "104.17.202.75",
      "104.16.238.235",
      "172.65.24.202",
      "104.27.23.247"
    ],
    "NORTHWEST": [
      "104.19.183.196",
      "172.67.44.131",
      "172.67.135.51",
      "104.25.73.131",
      "104.24.238.113",
      "104.25.88.43",
      "104.22.16.181",
      "104.16.68.87",
      "104.21.225.88",
      "104.16.131.128",
      "104.19.227.150",
      "104.17.208.182",
      "172.65.112.252",
      "104.20.169.42",
      "104.19.132.229",
      "104.22.10.150",
      "104.22.9.108",
      "172.65.160.44"
    ],
    "NORTHEAST": [
      "104.18.55.13",
      "104.25.243.148",
      "104.19.81.105",
      "104.19.236.205",
      "104.18.129.101",
      "104.20.201.96",
      "104.16.89.154",
      "104.27.55.16"
    ]
  },
  "CHINA_MOBILE": {
    "EAST": [
      "104.25.218.57",
      "104.18.254.218",
      "104.25.25.252",
      "104.24.151.133",
      "104.20.120.75",
      "104.16.68.87",
      "104.16.131.128",
      "104.20.173.174"
    ],
    "SOUTH": [
      "104.17.37.212",
      "104.19.98.9",
      "104.25.73.131",
      "104.16.217.41",
      "172.65.55.42",
      "104.24.205.204",
      "104.16.133.15"
    ],
    "NORTH": [
      "104.16.139.235",
      "104.16.244.170",
      "104.21.219.38",
      "172.66.149.187",
      "172.65.229.102",
      "104.19.183.196",
      "104.18.55.13",
      "104.18.26.130"
    ],
    "CENTRAL": [
      "172.65.171.172",
      "104.17.188.13"
    ],
    "SOUTHWEST": [
      "104.17.150.5",
      "104.18.143.103",
      "104.21.87.151"
    ],
    "NORTHWEST": [
      "104.24.238.113",
      "172.66.162.246",
      "104.27.18.183",
      "104.25.172.123"
    ],
    "NORTHEAST": [
      "104.25.200.250",
      "104.24.249.61",
      "104.22.16.181",
      "172.67.122.231",
      "104.16.200.63"
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