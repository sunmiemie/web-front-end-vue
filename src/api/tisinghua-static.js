import axios from 'axios'

const url_pre = "/dummy"

export const carCount = () => {
    return creatAxios("/carCount");
}

export const onlineCarCount = () => {
    return creatAxios("/onlineCarCount")
}

export const isOnlineCarById = (data) => {
    return creatAxiosData("/isOnlineCar",data)
}

export const allOfflineCar = () => {
    return creatAxios("/allOfflineCar");
}

export const allOnlineCar = () => {
    return creatAxios("/allOnlineCar");
}

export const allVehicleAddr = () => {
    return creatAxios("/allVehicleAddr");
}

export const allFactoryAddr = () => {
    return creatAxios("/allFactoryAddr");
}

export const allStationAddr = () => {
    return creatAxios("/allStationAddr");
}

export const allCarrierAddr = () => {
    return creatAxios("/allCarrierAddr");
}

export const vinByDataStationId = (data) => {
    return creatAxiosData("/vin", data);
}

export const alarmHandler = (data) => {
    return creatAxiosData("/removeAlarm", data);
}

export const statisticalAdd = (data) => {
    return statisticalAPI("/add",data)
}

export const statisticalAddList = (data) => {
    return statisticalAPI("/addList",data)
}

export const statisticalTransport = (data) => {
    return statisticalAPI("/transport",data)
}

export const statisticalTransportList = (data) => {
    return statisticalAPI("/transportList",data)
}

export const statisticalStorage = (data) => {
    return statisticalAPI("/storage",data)
}

export const statisticalStorageList = (data) => {
    return statisticalAPI("/storageList",data)
}

export const statisticalManufacture = (data) => {
    return statisticalAPI("/produce",data)
}

export const statisticalManufactureList = (data) => {
    return statisticalAPI("/produceList",data)
}

export const statisticalAlarm = (data) => {
    return statisticalAPI("/alarm",data)
}

export const statisticalAlarmList = (data) => {
    return statisticalAPI("/alarmList",data)
}

export const statisticalUse= (data) => {
    return statisticalAPI("/use",data)
}

export const statisticalUseList = (data) => {
    return statisticalAPI("/useList",data)
}

export const statisticalSell = (data) => {
    return statisticalAPI("/sell",data)
}

export const statisticalSellList = (data) => {
    return statisticalAPI("/sellList",data)
}

const creatAxios = (url) => {
    return axios({
        method: "get",
        url: url_pre + url,
    }).then((res) => {
        let data = res.data;
        if (data.code === 2000) {
            // console.log(data.data);
            return data.data;
        }
    }).catch((err) => {
        // console.log("err", err);
    });
}

const creatAxiosData = function (url, data) {
    return axios({
        method: "get",
        url: url_pre + url,
        params: data,
    }).then((res) => {
        let data = res.data;
        if (data.code == 2000) {
            // console.log(data.data);
            return data.data;
        }
    }).catch((err) => {
        // console.log("err", err);
    });
}

const statisticalAPI = function (url, data) {
    return axios({
        method: "get",
        url: "/statistical" + url,
        params: data,
    }).then((res) => {
        let data = res.data;
        if (data.code == 2000) {
            // console.log(data.data);
            return data.data;
        }
    }).catch((err) => {
        // console.log("err", err);
    });
}


