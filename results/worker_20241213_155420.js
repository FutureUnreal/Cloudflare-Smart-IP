// IP池配置 - 更新时间: 2024-12-13T15:54:18.713854
const IP_POOLS = {
  "CHINA_TELECOM": {
    "EAST": [
      "104.16.127.177",
      "104.18.239.28",
      "104.19.242.37",
      "104.21.74.155",
      "104.18.38.194",
      "104.25.7.144",
      "104.24.40.19",
      "104.16.139.99",
      "104.22.36.68",
      "104.20.251.250",
      "104.25.119.141",
      "104.27.13.98"
    ],
    "SOUTH": [
      "104.17.143.152",
      "104.17.59.221",
      "104.21.217.169",
      "172.65.61.83",
      "104.24.180.211",
      "104.17.126.182",
      "104.18.250.54",
      "104.17.238.138",
      "104.16.206.142",
      "172.65.74.191",
      "104.25.21.79",
      "104.19.10.73",
      "104.19.120.154",
      "104.24.156.9",
      "104.25.201.87"
    ],
    "NORTH": [
      "172.67.128.169",
      "172.65.84.133",
      "104.19.42.216",
      "172.67.10.250",
      "104.27.119.227",
      "104.17.59.226",
      "104.18.2.202",
      "104.24.3.128",
      "104.27.112.188",
      "104.22.44.47",
      "104.20.252.237"
    ],
    "CENTRAL": [
      "104.18.17.179",
      "104.17.214.168",
      "172.65.92.237",
      "104.17.58.60",
      "104.21.196.186",
      "104.16.147.77",
      "104.16.232.254",
      "104.19.31.68",
      "104.27.98.171",
      "104.19.74.9",
      "172.66.143.135",
      "104.26.11.150"
    ],
    "SOUTHWEST": [
      "104.21.59.195",
      "104.18.36.56",
      "104.17.54.11",
      "104.16.153.109",
      "104.17.143.240",
      "104.16.166.216",
      "104.16.53.193",
      "104.18.138.211",
      "104.16.25.71",
      "104.24.200.73",
      "172.65.131.129",
      "172.65.111.246"
    ],
    "NORTHWEST": [
      "104.19.151.205",
      "104.19.5.251",
      "104.24.62.113",
      "104.18.248.103",
      "104.19.203.190",
      "104.17.112.209",
      "104.24.46.97",
      "104.20.212.119",
      "104.20.199.119",
      "172.66.197.128",
      "104.27.47.38",
      "104.24.28.252",
      "104.20.233.75"
    ],
    "NORTHEAST": [
      "104.19.164.27",
      "172.67.187.79",
      "104.16.48.149",
      "104.19.135.66",
      "104.17.125.239",
      "104.17.242.223",
      "172.65.160.66"
    ]
  },
  "CHINA_UNICOM": {
    "EAST": [
      "172.65.208.168",
      "104.20.252.52",
      "172.65.160.84",
      "104.19.243.12",
      "104.16.200.247",
      "104.17.126.182",
      "104.19.203.190",
      "104.19.31.68",
      "104.20.199.119",
      "104.20.212.119",
      "172.65.111.246",
      "104.21.59.195"
    ],
    "SOUTH": [
      "104.18.37.126",
      "104.20.89.116",
      "172.65.159.204",
      "104.19.18.220",
      "104.18.36.56",
      "104.20.30.68",
      "104.17.214.168",
      "104.17.143.152",
      "104.17.58.60",
      "104.24.62.113",
      "172.65.47.233",
      "104.16.25.71"
    ],
    "NORTH": [
      "104.18.9.56",
      "104.24.186.214",
      "104.19.187.148",
      "104.18.129.43",
      "104.17.143.240",
      "104.22.42.31",
      "104.16.232.254",
      "104.18.2.202",
      "104.24.3.128",
      "104.22.44.47",
      "104.26.11.150",
      "104.20.233.75"
    ],
    "CENTRAL": [
      "104.25.64.49",
      "104.16.155.27",
      "104.21.74.155",
      "104.24.200.73"
    ],
    "SOUTHWEST": [
      "104.20.19.135",
      "104.16.224.249",
      "104.22.65.140",
      "172.65.72.17",
      "104.24.173.111",
      "104.16.127.177",
      "104.20.247.65",
      "104.16.166.216",
      "172.67.130.198",
      "104.17.238.138",
      "104.24.46.97",
      "172.67.128.169",
      "104.20.251.250",
      "172.65.160.66",
      "172.65.28.207",
      "104.24.28.252"
    ],
    "NORTHWEST": [
      "104.19.164.27",
      "104.17.59.221",
      "104.27.55.151",
      "104.27.125.157",
      "104.16.161.202",
      "172.67.58.182",
      "104.25.129.193",
      "104.22.57.156",
      "104.18.38.194",
      "104.27.119.227",
      "104.17.59.226",
      "104.19.74.9",
      "104.21.221.83",
      "104.27.47.38"
    ],
    "NORTHEAST": [
      "104.24.40.19"
    ]
  },
  "CHINA_MOBILE": {
    "EAST": [
      "172.65.84.133",
      "104.19.242.37",
      "104.16.224.249",
      "172.65.159.204",
      "104.24.171.209",
      "104.22.57.156",
      "104.17.112.209",
      "104.27.98.171",
      "172.65.131.129"
    ],
    "SOUTH": [
      "104.17.220.26",
      "104.24.52.100",
      "104.27.75.239",
      "172.65.160.84",
      "104.16.200.247",
      "104.24.180.211",
      "104.16.139.99",
      "104.27.13.98"
    ],
    "NORTH": [
      "104.17.54.11",
      "104.25.108.91",
      "172.65.1.84",
      "104.20.30.68",
      "104.27.125.157",
      "104.18.250.54",
      "104.27.112.188"
    ],
    "CENTRAL": [
      "104.16.23.57",
      "172.65.92.237",
      "104.16.161.202",
      "104.16.109.139",
      "104.18.129.43",
      "104.20.252.237"
    ],
    "SOUTHWEST": [
      "104.24.69.122",
      "172.65.196.47",
      "104.18.9.56",
      "104.18.17.179",
      "104.21.196.186",
      "104.25.21.79"
    ],
    "NORTHWEST": [
      "104.20.252.52",
      "104.20.247.65",
      "104.22.36.68",
      "104.19.10.73"
    ],
    "NORTHEAST": [
      "104.21.123.50",
      "104.22.65.140",
      "104.17.84.48",
      "104.19.243.12",
      "104.25.129.193",
      "104.19.120.154",
      "104.25.201.87"
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