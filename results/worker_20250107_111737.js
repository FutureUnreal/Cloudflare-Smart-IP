// IP池配置 - 更新时间: 2025-01-07T11:17:31.487207
const IP_POOLS = {
  "CHINA_TELECOM": {
    "EAST": [
      "104.19.228.133",
      "172.67.34.186",
      "172.65.47.204",
      "104.20.106.92",
      "172.65.98.227",
      "104.24.81.159",
      "104.27.81.193"
    ],
    "SOUTH": [
      "104.16.52.79",
      "104.19.93.241",
      "104.16.140.249",
      "104.17.52.88",
      "104.21.217.52",
      "172.67.6.228",
      "104.27.66.163",
      "104.25.153.232",
      "104.25.34.32",
      "172.67.14.50",
      "172.66.160.120",
      "172.66.215.226"
    ],
    "NORTH": [
      "172.67.229.6",
      "104.22.60.242",
      "104.17.250.42",
      "104.19.43.159",
      "172.65.247.66",
      "104.19.232.118",
      "104.18.178.194",
      "172.65.209.18",
      "104.18.6.233",
      "172.67.1.150",
      "104.25.37.59",
      "172.66.153.92",
      "104.20.42.2",
      "104.27.108.130"
    ],
    "CENTRAL": [
      "104.18.136.66",
      "104.17.157.68",
      "104.19.244.167",
      "104.21.1.1",
      "104.17.6.198",
      "104.17.57.106",
      "104.19.108.104",
      "104.18.35.56",
      "104.20.164.215",
      "104.19.207.171",
      "104.17.118.108",
      "104.25.50.180"
    ],
    "SOUTHWEST": [
      "104.19.180.179",
      "104.22.26.235",
      "104.19.131.54",
      "104.17.126.150",
      "104.18.110.121",
      "104.20.150.105",
      "172.65.145.177",
      "104.24.5.148",
      "104.25.17.125"
    ],
    "NORTHWEST": [
      "104.18.199.27",
      "104.19.134.47",
      "172.65.32.44",
      "104.16.40.168",
      "104.21.81.216",
      "172.67.160.146",
      "104.19.23.157",
      "104.19.168.3",
      "104.17.99.94",
      "104.27.201.140",
      "172.67.10.158",
      "104.18.35.43",
      "104.25.200.143",
      "172.65.121.157",
      "104.20.145.77"
    ],
    "NORTHEAST": [
      "172.67.153.190",
      "104.21.21.52",
      "172.67.227.50",
      "172.65.249.86",
      "104.22.27.168",
      "172.65.82.245",
      "104.18.124.185",
      "104.22.64.131",
      "104.18.219.28",
      "172.66.170.66",
      "104.22.76.211"
    ]
  },
  "CHINA_UNICOM": {
    "EAST": [
      "172.67.153.190",
      "172.66.175.112",
      "104.19.232.118",
      "104.21.33.186",
      "172.67.227.50",
      "104.18.124.185",
      "104.17.52.88",
      "104.19.108.104",
      "104.21.217.52",
      "104.18.110.121",
      "172.65.145.177",
      "172.67.10.158",
      "104.18.8.69",
      "104.24.5.148"
    ],
    "SOUTH": [
      "104.18.34.0",
      "104.21.202.46",
      "104.20.41.58",
      "104.19.43.159",
      "104.21.1.1",
      "104.18.6.233",
      "104.17.99.94",
      "104.27.66.163",
      "104.18.219.28",
      "104.25.34.32"
    ],
    "NORTH": [
      "104.18.236.198",
      "104.21.21.52",
      "104.20.133.197",
      "172.67.229.6",
      "104.22.60.242",
      "104.25.128.235",
      "104.24.144.210",
      "104.19.44.79",
      "104.16.140.249",
      "104.18.35.56",
      "104.27.201.140",
      "104.20.106.92",
      "104.24.81.159",
      "172.66.160.120",
      "104.27.81.193",
      "104.25.17.125"
    ],
    "CENTRAL": [
      "104.19.180.179",
      "104.21.199.23",
      "104.21.81.216",
      "104.19.168.3",
      "172.67.1.150",
      "104.20.234.207",
      "104.22.64.131",
      "104.25.37.59",
      "172.67.14.50",
      "172.66.170.66",
      "104.19.23.157",
      "104.27.108.130"
    ],
    "SOUTHWEST": [
      "172.67.34.186",
      "104.20.89.24",
      "104.19.134.47",
      "104.18.104.81",
      "104.18.167.129",
      "104.20.164.215",
      "172.67.6.228",
      "104.19.207.171",
      "172.66.153.92",
      "104.20.42.2",
      "104.20.145.77"
    ],
    "NORTHWEST": [
      "104.16.57.251",
      "104.18.60.147",
      "104.19.93.241",
      "104.19.244.167",
      "104.22.26.235",
      "104.22.27.168",
      "104.25.8.181",
      "104.18.178.194",
      "104.17.250.42",
      "104.17.157.68",
      "104.20.150.105",
      "104.22.76.211",
      "172.66.215.226"
    ],
    "NORTHEAST": [
      "104.18.136.66",
      "104.16.40.168",
      "172.65.82.245"
    ]
  },
  "CHINA_MOBILE": {
    "EAST": [
      "104.21.33.186",
      "172.67.160.146"
    ],
    "SOUTH": [
      "104.24.144.210",
      "104.24.231.11",
      "104.19.131.54",
      "172.65.98.227"
    ],
    "NORTH": [
      "104.16.57.251",
      "104.17.57.106",
      "104.25.50.180"
    ],
    "CENTRAL": [
      "104.24.168.181",
      "172.65.32.44",
      "104.16.181.233",
      "104.25.128.235",
      "104.20.89.24",
      "104.18.104.81",
      "172.65.247.66",
      "104.17.126.150",
      "104.25.153.232",
      "104.19.228.133"
    ],
    "SOUTHWEST": [
      "104.25.210.12"
    ],
    "NORTHWEST": [
      "104.16.52.79",
      "104.22.9.71",
      "172.65.209.18",
      "104.21.78.92",
      "104.18.60.147"
    ],
    "NORTHEAST": [
      "104.19.44.79",
      "172.65.47.204",
      "172.66.175.112",
      "172.65.249.86",
      "104.20.41.58",
      "104.21.202.46",
      "104.25.200.143",
      "172.65.121.157"
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