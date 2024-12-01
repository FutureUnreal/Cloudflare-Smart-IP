// IP池配置 - 更新时间: 2024-12-02T19:16:32.892979
const IP_POOLS = {
  "CHINA_TELECOM": {
    "EAST": [
      "104.19.74.112",
      "104.17.220.162",
      "104.18.188.230",
      "104.16.97.229",
      "104.17.83.211",
      "172.66.2.75",
      "104.21.235.37",
      "104.17.165.233",
      "104.19.218.195",
      "104.21.215.131",
      "104.24.197.160",
      "104.24.244.181",
      "172.66.177.101",
      "172.67.67.170",
      "104.25.165.161",
      "104.20.167.137",
      "104.25.248.7",
      "104.21.196.187",
      "172.67.203.14",
      "104.20.111.207"
    ],
    "SOUTH": [
      "104.17.105.77",
      "104.19.97.11",
      "104.18.98.62",
      "172.65.83.55",
      "104.21.14.232",
      "172.65.50.199",
      "104.18.212.81",
      "104.20.241.175",
      "104.25.215.231",
      "172.67.15.136",
      "172.65.36.131",
      "104.24.250.50",
      "104.27.85.143",
      "104.24.92.32",
      "172.65.49.60",
      "104.24.42.167",
      "104.27.25.158",
      "104.20.49.66",
      "104.25.238.5",
      "172.65.75.238"
    ],
    "NORTH": [
      "104.21.95.96",
      "104.17.104.117",
      "172.67.228.59",
      "104.16.73.25",
      "104.17.111.117",
      "104.21.76.91",
      "104.22.30.194",
      "104.18.22.232",
      "104.19.142.39",
      "104.19.84.142",
      "104.22.50.32",
      "104.22.50.158",
      "172.67.215.223",
      "172.67.25.239",
      "172.67.11.185",
      "172.67.19.253",
      "104.20.0.64",
      "104.17.182.112",
      "104.25.2.75",
      "104.24.66.147"
    ],
    "CENTRAL": [
      "104.16.135.69",
      "104.17.159.143",
      "1.0.0.181",
      "104.17.18.217",
      "104.16.249.54",
      "104.16.200.184",
      "104.16.117.222",
      "172.65.212.162",
      "172.67.31.118",
      "104.19.134.60",
      "104.18.17.96",
      "104.17.34.127",
      "104.21.236.52",
      "104.21.195.13",
      "104.21.84.143",
      "172.67.176.90",
      "104.24.95.229",
      "104.24.242.64",
      "104.27.31.243",
      "104.20.13.129"
    ],
    "SOUTHWEST": [
      "104.17.126.81",
      "104.19.33.84",
      "172.65.47.181",
      "104.17.100.106",
      "104.17.201.102",
      "104.18.76.46",
      "104.19.150.69",
      "104.17.149.202",
      "104.17.37.135",
      "104.17.167.253",
      "104.21.103.157",
      "104.21.107.64",
      "104.17.143.13",
      "104.17.69.119",
      "104.20.129.237",
      "104.21.9.13",
      "104.20.80.7",
      "104.20.198.38",
      "104.27.1.184",
      "172.67.82.186"
    ],
    "NORTHWEST": [
      "104.17.144.69",
      "104.18.206.227",
      "104.17.58.232",
      "104.17.161.43",
      "104.21.224.208",
      "104.21.96.254",
      "104.22.31.113",
      "104.20.88.120",
      "172.65.194.93",
      "104.25.152.162",
      "104.24.145.133",
      "172.67.71.149",
      "104.25.83.53",
      "104.20.155.176",
      "104.24.190.210",
      "104.18.150.223",
      "104.24.216.200",
      "104.17.195.72",
      "104.17.134.161"
    ],
    "NORTHEAST": [
      "104.17.110.14",
      "104.19.81.27",
      "104.21.75.128",
      "104.21.122.167",
      "104.16.193.206",
      "104.21.127.192",
      "104.21.79.84",
      "104.19.254.116",
      "104.17.86.49",
      "104.17.223.42",
      "104.18.88.190",
      "104.21.233.22",
      "104.22.55.202",
      "104.17.113.190",
      "104.20.221.39",
      "104.20.111.234",
      "172.65.187.139",
      "172.65.73.120",
      "104.25.119.15",
      "172.67.81.81"
    ]
  },
  "CHINA_UNICOM": {
    "EAST": [
      "104.17.18.217",
      "104.21.75.128",
      "104.21.108.8",
      "104.25.53.207",
      "104.17.161.43",
      "172.65.212.162",
      "104.21.94.196",
      "104.17.220.162",
      "104.25.165.161",
      "104.21.107.64",
      "104.24.250.50",
      "172.66.166.48",
      "104.25.127.155",
      "1.0.0.181",
      "172.65.73.120",
      "104.21.9.13",
      "104.25.225.100",
      "104.17.182.112",
      "104.17.153.87",
      "104.27.96.87"
    ],
    "SOUTH": [
      "104.25.38.255",
      "104.16.135.69",
      "172.66.2.75",
      "104.16.193.206",
      "104.19.134.60",
      "104.17.201.102",
      "104.21.206.204",
      "104.17.105.77",
      "104.21.233.22",
      "104.17.149.202",
      "104.18.98.62",
      "104.16.97.229",
      "104.17.37.135",
      "104.17.83.211",
      "104.20.0.64",
      "172.65.83.55",
      "104.24.95.229",
      "172.67.203.14",
      "104.17.165.233",
      "104.25.4.240"
    ],
    "NORTH": [
      "104.24.228.73",
      "172.65.47.181",
      "104.18.17.96",
      "104.19.81.27",
      "104.21.215.131",
      "104.21.122.167",
      "104.24.244.181",
      "104.21.224.208",
      "172.67.176.90",
      "104.24.250.64",
      "104.20.241.175",
      "104.20.221.39",
      "104.24.242.64",
      "172.65.187.139",
      "104.20.80.7",
      "172.67.215.223",
      "104.25.1.163",
      "172.66.193.121",
      "104.22.30.194",
      "172.67.7.190"
    ],
    "CENTRAL": [
      "172.66.165.204",
      "104.18.188.230",
      "104.19.254.116",
      "104.21.76.91",
      "104.16.117.222",
      "104.18.88.190",
      "104.18.22.232",
      "104.21.14.232",
      "104.25.215.231",
      "104.17.143.13",
      "104.17.34.127",
      "104.27.31.243",
      "104.22.50.32",
      "104.20.13.129",
      "104.20.129.142",
      "172.67.82.186",
      "104.20.99.194",
      "104.20.248.67",
      "172.67.71.149",
      "104.25.83.53"
    ],
    "SOUTHWEST": [
      "104.17.126.81",
      "104.25.133.251",
      "104.22.50.158",
      "172.67.67.170",
      "172.67.61.155",
      "172.67.19.253",
      "104.19.150.69",
      "104.21.236.52",
      "172.65.216.55",
      "104.16.58.189",
      "172.67.15.136",
      "104.17.250.250",
      "104.17.113.190",
      "104.25.248.7",
      "172.65.49.60",
      "104.20.49.66",
      "104.25.238.5",
      "104.20.210.13",
      "104.24.145.133",
      "104.22.64.117"
    ],
    "NORTHWEST": [
      "104.16.73.25",
      "104.17.144.69",
      "104.18.76.46",
      "104.17.223.42",
      "104.17.104.117",
      "104.21.79.84",
      "104.18.212.81",
      "104.19.74.112",
      "104.17.86.49",
      "104.17.111.117",
      "104.19.84.142",
      "104.18.206.227",
      "104.22.55.202",
      "104.20.129.237",
      "104.20.111.234",
      "104.24.66.147",
      "104.27.1.184",
      "104.25.169.138",
      "172.65.75.238",
      "104.17.195.72"
    ],
    "NORTHEAST": [
      "104.17.100.106",
      "104.24.197.160",
      "172.67.25.239",
      "172.67.31.118",
      "104.21.196.187",
      "104.25.31.206",
      "104.24.92.32",
      "104.17.167.253",
      "172.65.13.188",
      "104.27.78.106",
      "104.21.235.37",
      "104.20.141.201"
    ]
  },
  "CHINA_MOBILE": {
    "EAST": [
      "104.17.18.217",
      "104.20.167.137",
      "104.20.111.207",
      "104.20.198.38",
      "104.25.165.18",
      "104.24.186.141",
      "104.17.134.161"
    ],
    "SOUTH": [
      "104.17.159.143",
      "104.25.38.255",
      "104.16.193.206",
      "172.66.165.204",
      "104.17.100.106",
      "104.21.195.13",
      "104.25.53.207",
      "104.16.58.189",
      "104.24.190.210",
      "104.21.17.246"
    ],
    "NORTH": [
      "104.16.249.54",
      "104.25.133.251",
      "104.21.108.8",
      "104.21.84.143",
      "104.20.120.145",
      "104.24.68.155"
    ],
    "CENTRAL": [
      "104.21.95.96",
      "104.21.206.204",
      "172.67.11.185",
      "104.18.12.129"
    ],
    "SOUTHWEST": [
      "104.17.58.232",
      "104.17.126.81",
      "104.24.228.73",
      "104.21.103.157",
      "104.25.209.148",
      "104.22.17.144",
      "172.65.62.8",
      "104.21.120.58"
    ],
    "NORTHWEST": [
      "104.17.110.14",
      "104.21.94.196",
      "104.19.218.195",
      "104.21.127.192",
      "172.65.216.55",
      "104.19.232.249",
      "104.20.175.88"
    ],
    "NORTHEAST": [
      "104.16.200.184",
      "104.19.33.84",
      "104.17.105.77",
      "104.19.97.11",
      "172.65.50.199",
      "172.67.61.155",
      "104.24.42.167"
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