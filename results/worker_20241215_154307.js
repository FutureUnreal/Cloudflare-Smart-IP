// IP池配置 - 更新时间: 2024-12-15T15:43:05.767858
const IP_POOLS = {
  "CHINA_TELECOM": {
    "EAST": [
      "172.65.240.24",
      "104.21.57.168",
      "172.67.252.157",
      "172.67.252.179",
      "104.16.47.185",
      "104.27.200.51",
      "172.67.144.250",
      "172.67.175.215",
      "104.27.205.46",
      "104.18.214.215",
      "104.20.140.61",
      "104.24.174.179",
      "104.19.59.80",
      "104.20.199.43",
      "172.66.142.138",
      "104.25.212.43",
      "104.20.177.96",
      "104.21.233.219",
      "104.24.37.79",
      "104.27.60.107"
    ],
    "SOUTH": [
      "104.18.129.193",
      "104.16.127.175",
      "104.21.46.63",
      "104.19.162.219",
      "172.67.228.213",
      "104.21.196.111",
      "104.25.236.69",
      "104.18.171.105",
      "104.19.44.76",
      "104.19.132.192",
      "104.19.91.49",
      "104.25.101.40"
    ],
    "NORTH": [
      "104.21.126.113",
      "104.21.119.14",
      "172.66.3.52",
      "172.67.25.70",
      "104.16.209.117",
      "104.24.26.211",
      "104.24.203.250",
      "104.19.108.23",
      "104.19.97.162",
      "104.25.243.116",
      "104.24.133.15",
      "172.66.209.201",
      "104.22.46.185",
      "172.65.104.205",
      "104.24.84.71"
    ],
    "CENTRAL": [
      "104.19.250.21",
      "104.16.108.64",
      "104.16.205.45",
      "104.22.23.20",
      "104.17.183.18",
      "104.21.201.36",
      "104.21.95.215",
      "172.65.58.124",
      "104.21.68.138",
      "104.21.1.50",
      "104.16.225.135",
      "172.66.169.67",
      "104.24.128.60",
      "104.25.46.7",
      "104.25.158.113",
      "104.25.136.93",
      "104.25.175.71"
    ],
    "SOUTHWEST": [
      "104.18.162.243",
      "104.16.131.91",
      "104.17.39.140",
      "104.17.243.216",
      "104.25.203.61",
      "104.17.21.254",
      "172.66.216.139",
      "104.25.67.178",
      "172.66.201.176",
      "104.20.44.246",
      "104.20.210.223"
    ],
    "NORTHWEST": [
      "172.67.182.131",
      "172.65.52.237",
      "104.19.108.12",
      "104.19.197.49",
      "104.18.52.105",
      "104.21.114.168",
      "104.18.28.197",
      "104.17.146.143",
      "104.18.11.215",
      "104.25.173.141",
      "172.67.10.61",
      "104.25.175.139",
      "104.24.164.202",
      "104.24.151.204",
      "104.20.141.89"
    ],
    "NORTHEAST": [
      "172.65.58.161",
      "172.67.167.188",
      "172.65.34.162",
      "104.18.239.122",
      "104.16.225.84",
      "104.16.154.29",
      "104.16.68.35",
      "104.16.1.92",
      "104.25.8.238",
      "172.66.207.103",
      "104.20.30.88"
    ]
  },
  "CHINA_UNICOM": {
    "EAST": [
      "104.16.3.143",
      "172.65.179.38",
      "104.16.127.175",
      "104.17.23.163",
      "104.24.26.211",
      "104.18.214.215",
      "172.65.58.124",
      "104.21.41.18",
      "104.21.57.168",
      "172.65.58.161",
      "104.22.46.185",
      "104.25.101.40",
      "172.67.10.61",
      "104.25.175.139",
      "104.25.175.71"
    ],
    "SOUTH": [
      "172.67.31.14",
      "104.25.44.67",
      "104.27.92.66",
      "172.65.241.32",
      "104.17.183.18",
      "172.67.167.188",
      "172.67.182.131",
      "104.20.140.61",
      "104.21.114.168",
      "104.24.128.60",
      "172.66.207.103",
      "104.25.67.178",
      "104.25.136.93",
      "172.66.201.176",
      "104.24.164.202"
    ],
    "NORTH": [
      "104.19.45.103",
      "104.27.70.132",
      "104.20.251.214",
      "104.16.56.39",
      "104.18.28.197",
      "104.18.211.62",
      "104.21.71.63",
      "104.16.94.54",
      "104.25.236.69",
      "104.18.11.215",
      "104.19.97.162",
      "104.19.59.80",
      "172.67.228.213",
      "172.66.216.139",
      "104.20.30.88",
      "104.21.233.219",
      "104.27.60.107",
      "104.25.158.113",
      "172.66.209.201"
    ],
    "CENTRAL": [
      "104.20.111.183",
      "104.25.192.43",
      "104.17.4.83",
      "104.19.171.180",
      "104.25.185.221",
      "104.16.209.117",
      "104.17.243.216",
      "104.16.154.29",
      "104.16.68.35",
      "104.24.174.179",
      "172.65.104.205"
    ],
    "SOUTHWEST": [
      "104.20.190.168",
      "104.22.23.20",
      "104.21.95.215",
      "104.18.239.122",
      "104.25.203.61",
      "104.24.203.250",
      "172.67.144.250",
      "104.25.46.7",
      "104.21.39.52",
      "104.25.243.116",
      "104.24.133.15",
      "172.67.175.215",
      "104.24.84.71",
      "104.20.210.223",
      "104.24.151.204"
    ],
    "NORTHWEST": [
      "104.16.108.64",
      "104.16.131.91",
      "104.20.51.214",
      "104.17.39.140",
      "104.27.53.22",
      "172.65.67.98",
      "104.17.146.143",
      "104.19.108.23",
      "104.16.1.92",
      "104.16.225.135",
      "104.17.21.254",
      "172.66.169.67",
      "104.27.200.51",
      "104.19.44.76",
      "104.18.52.105",
      "104.27.205.46"
    ],
    "NORTHEAST": [
      "104.25.19.86",
      "104.24.136.76",
      "104.19.197.49",
      "172.65.138.187",
      "104.21.1.50",
      "104.16.225.84",
      "104.17.107.47",
      "104.25.8.238",
      "104.21.71.58",
      "104.21.196.111",
      "172.65.52.237",
      "104.20.44.246"
    ]
  },
  "CHINA_MOBILE": {
    "EAST": [
      "172.65.240.24",
      "104.20.252.140",
      "104.18.211.62"
    ],
    "SOUTH": [
      "172.66.3.52",
      "172.65.34.162",
      "104.24.136.76",
      "172.67.25.70",
      "104.18.118.7",
      "104.16.94.54",
      "104.18.171.105",
      "104.19.132.192",
      "104.25.212.43"
    ],
    "NORTH": [
      "104.21.46.63",
      "104.16.56.39"
    ],
    "CENTRAL": [
      "172.67.31.14",
      "104.19.162.219",
      "104.21.201.36",
      "104.27.53.22",
      "104.20.177.96",
      "104.20.141.89"
    ],
    "SOUTHWEST": [
      "104.21.126.113",
      "104.21.119.14",
      "172.65.241.32",
      "104.27.92.66",
      "172.67.252.179",
      "104.19.171.180",
      "104.20.199.43",
      "104.24.37.79"
    ],
    "NORTHWEST": [
      "104.19.6.54",
      "104.25.192.43",
      "104.19.250.172",
      "104.21.71.58",
      "104.21.41.18"
    ],
    "NORTHEAST": [
      "104.19.108.12",
      "104.21.236.147",
      "104.25.44.67",
      "172.67.169.204",
      "104.19.250.21",
      "172.65.67.98",
      "104.19.91.49",
      "104.21.235.93"
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