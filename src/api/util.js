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
const alarmUrl = `ws://${location.host}/ws?alarm=true`;
const testUrl = `ws://${location.host}/ws`;
const baseUrl = `ws://${location.host}/ws`;
const creat_ws_api = function () {

    switch (arguments.length) {
        case 1:
            return type + arguments[0];
        case 2:
            return type + arguments[0] + station + arguments[1];
        case 3:
            return type + arguments[0] + station + arguments[1] + device + arguments[2];
        case 4:
            return type + arguments[0] + station + arguments[1] + device + arguments[2] + param + arguments[3];
        default:
            return type + 404;
    }
};
//type=10003&station=2000007&paramName=fcProbeTemp
const creat_ws_param_api = function () {
    return baseUrl + type + arguments[0] + station + arguments[1] + paramName + arguments[2];
};

const allValues = function () {
    return baseUrl + type + arguments[0] + station + arguments[1] + "&all";
};

const jsonFormat = function (data) {
    return JSON.parse(data.data);
};

const getUrlKey = function (param) {
    const result =
        decodeURIComponent(
            (new RegExp(
                "[?|&]" + param + "=" + "([^&;]+?)(&|#|;|$)"
            ).exec(location.href) || [, ""])[1].replace(/\+/g, "%20")
        ) || null;
    if (result == null) {
        return 404;
    }
    return result;
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
