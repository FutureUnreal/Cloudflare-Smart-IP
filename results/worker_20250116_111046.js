// IP池配置 - 更新时间: 2025-01-16T11:10:44.950464
const IP_POOLS = {
  "CHINA_TELECOM": {
    "EAST": [
      "104.18.149.147",
      "104.17.60.108",
      "104.16.63.169",
      "104.21.203.45",
      "104.25.48.90",
      "104.19.12.128",
      "104.20.35.173",
      "104.19.215.213",
      "104.20.222.66",
      "104.20.24.194"
    ],
    "SOUTH": [
      "104.19.247.120",
      "104.18.49.214",
      "172.65.198.187",
      "172.66.151.65",
      "104.16.176.152",
      "104.19.74.49",
      "172.65.143.186",
      "172.66.212.90",
      "104.24.227.70"
    ],
    "NORTH": [
      "104.19.162.115",
      "104.19.63.22",
      "104.20.163.157",
      "104.25.79.27",
      "104.18.144.96",
      "104.25.247.212"
    ],
    "CENTRAL": [
      "1.0.0.175",
      "104.17.178.11",
      "172.65.11.28",
      "172.67.215.45",
      "172.65.181.148",
      "104.27.204.196",
      "104.27.108.203",
      "104.20.51.173",
      "104.20.167.116",
      "104.27.67.179",
      "104.20.204.182"
    ],
    "SOUTHWEST": [
      "104.18.171.236",
      "172.65.13.155",
      "104.17.66.217",
      "172.67.179.175",
      "104.21.107.110",
      "172.65.114.99",
      "104.18.164.41",
      "104.24.13.127",
      "104.20.191.35"
    ],
    "NORTHWEST": [
      "104.17.108.91",
      "172.65.36.203",
      "104.16.27.38"
    ],
    "NORTHEAST": [
      "104.18.67.78",
      "172.67.252.154",
      "104.21.62.216",
      "172.67.193.52",
      "104.18.232.237",
      "104.18.123.81",
      "104.16.214.242",
      "104.25.218.16",
      "104.27.92.66",
      "104.20.16.96",
      "172.67.72.179"
    ]
  },
  "CHINA_UNICOM": {
    "EAST": [
      "104.27.32.97",
      "172.67.240.236",
      "172.67.221.151",
      "172.65.11.28",
      "104.21.203.45",
      "104.27.92.66",
      "172.65.104.96"
    ],
    "SOUTH": [
      "104.25.117.243",
      "104.20.221.13",
      "104.19.99.77",
      "104.22.45.10",
      "172.67.38.19",
      "104.17.45.243",
      "104.16.214.242",
      "104.24.20.58",
      "104.16.176.152",
      "104.24.13.127"
    ],
    "NORTH": [
      "172.65.113.68",
      "104.17.178.11",
      "104.16.145.19",
      "104.18.196.186",
      "104.20.164.131",
      "104.18.49.214",
      "104.20.222.66",
      "172.66.212.90"
    ],
    "CENTRAL": [
      "1.0.0.175",
      "104.25.197.188",
      "172.67.11.198",
      "172.65.182.104",
      "104.17.210.57",
      "172.67.81.142",
      "172.67.252.154",
      "104.22.2.249",
      "104.21.14.64",
      "172.65.13.155",
      "104.17.66.217",
      "104.20.163.157",
      "104.20.18.235",
      "104.26.3.93",
      "104.27.108.203",
      "104.20.191.35"
    ],
    "SOUTHWEST": [
      "104.24.177.170",
      "104.24.149.86",
      "104.18.149.147",
      "104.18.166.204",
      "104.19.14.220",
      "172.65.181.148",
      "104.18.87.46",
      "172.67.215.45",
      "104.20.16.96"
    ],
    "NORTHWEST": [
      "104.24.243.170",
      "104.19.247.120",
      "104.25.128.132",
      "104.21.55.79",
      "172.65.142.80",
      "104.19.215.213",
      "172.66.151.65",
      "172.65.77.203",
      "104.18.164.41"
    ],
    "NORTHEAST": [
      "172.66.1.91",
      "104.27.4.89",
      "104.24.245.204",
      "104.18.232.237",
      "104.20.51.173",
      "104.27.67.179"
    ]
  },
  "CHINA_MOBILE": {
    "EAST": [
      "104.17.108.91",
      "104.18.67.78",
      "104.24.53.48",
      "104.25.237.117",
      "172.66.155.41",
      "104.25.79.27",
      "172.65.77.203",
      "104.16.27.38",
      "104.20.204.182"
    ],
    "SOUTH": [
      "172.65.173.24",
      "104.17.201.72",
      "104.17.90.29",
      "104.24.149.86",
      "104.27.204.196",
      "104.24.227.70"
    ],
    "NORTH": [
      "104.24.158.51",
      "104.21.68.243",
      "104.18.196.186",
      "172.65.143.186"
    ],
    "CENTRAL": [
      "104.19.44.172",
      "172.65.36.203",
      "104.19.77.221",
      "172.65.84.9",
      "104.19.72.95",
      "104.19.12.128",
      "104.25.247.212"
    ],
    "SOUTHWEST": [
      "104.25.128.132",
      "172.67.193.52",
      "104.25.48.90",
      "172.67.240.236",
      "104.24.243.170",
      "104.19.205.34",
      "172.65.142.80",
      "172.65.182.104",
      "172.65.104.96",
      "104.19.74.49",
      "172.67.72.179"
    ],
    "NORTHWEST": [
      "172.67.67.224",
      "104.27.22.76",
      "104.27.34.198",
      "104.20.129.188"
    ],
    "NORTHEAST": [
      "104.20.221.13",
      "172.65.129.89"
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