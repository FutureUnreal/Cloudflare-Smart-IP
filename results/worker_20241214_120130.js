// IP池配置 - 更新时间: 2024-12-14T12:01:28.280867
const IP_POOLS = {
  "CHINA_TELECOM": {
    "EAST": [
      "104.17.243.113",
      "104.18.4.221",
      "104.16.120.201",
      "172.65.242.104",
      "104.18.135.123",
      "104.21.29.89",
      "104.19.242.52",
      "172.65.42.25",
      "104.21.83.163",
      "172.67.190.223",
      "172.65.67.212",
      "104.24.226.241",
      "104.19.83.110",
      "104.24.168.24",
      "104.24.206.187",
      "104.25.162.129"
    ],
    "SOUTH": [
      "104.16.144.250",
      "104.17.106.19",
      "104.18.113.252",
      "104.17.112.128",
      "104.17.239.169",
      "104.18.136.206",
      "104.22.27.220",
      "172.66.130.198",
      "104.24.41.55",
      "104.19.61.47",
      "104.20.55.243",
      "104.24.73.204",
      "104.20.150.164"
    ],
    "NORTH": [
      "104.18.64.2",
      "104.21.45.49",
      "104.16.76.62",
      "172.67.162.216",
      "104.16.63.225",
      "104.18.123.32",
      "104.27.199.88",
      "104.20.38.130"
    ],
    "CENTRAL": [
      "104.19.164.26",
      "104.18.40.228",
      "108.162.193.1",
      "104.19.243.201",
      "104.16.4.89",
      "172.65.164.228",
      "104.19.60.11",
      "104.19.26.208",
      "104.20.198.134",
      "172.65.157.229",
      "104.19.92.106",
      "104.20.41.62",
      "172.65.151.227",
      "104.24.244.206",
      "172.67.55.189"
    ],
    "SOUTHWEST": [
      "104.18.68.67",
      "104.19.238.157",
      "104.19.187.73",
      "104.19.178.154",
      "104.17.186.0",
      "104.21.26.82",
      "172.67.244.17",
      "104.25.152.53",
      "172.67.74.163"
    ],
    "NORTHWEST": [
      "104.18.73.251",
      "104.19.235.85",
      "104.19.248.10",
      "172.67.164.48",
      "104.17.243.108",
      "104.27.203.173",
      "104.16.238.163",
      "172.67.23.176",
      "104.18.47.115",
      "104.20.152.252",
      "172.65.137.126",
      "104.18.49.73",
      "104.24.56.249",
      "104.20.104.9"
    ],
    "NORTHEAST": [
      "104.21.4.1",
      "104.17.159.155",
      "172.67.41.165",
      "104.16.53.157",
      "172.66.209.92",
      "104.24.198.83",
      "104.27.2.49",
      "104.20.41.57"
    ]
  },
  "CHINA_UNICOM": {
    "EAST": [
      "104.21.83.163",
      "172.67.58.242",
      "104.17.243.108",
      "104.19.60.11",
      "172.67.74.163"
    ],
    "SOUTH": [
      "104.21.45.49",
      "104.18.215.106",
      "172.67.29.200",
      "104.19.164.26",
      "104.18.64.2",
      "172.65.67.212",
      "104.19.83.110",
      "172.65.157.229",
      "104.18.49.73"
    ],
    "NORTH": [
      "108.162.193.171",
      "104.21.215.48",
      "172.66.130.61",
      "104.25.251.218",
      "104.27.89.105",
      "104.19.187.73",
      "104.16.120.201",
      "104.19.238.157",
      "104.19.248.10",
      "104.18.136.206",
      "172.67.23.176",
      "104.20.198.134",
      "104.19.92.106",
      "104.24.168.24",
      "104.24.198.83"
    ],
    "CENTRAL": [
      "104.17.239.169",
      "172.65.168.204",
      "172.66.143.86",
      "104.18.73.251",
      "104.17.186.0",
      "104.27.203.173",
      "104.24.41.55",
      "172.65.137.126",
      "104.24.56.249",
      "104.20.104.9",
      "104.27.2.49"
    ],
    "SOUTHWEST": [
      "104.18.113.150",
      "104.17.251.247",
      "104.24.33.193",
      "104.27.78.201",
      "172.67.162.216",
      "172.67.203.204",
      "104.19.71.97",
      "172.67.164.48",
      "104.16.76.62",
      "104.27.199.88",
      "172.66.130.198",
      "104.19.251.138"
    ],
    "NORTHWEST": [
      "104.17.233.0",
      "104.22.27.220",
      "104.17.4.7",
      "108.162.193.1",
      "172.65.164.228",
      "104.18.125.105",
      "104.21.31.152",
      "104.18.123.32",
      "104.17.159.155",
      "104.20.38.130",
      "104.19.61.47",
      "104.24.206.187",
      "104.20.41.57"
    ],
    "NORTHEAST": [
      "104.24.237.102",
      "172.67.244.17",
      "104.17.106.19",
      "104.19.243.201",
      "104.20.55.243",
      "104.24.244.206"
    ]
  },
  "CHINA_MOBILE": {
    "EAST": [
      "104.16.144.250",
      "108.162.193.171",
      "172.67.203.204",
      "104.19.251.138",
      "104.20.152.252",
      "104.25.162.129"
    ],
    "SOUTH": [
      "172.65.242.104",
      "172.65.168.204",
      "172.66.143.86",
      "104.20.103.102",
      "104.25.251.218",
      "172.67.209.32",
      "172.65.42.25",
      "104.21.215.48",
      "172.66.130.61",
      "172.67.190.223",
      "104.16.108.54",
      "104.25.152.53",
      "104.16.53.157",
      "104.18.47.115"
    ],
    "NORTH": [
      "172.67.58.242",
      "104.24.159.1",
      "104.16.238.163"
    ],
    "CENTRAL": [
      "104.18.215.106",
      "104.22.38.59",
      "104.25.111.187",
      "104.18.135.123",
      "104.17.4.7",
      "104.18.113.150",
      "104.22.54.238",
      "104.24.226.241",
      "172.65.151.227",
      "104.20.150.164"
    ],
    "SOUTHWEST": [
      "104.21.4.1",
      "172.67.41.165",
      "104.18.125.105",
      "172.66.209.92"
    ],
    "NORTHWEST": [
      "104.17.243.113",
      "104.19.179.91"
    ],
    "NORTHEAST": [
      "104.22.0.37",
      "104.21.29.89",
      "104.18.4.221",
      "104.27.78.201",
      "104.27.89.105",
      "104.21.31.152",
      "104.20.41.62"
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