// IP池配置 - 更新时间: 2025-01-06T07:01:44.078734
const IP_POOLS = {
  "CHINA_TELECOM": {
    "EAST": [
      "104.18.165.190",
      "172.67.177.33",
      "104.27.199.125",
      "172.65.145.56",
      "104.27.23.155",
      "104.26.15.48",
      "172.65.196.128"
    ],
    "SOUTH": [
      "104.17.110.162",
      "104.21.109.166",
      "104.19.148.240",
      "104.17.173.66",
      "104.24.144.78",
      "104.20.54.46",
      "104.25.17.5",
      "104.20.174.118",
      "104.20.230.133"
    ],
    "NORTH": [
      "172.65.3.14",
      "172.65.237.4",
      "104.25.127.172",
      "104.24.130.137",
      "104.16.151.245",
      "104.25.122.14",
      "104.25.195.85"
    ],
    "CENTRAL": [
      "104.17.146.157",
      "104.16.23.119",
      "172.65.54.135",
      "172.65.107.168",
      "104.27.60.215",
      "104.20.27.0",
      "104.27.15.147",
      "172.67.113.89"
    ],
    "SOUTHWEST": [
      "104.18.252.112",
      "104.21.10.253",
      "172.66.152.95",
      "104.27.104.141"
    ],
    "NORTHWEST": [
      "104.17.97.227",
      "104.18.154.229",
      "104.25.35.146",
      "172.65.155.91",
      "104.24.7.67"
    ],
    "NORTHEAST": [
      "104.17.192.114",
      "172.67.37.135",
      "104.22.25.156",
      "104.16.59.106",
      "172.66.216.219",
      "104.16.48.73",
      "104.25.211.151",
      "172.65.166.195",
      "172.67.93.240",
      "104.20.203.91",
      "104.24.48.187",
      "172.66.196.252",
      "104.25.208.176"
    ]
  },
  "CHINA_UNICOM": {
    "EAST": [
      "104.18.100.242",
      "172.67.93.222",
      "104.19.142.103",
      "172.67.109.234",
      "172.67.37.135",
      "104.22.25.156",
      "172.65.54.135",
      "104.18.154.229",
      "104.25.208.176",
      "104.20.230.133"
    ],
    "SOUTH": [
      "104.24.158.94",
      "104.20.210.134",
      "104.18.165.190",
      "104.17.246.93",
      "104.18.136.105",
      "104.17.97.227",
      "104.25.127.172",
      "104.25.211.151",
      "104.27.15.147"
    ],
    "NORTH": [
      "104.18.252.112",
      "172.67.109.196",
      "172.65.237.4",
      "172.65.145.56",
      "172.65.196.128",
      "172.65.155.91",
      "104.24.7.67"
    ],
    "CENTRAL": [
      "104.20.245.184",
      "104.21.109.166",
      "104.16.23.119",
      "104.24.144.78",
      "104.24.48.187",
      "172.66.152.95"
    ],
    "SOUTHWEST": [
      "172.66.195.203",
      "172.65.95.185",
      "104.25.16.113",
      "104.19.148.240",
      "104.20.27.0",
      "104.25.195.85"
    ],
    "NORTHWEST": [
      "104.19.176.60",
      "104.25.64.200",
      "104.18.173.61",
      "172.66.214.36",
      "104.19.155.101",
      "104.24.130.137",
      "104.26.15.48",
      "104.27.60.215",
      "104.27.104.141"
    ],
    "NORTHEAST": [
      "172.65.169.188",
      "104.19.51.238",
      "104.16.59.106",
      "104.27.199.125",
      "172.66.203.74"
    ]
  },
  "CHINA_MOBILE": {
    "EAST": [
      "172.65.3.14",
      "104.25.54.110",
      "172.67.109.196",
      "104.24.158.94",
      "172.66.195.203",
      "104.21.10.253",
      "104.16.151.245"
    ],
    "SOUTH": [
      "104.17.110.162",
      "104.19.142.103",
      "188.114.97.18",
      "172.67.93.240",
      "172.66.196.252"
    ],
    "NORTH": [
      "104.18.173.61",
      "104.16.48.73"
    ],
    "CENTRAL": [
      "104.18.136.105",
      "104.27.23.155",
      "104.20.203.91"
    ],
    "SOUTHWEST": [
      "104.17.146.157",
      "104.24.195.79",
      "104.25.16.113",
      "104.17.173.66",
      "104.25.35.146",
      "172.65.107.168",
      "104.25.17.5"
    ],
    "NORTHWEST": [
      "104.25.64.200"
    ],
    "NORTHEAST": [
      "104.17.139.163",
      "104.19.51.238",
      "104.17.246.93",
      "104.19.155.101",
      "104.20.245.184",
      "104.20.174.118"
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