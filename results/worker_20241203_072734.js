// IP池配置 - 更新时间: 2024-12-03T07:27:32.787468
const IP_POOLS = {
  "CHINA_TELECOM": {
    "EAST": [
      "104.19.56.183",
      "172.65.255.103",
      "104.18.73.59",
      "104.19.166.174",
      "104.16.205.61",
      "104.18.139.125",
      "172.67.232.163",
      "172.67.183.91",
      "104.27.206.192",
      "104.24.165.60",
      "104.24.251.197",
      "104.19.72.46",
      "104.18.71.8"
    ],
    "SOUTH": [
      "104.16.129.134",
      "104.18.69.112",
      "104.16.56.214",
      "172.67.40.219",
      "104.19.91.187",
      "104.16.186.198",
      "104.16.245.124",
      "104.17.15.62",
      "104.24.91.176",
      "104.27.106.236",
      "104.27.199.254",
      "172.65.147.250",
      "104.20.88.248",
      "104.17.42.95"
    ],
    "NORTH": [
      "104.16.6.197",
      "104.19.85.122",
      "104.19.167.138",
      "172.67.211.195",
      "104.19.172.130",
      "104.16.226.240",
      "104.22.22.191",
      "172.65.90.243",
      "104.22.15.230",
      "104.25.146.237",
      "104.25.142.173",
      "104.24.228.86",
      "104.20.142.156",
      "104.17.55.45",
      "104.20.166.254",
      "104.24.246.187",
      "172.67.115.143",
      "104.19.79.84"
    ],
    "CENTRAL": [
      "104.17.207.141",
      "104.16.194.152",
      "104.19.3.184",
      "104.21.236.97",
      "104.20.64.103",
      "172.66.147.41",
      "172.67.181.124",
      "172.66.161.130",
      "104.20.18.10",
      "104.25.87.134",
      "104.24.0.121",
      "172.65.137.40",
      "104.25.110.48",
      "104.25.69.189",
      "172.67.55.176",
      "104.16.76.61"
    ],
    "SOUTHWEST": [
      "172.65.220.210",
      "104.18.65.88",
      "104.16.52.205",
      "104.17.165.109",
      "104.19.90.7",
      "104.18.22.38",
      "104.16.188.103",
      "172.65.59.147",
      "172.66.215.180",
      "104.20.104.1",
      "104.25.54.98",
      "104.27.120.59",
      "104.25.204.206",
      "172.65.133.47",
      "104.24.50.218",
      "104.27.74.45",
      "104.18.232.101",
      "172.67.107.208"
    ],
    "NORTHWEST": [
      "104.18.226.127",
      "172.65.220.91",
      "104.21.55.186",
      "104.21.61.213",
      "104.17.190.32",
      "104.17.232.117",
      "104.18.173.146",
      "172.67.36.241",
      "104.24.28.179",
      "172.65.118.101",
      "104.27.206.157",
      "104.20.213.206"
    ],
    "NORTHEAST": [
      "104.18.144.89",
      "172.65.55.91",
      "104.17.164.87",
      "104.18.7.81",
      "172.65.224.250",
      "104.17.108.232",
      "172.65.83.230",
      "172.65.165.233",
      "104.20.180.187",
      "172.66.150.36",
      "172.67.83.146",
      "104.20.171.241",
      "104.20.142.231",
      "172.65.190.89"
    ]
  },
  "CHINA_UNICOM": {
    "EAST": [
      "104.19.91.187",
      "172.67.211.195",
      "172.67.89.19",
      "104.24.0.121",
      "104.25.69.189",
      "104.20.180.187",
      "104.17.234.35",
      "172.67.83.146",
      "104.27.206.157"
    ],
    "SOUTH": [
      "172.67.122.164",
      "172.65.34.60",
      "104.16.135.193",
      "172.66.47.170",
      "104.18.22.38",
      "104.17.232.117",
      "104.19.223.176",
      "104.16.55.186",
      "172.67.181.124",
      "104.25.87.134",
      "172.65.190.89"
    ],
    "NORTH": [
      "104.19.177.159",
      "104.19.85.122",
      "104.16.194.152",
      "172.65.55.91",
      "104.20.71.234",
      "172.67.241.118",
      "172.67.232.163",
      "104.18.226.127",
      "104.21.117.97",
      "172.65.59.147",
      "104.25.146.237",
      "104.16.245.124",
      "104.27.120.59",
      "172.65.133.47",
      "172.67.107.208",
      "104.18.173.146",
      "104.17.42.178"
    ],
    "CENTRAL": [
      "104.16.226.240",
      "104.18.73.59",
      "104.17.207.141",
      "104.22.22.191",
      "104.20.188.51",
      "104.21.106.64",
      "104.18.144.89",
      "104.24.228.86",
      "104.27.106.236",
      "104.20.166.254",
      "172.67.115.143",
      "104.27.74.45",
      "104.18.232.101",
      "104.17.42.95"
    ],
    "SOUTHWEST": [
      "172.65.224.250",
      "104.16.6.197",
      "104.16.121.54",
      "104.19.3.184",
      "172.65.163.217",
      "172.65.220.210",
      "172.65.83.230",
      "104.19.172.130",
      "172.67.36.241",
      "104.25.110.48",
      "104.25.240.226",
      "104.24.50.218",
      "104.19.219.123",
      "104.20.213.206",
      "104.18.71.8"
    ],
    "NORTHWEST": [
      "104.16.92.121",
      "104.18.139.125",
      "104.22.74.7",
      "104.16.188.103",
      "104.20.18.10",
      "172.66.161.130",
      "104.20.52.176",
      "172.66.215.180",
      "172.67.183.91",
      "104.16.76.61"
    ],
    "NORTHEAST": [
      "172.65.255.103",
      "104.21.55.186",
      "104.22.41.145",
      "104.19.90.7",
      "104.20.142.156",
      "104.25.54.98",
      "104.21.236.97"
    ]
  },
  "CHINA_MOBILE": {
    "EAST": [
      "104.19.223.176",
      "104.19.167.138",
      "172.67.243.249",
      "172.65.163.217",
      "104.20.71.234",
      "104.22.15.230",
      "104.20.64.103",
      "104.24.28.179"
    ],
    "SOUTH": [
      "104.21.206.133",
      "172.67.241.118",
      "104.25.240.226",
      "104.17.55.45",
      "104.24.91.176",
      "172.65.220.91",
      "172.65.137.40",
      "104.27.199.254",
      "104.20.104.1",
      "172.66.150.36",
      "104.20.171.241"
    ],
    "NORTH": [
      "104.16.56.214",
      "104.16.129.134",
      "104.16.209.237",
      "172.67.104.149",
      "172.65.90.243"
    ],
    "CENTRAL": [
      "104.16.52.205",
      "104.21.117.97",
      "172.67.89.19",
      "104.24.251.197"
    ],
    "SOUTHWEST": [
      "104.16.151.230",
      "104.18.69.112",
      "172.67.40.219",
      "104.20.188.51",
      "104.16.121.54",
      "104.25.204.206",
      "104.19.79.84"
    ],
    "NORTHWEST": [
      "104.18.64.252",
      "172.66.147.41",
      "104.19.18.255"
    ],
    "NORTHEAST": [
      "104.16.126.204",
      "104.19.166.174",
      "104.18.65.88",
      "104.16.92.121",
      "172.67.122.164",
      "104.22.41.145",
      "104.27.206.192",
      "104.16.92.225",
      "104.17.234.35",
      "104.24.246.187",
      "104.19.72.46",
      "104.20.142.231",
      "104.19.219.123",
      "104.20.88.248"
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