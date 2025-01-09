// IP池配置 - 更新时间: 2025-01-09T23:20:44.481844
const IP_POOLS = {
  "CHINA_TELECOM": {
    "EAST": [
      "104.16.6.238",
      "104.19.31.180",
      "104.16.97.213",
      "104.17.208.13",
      "104.18.22.132",
      "172.67.42.179",
      "104.18.40.137",
      "172.67.211.113",
      "104.22.66.225",
      "104.24.211.6",
      "104.21.22.51",
      "104.25.40.128",
      "104.24.190.119",
      "104.20.120.52",
      "104.21.206.150",
      "104.27.192.89",
      "104.25.217.19"
    ],
    "SOUTH": [
      "104.17.198.244",
      "104.19.76.20",
      "104.19.163.35",
      "104.18.56.140",
      "104.22.26.165",
      "104.17.54.209",
      "104.16.47.76",
      "104.17.218.147",
      "104.22.24.238",
      "104.17.141.177",
      "104.18.34.237",
      "172.65.44.184",
      "104.21.100.55",
      "104.25.231.44",
      "172.65.70.81",
      "104.24.226.100",
      "104.25.188.130"
    ],
    "NORTH": [
      "104.16.120.234",
      "104.18.176.106",
      "104.16.56.73",
      "104.17.74.178",
      "172.65.102.52",
      "104.27.115.77",
      "104.22.65.40",
      "104.25.168.185",
      "172.66.149.3",
      "104.27.45.121"
    ],
    "CENTRAL": [
      "104.16.155.125",
      "104.19.236.3",
      "104.18.35.112",
      "172.67.30.114",
      "104.20.21.28",
      "172.66.203.41",
      "104.24.144.100",
      "104.27.85.29",
      "172.67.5.173",
      "104.25.250.125",
      "104.25.213.220",
      "172.66.158.236",
      "172.65.75.72"
    ],
    "SOUTHWEST": [
      "104.19.11.232",
      "104.19.221.148",
      "104.19.161.71",
      "104.17.105.91",
      "104.16.248.94",
      "104.17.194.43",
      "104.19.132.105",
      "172.67.211.11",
      "104.21.83.22",
      "104.20.151.5",
      "104.20.32.167",
      "104.24.8.47"
    ],
    "NORTHWEST": [
      "104.18.160.4",
      "104.17.236.118",
      "172.65.236.57",
      "172.67.236.130",
      "104.21.63.127",
      "104.21.26.132",
      "104.18.22.240",
      "172.67.56.79",
      "172.66.128.115",
      "104.20.200.133",
      "172.67.95.166",
      "172.65.110.126",
      "104.26.2.128",
      "104.27.19.41",
      "104.20.55.222",
      "104.25.230.49"
    ],
    "NORTHEAST": [
      "104.19.151.107",
      "104.17.89.114",
      "104.19.153.116",
      "104.17.126.232",
      "104.17.78.241",
      "104.19.253.122",
      "172.65.182.171",
      "172.67.9.11",
      "104.20.121.80",
      "104.20.7.83"
    ]
  },
  "CHINA_UNICOM": {
    "EAST": [
      "104.17.141.177",
      "104.18.35.112",
      "104.19.96.239",
      "172.67.236.130",
      "104.21.26.132",
      "104.18.22.240",
      "104.27.192.89",
      "172.65.70.81",
      "104.25.168.185",
      "172.66.158.236",
      "172.66.149.3",
      "172.65.110.126"
    ],
    "SOUTH": [
      "104.17.91.65",
      "104.16.120.234",
      "172.65.236.57",
      "104.24.211.6",
      "104.17.218.147",
      "104.17.74.178",
      "172.66.203.41",
      "104.24.226.100",
      "172.67.56.79",
      "172.67.5.173"
    ],
    "NORTH": [
      "104.17.198.244",
      "104.18.34.237",
      "104.17.194.43",
      "104.17.126.232",
      "104.18.56.140",
      "104.18.22.132",
      "104.20.21.28",
      "104.27.25.143",
      "104.19.236.3",
      "172.65.102.52",
      "104.22.65.40",
      "104.21.206.150",
      "104.27.85.29",
      "104.21.83.22",
      "172.65.75.72",
      "104.24.8.47"
    ],
    "CENTRAL": [
      "104.17.208.13",
      "104.19.153.116",
      "104.19.163.35",
      "104.22.24.238",
      "104.21.63.127",
      "104.19.161.71",
      "104.16.97.213",
      "104.17.105.91",
      "104.21.100.55",
      "104.25.231.44",
      "104.25.188.130",
      "172.65.182.171",
      "104.26.2.128",
      "104.20.200.133",
      "172.67.95.166",
      "104.27.19.41",
      "104.25.230.49"
    ],
    "SOUTHWEST": [
      "104.17.89.114",
      "104.16.47.76",
      "104.19.76.20",
      "104.18.176.106",
      "172.67.42.179",
      "104.16.155.125",
      "104.22.66.225",
      "104.19.151.107",
      "104.25.40.128",
      "104.24.190.119",
      "104.19.253.122",
      "172.67.9.11",
      "104.25.213.220",
      "104.20.151.5"
    ],
    "NORTHWEST": [
      "104.16.6.238",
      "104.16.56.73",
      "104.19.132.105",
      "104.18.160.4",
      "104.16.248.94",
      "104.20.165.59",
      "104.20.7.83"
    ],
    "NORTHEAST": [
      "104.17.195.250",
      "104.17.236.118",
      "104.19.221.148",
      "172.67.30.114",
      "104.19.11.232",
      "104.20.156.203",
      "104.24.144.100",
      "104.20.121.80",
      "104.25.250.125",
      "104.27.115.77"
    ]
  },
  "CHINA_MOBILE": {
    "EAST": [
      "104.20.32.167"
    ],
    "SOUTH": [
      "104.17.91.65",
      "172.66.128.115"
    ],
    "NORTH": [
      "104.18.40.137",
      "104.27.25.143"
    ],
    "CENTRAL": [
      "104.17.54.209",
      "104.19.31.180",
      "104.21.22.51",
      "104.25.217.19"
    ],
    "SOUTHWEST": [
      "104.20.120.52",
      "104.20.55.222"
    ],
    "NORTHWEST": [
      "104.17.208.13",
      "104.19.153.116",
      "104.22.26.165",
      "104.20.156.203",
      "104.17.78.241"
    ],
    "NORTHEAST": [
      "172.67.211.113",
      "172.67.211.11"
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