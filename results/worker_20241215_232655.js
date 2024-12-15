// IP池配置 - 更新时间: 2024-12-15T23:26:53.986129
const IP_POOLS = {
  "CHINA_TELECOM": {
    "EAST": [
      "104.16.160.136",
      "104.19.72.41",
      "104.18.5.220",
      "104.19.115.5",
      "104.16.193.154",
      "172.65.240.127",
      "104.16.215.17",
      "172.67.183.168",
      "104.27.49.29",
      "104.24.180.132",
      "104.24.171.141",
      "172.67.94.136",
      "104.24.151.148",
      "104.25.3.197"
    ],
    "SOUTH": [
      "104.17.221.244",
      "104.16.176.199",
      "104.18.152.98",
      "104.27.100.248",
      "104.20.21.64",
      "104.20.119.83"
    ],
    "NORTH": [
      "172.65.202.249",
      "104.18.4.228",
      "104.19.232.129",
      "104.25.170.117",
      "104.26.15.246"
    ],
    "CENTRAL": [
      "104.17.59.17",
      "104.19.0.30",
      "104.18.227.238",
      "104.16.56.242",
      "104.19.72.136",
      "104.25.161.248",
      "104.20.1.126",
      "104.25.139.20",
      "104.25.194.48",
      "104.20.128.48",
      "104.24.1.6",
      "104.24.27.113",
      "172.67.214.194",
      "172.65.11.126",
      "172.67.165.13",
      "104.20.56.225",
      "104.25.249.216"
    ],
    "SOUTHWEST": [
      "104.16.78.154",
      "104.18.35.239",
      "104.16.224.176",
      "104.18.73.149",
      "172.65.85.204",
      "104.16.218.132",
      "172.67.46.204",
      "172.65.40.118",
      "172.67.146.174",
      "172.65.55.113",
      "104.27.44.194",
      "104.20.32.3"
    ],
    "NORTHWEST": [
      "172.65.28.168",
      "104.19.193.31",
      "104.18.230.182",
      "104.18.177.23",
      "104.20.51.161",
      "104.27.1.162",
      "104.27.202.18",
      "104.25.118.37",
      "172.66.215.58"
    ],
    "NORTHEAST": [
      "104.19.213.142",
      "104.19.181.151",
      "104.19.220.100",
      "104.16.82.53",
      "104.19.235.230",
      "104.27.42.239",
      "104.20.95.151",
      "172.66.171.140",
      "104.27.49.229"
    ]
  },
  "CHINA_UNICOM": {
    "EAST": [
      "104.16.219.215",
      "104.17.57.211",
      "104.19.235.230",
      "104.18.73.149",
      "104.21.63.195",
      "104.18.5.220",
      "172.67.5.4",
      "104.19.193.31",
      "104.24.180.132",
      "104.26.15.246",
      "172.67.94.136",
      "104.25.139.20",
      "172.67.165.13",
      "104.20.95.151",
      "104.25.249.216",
      "172.66.171.140",
      "172.66.215.58"
    ],
    "SOUTH": [
      "104.18.122.154",
      "104.17.0.37",
      "104.19.0.30",
      "172.65.28.168",
      "172.67.98.186",
      "104.22.33.82",
      "172.65.85.204",
      "104.16.56.242",
      "104.25.170.117",
      "104.18.177.23",
      "104.27.100.248",
      "104.25.161.248",
      "104.25.194.48",
      "172.67.146.174",
      "104.24.27.113",
      "104.27.202.18"
    ],
    "NORTH": [
      "104.19.151.142",
      "104.18.152.98",
      "104.17.128.49",
      "104.19.232.129",
      "104.16.215.17",
      "104.19.115.5",
      "104.18.42.154",
      "104.16.82.53",
      "104.20.56.225",
      "104.27.1.162"
    ],
    "CENTRAL": [
      "104.16.176.199",
      "104.19.72.41",
      "104.25.144.7",
      "104.19.72.136",
      "104.16.218.132"
    ],
    "SOUTHWEST": [
      "104.18.35.239",
      "104.18.4.228",
      "172.67.46.204",
      "104.17.59.17"
    ],
    "NORTHWEST": [
      "104.24.43.155",
      "104.18.230.182",
      "172.67.91.236",
      "104.16.224.176",
      "104.16.186.41",
      "172.67.209.10",
      "104.20.119.83",
      "172.65.40.118",
      "104.27.49.229"
    ],
    "NORTHEAST": [
      "104.19.185.159",
      "172.65.240.127",
      "104.18.236.49",
      "104.18.185.218",
      "104.24.91.220",
      "172.65.202.249",
      "104.24.151.148",
      "104.20.1.126"
    ]
  },
  "CHINA_MOBILE": {
    "EAST": [
      "104.16.193.154",
      "104.17.89.10",
      "104.19.220.100",
      "172.67.183.168",
      "104.21.63.195",
      "104.18.122.154",
      "104.24.1.6",
      "104.25.118.37"
    ],
    "SOUTH": [
      "104.17.154.106",
      "104.18.236.49",
      "104.18.42.154",
      "104.17.0.37",
      "104.16.78.154",
      "104.24.171.141",
      "104.20.21.64"
    ],
    "NORTH": [
      "172.67.5.4",
      "104.18.227.238",
      "104.17.128.49",
      "104.27.49.29",
      "104.22.33.82",
      "104.27.42.239",
      "172.65.55.113",
      "104.20.32.3"
    ],
    "CENTRAL": [
      "104.19.151.142",
      "104.16.160.136",
      "172.67.98.186",
      "104.24.202.157",
      "104.25.3.197",
      "104.19.238.160"
    ],
    "SOUTHWEST": [
      "104.17.221.244",
      "104.19.185.159",
      "172.67.209.10",
      "104.20.128.48",
      "172.65.11.126",
      "104.19.232.135"
    ],
    "NORTHWEST": [
      "104.27.44.194"
    ],
    "NORTHEAST": [
      "104.19.213.142",
      "104.18.185.218",
      "104.16.219.215",
      "104.19.181.151",
      "172.67.214.194"
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