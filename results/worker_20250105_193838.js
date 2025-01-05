// IP池配置 - 更新时间: 2025-01-05T19:38:36.614673
const IP_POOLS = {
  "CHINA_TELECOM": {
    "EAST": [
      "104.17.178.198",
      "104.19.180.96",
      "104.25.16.27",
      "104.25.137.93",
      "172.67.48.69"
    ],
    "SOUTH": [
      "104.17.135.166",
      "104.22.19.225",
      "172.65.7.95",
      "104.19.110.15",
      "104.20.104.38",
      "104.21.95.22",
      "104.22.42.9",
      "172.66.172.21",
      "104.27.19.23"
    ],
    "NORTH": [
      "104.21.202.182",
      "172.67.134.74",
      "104.16.151.14",
      "104.19.127.135",
      "104.25.128.80",
      "104.24.194.87"
    ],
    "CENTRAL": [
      "104.16.47.207",
      "104.18.168.245",
      "104.20.147.128",
      "104.24.149.229",
      "172.65.253.71",
      "104.25.150.62",
      "104.21.36.125",
      "172.65.157.104",
      "104.24.77.183",
      "104.24.166.219"
    ],
    "SOUTHWEST": [
      "104.21.28.154",
      "104.16.92.204",
      "172.65.202.125",
      "104.24.152.86",
      "104.24.232.86",
      "104.22.65.90",
      "104.27.0.194"
    ],
    "NORTHWEST": [
      "172.67.180.240",
      "104.16.188.131",
      "172.67.41.127",
      "104.17.69.120",
      "104.17.158.60",
      "104.19.13.35",
      "104.16.148.247",
      "104.18.66.180",
      "104.17.50.233",
      "104.20.246.161",
      "172.66.194.192",
      "172.67.57.180",
      "104.24.193.211"
    ],
    "NORTHEAST": [
      "104.21.32.144",
      "104.16.39.143",
      "172.67.47.84",
      "172.65.82.48",
      "104.16.172.80",
      "104.17.238.97",
      "172.65.228.239",
      "104.24.128.77",
      "104.24.32.242",
      "172.67.102.123",
      "104.22.1.209",
      "104.24.216.142"
    ]
  },
  "CHINA_UNICOM": {
    "EAST": [
      "104.17.33.75",
      "104.16.0.207",
      "104.16.114.14",
      "104.16.116.161",
      "172.65.219.41",
      "172.67.40.51",
      "172.67.106.6",
      "104.16.188.131",
      "104.19.27.78",
      "104.17.158.60",
      "104.25.150.62",
      "172.65.253.71",
      "104.24.32.242"
    ],
    "SOUTH": [
      "104.20.129.168",
      "104.20.229.202",
      "104.18.194.80",
      "104.27.205.148",
      "104.20.147.128",
      "104.20.104.38",
      "172.66.194.192"
    ],
    "NORTH": [
      "172.65.228.153",
      "104.16.93.246",
      "104.17.135.166",
      "104.16.139.109",
      "104.16.60.117",
      "104.16.47.207",
      "172.65.82.48",
      "104.21.28.154",
      "172.65.228.239",
      "172.65.172.33",
      "104.22.42.9",
      "104.24.77.183"
    ],
    "CENTRAL": [
      "172.65.144.131",
      "104.16.131.76",
      "104.24.91.174",
      "104.17.219.153",
      "104.18.168.245",
      "104.16.155.25",
      "104.16.148.247",
      "104.16.92.204",
      "104.18.66.180",
      "104.27.35.190",
      "104.22.1.209"
    ],
    "SOUTHWEST": [
      "104.16.22.67",
      "104.16.165.14",
      "104.19.51.75",
      "104.17.223.174",
      "104.17.216.202",
      "104.25.12.212",
      "172.67.41.127",
      "104.17.238.97",
      "104.21.95.22",
      "104.25.128.80",
      "104.22.0.250",
      "104.22.65.90"
    ],
    "NORTHWEST": [
      "104.18.138.221",
      "104.19.225.195",
      "104.24.34.135",
      "108.162.193.64",
      "172.65.202.125",
      "104.21.4.121",
      "104.27.19.23",
      "172.67.102.123"
    ],
    "NORTHEAST": [
      "104.19.16.88",
      "104.25.16.27",
      "104.25.186.46",
      "104.16.39.143",
      "104.17.50.233",
      "104.24.194.87"
    ]
  },
  "CHINA_MOBILE": {
    "EAST": [
      "104.27.94.197",
      "104.22.19.225",
      "104.20.146.231",
      "104.21.202.182",
      "104.17.33.75",
      "172.67.127.250",
      "104.17.69.120",
      "104.16.172.80"
    ],
    "SOUTH": [
      "104.17.223.174",
      "172.67.40.51",
      "172.67.47.84",
      "172.65.31.218",
      "104.18.136.250",
      "172.67.134.74",
      "172.67.57.180",
      "104.24.166.219"
    ],
    "NORTH": [
      "104.16.109.36",
      "104.18.3.54",
      "172.65.79.79",
      "172.67.180.240",
      "104.16.22.67",
      "104.19.27.78",
      "104.22.0.250",
      "172.67.48.69"
    ],
    "CENTRAL": [
      "104.25.81.83",
      "104.16.165.14",
      "104.16.114.14",
      "104.16.116.161",
      "104.20.30.47",
      "104.16.93.246",
      "104.20.246.161",
      "104.24.216.142"
    ],
    "SOUTHWEST": [
      "172.67.89.243",
      "172.65.3.173",
      "172.66.176.63",
      "172.66.172.173",
      "104.27.35.190"
    ],
    "NORTHWEST": [
      "172.65.228.153",
      "104.19.13.35",
      "104.24.131.154"
    ],
    "NORTHEAST": [
      "104.16.151.14",
      "104.27.15.118",
      "104.27.205.148",
      "104.20.178.138",
      "104.25.12.212",
      "172.65.157.104",
      "104.27.0.194"
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