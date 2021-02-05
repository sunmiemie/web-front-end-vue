var data_station_type = {
    factory: 10001,
    station: 10002,
    vehicle: 10003,
    carrier: 10004
}
const type = "?type=";
const station = "&station=";
const device = "&device=";
const paramName = "&paramName=";
const param = "&param=";
var baseUrl = "ws://152.136.255.67:8989/ws"
var creat_ws_api = function () {

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
}

var creat_ws_param_api = function () {
    return baseUrl + type + arguments[0] + station + arguments[1] + paramName + arguments[2];
}

var allValues = function () {
    return baseUrl + type + arguments[0] + station + arguments[1] + "&all";
}

var jsonFormat = function (data) {
    return JSON.parse(data.data);
}

var getUrlKey = function (param) {
    var result =
        decodeURIComponent(
            (new RegExp(
                "[?|&]" + param + "=" + "([^&;]+?)(&|#|;|$)"
            ).exec(location.href) || [, ""])[1].replace(/\+/g, "%20")
        ) || null;
    if (result == null) {
        return 404;
    }
    return result;
}

export {
    data_station_type,
    creat_ws_api,
    jsonFormat,
    creat_ws_param_api,
    allValues,
    getUrlKey
}