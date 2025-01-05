// IP池配置 - 更新时间: 2025-01-05T15:28:51.971758
const IP_POOLS = {
  "CHINA_TELECOM": {
    "EAST": [
      "104.18.120.165",
      "104.18.113.37",
      "104.21.93.123",
      "104.21.51.220",
      "104.16.171.58",
      "172.67.250.125",
      "104.18.129.191",
      "104.25.71.187",
      "104.24.86.65",
      "104.27.58.159",
      "104.22.78.186",
      "104.24.240.38",
      "104.27.17.66",
      "172.65.173.192"
    ],
    "SOUTH": [
      "104.17.129.215",
      "104.19.179.78",
      "104.21.221.146",
      "172.65.8.230",
      "104.21.38.248",
      "104.17.173.10",
      "104.22.78.37",
      "104.16.128.193",
      "104.25.164.118",
      "104.24.35.11"
    ],
    "NORTH": [
      "172.65.58.130",
      "104.21.10.71",
      "172.67.179.15",
      "104.22.25.184",
      "104.16.98.219",
      "172.65.206.156",
      "172.65.120.171",
      "172.66.148.101",
      "172.65.72.109",
      "104.20.160.86",
      "104.25.141.73"
    ],
    "CENTRAL": [
      "172.67.35.140",
      "172.67.169.197",
      "104.17.54.221",
      "104.20.226.131",
      "104.25.232.98",
      "104.19.87.29",
      "104.25.47.50"
    ],
    "SOUTHWEST": [
      "104.19.146.235",
      "104.21.96.152",
      "104.19.218.111",
      "104.17.163.72",
      "104.19.193.11",
      "104.20.84.187",
      "104.20.135.110",
      "104.20.88.135",
      "172.65.106.65",
      "172.67.116.83",
      "104.27.113.187"
    ],
    "NORTHWEST": [
      "172.67.185.215",
      "104.22.16.99",
      "104.17.180.71",
      "104.27.194.72",
      "104.18.226.227",
      "104.16.53.241",
      "104.19.173.231",
      "104.19.158.254",
      "104.22.76.249",
      "104.27.60.110",
      "104.20.28.25",
      "104.20.6.146",
      "104.20.173.17"
    ],
    "NORTHEAST": [
      "172.67.248.2",
      "104.16.122.202",
      "104.17.66.84",
      "104.16.61.16",
      "104.24.70.39",
      "172.66.199.24",
      "104.24.249.223",
      "172.66.212.136",
      "172.65.100.113",
      "104.25.239.193"
    ]
  },
  "CHINA_UNICOM": {
    "EAST": [
      "104.16.16.56",
      "104.18.233.117",
      "104.27.11.96",
      "104.19.218.111",
      "104.17.138.7",
      "104.16.53.241",
      "104.18.129.191",
      "172.65.120.171",
      "104.20.160.86",
      "104.27.113.187"
    ],
    "SOUTH": [
      "172.67.21.3",
      "104.21.89.10",
      "104.22.25.184",
      "104.19.179.78",
      "104.16.122.202",
      "104.25.22.176",
      "172.67.232.75",
      "172.65.58.130",
      "104.21.38.248",
      "104.21.10.71",
      "172.67.248.2",
      "172.66.148.101",
      "104.24.35.11"
    ],
    "NORTH": [
      "104.19.105.241",
      "104.19.66.98",
      "104.17.236.198",
      "104.22.76.249",
      "104.25.232.98",
      "104.20.88.135",
      "172.65.173.192",
      "172.66.212.136",
      "172.65.100.113"
    ],
    "CENTRAL": [
      "104.17.92.255",
      "104.16.2.37",
      "104.27.32.28",
      "104.18.187.163",
      "104.17.163.72",
      "104.25.146.29",
      "104.21.93.123",
      "104.19.193.11",
      "104.27.197.68",
      "104.21.38.13",
      "104.24.70.39"
    ],
    "SOUTHWEST": [
      "172.67.179.15",
      "104.27.25.50",
      "104.25.122.243",
      "104.16.61.234",
      "104.17.129.215",
      "104.16.42.135",
      "172.65.8.230",
      "104.18.36.206",
      "104.20.32.133",
      "104.20.84.187",
      "104.21.66.106",
      "104.25.141.73",
      "104.25.47.50"
    ],
    "NORTHWEST": [
      "104.16.98.219",
      "172.67.169.197",
      "104.27.102.247",
      "104.17.54.221",
      "104.18.202.26",
      "104.18.226.219",
      "104.19.146.235",
      "104.16.117.0",
      "104.16.61.16",
      "104.21.10.38",
      "104.19.158.254",
      "172.67.250.125",
      "104.24.86.65",
      "104.27.58.159",
      "104.25.164.118",
      "104.24.240.38",
      "172.66.199.24"
    ],
    "NORTHEAST": [
      "104.25.28.10",
      "104.16.127.141",
      "172.65.206.156",
      "172.67.251.7",
      "104.20.226.131",
      "104.19.87.29"
    ]
  },
  "CHINA_MOBILE": {
    "EAST": [
      "104.18.78.150",
      "104.21.98.142",
      "104.22.16.99",
      "104.21.51.220",
      "104.27.32.28",
      "104.25.71.187"
    ],
    "SOUTH": [
      "104.18.233.117",
      "172.65.42.245"
    ],
    "NORTH": [
      "172.66.172.15",
      "104.27.93.68",
      "104.21.10.38",
      "172.67.251.7",
      "104.25.239.193"
    ],
    "CENTRAL": [
      "172.67.185.215",
      "104.21.89.10",
      "104.27.76.110",
      "104.16.171.58",
      "104.21.221.146",
      "172.67.232.75"
    ],
    "SOUTHWEST": [
      "172.67.35.140",
      "172.67.60.50",
      "172.67.61.20",
      "172.67.8.6",
      "104.18.226.219",
      "104.16.111.172",
      "104.16.229.52",
      "104.22.78.186"
    ],
    "NORTHWEST": [
      "104.18.187.163"
    ],
    "NORTHEAST": [
      "104.17.23.99",
      "104.16.61.234",
      "104.16.42.135",
      "104.17.92.255",
      "104.16.221.248",
      "104.18.202.26",
      "104.21.38.13",
      "104.24.249.223",
      "104.20.173.17"
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