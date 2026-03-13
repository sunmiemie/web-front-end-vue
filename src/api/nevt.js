import axios from "axios";
export const base_api = "/api"
export const verifyToken = (data) => {
    axios({
        method: "post",
        url: base_api + "/verifyToken",
        data: data
    }).then(res => {
        // console.log("res", res);
    }).catch(err => {
        // console.log("err", err);
    });
};
export var returnToken = () => {
    return (localStorage.getItem('token') == null || localStorage.getItem('token') == '') ? sessionStorage.getItem('token') : localStorage.getItem('token');
}
export var returnUsername = () => {
    return (localStorage.getItem('username') == null || localStorage.getItem('username') == '') ? sessionStorage.getItem('username') : localStorage.getItem('username');
}
export var removeToken = () => {
    // 只移除本应用的身份信息，避免误删同源应用数据或登录限制。
    [localStorage, sessionStorage].forEach(storage => {
        storage.removeItem('token');
        storage.removeItem('username');
    });
}
export var failLogin = (time) => {
    const result = Date.now() + time;
    localStorage.setItem("fail-login-number", result);
}
export var getFail = () => {
    getFailLogin(Date.now());
    return localStorage.getItem("fail-login-number") !== null;
}
export var removeFail = () => {
    localStorage.removeItem("fail-login-number");
}
export var getFailLogin = (time)=> {
    const saved = localStorage.getItem("fail-login-number");
    const expiresAt = Number(saved);
    if (saved !== null && (!Number.isFinite(expiresAt) || time >= expiresAt)) {
        removeFail();
    }
}
