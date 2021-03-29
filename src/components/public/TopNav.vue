<template>
    <div class="row text-center top-nav">
        <div class="alarm-box">
            <div class="row">
                <div class="alarm col-12">
                    <svg
                        t="1616581666557"
                        class="icon col-12"
                        style="background: rgba(0, 255, 255, 0.9)"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="2049"
                        width="200"
                        height="200"
                    >
                        <path
                            d="M192 874.667h640a32 32 0 0 1 3.072 63.85l-3.072 0.15H192a32 32 0 0 1-3.072-63.851l3.072-0.15h640-640z m320-608c123.712 0 224 100.288 224 224V800a32 32 0 0 1-32 32H320a32 32 0 0 1-32-32V490.667c0-123.712 100.288-224 224-224z m-28.096 155.349l-64 117.333A32 32 0 0 0 448 586.667h74.09l-38.186 70.016a32 32 0 0 0 56.192 30.634l64-117.333A32 32 0 0 0 576 522.667h-74.09l38.186-70.016a32 32 0 0 0-56.192-30.635z m-249.237-48.683a32 32 0 0 1 3.072 63.851l-3.072 0.15h-64a32 32 0 0 1-3.072-63.851l3.072-0.15h64z m618.666 0a32 32 0 0 1 3.072 63.851l-3.072 0.15h-64a32 32 0 0 1-3.072-63.851l3.072-0.15h64zM318.87 177.835l2.432 2.197 42.667 42.667a32 32 0 0 1-42.837 47.466l-2.432-2.197-42.667-42.667a32 32 0 0 1 42.837-47.466z m429.099 2.197a32 32 0 0 1 0 45.27l-42.667 42.666a32 32 0 0 1-45.269-45.27l42.667-42.666a32 32 0 0 1 45.269 0zM512 85.333a32 32 0 0 1 31.85 28.928l0.15 3.072v64a32 32 0 0 1-63.85 3.072l-0.15-3.072v-64a32 32 0 0 1 32-32z"
                            fill="#DE0001"
                            p-id="2050"
                        ></path>
                    </svg>
                </div>
            </div>
            <div style="background: rgba(0, 0, 0, 0.8)">
                <div class="row">
                    <p class="col-4">故障等级:</p>
                    <p class="col-8 text-danger">
                        {{ alarmData.content.level }}
                    </p>
                </div>
                <div class="row">
                    <p class="col-4">故障代码:</p>
                    <p class="col-8 text-danger">
                        {{ alarmData.content.code }}
                    </p>
                </div>
                <div class="row">
                    <p class="col-4">故障消息:</p>
                    <p class="col-8 text-danger">{{ alarmData.content.msg }}</p>
                </div>
                <div class="row">
                    <p class="col-4">故障目标:</p>
                    <p class="col-8 text-danger">
                        {{
                            alarmData.dataStationId +
                            "_" +
                            alarmData.content.deviceId +
                            "_" +
                            alarmData.content.deviceIndex
                        }}
                    </p>
                </div>
                <div class="row">
                    <p class="col-4">紧急联系:</p>
                    <p class="col-8 text-success">12345678910</p>
                </div>
            </div>
        </div>
        <div class="col-3">
            <img
                src="../../assets/img/tsinghua-logo-1.png"
                alt=""
                height="60%"
                width="80%"
                class="img-responsive"
            />
        </div>
        <div class="col-6">
            <div class="row">
                <div class="col-2 offset-1 nav-text-shadow">
                    <router-link
                        to="/index"
                        class="nav-font-size"
                        active-class="_active"
                        >全链</router-link
                    >
                </div>
                <div class="col-2 nav-text-shadow">
                    <router-link
                        to="/h-production"
                        class="nav-font-size"
                        active-class="_active"
                        >制氢</router-link
                    >
                </div>
                <div class="col-2 nav-text-shadow">
                    <router-link
                        to="/h-transportation"
                        class="nav-font-size"
                        active-class="_active"
                        >运氢</router-link
                    >
                </div>
                <div class="col-2 nav-text-shadow">
                    <router-link
                        to="/hydrogenation"
                        class="nav-font-size"
                        active-class="_active"
                        >加氢</router-link
                    >
                </div>
                <div class="col-2 nav-text-shadow">
                    <router-link
                        to="/fuel-cell-vehicle"
                        class="nav-font-size"
                        active-class="_active"
                        >燃料电池车</router-link
                    >
                </div>
            </div>
        </div>
        <div class="col-3">
            <div v-text="date" class="date-text"></div>
        </div>
    </div>
</template>

<script>
import { alarmUrl, jsonFormat } from "../../api/util";
export default {
    name: "top-nav",
    created() {
        this.ws = this.websocket.ws(alarmUrl);
    },
    data() {
        return {
            date: null,
            alarmData: null,
        };
    },
    mounted() {
        this.timeRefresh();
        this.receive();
    },
    methods: {
        navDate() {
            return new Date();
        },
        timeRefresh() {
            this.date = new Date().format("yyyy年MM月dd日 h:m:s");
            setInterval(() => {
                this.date = new Date().format("yyyy年MM月dd日 h:m:s");
            }, 1000);
        },
        receive() {
            var that = this;
            that.ws.onmessage = function (data) {
                let value = jsonFormat(data);
                that.alarmData = value.data;
            };
        },
    },
};

Date.prototype.format = function (format) {
    var date = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S+": this.getMilliseconds(),
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(
            RegExp.$1,
            (this.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
    }
    for (var k in date) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(
                RegExp.$1,
                RegExp.$1.length == 1
                    ? date[k]
                    : ("00" + date[k]).substr(("" + date[k]).length)
            );
        }
    }
    return format;
};
</script>
<style scoped>
.nav-text-shadow {
    text-shadow: 0 0 1px aqua;
}
.top-nav {
    height: 80px;
    line-height: 80px;
    max-width: 100%;
    /* border-bottom: 1px solid aqua; */
}
._active {
    display: block;
    border-bottom: 2px solid skyblue;
}
.date-text {
    font-size: 22px;
    font-family: "Number";
    color: aqua;
}
.nav-font-size {
    font-size: 22px;
}
.alarm-box {
    position: absolute;
    top: 20%;
    left: 20%;
    width: 60%;
    min-height: 60%;
    z-index: 8888;
    box-shadow: 0 0 10px red;
    animation: alarm infinite linear alternate 0.25s;
    overflow: hidden;
    border-radius: 20px;
    /* animation: alarm-flash infinite alternate 0.5s; */
}
.alarm-box p {
    text-align: center;
    font-size: 20px;
    font-weight: bolder;
}
@keyframes alarm {
    to {
        box-shadow: 0 0 30px aqua;
    }
    from {
        box-shadow: 0 0 30px orangered;
    }
}
@keyframes alarm-flash {
    to {
        background: rgba(70, 48, 48, 0.6);
    }
    from {
        background: rgba(59, 1, 1, 0.7);
    }
}
</style>