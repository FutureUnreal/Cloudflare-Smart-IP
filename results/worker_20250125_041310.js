// IP池配置 - 更新时间: 2025-01-25T04:13:08.520679
const IP_POOLS = {
  "CHINA_TELECOM": {
    "EAST": [
      "104.18.53.84",
      "104.19.182.223",
      "104.17.225.183",
      "172.67.251.185",
      "172.67.169.42",
      "104.24.72.125",
      "104.24.171.31",
      "104.17.187.41",
      "172.65.254.182",
      "104.18.105.162",
      "104.25.65.86",
      "172.65.150.196",
      "104.25.86.40"
    ],
    "SOUTH": [
      "104.18.201.160",
      "104.21.228.60",
      "104.21.42.135",
      "172.65.229.1",
      "104.25.18.235",
      "104.20.106.252",
      "104.20.19.45"
    ],
    "NORTH": [
      "104.17.125.146",
      "104.24.163.176",
      "104.25.3.13",
      "172.66.203.108",
      "172.67.77.7",
      "104.26.10.251",
      "104.24.47.241",
      "104.24.189.81",
      "104.22.69.155",
      "172.65.178.118",
      "104.25.68.160"
    ],
    "CENTRAL": [
      "104.16.180.128",
      "172.67.152.238",
      "104.19.36.28",
      "104.18.102.85",
      "104.25.218.191",
      "104.27.81.186",
      "104.20.132.94"
    ],
    "SOUTHWEST": [
      "104.16.46.82",
      "172.67.193.168",
      "104.21.126.57",
      "172.67.181.154",
      "172.67.149.20",
      "104.21.71.91",
      "104.24.233.221",
      "104.16.26.123",
      "104.19.191.182",
      "104.25.148.43",
      "104.20.163.216"
    ],
    "NORTHWEST": [
      "104.19.6.76",
      "104.17.58.88",
      "104.16.222.97",
      "104.17.100.248",
      "104.27.96.30",
      "104.24.80.95"
    ],
    "NORTHEAST": [
      "104.17.160.203",
      "104.18.41.64",
      "104.19.88.161",
      "104.16.136.178",
      "104.17.107.253",
      "104.16.19.151",
      "104.20.231.126",
      "104.24.31.86",
      "172.65.141.73",
      "104.22.67.240",
      "172.67.74.133"
    ]
  },
  "CHINA_UNICOM": {
    "EAST": [
      "104.17.168.153",
      "104.18.192.153",
      "172.67.251.185",
      "104.16.180.128",
      "104.21.203.170",
      "104.27.66.9",
      "104.20.132.94"
    ],
    "SOUTH": [
      "104.21.59.103",
      "172.65.98.125",
      "172.67.208.61",
      "172.66.169.92",
      "172.67.181.154",
      "104.16.19.151",
      "104.20.163.216"
    ],
    "NORTH": [
      "104.19.211.45",
      "104.17.160.203",
      "104.17.101.238",
      "104.18.53.84",
      "104.18.41.64",
      "104.22.14.150",
      "104.19.36.28",
      "104.20.106.252",
      "172.65.141.73"
    ],
    "CENTRAL": [
      "104.21.76.249",
      "104.21.215.221",
      "104.16.222.97",
      "104.24.171.31",
      "172.65.254.182",
      "104.18.105.162",
      "104.25.148.43",
      "104.27.81.186",
      "104.25.86.40",
      "172.67.74.133"
    ],
    "SOUTHWEST": [
      "104.17.125.146",
      "104.27.100.250",
      "104.18.63.231",
      "104.27.202.14",
      "104.16.46.82",
      "172.67.149.20",
      "104.21.42.135",
      "172.65.229.1",
      "104.20.231.126",
      "104.22.67.240",
      "104.24.80.95"
    ],
    "NORTHWEST": [
      "104.18.76.204",
      "104.17.46.214",
      "104.17.243.32",
      "172.65.199.198",
      "104.18.70.236",
      "104.16.136.178",
      "104.26.10.251",
      "172.65.150.196",
      "104.25.68.160"
    ],
    "NORTHEAST": [
      "104.21.228.60",
      "104.17.225.183",
      "104.25.192.72"
    ]
  },
  "CHINA_MOBILE": {
    "EAST": [
      "172.67.179.129",
      "104.27.66.9",
      "104.27.100.250",
      "104.21.113.96",
      "104.25.192.72",
      "172.66.203.108"
    ],
    "SOUTH": [
      "104.16.21.37",
      "172.66.169.92",
      "104.18.63.231",
      "104.19.251.148",
      "104.16.26.123",
      "104.19.191.182",
      "104.25.218.191"
    ],
    "NORTH": [],
    "CENTRAL": [
      "104.17.168.153",
      "104.18.76.204",
      "172.67.169.42",
      "172.67.152.238",
      "104.22.14.150",
      "104.18.192.153",
      "104.19.88.161",
      "104.24.47.241",
      "104.24.189.81",
      "104.25.65.86"
    ],
    "SOUTHWEST": [
      "104.19.182.223",
      "104.19.211.45",
      "104.18.201.160",
      "104.25.3.13"
    ],
    "NORTHWEST": [
      "104.17.58.88",
      "172.67.193.168",
      "104.21.215.221"
    ],
    "NORTHEAST": [
      "104.21.203.170",
      "104.24.233.221",
      "172.65.178.118",
      "104.22.69.155"
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