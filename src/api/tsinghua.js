import websocket from "../api/websocket"
import { creat_ws_api, data_station_type, baseUrl } from "./util"

const url_prefix = baseUrl;

const allVehicle = function () {
    const url = url_prefix + creat_ws_api(data_station_type.vehicle);
    return websocket.ws(url);
};

const allCarries = function () {
    const url = url_prefix + creat_ws_api(data_station_type.carrier);
    return websocket.ws(url);
};
const allFactory = function () {
    const url = url_prefix + creat_ws_api(data_station_type.factory);
    return websocket.ws(url);
};
const allStation = function () {
    const url = url_prefix + creat_ws_api(data_station_type.station);
    return websocket.ws(url);
};

const vehicleByStationId = function (dataStationId) {
    const url = url_prefix + creat_ws_api(data_station_type.vehicle, dataStationId);
    return websocket.ws(url);
};

const factoryByStationId = function (dataStationId) {
    const url = url_prefix + creat_ws_api(data_station_type.factory, dataStationId);
    return websocket.ws(url);
};

const stationByStationId = function (dataStationId) {
    const url = url_prefix + creat_ws_api(data_station_type.station, dataStationId);
    return websocket.ws(url);
};

const carrierByStationId = function (dataStationId) {
    const url = url_prefix + creat_ws_api(data_station_type.carrier, dataStationId);
    return websocket.ws(url);
};

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
