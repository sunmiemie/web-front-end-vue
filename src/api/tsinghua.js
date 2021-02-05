import websocket from "../api/websocket"
import { creat_ws_api, data_station_type } from "../api/util"

var url_prefix = "ws://152.136.255.67:8989/ws"

var allVehicle = function () {
    var url = url_prefix + creat_ws_api(data_station_type.vehicle);
    return websocket.ws(url);
}
var allCarries = function () {
    var url = url_prefix + creat_ws_api(data_station_type.carrier);
    return websocket.ws(url);
}
var allFactory = function () {
    var url = url_prefix + creat_ws_api(data_station_type.factory);
    return websocket.ws(url);
}
var allStation = function () {
    var url = url_prefix + creat_ws_api(data_station_type.station);
    return websocket.ws(url);
}

var vehicleByStationId = function (dataStationId) {
    var url = url_prefix + creat_ws_api(data_station_type.vehicle, dataStationId);
    return websocket.ws(url);
}

var factoryByStationId = function (dataStationId) {
    var url = url_prefix + creat_ws_api(data_station_type.factory, dataStationId);
    return websocket.ws(url);
}

var stationByStationId = function (dataStationId) {
    var url = url_prefix + creat_ws_api(data_station_type.station, dataStationId);
    return websocket.ws(url);
}

var carrierByStationId = function (dataStationId) {
    var url = url_prefix + creat_ws_api(data_station_type.carrier, dataStationId);
    return websocket.ws(url);
}

export {
    allCarries,
    allFactory,
    allStation,
    allVehicle,
    stationByStationId,
    carrierByStationId,
    factoryByStationId,
    vehicleByStationId
}