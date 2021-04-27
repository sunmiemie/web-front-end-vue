<template>
    <div class="col-7 margin-top-30">
        <div class="row border-aqua">
            <p
                class="col-12 h4 text-center"
                style="line-height: 60px; height: 60px"
            >
                <span class="text-green h4" v-text="stationName"></span
                >-加氢机-<span class="text-green h4">{{
                    paramValue.SPSID == null ? "HBIS-JQJ-01" : paramValue.SPSID
                }}</span>
            </p>
        </div>
        <div class="row text-white">
            <div
                class="col-3"
                style="
                    position: absolute;
                    top: 100px;
                    left: 30px;
                    z-index: 1000;
                "
            >
                <div class="col-12 border-aqua">
                    <p>
                        加氢枪实时流量:
                        <span class="text-green">{{
                            paramValue.SPSOutputTraffic == null
                                ? 0
                                : paramValue.SPSOutputTraffic
                        }}</span>
                        kg/min
                    </p>
                    <p>
                        枪口实时加氢质量:
                        <span class="text-green">{{
                            paramValue.SPSOutputWeight == null
                                ? 0
                                : paramValue.SPSOutputWeight
                        }}</span>
                        kg
                    </p>
                    <p>
                        枪口压力:
                        <span class="text-green">{{
                            paramValue.SPSOutputPressure == null
                                ? 0
                                : paramValue.SPSOutputPressure
                        }}</span>
                        map
                    </p>
                    <p>
                        环境温度:
                        <span class="text-green">{{
                            paramValue.SPSTemperature == null
                                ? 0
                                : paramValue.SPSTemperature
                        }}</span>
                        ℃
                    </p>
                </div>
            </div>
            <div
                class="col-4"
                style="
                    position: absolute;
                    top: 240px;
                    right: 0px;
                    z-index: 1000;
                "
            >
                <div
                    class="col-12 border-aqua"
                    style="height: 100px; line-height: 40px"
                >
                    <p>
                        车载氢系统压力:
                        <span class="text-green">35</span> Mpa
                    </p>
                    <p>车载氢系统温度: <span class="text-green">XX</span> ℃</p>
                </div>
            </div>
        </div>
        <div class="row" style="height: 385px">
            <div
                class="transmission-up"
                v-if="paramValue.SPSGunStatus == 1"
            ></div>
            <div
                class="transmission-down"
                v-if="paramValue.SPSGunStatus == 1"
            ></div>
            <div
                class="col-6"
                style="position: relative; left: 100px; top: 100px"
            >
                <svg
                    @click="addSixHPhoto"
                    t="1607049413154"
                    style="transform: rotateY(180deg)"
                    class="icon"
                    viewBox="0 0 1133 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="13305"
                    id="mx_n_1607049413155"
                    width="300"
                    height="300"
                >
                    <path
                        d="M857.067043 829.60621c0 20.234298-16.62103 36.132675-36.132675 36.132675H475.505999c-20.234298 0-36.132675-16.62103-36.132675-36.132675V312.186309c0-20.234298 16.62103-36.132675 36.132675-36.132675h345.428369c20.234298 0 36.132675 16.62103 36.132675 36.132675v517.419901z"
                        fill="#dbdbdb"
                        p-id="13306"
                        data-spm-anchor-id="a313x.7781069.0.i74"
                        class=""
                    ></path>
                    <path
                        d="M794.918843 451.658433c0 20.234298-16.62103 36.132675-36.132675 36.132675H537.654199c-20.234298 0-36.132675-16.62103-36.132675-36.132675V361.326747c0-20.234298 16.62103-36.132675 36.132675-36.132675H758.786168c20.234298 0 36.132675 16.62103 36.132675 36.132675v90.331686zM798.53211 542.712773c0 5.058574-4.335921 8.671842-9.394495 8.671842H506.580099c-5.058574 0-9.394495-4.335921-9.394496-8.671842 0-5.058574 4.335921-8.671842 9.394496-8.671841h282.557516c5.058574 0 9.394495 3.613267 9.394495 8.671841z"
                        fill="#06fdef"
                        p-id="13307"
                        data-spm-anchor-id="a313x.7781069.0.i75"
                        class=""
                    ></path>
                    <path
                        d="M482.00988 588.962597c0 17.343684-14.45307 31.796754-31.796754 31.796754-17.343684 0-31.796754-14.45307-31.796753-31.796754 0-17.343684 14.45307-31.796754 31.796753-31.796754 18.066337-0.722653 31.796754 13.730416 31.796754 31.796754z"
                        fill="#06fdef"
                        p-id="13308"
                    ></path>
                    <path
                        d="M329.529993 868.629499c-23.847565 0-41.913903-12.285109-52.753705-27.460833-10.839802-15.175723-16.62103-32.519407-19.511644-47.69513-3.613267-23.847565-6.503881-51.308398-6.503882-83.105152 0-63.593507 10.839802-143.808045 44.804517-246.424841l26.015526 8.671842c-33.242061 101.171489-43.35921 178.495413-43.35921 238.475652 0 30.351447 2.890614 56.366972 6.503881 78.769231 1.445307 10.839802 6.503881 25.292872 14.45307 35.410021 7.949188 10.117149 16.62103 16.62103 30.351447 16.621031h5.058574c10.839802-1.445307 14.45307-4.335921 18.788991-11.562456 3.613267-7.226535 6.503881-19.511644 6.503882-36.132675 0-7.949188-0.722653-17.343684-1.445307-27.460833-2.890614-33.242061-13.007763-65.038814-13.730417-99.726182 0-22.402258 5.058574-46.249824 19.511645-69.374735 11.562456-18.788991 31.796754-23.124912 46.249823-23.124912 16.62103 0 29.628793 5.058574 30.351447 5.058575l-9.394496 26.015525s-2.16796-0.722653-5.781227-1.445307-9.394495-2.16796-15.175724-2.16796c-10.117149 0-18.066337 2.890614-23.124912 10.117149-11.562456 18.788991-15.175723 36.132675-15.898376 54.199012 0 28.90614 10.117149 60.702893 13.730416 97.558221 0.722653 10.839802 1.445307 20.956951 1.445307 30.351447 0 18.788991-2.16796 35.410021-9.394495 49.140438-7.226535 13.730416-22.402258 23.847565-39.745943 25.292872-2.16796 0-5.058574 0.722653-7.226535 0.722653l-0.722653-0.722653z"
                        fill="#595959"
                        p-id="13309"
                    ></path>
                    <path
                        d="M882.359915 918.49259c0 5.058574-4.335921 9.394495-9.394495 9.394495H231.249118c-5.058574 0-9.394495-4.335921-9.394496-9.394495v-15.898377c0-5.058574 4.335921-9.394495 9.394496-9.394495h641.716302c5.058574 0 9.394495 4.335921 9.394495 9.394495v15.898377z"
                        fill="#4197ae"
                        p-id="13310"
                        data-spm-anchor-id="a313x.7781069.0.i76"
                        class="selected"
                    ></path>
                    <path
                        d="M320.858151 497.908257c-2.890614 10.117149-13.730416 16.62103-24.570219 13.730416-10.117149-2.890614-16.62103-13.730416-13.730416-24.570219l7.226535-25.292872c2.890614-10.117149 13.730416-16.62103 24.570219-13.730416 10.117149 2.890614 16.62103 13.730416 13.730416 24.570219l-7.226535 25.292872z"
                        fill="#06fdef"
                        p-id="13311"
                    ></path>
                    <path
                        d="M278.221595 483.455187c3.613267 4.335921 8.671842 8.671842 14.45307 11.562456 5.058574 2.890614 9.394495 4.335921 15.898377 6.503881 17.343684 4.335921 36.855328 0 47.69513-15.175723 19.511644-26.738179-14.45307-51.308398 10.117149-77.323924 4.335921-5.058574 5.781228-26.015526 8.671842-31.0741 3.613267-4.335921 28.183486-24.570219 28.183486-24.570219 3.613267-2.890614 5.058574-12.285109-1.445307-20.234298-5.781228-7.226535-14.45307-10.839802-18.788991-7.949188L286.170783 407.57657l-0.722653 0.722654c-22.402258 20.956951-25.292872 53.476359-7.226535 75.155963z m57.812279-60.702893c5.058574-0.722653 10.117149 4.335921 10.839803 11.562455l5.781228 33.964715c1.445307 7.226535-1.445307 13.730416-6.503882 14.45307-5.058574 0.722653-10.117149-4.335921-10.839802-11.562456l-5.781228-33.964715c-1.445307-7.226535 1.445307-13.730416 6.503881-14.453069z"
                        fill="#17BADE"
                        p-id="13312"
                    ></path>
                </svg>
            </div>
            <div
                style="
                    position: absolute;
                    top: 300px;
                    left: -150px;
                    z-index: -1000;
                "
            ></div>
            <div
                style="
                    position: absolute;
                    top: 394px;
                    right: 75px;
                    z-index: -1000;
                    transform: rotateZ(50deg);
                "
            ></div>
            <div
                class="col-6"
                style="position: relative; top: 230px; left: 100px"
            >
                <svg
                    t="1607062361497"
                    @click="addSixHCar"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="9623"
                    width="200"
                    height="200"
                >
                    <path
                        d="M247.808 561.152c-8.704 0-16.896 1.536-24.576 4.096-28.16 10.24-48.128 36.864-48.128 68.096v0.512c0 31.232 19.968 57.856 48.128 68.096 7.68 2.56 15.872 4.096 24.576 4.096 39.936 0 72.192-32.256 72.704-72.192v-0.512c-0.512-39.936-32.768-72.192-72.704-72.192z m24.064 72.704c0 13.312-10.752 24.064-24.064 24.064s-24.064-10.752-24.064-24.064v-0.512c0-13.312 10.752-24.064 24.064-24.064s24.064 10.752 24.064 24.576c0-0.512 0 0 0 0z"
                        fill="#2F2960"
                        p-id="9624"
                    ></path>
                    <path
                        d="M877.056 555.52c-25.6-40.96-71.68-68.096-123.904-68.096-7.68 0-15.36 0.512-23.04 2.048-70.144 10.752-123.392 71.68-123.392 144.384v0.512h73.728v-0.512c0-39.936 32.256-72.704 72.704-72.704 39.936 0 72.704 32.256 72.704 72.704v0.512h73.728v-0.512c0.512-29.184-8.192-55.808-22.528-78.336z"
                        fill="#1296db"
                        p-id="9625"
                        data-spm-anchor-id="a313x.7781069.0.i3"
                        class="selected"
                    ></path>
                    <path
                        d="M753.664 561.152c-39.936 0-72.704 32.256-72.704 72.704v0.512c0 39.936 32.768 72.192 72.704 72.192 39.936 0 72.192-32.256 72.704-72.192v-0.512c-0.512-40.448-32.768-72.704-72.704-72.704z m24.064 72.704c0 13.312-10.752 24.064-24.064 24.064s-24.064-10.752-24.064-24.064v-0.512c0-13.312 10.752-24.064 24.064-24.064s24.064 10.752 24.064 24.576c0-0.512 0 0 0 0z"
                        fill="#2F2960"
                        p-id="9626"
                    ></path>
                    <path
                        d="M944.64 480.256c-16.896-5.632-135.68-31.744-135.68-31.744s-108.032-61.44-181.76-98.304c-17.92 8.192-35.328 17.92-51.2 28.672-27.136 18.944-51.712 42.496-71.168 69.12-18.944 25.6-34.304 54.784-45.056 86.016-10.24 31.232-16.384 64.512-16.384 99.328v0.512h163.328v-0.512c0-73.216 53.248-133.632 123.392-144.384 7.68-1.024 15.36-2.048 23.04-2.048 52.224 0 97.792 27.136 123.904 68.096 14.336 22.528 22.528 49.152 22.528 77.824v0.512h7.68c20.992 0 36.352-4.608 47.104-11.264 10.24-6.144 16.384-14.848 18.944-23.04 13.312-41.472 4.096-108.032-28.672-118.784z"
                        fill="#19f6e3"
                        p-id="9627"
                        data-spm-anchor-id="a313x.7781069.0.i2"
                        class=""
                    ></path>
                    <path
                        d="M562.688 323.584H355.328c-15.872 0-31.232 4.608-46.08 12.288-16.896 25.088-31.744 51.712-44.032 79.872-20.992 46.592-35.328 97.28-41.984 150.016 7.68-2.56 15.872-4.096 24.576-4.096 39.936 0 72.704 32.256 72.704 72.704v0.512h123.392v-0.512c0-34.816 5.632-68.096 16.384-99.328 10.24-31.232 25.6-59.904 45.056-86.016 19.968-26.624 44.032-50.176 71.168-69.12 15.872-11.264 33.28-20.992 51.2-28.672-31.744-16.384-56.832-27.648-65.024-27.648z"
                        fill="#3378FE"
                        p-id="9628"
                    ></path>
                    <path
                        d="M177.152 442.88c4.096 51.2-14.336 120.832-126.976 156.16V496.128c0-14.336 9.728-27.136 22.528-31.232l91.648-12.288c4.096-3.072 8.704-6.144 12.8-9.728z"
                        fill="#5F4DFE"
                        p-id="9629"
                    ></path>
                </svg>
            </div>
        </div>
        <div
            class="row text-white border-aqua"
            style="margin-top: 90px; height: 350px"
        >
            <div class="margin-top-10 col-12" style="line-height: 40px">
                <div class="row unline">
                    <div class="col-6">
                        <p class="">环境温度</p>
                    </div>
                    <div class="col-6">
                        <p class="text-green">暂无</p>
                    </div>
                </div>
                <div class="row unline">
                    <div class="col-6">
                        <p class="">环境湿度</p>
                    </div>
                    <div class="col-6">
                        <p class="text-green">暂无</p>
                    </div>
                </div>
                <div class="row unline">
                    <div class="col-6">
                        <p class="">环境压力</p>
                    </div>
                    <div class="col-6">
                        <p class="text-green">暂无</p>
                    </div>
                </div>
                <div class="row unline">
                    <div class="col-6">
                        <p class="">加氢时长</p>
                    </div>
                    <div class="col-6">
                        <p class="text-green">暂无</p>
                    </div>
                </div>
                <div class="row unline">
                    <div class="col-6">
                        <p class="">加注起始压力</p>
                    </div>
                    <div class="col-6">
                        <p class="text-green">暂无</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <p class="">加注结束压力</p>
                    </div>
                    <div class="col-6">
                        <p class="text-green">暂无</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    baseUrl,
    testUrl,
    getUrlKey,
    data_station_type,
    jsonFormat,
} from "../../../api/util";
export default {
    created() {
        this.ws = this.websocket.ws(testUrl);
    },
    data() {
        return {
            ws: null,
            sixHShow: false,
            sixCarShow: false,
            paramValue: {},
            paramList: [
                "SPSID",
                "SSTemperature",
                "SPSGunStatus",
                "SPSOutputWeight",
                "SPSOutputTraffic",
                "SPSOutputPressure",
            ],
        };
    },
    props: ["stationName"],
    mounted() {
        this.sendParam();
        this.receive();
    },
    methods: {
        addSixHPhoto: function () {
            this.sixHShow = !this.sixHShow;
        },
        addSixHCar: function () {
            this.sixCarShow = !this.sixCarShow;
        },
        sendParam() {
            var that = this;
            that.ws.onopen = function () {
                var parameter = {
                    type: data_station_type.station,
                    station: getUrlKey("id"),
                    paramName: that.paramList,
                };
                that.ws.send(JSON.stringify(parameter));
            };
        },
        receive() {
            var that = this;
            that.ws.onmessage = function (data) {
                let value = jsonFormat(data);
                that.paramValue = value.data.content;
            };
        },
    },
    destroyed() {
        this.ws.close();
    },
};
</script>

<style scoped>
.transmission-up {
    width: 50px;
    height: 2px;
    background: aqua;
    position: absolute;
    top: 42%;
    left: 35%;
    animation: up infinite 0.5s alternate;
}
.transmission-down {
    width: 50px;
    height: 2px;
    background: aqua;
    position: absolute;
    top: 45%;
    left: 55%;
    animation: down infinite 0.5s alternate;
}
@keyframes up {
    to {
        left: 35%;
        width: 5px;
        background: white;
    }
    from {
        left: 55%;
        width: 50px;
        background: aqua;
    }
}
@keyframes down {
    to {
        left: 55%;
        width: 50px;
        background: aqua;
    }
    from {
        left: 35%;
        width: 5px;
        background: white;
    }
}
</style>
