<template>
    <scales>
        <top-nav />
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <info-title :FCTitle="vin" />
        </div>
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <info-data :InfoData="dataTop" />
        </div>
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <div class="col-3">
                <div class="row margin-top-10">
                    <div class="col-12">
                        <p class="top-line-height">氢气流量(30秒内)</p>
                    </div>
                    <info-one-table class="border-aqua" />
                </div>
                <div class="row margin-top-10">
                    <div class="col-12">
                        <p class="top-line-height">空气流量(30秒内)</p>
                    </div>
                    <info-two-table class="border-aqua" />
                </div>
                <div class="row margin-top-10">
                    <div class="col-12">
                        <p class="top-line-height">输出功率(30秒内)</p>
                    </div>
                    <info-three-table class="border-aqua" />
                </div>
            </div>
            <div class="col-7 margin-top-10">
                <div class="row col-12 clear-margin-padding car-box">
                    <div class="col-2">
                        <div class="col-12 border-aqua box-radius">
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    H2流量
                                </p>
                            </div>
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    <span
                                        class="font-number"
                                        v-text="dataTop.fcuAnodFlow"
                                        >00</span
                                    >g/s
                                </p>
                            </div>
                        </div>
                        <div
                            class="col-12 border-aqua margin-top-10 box-radius"
                        >
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    H2温度
                                </p>
                            </div>
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    <span
                                        class="font-number"
                                        v-text="dataMid.h2sysTemp"
                                        >00</span
                                    >℃
                                </p>
                            </div>
                        </div>
                        <div
                            class="col-12 border-aqua margin-top-10 box-radius"
                        >
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    H2入口压力
                                </p>
                            </div>
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    <span
                                        class="font-number"
                                        v-text="dataMid.bopH2InjctPresIn"
                                        >00</span
                                    >MPa
                                </p>
                            </div>
                        </div>
                        <div
                            class="col-12 border-aqua margin-top-10 box-radius"
                        >
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    H2出口压力
                                </p>
                            </div>
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    <span
                                        class="font-number"
                                        v-text="dataMid.bopH2InjctPresOut"
                                        >00</span
                                    >MPa
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-8">
                        <img
                            @click="toCarInfo(plate)"
                            src="../assets/img/fc.png"
                            class="img-responsive col-10 offset-1"
                            alt=""
                        />
                    </div>
                    <div class="col-2">
                        <div class="col-12 border-aqua box-radius">
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    Air流量
                                </p>
                            </div>
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    <span
                                        class="font-number"
                                        v-text="dataMid.bopAirComprFlow"
                                        >00</span
                                    >g/s
                                </p>
                            </div>
                        </div>
                        <div
                            class="col-12 border-aqua margin-top-10 box-radius"
                        >
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    Air温度
                                </p>
                            </div>
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    <span class="font-number">00</span>℃
                                </p>
                            </div>
                        </div>
                        <div
                            class="col-12 border-aqua margin-top-10 box-radius"
                        >
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    Air入口压力
                                </p>
                            </div>
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    <span
                                        class="font-number"
                                        v-text="dataMid.bopAirComprPres"
                                        >00</span
                                    >MPa
                                </p>
                            </div>
                        </div>
                        <div
                            class="col-12 border-aqua margin-top-10 box-radius"
                        >
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    Air出口压力
                                </p>
                            </div>
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    <span
                                        class="font-number"
                                        v-text="dataMid.bopAirComprPres"
                                        >00</span
                                    >MPa
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="row col-12 clear-margin-padding"
                    style="height: 146px"
                >
                    <div
                        class="col-2 offset-2 border-aqua car-box-bottom-height"
                    >
                        <div class="row">
                            <p class="col-12 text-center top-line-height">
                                散热风扇状态
                            </p>
                        </div>
                        <div class="row">
                            <p class="col-12 text-center top-line-height">
                                <span
                                    class="text-green"
                                    v-text="dataMid.bopFanStartCmd"
                                    >正常</span
                                >
                            </p>
                        </div>
                    </div>
                    <div class="col-2 border-aqua car-box-bottom-height">
                        <div class="row">
                            <p class="col-12 text-center top-line-height">
                                水泵流量
                            </p>
                        </div>
                        <div class="row">
                            <p class="col-12 text-center top-line-height">
                                <span
                                    class="font-number"
                                    v-text="dataMid.bopWaterPumpFlow"
                                    >00</span
                                >g/s
                            </p>
                        </div>
                    </div>
                    <div class="col-2 border-aqua car-box-bottom-height">
                        <div class="row">
                            <p class="col-12 text-center top-line-height">
                                增湿器湿度
                            </p>
                        </div>
                        <div class="row">
                            <p class="col-12 text-center top-line-height">
                                <span
                                    class="font-number"
                                    v-text="dataMid.bopMembHumiHumi"
                                    >00</span
                                >%
                            </p>
                        </div>
                    </div>
                    <div class="col-2 border-aqua car-box-bottom-height">
                        <div class="row">
                            <p class="col-12 text-center top-line-height">
                                增湿器温度
                            </p>
                        </div>
                        <div class="row">
                            <p class="col-12 text-center top-line-height">
                                <span
                                    class="font-number"
                                    v-text="dataMid.bopMembHumiHeatTemp"
                                    >00</span
                                >℃
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row margin-top-10">
                    <div class="col-6">
                        <div class="col-12">
                            <p class="top-line-height">增湿器湿度(30秒内)</p>
                        </div>
                        <info-m-two-table class="border-aqua" />
                    </div>
                    <div class="col-6">
                        <div class="col-12">
                            <p class="top-line-height">电推温度(30秒内)</p>
                        </div>
                        <info-m-one-table class="border-aqua" />
                    </div>
                </div>
            </div>
            <div class="col-2 margin-top-10">
                <div class="row border-aqua">
                    <p class="col-6 top-line-height">故障信息:</p>
                    <p class="col-6 top-line-height text-green">无</p>
                </div>
                <div class="row border-aqua margin-top-10">
                    <p class="col-6 top-line-height">FC状态:</p>
                    <p class="col-6 top-line-height text-green" v-text="dataRight.fcuRunStatus">良好</p>
                </div>
                <p class="text-center col-12">FC实时数据</p>
                <div
                    class="row border-aqua margin-top-10 custom-scrollable-fc-info-list"
                    style="height: 636px"
                >
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">进水口冷却水温</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-text="dataRight.fcuInCoolTemp">0</span><span>℃</span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">出水口冷却水温</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-text="dataRight.fcuOutCoolTemp">0</span><span>℃</span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">阴极(空气)温度(进出口)</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-text="dataRight.fcuRunStatus">0</span><span>℃</span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">阳极(氢气)温度(进出口)</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-text="dataRight.fcuAnodTempIn">0</span><span>℃</span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">阴极(空气)流量</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-text="dataRight.fcuCathFlow">0</span><span>g/s</span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">阴极(空气)压力(进出口)</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-text="dataRight.fcuCathPresIn">0</span><span>MPa</span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">阴极(空气)湿度</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-text="dataRight.fcuCathHumi">0</span><span>%</span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">阳极(空气)流量</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-text="dataRight.fcuAnodFlow">0</span><span>g/s</span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">阳极(空气)压力(进出口)</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-text="dataRight.fcuAndPresIn">0</span><span>Mpa</span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">阳极(空气)湿度</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-text="dataRight.fcuAndHumi">0</span><span>%</span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">故障总数N5</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-text="dataRight.fcuFaultTotal">0</span><span>个</span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">故障代码</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-for="item in dataRight.fcuFaultList" :key="item.index" v-text="item + ','"></span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">运行状态</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-text="dataRight.fcuRunStatus">0</span><span></span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">单体电压M</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-for="item in dataRight.fcuCellVolt" :key="item.index" v-text="item + 'V,'"></span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">空压机转速</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-text="dataRight.bopAirComprSpd">0</span><span>r/min</span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">空压机空气流量</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-text="dataRight.bopAirComprFlow">0</span><span>g/s</span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">空压机压力</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-text="dataRight.bopAirComprPres">0</span><span>MPa</span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">膜增湿器加热温度</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-text="dataRight.bopMembHumiHeatTemp">0</span><span>℃</span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">膜增湿器湿度</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-text="dataRight.bopMembHumiHumi">0</span><span>%</span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">空气背压阀开度</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-text="dataRight.bopBackValvDegree">0</span><span>%</span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">空气循环泵转速</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-text="dataRight.bopAirPumpSpeed">0</span><span>r/min</span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">空气循环泵流量</p>
                        <p class="col-4 unline">
                            <span class="font-number">0</span><span>g/s</span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">空气循环泵压力</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-text="dataRight.bopAirPumpPres">0</span><span>MPa</span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">氢气循环泵转速</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-text="dataRight.bopH2PumpFlow">0</span><span>r/min</span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">氢气循环泵流量</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-text="dataRight.fcuRunStatus">0</span><span>g/s</span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">氢气循环泵压力</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-text="dataRight.bopH2PumpPres">0</span><span>MPa</span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">氢气喷射器开启状态</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-text="dataRight.fcuRunStatus">0</span><span></span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">氢气喷射器出口流量</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-text="dataRight.bopH2InjctOutFlow">0</span><span>g/s</span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">氢气尾排阀开启状态</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-text="dataRight.bopH2InjctStatus">0</span><span></span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">氢气尾排阀入口流量</p>
                        <p class="col-4 unline">
                            <span class="font-number">0</span><span>g/s</span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">氢气尾排阀压力</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-text="dataRight.bopTailValvPres">0</span><span>MPa</span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">循环水泵转速</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-text="dataRight.bopWaterPumpSpd">0</span><span>r/min</span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">循环水泵流量</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-text="dataRight.bopWaterPumpFlow">0</span><span>g/s</span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">循环水泵压力</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-text="dataRight.bopWaterPumpPres">0</span><span>MPa</span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">散热风扇开启命令</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-text="dataRight.bopFanStartCmd">0</span><span></span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">BOP故障总数N6</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-text="dataRight.bopFaultTotal">0</span><span></span>
                        </p>
                    </div>
                    <div class="row col-12 clear-margin-padding">
                        <p class="col-8 unline">BOP故障代码</p>
                        <p class="col-4 unline">
                            <span class="font-number" v-for="item in dataRight.bopFaultList" :key="item.index" v-text="item + ','"></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </scales>
</template>

<script>
import InfoOneTable from "../components/fuel-cell-vehicle-simple-fc-info/left/InfoOneTable.vue";
import InfoTwoTable from "../components/fuel-cell-vehicle-simple-fc-info/left/InfoTwoTable.vue";
import InfoThreeTable from "../components/fuel-cell-vehicle-simple-fc-info/left/InfoThreeTable.vue";
import InfoMOneTable from "../components/fuel-cell-vehicle-simple-fc-info/mid/InfoMOneTable.vue";
import InfoMTwoTable from "../components/fuel-cell-vehicle-simple-fc-info/mid/InfoMTwoTable.vue";
import InfoData from "../components/fuel-cell-vehicle-simple-fc-info/top/InfoData.vue";
import InfoTitle from "../components/fuel-cell-vehicle-simple-fc-info/top/InfoTitle.vue";
import Scales from "../components/public/Scales.vue";
import TopNav from "../components/public/TopNav.vue";
// import fcInfoJson from "../assets/json/vehicle-info-list.json";
import { vinByDataStationId } from "../api/tisinghua-static";
import {
    allValues,
    data_station_type,
    jsonFormat,
    getUrlKey,
} from "../api/util";
export default {
    created() {
        this.initWs();
        // this.fcInfo = fcInfoJson["data"];
    },
    destroyed() {
        this.ws.close();
    },
    data() {
        return {
            carId: null,
            itervalId: null,
            vin: null,
            ws: null,
            fcInfo: null,
            dataTop: null,
            dataMid: null,
            dataRight: null,
        };
    },
    components: {
        TopNav,
        Scales,
        InfoOneTable,
        InfoTwoTable,
        InfoThreeTable,
        InfoMOneTable,
        InfoMTwoTable,
        InfoData,
        InfoTitle,
    },
    async mounted() {
        this.receive();
        this.carId = this.getUrlKey("carId");
        const data = {
            dataStationId: this.carId,
        };
        this.vin = await vinByDataStationId(data);
    },
    methods: {
        getUrlKey(carId) {
            var result =
                decodeURIComponent(
                    (new RegExp(
                        "[?|&]" + carId + "=" + "([^&;]+?)(&|#|;|$)"
                    ).exec(location.href) || [, ""])[1].replace(/\+/g, "%20")
                ) || null;
            if (result == null) {
                return 404;
            }
            return result;
        },
        initWs() {
            var result = allValues(
                data_station_type.vehicle,
                getUrlKey("carId")
            );
            this.ws = this.websocket.ws(result);
        },
        receive() {
            var that = this;
            that.ws.onmessage = function (data) {
                let value = jsonFormat(data);
                that.dataTop = value.data.content;
                that.dataMid = value.data.content;
                that.dataRight = value.data.content;
            };
        },
    },
};
</script>

<style scoped>
.top-line-height {
    height: 20px;
    line-height: 30px;
}
.header-box {
    top: -20px;
    width: 100px;
    height: 100px;
    position: relative;
    left: 50%;
    margin-left: -50px;
    border-radius: 50%;
    background-color: rgb(175, 151, 151);
}
.icon-fc {
    position: relative;
    width: 400px;
    left: 50%;
    margin-left: -200px;
}
.car-box {
    height: 300px;
    margin-top: 36px;
}
.car-box-bottom-height {
    height: 70px;
    margin-right: 10px;
    margin-top: 50px;
    border-radius: 10px;
}
.box-radius {
    border-radius: 10px;
}
</style>