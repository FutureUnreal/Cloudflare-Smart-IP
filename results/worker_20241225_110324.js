// IP池配置 - 更新时间: 2024-12-25T11:03:23.302259
const IP_POOLS = {
  "CHINA_TELECOM": {
    "EAST": [
      "104.17.162.170",
      "104.18.112.33",
      "104.20.50.89",
      "104.24.90.49",
      "172.65.166.140",
      "172.67.247.230",
      "172.65.6.154",
      "104.20.27.44",
      "172.65.196.113",
      "104.18.103.208",
      "104.20.17.82",
      "104.20.26.228",
      "104.17.102.106"
    ],
    "SOUTH": [
      "104.18.219.119",
      "104.17.48.207",
      "172.67.249.172",
      "172.67.212.53",
      "104.25.151.17",
      "104.25.124.83",
      "104.27.104.172",
      "104.17.3.60",
      "104.24.82.231",
      "104.25.46.153",
      "104.25.116.165"
    ],
    "NORTH": [
      "104.18.176.176",
      "172.67.115.231",
      "172.65.68.188",
      "172.65.185.27",
      "104.24.238.100",
      "104.27.101.21",
      "104.20.146.99"
    ],
    "CENTRAL": [
      "104.17.45.219",
      "104.19.225.96",
      "104.22.29.140",
      "172.65.33.11",
      "104.16.17.40",
      "104.21.61.7",
      "104.20.156.32",
      "172.67.199.135",
      "104.24.69.115",
      "172.65.67.225",
      "104.24.27.215",
      "104.16.77.103",
      "172.67.106.16",
      "104.20.225.13",
      "172.67.76.30"
    ],
    "SOUTHWEST": [
      "104.16.215.142",
      "104.16.212.252",
      "172.67.45.134",
      "172.67.132.56",
      "104.25.59.134",
      "172.65.99.123",
      "172.65.140.126",
      "104.25.12.67",
      "104.24.132.5",
      "172.66.201.27",
      "104.20.156.7",
      "172.66.167.213",
      "104.22.14.135",
      "104.18.77.24",
      "104.20.229.99",
      "104.19.221.124",
      "104.25.66.140"
    ],
    "NORTHWEST": [
      "104.21.69.104",
      "172.65.6.238",
      "172.67.221.11",
      "104.24.132.255",
      "104.25.120.237",
      "104.24.160.198"
    ],
    "NORTHEAST": [
      "104.17.212.238",
      "172.65.41.243",
      "104.21.112.193",
      "104.21.218.89",
      "172.67.229.234",
      "104.18.95.155",
      "172.65.88.87",
      "104.20.8.116",
      "172.67.79.150",
      "172.66.210.67",
      "172.65.181.196",
      "104.25.4.136"
    ]
  },
  "CHINA_UNICOM": {
    "EAST": [
      "104.16.24.243",
      "104.21.69.104",
      "104.20.47.238",
      "104.24.203.203",
      "172.65.53.71",
      "172.67.132.56",
      "172.66.167.213",
      "172.65.67.225",
      "172.66.210.67",
      "104.24.82.231"
    ],
    "SOUTH": [
      "104.18.43.48",
      "104.21.212.246",
      "104.20.226.162",
      "172.67.160.100",
      "172.66.164.254",
      "104.24.71.199",
      "104.21.218.89",
      "104.16.251.87",
      "104.17.162.170",
      "104.18.112.33",
      "104.20.50.89",
      "172.65.88.87",
      "104.20.8.116",
      "172.65.41.243",
      "104.20.156.32",
      "172.65.99.123",
      "104.20.27.44",
      "104.27.101.21"
    ],
    "NORTH": [
      "172.67.59.38",
      "104.20.7.12",
      "104.16.255.137",
      "172.65.247.7",
      "104.24.132.255",
      "104.20.156.7",
      "172.65.181.196",
      "104.17.102.106",
      "104.20.225.13"
    ],
    "CENTRAL": [
      "104.25.150.99",
      "172.65.92.125",
      "104.17.48.207",
      "104.25.100.176",
      "104.17.212.238",
      "104.20.14.139",
      "172.65.66.8",
      "172.65.6.238",
      "172.65.6.154",
      "172.67.247.230",
      "172.65.68.188",
      "104.25.12.67",
      "104.24.132.5"
    ],
    "SOUTHWEST": [
      "172.67.208.240",
      "172.67.90.202",
      "172.65.166.140",
      "104.25.151.17",
      "104.20.146.99"
    ],
    "NORTHWEST": [
      "104.18.20.121",
      "172.65.144.57",
      "104.17.3.60",
      "104.24.69.115",
      "172.65.196.113",
      "104.16.17.40",
      "104.18.103.208"
    ],
    "NORTHEAST": [
      "104.26.10.3",
      "104.21.192.193",
      "104.19.16.123",
      "172.66.201.27",
      "104.22.14.135",
      "104.20.26.228"
    ]
  },
  "CHINA_MOBILE": {
    "EAST": [
      "104.16.251.87",
      "172.67.23.215",
      "172.67.211.125",
      "172.65.66.8",
      "172.65.33.11",
      "172.67.45.134",
      "172.67.199.135",
      "104.24.27.215",
      "104.16.77.103",
      "172.67.76.30"
    ],
    "SOUTH": [
      "104.22.29.140",
      "104.20.250.76",
      "172.67.212.53",
      "104.19.233.46",
      "172.67.131.20",
      "104.25.120.237",
      "104.20.229.99"
    ],
    "NORTH": [
      "104.17.24.160",
      "172.67.160.100",
      "104.18.219.119",
      "172.67.208.240",
      "104.16.255.137",
      "172.67.249.172",
      "104.20.17.82",
      "104.19.221.124",
      "104.25.46.153"
    ],
    "CENTRAL": [
      "104.17.153.246",
      "104.27.104.172"
    ],
    "SOUTHWEST": [
      "104.18.43.48",
      "104.20.7.12",
      "104.24.203.203",
      "104.17.254.112",
      "104.21.192.193",
      "104.20.226.162",
      "172.67.221.11",
      "172.66.150.83",
      "104.16.215.142",
      "104.16.24.243"
    ],
    "NORTHWEST": [
      "172.67.59.38",
      "104.19.16.123",
      "172.67.138.112"
    ],
    "NORTHEAST": [
      "104.18.176.176",
      "172.65.140.126",
      "172.65.185.27",
      "104.18.77.24",
      "172.67.106.16",
      "104.25.66.140"
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