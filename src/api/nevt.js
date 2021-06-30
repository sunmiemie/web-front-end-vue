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
    localStorage.clear();
    sessionStorage.clear();
}
export var failLogin = (time) => {
    const result = JSON.parse(Date.now() + time);
    localStorage.setItem("fail-login-number", result);
}
export var getFail = () => {
    return localStorage.getItem("fail-login-number") == null ? false : true;
}
export var removeFail = () => {
    localStorage.removeItem("fail-login-number");
}
export var getFailLogin = (time)=> {
    if (localStorage.getItem("fail-login-number") != null && time >= parseInt(localStorage.getItem("fail-login-number"))) {
        removeFail();
    }
}
