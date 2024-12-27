// IP池配置 - 更新时间: 2024-12-27T15:36:34.850124
const IP_POOLS = {
  "CHINA_TELECOM": {
    "EAST": [
      "104.16.133.100",
      "104.21.25.109",
      "104.21.45.188",
      "104.17.237.205",
      "104.16.184.201",
      "104.17.86.158",
      "172.67.90.64",
      "104.25.56.84",
      "104.22.10.168"
    ],
    "SOUTH": [
      "104.18.44.27",
      "104.16.169.173",
      "104.16.35.130",
      "104.18.120.12",
      "104.21.76.203",
      "172.65.153.151",
      "104.18.101.73",
      "104.19.172.233",
      "104.26.13.167",
      "104.20.255.234",
      "104.16.110.192",
      "104.25.207.149",
      "104.25.98.240",
      "172.65.101.210",
      "104.25.25.26"
    ],
    "NORTH": [
      "104.19.63.213",
      "104.17.145.63",
      "104.16.190.98",
      "104.18.203.84",
      "104.25.250.104",
      "104.20.115.229"
    ],
    "CENTRAL": [
      "104.16.101.93",
      "104.17.12.158",
      "104.17.13.188",
      "104.25.56.99",
      "172.66.143.250",
      "104.24.20.177",
      "104.25.41.114",
      "172.67.68.32",
      "104.22.6.116"
    ],
    "SOUTHWEST": [
      "172.65.85.215",
      "104.18.54.97",
      "172.67.171.99",
      "104.16.87.54",
      "104.25.178.124",
      "104.16.162.80",
      "104.17.202.240",
      "104.22.76.83",
      "104.27.41.166",
      "104.21.238.155",
      "104.24.3.60",
      "104.20.103.69",
      "104.20.200.77"
    ],
    "NORTHWEST": [
      "104.19.17.188",
      "104.19.85.55",
      "104.19.227.29",
      "104.16.152.44",
      "172.67.47.208",
      "104.18.58.178",
      "104.27.36.166",
      "104.27.193.183",
      "172.67.42.53",
      "104.19.138.235",
      "104.18.239.153",
      "104.27.111.242"
    ],
    "NORTHEAST": [
      "104.16.225.14",
      "104.21.95.113",
      "172.67.154.45",
      "172.67.190.74",
      "104.16.160.37",
      "104.21.111.57",
      "104.16.104.61",
      "104.16.98.108",
      "104.20.68.111",
      "104.22.41.90",
      "104.25.149.21"
    ]
  },
  "CHINA_UNICOM": {
    "EAST": [
      "104.24.172.155",
      "104.27.18.181",
      "104.18.120.12",
      "104.24.164.213",
      "104.17.208.73",
      "104.17.12.158",
      "104.22.47.58",
      "104.27.36.166",
      "104.19.17.188",
      "104.16.152.44",
      "104.19.9.48",
      "104.21.45.188",
      "104.25.207.149",
      "104.25.56.99",
      "172.65.52.189",
      "104.25.250.104",
      "104.25.41.114",
      "104.20.103.69"
    ],
    "SOUTH": [
      "172.67.61.18",
      "104.20.162.156",
      "104.16.225.14",
      "104.17.145.63",
      "104.16.162.80",
      "104.18.239.153",
      "104.17.202.240",
      "104.22.76.83",
      "104.25.149.21",
      "104.20.200.77"
    ],
    "NORTH": [
      "104.19.63.213",
      "104.19.85.55",
      "104.16.169.173",
      "104.16.101.93",
      "104.16.190.98",
      "104.21.111.57",
      "104.16.98.108",
      "172.66.143.250",
      "172.65.101.210",
      "104.20.68.111"
    ],
    "CENTRAL": [
      "172.65.85.215",
      "104.27.91.241",
      "104.19.118.220",
      "104.25.178.124",
      "104.24.250.32",
      "104.16.59.184",
      "104.18.44.27",
      "104.16.184.201",
      "104.27.193.183",
      "104.26.13.167",
      "104.16.110.192",
      "172.67.90.64",
      "104.22.10.168"
    ],
    "SOUTHWEST": [
      "104.18.54.97",
      "172.67.154.45",
      "104.18.85.226",
      "172.65.143.0",
      "104.16.160.37",
      "104.20.118.39",
      "104.21.95.113",
      "104.17.13.188",
      "104.27.41.166",
      "104.21.76.203",
      "104.24.3.60",
      "104.24.20.177",
      "104.25.56.84",
      "104.22.41.90"
    ],
    "NORTHWEST": [
      "172.67.9.36",
      "172.67.47.208",
      "104.25.170.26",
      "104.18.58.178",
      "104.19.172.233",
      "104.20.255.234",
      "104.21.238.155",
      "104.25.25.26"
    ],
    "NORTHEAST": [
      "172.67.190.74",
      "172.65.148.116",
      "104.16.5.125",
      "172.65.153.151",
      "104.25.98.240",
      "104.22.6.116"
    ]
  },
  "CHINA_MOBILE": {
    "EAST": [
      "104.17.152.143",
      "104.16.133.100",
      "104.19.227.29",
      "104.17.86.158",
      "104.20.115.229"
    ],
    "SOUTH": [
      "104.16.35.130",
      "104.17.208.73",
      "104.19.118.220",
      "104.27.91.241",
      "172.67.61.18",
      "172.65.148.116",
      "104.16.104.61"
    ],
    "NORTH": [
      "172.65.8.1",
      "172.67.9.36",
      "104.16.5.125",
      "104.19.9.48",
      "104.25.170.26",
      "104.24.250.32",
      "104.19.138.235",
      "104.17.237.205",
      "172.65.52.189"
    ],
    "CENTRAL": [
      "172.67.212.191"
    ],
    "SOUTHWEST": [
      "172.65.143.0",
      "172.67.171.99",
      "104.20.118.39",
      "172.67.133.27",
      "104.16.59.184",
      "172.67.68.32"
    ],
    "NORTHWEST": [
      "104.20.162.156",
      "104.16.87.54",
      "104.18.203.84"
    ],
    "NORTHEAST": [
      "104.18.85.226"
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