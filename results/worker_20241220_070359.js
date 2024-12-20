// IP池配置 - 更新时间: 2024-12-20T07:03:57.810504
const IP_POOLS = {
  "CHINA_TELECOM": {
    "EAST": [
      "172.65.251.59",
      "104.18.203.72",
      "104.16.151.69",
      "172.66.156.103",
      "104.24.208.4",
      "172.67.55.4"
    ],
    "SOUTH": [
      "104.18.121.43",
      "172.67.150.104",
      "172.67.175.27",
      "104.27.199.210",
      "104.27.192.182",
      "104.22.41.127",
      "104.16.21.215",
      "104.18.170.28",
      "172.65.131.202"
    ],
    "NORTH": [
      "104.17.100.44",
      "104.18.154.147",
      "104.18.46.33",
      "104.21.94.51",
      "104.18.191.66",
      "172.65.221.154",
      "104.24.240.88"
    ],
    "CENTRAL": [
      "172.65.82.214",
      "172.65.11.89",
      "104.21.91.186",
      "172.65.188.221",
      "172.67.96.141",
      "104.27.6.155",
      "104.20.36.174"
    ],
    "SOUTHWEST": [
      "104.16.131.114",
      "104.18.245.254",
      "104.16.35.232",
      "172.67.197.64",
      "104.21.67.82",
      "104.25.80.177",
      "104.24.130.182",
      "104.22.1.217",
      "172.65.191.251"
    ],
    "NORTHWEST": [
      "104.16.196.42",
      "172.65.49.49",
      "172.67.153.135",
      "104.21.123.228",
      "104.16.178.13",
      "172.67.185.81",
      "104.18.2.86",
      "104.18.126.156",
      "172.65.245.110",
      "104.20.197.177",
      "104.20.17.134",
      "104.27.62.233",
      "104.25.198.220",
      "172.65.180.106"
    ],
    "NORTHEAST": [
      "104.24.178.95",
      "172.66.173.54",
      "104.24.214.136",
      "172.67.73.182",
      "172.65.134.94",
      "172.66.128.38",
      "104.24.163.205",
      "172.65.153.25"
    ]
  },
  "CHINA_UNICOM": {
    "EAST": [
      "104.16.74.166",
      "104.18.154.147",
      "172.65.251.59",
      "104.25.82.61",
      "104.20.215.195",
      "104.18.191.66",
      "104.25.7.210",
      "104.18.126.156",
      "172.67.81.95",
      "104.24.208.4",
      "172.65.191.251"
    ],
    "SOUTH": [
      "172.66.171.66",
      "104.25.216.169",
      "104.24.140.128",
      "104.16.151.69",
      "104.16.57.76",
      "172.65.245.110",
      "172.65.11.89",
      "104.24.178.95",
      "104.20.36.174"
    ],
    "NORTH": [
      "172.66.215.181",
      "104.21.76.143",
      "104.21.114.129",
      "104.19.96.65",
      "104.17.29.56",
      "172.67.175.27",
      "104.27.192.182",
      "104.22.41.127",
      "104.16.21.215"
    ],
    "CENTRAL": [
      "104.19.134.104",
      "104.18.193.232",
      "172.67.153.135",
      "104.21.94.51",
      "104.20.197.177"
    ],
    "SOUTHWEST": [
      "172.66.215.155",
      "104.19.57.136",
      "104.27.199.210",
      "104.21.67.82",
      "172.66.173.54",
      "104.18.170.28",
      "172.66.156.103",
      "104.27.62.233"
    ],
    "NORTHWEST": [
      "104.19.182.255",
      "104.27.105.218",
      "104.27.197.239",
      "104.18.46.33",
      "104.18.2.86",
      "104.16.240.152",
      "172.65.221.154",
      "104.24.130.182",
      "104.24.240.88"
    ],
    "NORTHEAST": [
      "104.21.197.20",
      "104.27.204.221"
    ]
  },
  "CHINA_MOBILE": {
    "EAST": [
      "172.66.215.181",
      "104.18.193.232",
      "172.67.123.80",
      "104.27.7.180",
      "104.19.135.158",
      "104.27.204.221",
      "104.20.17.134"
    ],
    "SOUTH": [
      "104.17.100.44",
      "104.24.224.56",
      "104.20.215.195",
      "104.18.203.72",
      "104.19.170.148",
      "104.21.76.143",
      "104.21.197.20",
      "172.67.73.182",
      "172.65.153.25"
    ],
    "NORTH": [
      "172.65.222.155",
      "104.17.1.241",
      "104.18.245.254",
      "104.24.214.136",
      "172.67.96.141",
      "104.27.6.155"
    ],
    "CENTRAL": [
      "104.27.197.239",
      "104.16.240.152",
      "172.66.128.38"
    ],
    "SOUTHWEST": [
      "104.21.114.129",
      "104.19.96.65",
      "172.67.38.87",
      "172.67.197.64",
      "104.25.198.220"
    ],
    "NORTHWEST": [],
    "NORTHEAST": [
      "172.66.171.66",
      "104.25.216.169",
      "104.21.99.60",
      "104.19.182.255",
      "172.65.252.87",
      "104.19.134.104",
      "172.67.55.4"
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