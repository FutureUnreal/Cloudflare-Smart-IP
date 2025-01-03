// IP池配置 - 更新时间: 2025-01-03T11:24:32.818579
const IP_POOLS = {
  "CHINA_TELECOM": {
    "EAST": [
      "104.16.27.255",
      "104.17.85.137",
      "104.16.37.182",
      "104.18.26.88",
      "104.17.133.94",
      "104.18.94.164",
      "104.17.121.187",
      "104.20.199.205",
      "104.27.22.113",
      "172.67.111.51",
      "104.20.203.7",
      "172.67.2.19",
      "172.66.209.242",
      "104.24.8.129",
      "104.22.12.222"
    ],
    "SOUTH": [
      "104.16.232.101",
      "104.18.235.207",
      "172.67.35.243",
      "172.67.19.204",
      "172.67.178.140",
      "172.65.0.158",
      "172.65.156.214",
      "172.65.73.107",
      "172.65.74.190",
      "104.27.59.65"
    ],
    "NORTH": [
      "104.17.212.200",
      "172.65.33.124",
      "172.65.245.217",
      "104.25.85.71",
      "172.65.106.136",
      "172.66.144.174",
      "104.25.132.172",
      "104.27.117.204",
      "104.25.0.21"
    ],
    "CENTRAL": [
      "104.18.156.209",
      "104.22.59.106",
      "104.18.113.103",
      "104.18.64.158",
      "172.65.198.226",
      "172.67.254.69",
      "104.21.102.241",
      "172.67.104.220"
    ],
    "SOUTHWEST": [
      "104.21.33.254",
      "104.17.81.116",
      "104.18.80.42",
      "104.21.233.139",
      "172.67.44.113",
      "104.27.77.228",
      "172.67.136.138",
      "104.18.88.235",
      "104.19.250.91",
      "104.27.27.20"
    ],
    "NORTHWEST": [
      "172.65.208.16",
      "104.21.23.146",
      "104.19.103.196",
      "104.16.134.176",
      "104.18.90.7",
      "104.17.185.207",
      "104.21.31.209",
      "104.21.79.212",
      "172.67.33.248",
      "104.19.29.197",
      "104.24.29.118",
      "104.27.11.12",
      "172.66.215.55",
      "172.65.121.119",
      "172.65.100.116",
      "104.20.154.145"
    ],
    "NORTHEAST": [
      "104.16.169.14",
      "104.19.10.186",
      "172.67.208.141",
      "172.67.153.199",
      "104.18.42.31",
      "104.21.44.161",
      "104.18.33.209",
      "104.25.248.243",
      "104.24.17.164",
      "104.20.114.170",
      "104.24.30.87",
      "104.24.203.201"
    ]
  },
  "CHINA_UNICOM": {
    "EAST": [
      "104.17.48.204",
      "104.17.196.159",
      "104.18.94.164",
      "104.17.81.116",
      "104.18.42.31",
      "104.21.33.254",
      "172.65.178.236",
      "104.22.59.106",
      "104.25.85.71",
      "104.19.250.91",
      "104.24.17.164",
      "172.66.144.174",
      "104.27.27.20"
    ],
    "SOUTH": [
      "104.18.156.209",
      "104.19.103.196",
      "104.21.233.139",
      "172.65.198.226",
      "104.27.22.113",
      "104.21.102.241",
      "172.65.106.136",
      "104.24.30.87",
      "104.27.117.204"
    ],
    "NORTH": [
      "104.19.184.211",
      "104.17.46.60",
      "104.18.151.94",
      "172.66.140.216",
      "104.17.121.187",
      "104.17.185.207",
      "104.16.134.176",
      "172.67.132.225",
      "104.18.33.209",
      "104.21.79.212",
      "172.65.0.158",
      "172.67.136.138",
      "172.67.111.51",
      "172.66.215.55",
      "172.66.209.242",
      "104.20.114.170",
      "104.20.154.145"
    ],
    "CENTRAL": [
      "172.65.208.16",
      "104.18.80.42",
      "104.18.64.158",
      "104.20.199.205",
      "104.27.59.65",
      "104.24.203.201"
    ],
    "SOUTHWEST": [
      "172.66.214.229",
      "104.16.232.101",
      "172.66.202.59",
      "104.25.116.116",
      "172.67.142.23",
      "104.17.248.94",
      "104.17.212.200",
      "104.16.37.182",
      "172.67.33.248",
      "172.65.198.16",
      "172.65.73.107",
      "172.65.74.190",
      "172.67.2.19",
      "172.65.100.116",
      "172.67.104.220",
      "104.25.132.172"
    ],
    "NORTHWEST": [
      "172.67.208.141",
      "104.21.44.161",
      "104.19.10.186",
      "104.17.53.70",
      "104.18.26.88",
      "172.67.19.204",
      "172.65.245.217",
      "104.16.21.31",
      "104.18.90.7",
      "104.18.88.235",
      "172.67.44.113",
      "104.24.8.129"
    ],
    "NORTHEAST": [
      "104.18.113.103",
      "104.20.210.157",
      "104.21.23.146",
      "172.67.243.49",
      "172.67.254.69",
      "104.24.29.118",
      "172.67.35.243",
      "172.65.156.214",
      "104.20.203.7"
    ]
  },
  "CHINA_MOBILE": {
    "EAST": [
      "104.17.48.204",
      "104.18.94.164",
      "172.66.140.216",
      "172.67.178.140",
      "104.27.11.12"
    ],
    "SOUTH": [
      "104.16.27.255",
      "104.26.6.125",
      "172.67.132.225",
      "104.19.29.197",
      "104.16.21.31"
    ],
    "NORTH": [
      "104.17.196.159",
      "172.65.178.236",
      "104.17.53.70",
      "172.67.153.199",
      "104.17.46.60",
      "104.17.85.137",
      "104.17.133.94",
      "104.18.200.155",
      "104.25.248.243"
    ],
    "CENTRAL": [
      "172.66.175.5",
      "104.21.31.209",
      "104.22.12.222"
    ],
    "SOUTHWEST": [
      "172.65.33.124",
      "172.66.214.229",
      "104.18.235.207",
      "104.27.77.228",
      "104.25.0.21"
    ],
    "NORTHWEST": [
      "172.67.243.49"
    ],
    "NORTHEAST": [
      "104.17.248.94",
      "172.66.202.59"
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