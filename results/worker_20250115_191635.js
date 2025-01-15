// IP池配置 - 更新时间: 2025-01-15T19:16:14.281028
const IP_POOLS = {
  "CHINA_TELECOM": {
    "EAST": [
      "104.19.146.73",
      "104.19.83.99",
      "104.16.205.209",
      "104.18.43.70",
      "104.21.94.122",
      "172.67.254.0",
      "172.65.18.81",
      "172.65.69.0",
      "104.25.17.209",
      "104.17.57.28",
      "104.24.195.3",
      "104.27.24.126",
      "104.20.205.65"
    ],
    "SOUTH": [
      "104.17.230.250",
      "104.17.43.137",
      "104.16.64.71",
      "104.18.29.111",
      "172.65.239.198",
      "172.67.129.186",
      "104.21.100.27",
      "104.20.238.119",
      "104.20.211.4",
      "104.20.217.129",
      "104.25.228.195"
    ],
    "NORTH": [
      "104.19.2.231",
      "104.19.35.37",
      "104.21.203.158",
      "172.67.182.214",
      "104.19.14.132",
      "172.67.131.147",
      "104.18.74.189",
      "104.27.46.40",
      "104.25.94.19",
      "104.22.13.232"
    ],
    "CENTRAL": [
      "172.65.250.102",
      "104.16.142.23",
      "104.18.255.66",
      "172.65.192.74",
      "104.19.132.1",
      "104.24.203.199",
      "104.21.71.53",
      "104.24.27.137",
      "172.66.210.40",
      "172.66.200.138",
      "104.27.12.15",
      "104.22.41.228"
    ],
    "SOUTHWEST": [
      "104.16.173.246",
      "104.17.97.182",
      "104.19.1.220",
      "104.19.54.4",
      "104.16.225.143",
      "104.16.25.13",
      "104.19.208.43",
      "172.67.245.196",
      "172.65.155.1",
      "104.25.209.231",
      "172.65.247.238",
      "104.24.90.107",
      "104.20.71.94"
    ],
    "NORTHWEST": [
      "104.16.110.76",
      "104.16.11.142",
      "104.16.4.222",
      "104.18.127.39",
      "104.18.19.129",
      "104.27.68.92"
    ],
    "NORTHEAST": [
      "104.17.99.32",
      "104.16.107.56",
      "172.67.155.169",
      "104.18.138.231",
      "104.17.91.175",
      "104.18.31.46",
      "172.65.109.150"
    ]
  },
  "CHINA_UNICOM": {
    "EAST": [
      "104.16.77.141",
      "104.17.230.250",
      "104.17.178.89",
      "104.25.69.170",
      "104.20.32.51",
      "104.16.251.38",
      "104.22.16.5",
      "104.19.90.244",
      "172.66.44.219",
      "104.18.31.46",
      "104.27.46.40"
    ],
    "SOUTH": [
      "104.19.83.99",
      "172.65.183.12",
      "104.21.210.227",
      "104.20.103.240",
      "104.27.69.122",
      "172.67.254.0",
      "104.24.91.170",
      "104.19.208.43",
      "104.18.19.129",
      "104.17.64.200",
      "104.16.4.222",
      "104.18.167.61",
      "104.27.68.92",
      "172.66.200.138",
      "104.25.94.19"
    ],
    "NORTH": [
      "172.65.181.114",
      "104.19.14.132",
      "104.19.35.37",
      "104.19.93.157",
      "104.25.52.165",
      "104.24.210.18",
      "104.17.91.175",
      "104.17.43.137",
      "172.67.102.167"
    ],
    "CENTRAL": [
      "172.67.131.147",
      "172.65.175.187",
      "104.20.172.55",
      "104.19.68.109",
      "104.18.43.70",
      "104.24.62.147",
      "104.25.227.107",
      "104.16.225.143",
      "104.16.59.63",
      "104.16.188.229",
      "104.21.31.50",
      "104.27.24.126"
    ],
    "SOUTHWEST": [
      "104.25.119.243",
      "104.27.87.4",
      "104.20.56.117",
      "104.18.29.111",
      "104.27.111.56",
      "104.17.57.28",
      "104.21.100.27",
      "104.24.90.107"
    ],
    "NORTHWEST": [
      "104.22.34.131",
      "104.24.187.76",
      "104.19.2.231",
      "104.19.180.49",
      "104.19.132.1",
      "104.25.17.209",
      "172.65.20.228",
      "172.65.69.0",
      "104.27.78.51",
      "104.20.238.119",
      "104.20.217.129",
      "104.21.72.14",
      "104.20.71.94"
    ],
    "NORTHEAST": [
      "104.16.173.246",
      "104.16.11.142",
      "104.16.110.76",
      "104.19.75.160",
      "104.22.21.72",
      "104.27.12.15"
    ]
  },
  "CHINA_MOBILE": {
    "EAST": [
      "104.17.178.89",
      "172.67.222.77",
      "104.16.107.56",
      "172.65.247.238",
      "104.24.195.3",
      "172.65.109.150"
    ],
    "SOUTH": [
      "104.19.146.73",
      "172.67.155.169",
      "104.21.94.122",
      "172.67.182.214",
      "104.27.105.46",
      "104.24.27.137",
      "104.25.209.231"
    ],
    "NORTH": [
      "104.16.142.23",
      "104.17.99.32",
      "104.18.61.149",
      "104.19.1.220",
      "104.25.52.165",
      "104.25.63.147",
      "172.65.20.228",
      "104.27.78.51"
    ],
    "CENTRAL": [
      "104.17.97.182",
      "172.65.192.74",
      "104.19.90.244",
      "172.66.209.165",
      "104.19.93.157",
      "104.27.111.56",
      "104.18.167.61",
      "172.65.181.114",
      "104.20.56.117",
      "104.20.211.4"
    ],
    "SOUTHWEST": [
      "104.25.38.231",
      "104.25.227.107",
      "104.19.75.160",
      "104.19.180.49"
    ],
    "NORTHWEST": [
      "104.19.68.109",
      "104.18.255.66",
      "104.16.188.229",
      "104.25.119.243",
      "104.22.13.232"
    ],
    "NORTHEAST": [
      "104.16.205.209",
      "104.19.54.4",
      "104.18.74.189",
      "172.65.239.198",
      "172.66.44.219",
      "104.25.63.169",
      "104.16.25.13",
      "104.22.21.72",
      "172.67.245.196",
      "104.22.41.228"
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