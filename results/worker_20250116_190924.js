// IP池配置 - 更新时间: 2025-01-16T19:09:22.292979
const IP_POOLS = {
  "CHINA_TELECOM": {
    "EAST": [
      "104.16.227.136",
      "104.18.1.215",
      "104.19.126.205",
      "104.27.65.187",
      "104.27.96.104",
      "104.25.74.26",
      "104.24.76.73",
      "104.20.190.232"
    ],
    "SOUTH": [
      "104.16.84.70",
      "104.19.164.66",
      "104.19.79.64",
      "172.65.229.10",
      "104.18.34.119",
      "104.16.160.192",
      "104.19.131.62",
      "172.65.16.202",
      "104.21.37.92",
      "172.65.13.42",
      "104.22.10.239",
      "104.25.132.56",
      "172.66.175.207",
      "172.65.156.208",
      "104.20.180.172"
    ],
    "NORTH": [
      "104.17.122.198",
      "104.21.113.152",
      "104.18.143.154",
      "172.65.15.76",
      "104.18.141.35",
      "104.18.233.72",
      "104.17.32.243",
      "104.17.159.210",
      "104.25.181.36",
      "104.25.142.57",
      "104.27.30.6"
    ],
    "CENTRAL": [
      "104.16.239.9",
      "172.65.227.30",
      "172.67.17.145",
      "172.65.82.249",
      "104.16.148.205",
      "104.16.219.194",
      "104.20.125.153",
      "104.16.252.20",
      "172.65.203.238",
      "172.65.172.235",
      "104.20.51.11",
      "104.24.16.124",
      "104.25.23.186",
      "104.20.167.27"
    ],
    "SOUTHWEST": [
      "104.17.151.157",
      "172.65.91.171",
      "104.25.201.189",
      "104.16.13.178",
      "172.66.207.227",
      "104.24.133.190",
      "104.24.92.91"
    ],
    "NORTHWEST": [
      "104.19.108.203",
      "172.67.201.211",
      "104.19.42.124",
      "104.25.17.183",
      "104.20.18.221",
      "104.20.240.215",
      "104.24.211.75"
    ],
    "NORTHEAST": [
      "104.17.150.51",
      "172.67.165.196",
      "104.17.10.231",
      "104.17.77.197",
      "104.17.130.14",
      "104.27.194.123",
      "104.20.213.94",
      "104.26.8.211",
      "172.66.196.42",
      "104.24.179.63",
      "104.24.146.61",
      "172.66.152.41",
      "104.24.4.217"
    ]
  },
  "CHINA_UNICOM": {
    "EAST": [
      "104.17.113.17",
      "104.17.75.240",
      "104.20.51.221",
      "104.16.163.73",
      "172.65.16.104",
      "104.17.130.14",
      "104.16.252.20",
      "172.65.203.238",
      "172.66.196.42",
      "172.66.207.227"
    ],
    "SOUTH": [
      "104.19.63.169",
      "104.27.12.88",
      "104.16.227.136",
      "172.65.91.171",
      "104.21.37.92",
      "104.18.25.49",
      "104.16.169.180",
      "104.27.96.104",
      "172.66.175.207",
      "104.24.4.217",
      "104.24.211.75"
    ],
    "NORTH": [
      "104.16.160.192",
      "172.65.227.30",
      "104.16.219.194",
      "104.16.201.22",
      "104.19.181.139",
      "104.18.1.215",
      "104.20.209.134",
      "104.17.150.51",
      "104.24.76.73",
      "104.24.146.61",
      "104.24.133.190",
      "104.20.240.215"
    ],
    "CENTRAL": [
      "104.16.84.70",
      "104.18.141.35",
      "172.67.201.211",
      "104.25.202.80",
      "172.65.82.249",
      "104.16.148.205",
      "104.19.164.66",
      "104.24.0.14",
      "104.17.151.157",
      "172.65.13.42",
      "104.16.102.147",
      "104.25.132.56",
      "104.20.180.172",
      "104.27.30.6"
    ],
    "SOUTHWEST": [
      "172.67.150.154",
      "104.17.207.85",
      "104.27.207.174",
      "104.18.34.119",
      "104.17.10.231",
      "172.65.15.76",
      "104.19.126.205",
      "172.67.90.218",
      "104.22.10.239",
      "104.25.17.183",
      "104.26.8.211",
      "104.17.159.210",
      "104.25.74.26",
      "104.24.16.124"
    ],
    "NORTHWEST": [
      "104.17.135.68",
      "104.20.125.153",
      "104.19.228.195",
      "104.27.194.123",
      "104.19.79.64",
      "104.25.201.189",
      "104.17.32.243",
      "172.66.152.41"
    ],
    "NORTHEAST": [
      "104.20.26.56",
      "104.18.143.154",
      "104.19.131.62",
      "104.19.67.108",
      "104.19.42.124",
      "104.27.65.187",
      "172.65.172.235",
      "104.24.179.63",
      "104.20.51.11",
      "104.25.181.36",
      "104.20.190.232",
      "104.25.142.57"
    ]
  },
  "CHINA_MOBILE": {
    "EAST": [
      "104.16.201.22",
      "172.65.229.10",
      "104.19.228.195"
    ],
    "SOUTH": [
      "104.22.67.99",
      "104.20.26.56"
    ],
    "NORTH": [
      "104.17.122.198",
      "104.20.51.221",
      "172.67.90.218",
      "104.17.75.240",
      "104.20.18.221"
    ],
    "CENTRAL": [
      "172.67.158.170",
      "104.21.120.136",
      "104.27.12.88",
      "104.21.113.152",
      "104.16.239.9",
      "104.16.4.247",
      "104.16.13.178"
    ],
    "SOUTHWEST": [
      "104.19.158.87",
      "104.24.93.69",
      "104.20.209.134",
      "104.16.163.73",
      "104.18.105.53",
      "172.65.156.208"
    ],
    "NORTHWEST": [
      "104.19.162.221",
      "104.25.41.31",
      "104.21.56.80",
      "104.20.167.27"
    ],
    "NORTHEAST": [
      "172.67.165.196",
      "104.24.0.14",
      "104.24.65.19",
      "104.19.181.139",
      "104.25.202.80",
      "172.65.16.202",
      "104.25.23.186",
      "104.24.92.91"
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