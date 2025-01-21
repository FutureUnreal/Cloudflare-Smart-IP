// IP池配置 - 更新时间: 2025-01-21T23:02:26.310009
const IP_POOLS = {
  "CHINA_TELECOM": {
    "EAST": [
      "104.16.18.34",
      "104.19.39.88",
      "104.19.179.83",
      "104.20.50.129",
      "172.66.152.37",
      "104.19.4.91",
      "172.66.137.62",
      "172.65.30.159",
      "104.21.50.167",
      "104.25.26.204"
    ],
    "SOUTH": [
      "104.17.199.81",
      "104.17.20.151",
      "104.18.79.85",
      "104.16.58.230",
      "104.18.165.217",
      "172.66.47.159",
      "104.19.135.32",
      "104.21.22.2",
      "172.67.58.58",
      "104.20.61.165",
      "104.20.110.212",
      "172.65.114.21",
      "104.24.88.19",
      "172.66.212.68"
    ],
    "NORTH": [
      "172.65.195.207",
      "104.17.172.96",
      "104.19.212.137",
      "104.19.50.104",
      "104.17.167.222",
      "104.18.124.125",
      "104.17.35.122",
      "104.16.113.107",
      "104.25.161.203",
      "172.66.196.121",
      "104.25.76.176"
    ],
    "CENTRAL": [
      "104.16.167.118",
      "104.19.15.95",
      "104.16.114.176",
      "104.19.241.193",
      "104.24.198.177",
      "104.20.81.63",
      "172.66.141.193"
    ],
    "SOUTHWEST": [
      "104.18.194.130",
      "104.19.69.49",
      "104.18.241.122",
      "104.20.13.84",
      "104.24.239.199",
      "104.27.34.125",
      "104.20.142.17",
      "172.67.118.13",
      "172.66.148.159"
    ],
    "NORTHWEST": [
      "104.18.4.217",
      "172.67.186.252",
      "172.65.33.130",
      "172.65.102.232",
      "104.20.137.139",
      "172.66.128.47",
      "172.66.128.85"
    ],
    "NORTHEAST": [
      "104.16.183.71",
      "104.21.34.110",
      "104.21.231.78",
      "104.22.57.85",
      "104.18.19.39",
      "104.20.89.38",
      "104.22.69.70",
      "104.27.94.191",
      "104.24.216.143",
      "172.67.80.55",
      "104.25.58.97"
    ]
  },
  "CHINA_UNICOM": {
    "EAST": [
      "104.19.241.193",
      "104.19.206.207",
      "104.24.65.218",
      "104.24.191.43",
      "104.19.50.104",
      "104.20.155.205",
      "172.65.7.2",
      "104.18.5.185",
      "104.25.58.97",
      "172.66.148.159"
    ],
    "SOUTH": [
      "172.66.2.185",
      "104.19.135.32",
      "172.67.186.252",
      "104.18.179.85",
      "172.66.47.159",
      "104.18.92.54",
      "104.25.161.203",
      "104.25.26.204",
      "104.20.81.63",
      "104.24.216.143",
      "104.20.137.139",
      "172.67.118.13"
    ],
    "NORTH": [
      "104.19.159.202",
      "104.18.79.85",
      "104.16.37.78",
      "104.16.183.71",
      "104.18.194.130",
      "172.66.176.70",
      "104.22.29.89",
      "104.22.57.85",
      "104.20.50.129",
      "104.19.69.49",
      "172.65.30.159",
      "172.67.58.58"
    ],
    "CENTRAL": [
      "104.19.212.137",
      "104.19.196.185",
      "104.21.34.110",
      "104.17.91.177",
      "172.67.174.121",
      "104.19.96.135",
      "104.17.167.3",
      "172.66.196.121",
      "104.21.50.167"
    ],
    "SOUTHWEST": [
      "172.65.112.40",
      "104.25.160.153",
      "172.67.0.4",
      "104.24.248.237",
      "104.16.58.230",
      "104.18.194.68",
      "172.65.143.35",
      "104.24.198.177",
      "172.66.137.62",
      "104.21.226.65",
      "104.27.94.191"
    ],
    "NORTHWEST": [
      "104.18.121.255",
      "104.19.15.95",
      "172.65.195.207",
      "104.25.204.207",
      "104.24.87.9",
      "104.18.19.39",
      "172.66.212.68"
    ],
    "NORTHEAST": [
      "104.18.241.122",
      "104.25.86.17",
      "104.20.92.227",
      "172.67.159.71",
      "172.65.209.67",
      "172.66.128.47"
    ]
  },
  "CHINA_MOBILE": {
    "EAST": [
      "104.25.247.174",
      "104.19.61.248",
      "104.17.167.222",
      "104.21.231.78",
      "172.65.241.90",
      "104.19.96.135",
      "104.20.110.212",
      "104.20.61.165",
      "104.25.76.176"
    ],
    "SOUTH": [
      "104.20.155.205",
      "104.18.5.185",
      "104.16.37.78",
      "104.17.35.122",
      "104.27.198.148",
      "104.27.124.53",
      "172.65.112.40",
      "104.20.92.227",
      "104.24.172.45",
      "104.27.69.96",
      "172.65.210.203"
    ],
    "NORTH": [
      "104.17.91.177",
      "104.22.29.89",
      "172.65.121.245",
      "104.27.34.125"
    ],
    "CENTRAL": [
      "172.67.174.121",
      "172.67.41.246",
      "104.16.114.176",
      "104.16.167.118",
      "104.25.160.153",
      "104.18.124.125",
      "172.66.128.85"
    ],
    "SOUTHWEST": [
      "104.21.225.127",
      "104.24.30.104",
      "104.24.191.43",
      "172.65.7.2",
      "104.18.194.68",
      "104.19.179.83"
    ],
    "NORTHWEST": [
      "104.17.172.96",
      "104.16.18.34",
      "172.66.153.28",
      "104.24.88.19"
    ],
    "NORTHEAST": [
      "172.65.182.251",
      "104.25.204.207",
      "104.24.248.237",
      "172.67.111.45",
      "104.24.1.22"
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