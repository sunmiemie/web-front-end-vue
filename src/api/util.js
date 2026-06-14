const data_station_type = {
    factory: 10001,
    station: 10002,
    vehicle: 10003,
    carrier: 10004
};
const type = "?type=";
const station = "&station=";
const device = "&device=";
const paramName = "&paramName=";
const param = "&param=";
const protocol = location.protocol === 'https:' ? 'wss:' : 'ws:';
const baseUrl = `${protocol}//${location.host}/ws`;
const alarmUrl = `${baseUrl}?alarm=true`;
const testUrl = baseUrl;
// const alarmUrl = "ws://127.0.0.1:8989/ws?alarm=true";
// const testUrl = "ws://127.0.0.1:8989/ws";
// const baseUrl = "ws://127.0.0.1:8989/ws";
const creat_ws_api = function () {

    switch (arguments.length) {
        case 1:
            return type + encodeURIComponent(arguments[0]);
        case 2:
            return type + encodeURIComponent(arguments[0]) + station + encodeURIComponent(arguments[1]);
        case 3:
            return type + encodeURIComponent(arguments[0]) + station + encodeURIComponent(arguments[1]) + device + encodeURIComponent(arguments[2]);
        case 4:
            return type + encodeURIComponent(arguments[0]) + station + encodeURIComponent(arguments[1]) + device + encodeURIComponent(arguments[2]) + param + encodeURIComponent(arguments[3]);
        default:
            return type + 404;
    }
};
//type=10003&station=2000007&paramName=fcProbeTemp
const creat_ws_param_api = function () {
    return baseUrl + type + encodeURIComponent(arguments[0]) + station + encodeURIComponent(arguments[1]) + paramName + encodeURIComponent(arguments[2]);
};

const allValues = function () {
    return baseUrl + type + encodeURIComponent(arguments[0]) + station + encodeURIComponent(arguments[1]) + "&all";
};

const jsonFormat = function (data) {
    try {
        const value = JSON.parse(data.data);
        return value && typeof value === 'object' && !Array.isArray(value) ? value : null;
    } catch (_) {
        return null;
    }
};

const getUrlKey = function (param) {
    // 按参数解析而不是把键名拼成正则，兼容 hash 路由中的查询字符串。
    const pairs = location.href.match(/[?&][^?&#;]+/g) || [];
    for (const pair of pairs) {
        const separator = pair.indexOf('=');
        if (separator < 0) continue;
        try {
            const key = decodeURIComponent(pair.slice(1, separator).replace(/\+/g, ' '));
            if (key === param) {
                return decodeURIComponent(pair.slice(separator + 1).replace(/\+/g, ' ')) || 404;
            }
        } catch (_) {
            // 不完整的百分号编码视为无效参数，不中断页面渲染。
        }
    }
    return 404;
};


const parameterVelue = function (ws, value) {
    const parameter = {
        type: value[0],
        station: value[1],
        paramName: value[2]
    };
    const jsonStr = JSON.stringify(parameter);
    ws.send(jsonStr);
};


export {
    data_station_type,
    creat_ws_api,
    jsonFormat,
    creat_ws_param_api,
    allValues,
    getUrlKey,
    baseUrl,
    testUrl,
    alarmUrl,
    parameterVelue
}
