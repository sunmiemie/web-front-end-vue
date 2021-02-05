import axios from 'axios'

const url_pre = "/dummy"

export const carCount = () => {
    return creatAxios("/carCount");
}

export const onlineCarCount = () => {
    return creatAxios("/onlineCarCount")
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
    return creatAxiosData("/vin",data);
}


const creatAxios = (url) => {
    return axios({
        method: "get",
        url: url_pre + url,
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

const creatAxiosData = function(url,data) {
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


