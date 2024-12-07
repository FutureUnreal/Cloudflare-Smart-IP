// IP池配置 - 更新时间: 2024-12-08T23:26:18.116949
const IP_POOLS = {
  "CHINA_TELECOM": {
    "EAST": [
      "104.17.209.94",
      "104.19.23.148",
      "104.16.50.188",
      "104.19.80.63",
      "104.17.8.118",
      "104.16.145.36",
      "104.18.129.75",
      "104.21.47.81",
      "172.66.171.32",
      "104.25.231.73"
    ],
    "SOUTH": [
      "104.17.52.198",
      "104.17.88.77",
      "104.19.134.80",
      "104.21.194.78",
      "104.21.55.152",
      "104.20.233.47",
      "172.65.98.70",
      "104.20.160.241",
      "104.24.193.4",
      "104.24.50.44",
      "104.27.35.203",
      "104.24.228.188"
    ],
    "NORTH": [
      "104.18.52.79",
      "104.19.110.20",
      "104.21.92.153",
      "104.18.201.13",
      "172.67.209.132",
      "104.21.121.255",
      "104.18.36.198",
      "104.18.29.142",
      "104.25.192.97",
      "172.65.153.231",
      "104.25.225.35",
      "104.24.218.196"
    ],
    "CENTRAL": [
      "104.17.250.90",
      "104.19.150.221",
      "104.19.189.119",
      "104.17.245.145",
      "104.22.25.197",
      "104.16.222.37",
      "172.65.175.155",
      "104.25.57.197",
      "104.20.35.248",
      "104.22.34.40",
      "104.20.146.208",
      "104.25.43.207",
      "104.21.200.148",
      "104.24.38.228",
      "172.65.156.209",
      "172.66.201.92",
      "172.66.212.246"
    ],
    "SOUTHWEST": [
      "104.18.196.140",
      "104.17.47.78",
      "104.17.56.81",
      "104.18.239.178",
      "104.18.84.64",
      "104.19.204.139",
      "172.67.195.58",
      "104.22.41.42",
      "104.22.37.2",
      "172.67.129.215",
      "104.24.67.173",
      "104.20.109.215",
      "104.25.18.230"
    ],
    "NORTHWEST": [
      "172.65.8.44",
      "104.19.99.149",
      "104.22.27.9",
      "104.20.241.207",
      "172.65.125.219",
      "172.65.109.207",
      "104.27.112.89"
    ],
    "NORTHEAST": [
      "104.19.4.199",
      "104.17.221.43",
      "172.65.21.191",
      "104.16.75.36",
      "104.21.68.15",
      "172.67.229.35",
      "104.17.77.194",
      "172.67.24.219",
      "104.24.79.10",
      "104.24.230.89",
      "104.25.151.164",
      "104.20.218.123"
    ]
  },
  "CHINA_UNICOM": {
    "EAST": [
      "104.18.201.13",
      "104.21.68.15",
      "104.18.207.235",
      "104.18.36.198",
      "104.21.55.152",
      "172.65.175.155",
      "104.20.146.208",
      "172.65.98.70",
      "104.22.37.2",
      "104.27.112.89"
    ],
    "SOUTH": [
      "172.67.184.143",
      "104.20.90.117",
      "104.17.209.94",
      "172.67.52.19",
      "172.67.244.36",
      "104.17.250.90",
      "104.17.47.78",
      "104.19.231.220",
      "104.16.173.250",
      "104.20.247.135",
      "104.18.196.140",
      "104.25.57.197",
      "104.24.228.188",
      "172.66.201.92",
      "172.65.125.219"
    ],
    "NORTH": [
      "104.19.217.69",
      "104.16.206.180",
      "104.17.110.107",
      "104.17.202.194",
      "104.17.221.43",
      "104.18.84.64",
      "172.65.11.67",
      "172.65.8.44",
      "172.67.24.219",
      "104.21.115.195",
      "104.20.248.211",
      "172.67.236.48",
      "104.24.50.44",
      "172.66.212.246"
    ],
    "CENTRAL": [
      "104.26.3.63",
      "104.18.52.79",
      "104.19.4.199",
      "104.19.80.63",
      "104.19.189.119",
      "104.20.254.91",
      "104.20.71.163",
      "172.66.152.224",
      "104.24.193.4",
      "104.21.200.148",
      "104.27.35.203"
    ],
    "SOUTHWEST": [
      "104.16.4.94",
      "104.17.181.175",
      "104.16.30.174",
      "104.25.124.79",
      "104.24.130.34",
      "172.65.27.54",
      "104.17.88.77",
      "104.16.75.36",
      "104.19.99.149",
      "104.20.218.123",
      "104.25.18.230"
    ],
    "NORTHWEST": [
      "104.18.129.75",
      "104.18.123.95",
      "104.17.77.194",
      "104.18.5.84",
      "104.17.56.81",
      "104.18.29.142",
      "104.25.192.97",
      "104.19.134.80",
      "104.19.23.148",
      "172.67.229.35",
      "104.21.121.255",
      "104.21.25.156",
      "104.24.230.89",
      "104.27.107.144",
      "108.162.193.36",
      "104.22.56.116"
    ],
    "NORTHEAST": [
      "172.65.137.21",
      "104.22.34.40",
      "104.24.73.196",
      "104.20.160.241"
    ]
  },
  "CHINA_MOBILE": {
    "EAST": [
      "172.66.152.224",
      "104.25.162.56",
      "104.20.247.135",
      "104.18.239.178",
      "172.66.171.32",
      "104.18.123.95",
      "172.67.129.215"
    ],
    "SOUTH": [
      "104.16.50.188",
      "104.17.228.216",
      "104.21.92.153",
      "172.67.184.143",
      "104.19.110.20",
      "104.21.3.103",
      "104.20.223.48",
      "104.25.220.240",
      "104.19.204.139",
      "104.21.115.195",
      "172.65.137.21",
      "104.19.231.220",
      "104.24.79.10",
      "104.25.43.207",
      "104.24.38.228"
    ],
    "NORTH": [
      "104.17.110.107",
      "172.66.132.86",
      "104.19.13.3",
      "172.67.236.48",
      "104.25.231.73",
      "104.24.218.196",
      "104.25.151.164",
      "104.20.241.207"
    ],
    "CENTRAL": [
      "104.16.206.180",
      "104.16.145.36",
      "104.20.254.91",
      "172.67.52.19",
      "104.16.165.170",
      "104.22.25.197",
      "104.20.35.248",
      "104.24.73.196",
      "104.20.233.47",
      "104.20.109.215",
      "104.24.67.173"
    ],
    "SOUTHWEST": [
      "104.16.150.247",
      "104.19.150.221",
      "104.26.3.63",
      "104.19.242.237",
      "104.19.176.237",
      "104.16.30.174",
      "104.21.194.78",
      "104.21.25.156",
      "104.27.107.144"
    ],
    "NORTHWEST": [
      "104.17.245.145",
      "104.25.124.79",
      "104.24.85.6",
      "104.22.41.42"
    ],
    "NORTHEAST": [
      "104.17.8.118",
      "104.21.47.81",
      "104.16.4.94",
      "104.16.173.250",
      "104.24.180.180",
      "172.65.109.207"
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