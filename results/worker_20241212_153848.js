// IP池配置 - 更新时间: 2024-12-12T15:38:47.168834
const IP_POOLS = {
  "CHINA_TELECOM": {
    "EAST": [
      "108.162.192.166",
      "104.16.167.138",
      "104.27.17.81",
      "104.25.210.209",
      "104.25.100.64",
      "104.19.89.65",
      "104.24.56.92",
      "104.27.102.145",
      "104.24.230.121"
    ],
    "SOUTH": [
      "104.17.57.187",
      "104.17.100.164",
      "104.18.58.174",
      "104.19.209.67",
      "104.22.22.247",
      "104.18.25.82",
      "104.24.74.200",
      "104.19.172.132",
      "172.65.204.194",
      "104.18.168.34",
      "104.24.217.21"
    ],
    "NORTH": [
      "104.21.104.42",
      "104.16.107.6",
      "104.17.117.142",
      "104.18.16.73",
      "104.22.19.87",
      "104.18.212.95",
      "104.18.246.239",
      "104.17.212.207",
      "104.20.117.63",
      "172.67.71.7",
      "172.67.83.99"
    ],
    "CENTRAL": [
      "104.18.154.79",
      "104.17.188.209",
      "172.66.130.239"
    ],
    "SOUTHWEST": [
      "104.19.102.103",
      "104.21.25.130",
      "172.66.199.1",
      "172.67.119.137"
    ],
    "NORTHWEST": [
      "172.65.49.151",
      "172.65.195.199",
      "104.19.239.241",
      "104.19.196.183",
      "104.21.238.82",
      "104.27.81.240",
      "104.20.47.243",
      "104.16.190.56",
      "104.20.105.51",
      "104.18.77.126",
      "104.24.42.135",
      "104.26.11.74",
      "104.27.67.24"
    ],
    "NORTHEAST": [
      "104.18.1.235",
      "104.17.59.177",
      "104.16.94.22",
      "104.20.202.26",
      "104.24.55.146",
      "104.24.4.95",
      "172.66.157.18",
      "104.25.198.244",
      "172.65.159.38",
      "104.25.69.183"
    ]
  },
  "CHINA_UNICOM": {
    "EAST": [
      "104.18.215.47",
      "104.17.191.173",
      "104.27.17.81",
      "104.20.105.51",
      "104.19.89.65",
      "172.65.41.129",
      "172.66.157.18"
    ],
    "SOUTH": [
      "104.19.68.133",
      "104.19.58.110",
      "104.18.212.95",
      "104.16.94.22",
      "104.17.117.142",
      "104.18.168.34"
    ],
    "NORTH": [
      "104.20.30.191",
      "104.26.11.252",
      "104.19.34.59",
      "104.25.208.10",
      "104.17.188.209",
      "104.20.123.206",
      "104.16.190.56",
      "104.21.104.42",
      "104.21.107.116",
      "104.24.4.95",
      "104.27.102.145",
      "172.65.159.38",
      "104.25.198.244"
    ],
    "CENTRAL": [
      "104.18.191.3",
      "104.18.183.129",
      "104.22.19.87",
      "104.19.209.67",
      "104.18.246.118",
      "104.24.56.92",
      "172.67.83.99"
    ],
    "SOUTHWEST": [
      "108.162.192.166",
      "104.20.167.198",
      "104.18.58.174",
      "172.65.49.151",
      "104.17.78.203",
      "104.16.167.138",
      "104.18.77.126",
      "104.24.42.135"
    ],
    "NORTHWEST": [
      "104.19.137.16",
      "104.19.239.241",
      "104.18.89.128",
      "172.65.163.63",
      "104.20.202.26",
      "104.24.55.146",
      "104.25.100.64",
      "104.24.217.21",
      "104.20.117.63"
    ],
    "NORTHEAST": [
      "104.17.57.187",
      "104.16.175.136",
      "104.27.81.240",
      "104.18.246.239"
    ]
  },
  "CHINA_MOBILE": {
    "EAST": [
      "104.17.59.177",
      "104.18.16.73",
      "104.21.25.130"
    ],
    "SOUTH": [
      "172.66.164.119",
      "104.18.89.128",
      "104.22.22.247",
      "104.19.196.183",
      "172.67.71.7"
    ],
    "NORTH": [
      "172.65.156.26",
      "104.26.11.252",
      "104.25.210.209"
    ],
    "CENTRAL": [
      "104.27.13.124",
      "172.65.1.169",
      "172.65.195.199",
      "104.16.107.6",
      "104.24.74.200",
      "104.20.47.243",
      "172.65.204.194",
      "104.25.69.183",
      "104.27.67.24"
    ],
    "SOUTHWEST": [
      "104.18.1.235",
      "104.18.25.82",
      "104.20.77.130",
      "104.20.13.117",
      "104.19.34.59",
      "104.25.208.10",
      "104.18.126.197",
      "104.18.246.118",
      "104.17.212.207",
      "104.21.65.53",
      "172.66.130.239",
      "104.26.11.74"
    ],
    "NORTHWEST": [
      "104.17.78.203",
      "104.19.172.132"
    ],
    "NORTHEAST": [
      "104.17.100.164",
      "104.18.154.79",
      "104.25.119.129",
      "104.16.175.136",
      "172.65.41.129",
      "104.24.230.121"
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