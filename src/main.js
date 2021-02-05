// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./assets/css/public.css"
import "./assets/css/font.css"
import './assets/js/table.js'
import './assets/js/public.js'
import echarts from 'echarts'
import axios from "axios"
import websocket from "./api/websocket"
import { returnToken, removeToken } from './api/nevt.js'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.prototype.websocket = websocket
// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (returnToken() !== null || returnToken() !== "") {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers['token'] = returnToken();
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        var code = response.data.code;
        if (code === 5001 || code === 5002 || code === 4000) {
            removeToken();
            if (code === 5001) {
                confirm("token已过期!请重新登录!");
            }
            router.push("/login");
        }
        return response;
    },
    error => {
        return Promise.reject(error)   // 返回接口返回的错误信息
    });

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router, 
    components: { App },
    template: '<App/>'
})
