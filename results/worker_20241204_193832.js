// IP池配置 - 更新时间: 2024-12-04T19:38:29.951476
const IP_POOLS = {
  "CHINA_TELECOM": {
    "EAST": [
      "172.65.213.1",
      "104.18.50.70",
      "104.17.23.232",
      "172.67.150.201",
      "104.19.200.128",
      "104.20.31.251",
      "104.25.130.126",
      "104.27.17.206",
      "104.25.186.38",
      "104.21.213.6"
    ],
    "SOUTH": [
      "104.18.191.129",
      "104.19.161.126",
      "104.17.247.134",
      "104.17.219.129",
      "104.17.108.94",
      "104.18.93.70",
      "104.19.54.111",
      "104.21.233.137",
      "104.18.124.29",
      "172.67.42.40",
      "104.20.16.130",
      "172.65.19.48",
      "104.20.103.23",
      "104.25.223.47",
      "172.66.176.25",
      "104.25.93.125"
    ],
    "NORTH": [
      "104.17.111.157",
      "104.17.80.233",
      "104.16.103.198",
      "172.65.54.222",
      "104.21.63.43",
      "104.24.237.220",
      "104.24.190.217"
    ],
    "CENTRAL": [
      "104.19.156.146",
      "104.16.235.7",
      "104.16.250.216",
      "104.19.40.219",
      "104.21.6.72",
      "104.27.122.42",
      "104.24.218.130",
      "104.24.144.196",
      "172.65.159.96",
      "104.27.52.119"
    ],
    "SOUTHWEST": [
      "172.65.234.233",
      "104.16.233.149",
      "104.22.62.38",
      "172.67.164.227",
      "104.22.37.13",
      "104.20.185.51",
      "172.67.66.30",
      "104.27.43.213",
      "104.27.193.238",
      "104.27.121.234",
      "104.20.249.150",
      "104.24.160.103",
      "172.67.78.58"
    ],
    "NORTHWEST": [
      "104.16.245.35",
      "104.17.110.218",
      "104.21.126.38",
      "172.65.21.138",
      "172.67.217.214",
      "104.19.75.189",
      "172.65.55.35",
      "172.65.105.144",
      "104.27.19.197",
      "104.24.48.31",
      "172.66.168.199",
      "104.16.70.18",
      "104.25.181.226"
    ],
    "NORTHEAST": [
      "104.17.189.211",
      "172.65.198.205",
      "104.18.230.58",
      "104.16.7.254",
      "104.18.152.231",
      "172.67.103.236",
      "104.25.122.35",
      "104.20.28.227",
      "104.25.189.215",
      "104.24.175.169"
    ]
  },
  "CHINA_UNICOM": {
    "EAST": [
      "104.17.54.195",
      "104.17.111.157",
      "104.16.78.5",
      "104.21.233.137",
      "104.25.130.126",
      "104.24.237.220",
      "104.22.37.13",
      "104.27.122.42",
      "104.27.52.119",
      "172.65.159.96",
      "104.21.6.72",
      "104.25.181.226"
    ],
    "SOUTH": [
      "172.67.154.228",
      "172.65.213.1",
      "104.24.251.20",
      "172.65.73.86",
      "172.67.42.40",
      "104.17.110.218",
      "104.20.107.38",
      "104.25.122.35",
      "104.20.249.150",
      "104.27.43.213",
      "104.20.28.227"
    ],
    "NORTH": [
      "104.17.247.134",
      "104.17.108.94",
      "104.22.62.38",
      "172.67.150.201",
      "172.65.198.205",
      "104.19.75.189",
      "172.65.55.35",
      "172.65.105.144",
      "104.25.93.125",
      "104.25.189.215"
    ],
    "CENTRAL": [
      "172.65.79.70",
      "104.20.190.165",
      "104.25.237.12",
      "104.17.89.129",
      "104.20.103.23",
      "104.25.223.47",
      "172.67.103.236",
      "172.67.164.227",
      "172.67.66.30",
      "104.20.185.51",
      "104.18.240.133",
      "104.27.121.234",
      "172.65.109.184"
    ],
    "SOUTHWEST": [
      "104.22.16.53",
      "104.19.200.128",
      "104.25.105.80",
      "104.25.5.60",
      "104.16.233.149",
      "104.18.191.129",
      "104.18.152.231"
    ],
    "NORTHWEST": [
      "104.20.31.251",
      "172.66.40.133",
      "104.20.16.130",
      "104.19.156.146",
      "104.17.219.129",
      "104.19.54.111",
      "172.66.176.25",
      "104.24.144.196",
      "104.24.175.169",
      "104.16.70.18"
    ],
    "NORTHEAST": [
      "104.17.183.151"
    ]
  },
  "CHINA_MOBILE": {
    "EAST": [
      "104.19.40.219",
      "104.18.93.70",
      "104.21.63.43",
      "104.24.251.20",
      "104.21.126.38",
      "104.16.235.7",
      "104.20.190.165",
      "104.25.5.60",
      "172.66.40.133",
      "104.22.16.53",
      "172.65.109.184"
    ],
    "SOUTH": [
      "104.16.245.35",
      "104.18.195.58",
      "104.16.7.254",
      "104.17.89.129",
      "104.27.17.206",
      "104.18.124.29",
      "104.24.48.31"
    ],
    "NORTH": [
      "104.16.250.216",
      "104.16.78.5",
      "104.18.230.58",
      "172.66.135.89",
      "172.65.21.138",
      "104.27.19.197",
      "104.24.190.217"
    ],
    "CENTRAL": [
      "104.17.23.232",
      "104.20.147.42",
      "104.19.247.130",
      "104.20.201.129",
      "104.27.193.238",
      "104.24.160.103"
    ],
    "SOUTHWEST": [
      "172.67.154.228",
      "172.65.73.86",
      "104.20.200.99",
      "104.24.218.130"
    ],
    "NORTHWEST": [
      "104.17.111.157",
      "104.20.8.162",
      "172.65.54.222",
      "104.21.213.6"
    ],
    "NORTHEAST": [
      "104.21.20.245",
      "104.19.161.126",
      "104.17.80.233",
      "172.65.234.233",
      "172.65.79.70",
      "104.25.105.80",
      "172.65.19.48"
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