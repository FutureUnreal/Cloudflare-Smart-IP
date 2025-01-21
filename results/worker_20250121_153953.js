// IP池配置 - 更新时间: 2025-01-21T15:39:51.460667
const IP_POOLS = {
  "CHINA_TELECOM": {
    "EAST": [
      "104.16.112.189",
      "104.21.120.91",
      "104.16.10.91",
      "104.16.22.7",
      "104.18.161.45",
      "104.22.0.245",
      "104.27.117.44",
      "172.65.149.25"
    ],
    "SOUTH": [
      "104.18.34.244",
      "104.19.245.71",
      "104.16.214.213",
      "172.67.247.44",
      "104.19.150.87",
      "104.24.235.158",
      "104.25.213.50",
      "104.27.70.113",
      "104.27.75.13",
      "104.20.218.146",
      "172.67.82.73"
    ],
    "NORTH": [
      "172.67.161.79",
      "104.26.6.136",
      "104.16.168.93",
      "104.18.230.242",
      "104.16.50.56",
      "104.19.222.146",
      "104.16.251.216",
      "104.17.52.216",
      "104.20.160.91",
      "104.25.69.196",
      "172.67.67.163"
    ],
    "CENTRAL": [
      "104.16.219.233",
      "104.19.50.249",
      "104.16.202.129",
      "104.17.251.119",
      "104.18.72.135",
      "104.24.200.240"
    ],
    "SOUTHWEST": [
      "104.16.39.225",
      "172.67.33.119",
      "172.67.17.46",
      "104.17.5.252",
      "172.67.218.33",
      "104.17.219.119",
      "104.18.143.37",
      "104.26.1.74",
      "104.16.102.206",
      "104.20.181.119",
      "104.20.205.232",
      "104.20.222.10",
      "104.24.200.73",
      "172.67.10.10",
      "104.22.43.22"
    ],
    "NORTHWEST": [
      "172.65.48.6",
      "104.18.109.34",
      "104.16.15.244",
      "104.19.41.248",
      "104.19.62.19",
      "104.27.110.76",
      "104.24.156.215",
      "104.27.52.166"
    ],
    "NORTHEAST": [
      "104.16.184.155",
      "104.18.12.42",
      "104.21.93.206",
      "172.67.183.151",
      "104.21.64.96",
      "104.16.81.81",
      "104.22.20.234",
      "104.18.120.229",
      "104.19.77.116",
      "104.17.45.93",
      "104.27.27.93",
      "104.16.59.128",
      "104.16.188.124",
      "104.22.11.101",
      "104.26.15.44",
      "104.27.108.215",
      "104.27.60.226",
      "172.66.216.243",
      "104.25.166.140"
    ]
  },
  "CHINA_UNICOM": {
    "EAST": [
      "104.18.34.244",
      "104.16.39.225",
      "104.22.20.234",
      "104.25.149.217",
      "104.17.137.115",
      "104.17.5.252",
      "104.16.202.129",
      "104.16.168.93",
      "104.16.15.244",
      "104.16.59.128",
      "104.21.120.91",
      "104.27.75.13"
    ],
    "SOUTH": [
      "172.65.195.138",
      "104.25.181.176",
      "104.20.192.32",
      "172.65.72.208",
      "104.20.121.119",
      "104.17.219.119",
      "104.18.109.34",
      "104.18.230.242",
      "104.16.251.216"
    ],
    "NORTH": [
      "104.21.17.173",
      "104.16.219.233",
      "104.16.81.81",
      "172.67.33.119",
      "104.19.230.118",
      "104.19.77.116",
      "104.26.1.74",
      "104.17.45.93",
      "104.17.52.216",
      "104.20.205.232",
      "104.25.213.50",
      "104.27.117.44",
      "104.22.43.22"
    ],
    "CENTRAL": [
      "104.16.112.189",
      "172.65.7.56",
      "104.18.164.43",
      "104.19.34.77",
      "104.27.8.131",
      "104.18.143.37",
      "104.16.50.56",
      "104.16.102.206",
      "172.67.183.151",
      "104.19.41.248",
      "104.24.235.158",
      "172.67.82.73"
    ],
    "SOUTHWEST": [
      "172.65.113.77",
      "104.19.245.71",
      "104.18.120.229",
      "104.16.214.213",
      "104.21.64.96",
      "104.21.93.206",
      "104.22.0.245",
      "104.26.15.44",
      "104.27.108.215",
      "104.27.110.76",
      "104.27.60.226",
      "172.65.149.25",
      "172.67.67.163",
      "104.25.166.140",
      "104.20.222.10",
      "172.67.10.10",
      "104.27.52.166"
    ],
    "NORTHWEST": [
      "104.18.208.251",
      "104.18.12.42",
      "104.16.226.4",
      "172.67.47.104",
      "104.25.103.85",
      "172.67.218.33",
      "104.24.152.62",
      "104.19.222.146",
      "104.19.150.87",
      "104.19.62.19",
      "104.18.52.188",
      "104.20.218.146"
    ],
    "NORTHEAST": [
      "104.19.50.249",
      "104.18.38.176",
      "104.27.27.93",
      "104.18.72.135",
      "104.16.188.124",
      "104.24.200.240",
      "172.65.48.6",
      "104.24.156.215"
    ]
  },
  "CHINA_MOBILE": {
    "EAST": [
      "104.16.184.155",
      "104.17.251.119",
      "104.20.181.119"
    ],
    "SOUTH": [
      "104.20.104.27",
      "172.65.7.56",
      "104.18.161.45",
      "104.25.69.196",
      "172.66.216.243"
    ],
    "NORTH": [
      "104.27.104.20",
      "104.25.181.176",
      "104.21.7.10",
      "172.67.47.104",
      "104.25.103.85",
      "104.18.38.176",
      "104.19.230.118",
      "104.24.200.73"
    ],
    "CENTRAL": [
      "172.65.195.138",
      "104.21.17.173",
      "104.18.208.251",
      "104.25.149.217",
      "104.22.11.101"
    ],
    "SOUTHWEST": [
      "172.65.72.208",
      "104.27.70.113"
    ],
    "NORTHWEST": [
      "172.67.247.44",
      "104.18.52.188",
      "104.20.160.91"
    ],
    "NORTHEAST": [
      "104.26.6.136",
      "104.16.22.7"
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