// IP池配置 - 更新时间: 2025-01-16T07:37:20.721501
const IP_POOLS = {
  "CHINA_TELECOM": {
    "EAST": [
      "104.19.231.63",
      "104.19.242.133",
      "104.17.46.210",
      "104.19.140.107",
      "104.20.230.192",
      "104.18.180.157",
      "104.18.212.177",
      "104.25.241.228",
      "104.18.100.3",
      "104.20.88.64",
      "104.27.15.107",
      "172.67.93.232",
      "172.66.205.38"
    ],
    "SOUTH": [
      "104.16.114.134",
      "104.17.67.22",
      "104.16.81.152",
      "104.21.20.250",
      "104.20.231.157",
      "104.16.245.243",
      "104.18.151.90",
      "104.16.226.236",
      "104.18.83.134",
      "104.24.78.67",
      "104.20.58.203"
    ],
    "NORTH": [
      "104.18.141.253",
      "104.19.30.72",
      "104.16.38.233",
      "104.20.56.241",
      "104.17.36.171",
      "104.19.9.223",
      "104.16.254.166",
      "104.24.69.141"
    ],
    "CENTRAL": [
      "172.67.41.52",
      "172.67.199.37",
      "172.67.207.246",
      "104.24.170.181",
      "104.16.94.108",
      "172.65.208.13",
      "104.16.178.19",
      "104.16.178.77",
      "172.66.41.12",
      "104.18.220.225",
      "104.25.25.67",
      "172.67.93.76",
      "172.66.153.135",
      "104.25.216.71"
    ],
    "SOUTHWEST": [
      "172.65.49.193",
      "104.17.78.152",
      "104.18.122.243",
      "104.17.131.76",
      "172.65.13.20",
      "172.65.27.213",
      "104.21.83.250",
      "104.25.12.251",
      "104.27.82.62",
      "104.17.100.3",
      "104.18.224.195",
      "104.17.186.100",
      "104.18.64.61",
      "104.16.182.31",
      "104.17.93.253",
      "172.65.130.150",
      "104.27.23.117",
      "104.20.52.11"
    ],
    "NORTHWEST": [
      "172.67.185.55",
      "104.17.129.184",
      "104.19.149.215",
      "104.20.6.167",
      "104.25.140.30"
    ],
    "NORTHEAST": [
      "172.67.175.71",
      "172.67.179.172",
      "104.18.63.235",
      "104.19.251.188",
      "172.67.80.75",
      "104.19.114.28",
      "104.17.27.183",
      "172.65.104.159",
      "104.24.8.178",
      "104.24.224.231",
      "172.65.64.185"
    ]
  },
  "CHINA_UNICOM": {
    "EAST": [
      "104.17.46.210",
      "104.18.41.103",
      "172.67.185.55",
      "104.17.129.184",
      "172.65.13.20",
      "104.19.251.188",
      "172.67.175.71",
      "172.67.207.246",
      "172.67.80.75",
      "172.67.179.172",
      "104.16.94.108",
      "172.65.208.13",
      "104.18.224.195",
      "104.25.241.228",
      "104.18.220.225",
      "104.24.224.231",
      "172.65.64.185"
    ],
    "SOUTH": [
      "104.25.44.214",
      "104.19.242.133",
      "104.19.140.107",
      "172.67.46.103",
      "104.18.248.233",
      "104.18.83.134",
      "104.24.69.141",
      "104.27.23.117",
      "104.25.140.30"
    ],
    "NORTH": [
      "104.20.89.14",
      "172.67.199.37",
      "104.16.38.233",
      "104.21.43.170",
      "104.17.67.22",
      "172.65.237.174",
      "104.19.9.223",
      "104.27.82.62",
      "104.17.27.183",
      "104.16.178.19",
      "104.18.212.177",
      "104.16.182.31",
      "104.18.64.61",
      "172.67.93.232",
      "104.24.8.178"
    ],
    "CENTRAL": [
      "104.16.114.134",
      "104.17.27.28",
      "104.21.20.250",
      "104.24.170.181",
      "104.19.114.28",
      "104.18.151.90",
      "104.17.186.100",
      "104.27.15.107"
    ],
    "SOUTHWEST": [
      "172.65.49.193",
      "104.18.63.235",
      "104.19.30.72",
      "172.67.41.52",
      "104.17.78.152",
      "172.65.27.213",
      "104.18.141.253",
      "104.20.230.192",
      "104.16.254.166",
      "104.20.88.64",
      "104.24.78.67"
    ],
    "NORTHWEST": [
      "104.19.231.63",
      "104.19.180.82",
      "104.16.96.104",
      "104.20.56.241",
      "104.21.83.250",
      "104.25.12.251",
      "104.17.100.3",
      "104.19.149.215",
      "104.16.178.77",
      "104.18.100.3",
      "104.25.25.67",
      "172.65.130.150",
      "104.20.6.167",
      "172.66.153.135",
      "104.25.216.71",
      "172.66.205.38",
      "104.20.52.11"
    ],
    "NORTHEAST": [
      "104.25.52.236",
      "104.18.122.243",
      "104.17.36.171",
      "104.16.245.243",
      "172.67.93.76",
      "172.65.104.159"
    ]
  },
  "CHINA_MOBILE": {
    "EAST": [
      "104.21.19.69",
      "172.65.148.78",
      "104.17.27.28",
      "104.17.131.76",
      "104.25.52.236",
      "104.16.81.152",
      "104.20.89.14",
      "104.17.93.253"
    ],
    "SOUTH": [
      "104.16.96.104"
    ],
    "NORTH": [
      "104.16.14.165",
      "104.25.44.214",
      "104.21.43.170",
      "104.16.226.236",
      "104.20.58.203"
    ],
    "CENTRAL": [
      "172.67.46.103"
    ],
    "SOUTHWEST": [
      "104.18.41.103",
      "104.18.248.233",
      "172.66.41.12"
    ],
    "NORTHWEST": [
      "104.22.60.235",
      "172.65.109.227"
    ],
    "NORTHEAST": [
      "104.19.180.82"
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