<template>
    <scales>
        <top-nav />
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <v-s-title :VSTitle="vin" />
        </div>
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <v-s-data :VSData="dataTop" />
        </div>
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <div class="col-3">
                <div class="row margin-top-10">
                    <div class="col-12">
                        <p class="top-line-height">行驶车速(半小时内)</p>
                    </div>
                    <v-s-one-table class="border-aqua" />
                </div>
                <div class="row margin-top-10">
                    <div class="col-12">
                        <p class="top-line-height">氢气消耗(半小时内)</p>
                    </div>
                    <v-s-two-table class="border-aqua" />
                </div>
                <div class="row margin-top-10">
                    <div class="col-12">
                        <p class="top-line-height">FC电压-电流(半小时内)</p>
                    </div>
                    <v-s-three-table class="border-aqua" />
                </div>
            </div>
            <div class="col-7 margin-top-10">
                <div class="row col-12 clear-margin-padding car-box">
                    <div class="col-2">
                        <div class="col-12 border-aqua box-radius">
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    空气消耗
                                </p>
                            </div>
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    <span class="font-number" v-text="dataMid.fcuCathFlow">00</span>Kg
                                </p>
                            </div>
                        </div>
                        <div
                            class="col-12 border-aqua margin-top-30 box-radius"
                        >
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    H2消耗
                                </p>
                            </div>
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    <span class="font-number" v-text="dataTop.fcFuelConsRate">00</span>Kg
                                </p>
                            </div>
                        </div>
                        <div
                            class="col-12 border-aqua margin-top-30 box-radius"
                        >
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    H2浓度
                                </p>
                            </div>
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    <span class="font-number" v-text="dataMid.fcH2ConcMax">00</span>%
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-8">
                        <img
                            @click="toFCInfo(carId)"
                            src="../assets/img/car.png"
                            class="img-responsive col-12"
                            alt=""
                        />
                    </div>
                    <div class="col-2">
                        <div class="col-12 border-aqua box-radius">
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    电机电流
                                </p>
                            </div>
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    <span class="font-number" v-text="dataTop.fcCurrent">00</span>A
                                </p>
                            </div>
                        </div>
                        <div
                            class="col-12 border-aqua margin-top-30 box-radius"
                        >
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    电机电压
                                </p>
                            </div>
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    <span class="font-number" v-text="dataTop.fcVoltage">00</span>V
                                </p>
                            </div>
                        </div>
                        <div
                            class="col-12 border-aqua margin-top-30 box-radius"
                        >
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    电机温度
                                </p>
                            </div>
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    <span class="font-number" v-text="dataMid.motTemp">00</span>℃
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
                        class="col-2 offset-1 border-aqua car-box-bottom-height"
                    >
                        <div class="row">
                            <p class="col-12 text-center top-line-height">
                                FCE电流
                            </p>
                        </div>
                        <div class="row">
                            <p class="col-12 text-center top-line-height">
                                <span class="font-number" v-text="dataTop.fcCurrent">00</span>A
                            </p>
                        </div>
                    </div>
                    <div class="col-2 border-aqua car-box-bottom-height">
                        <div class="row">
                            <p class="col-12 text-center top-line-height">
                                FCE电压
                            </p>
                        </div>
                        <div class="row">
                            <p class="col-12 text-center top-line-height">
                                <span class="font-number" v-text="dataTop.fcVoltage">00</span>V
                            </p>
                        </div>
                    </div>
                    <div class="col-2 border-aqua car-box-bottom-height">
                        <div class="row">
                            <p class="col-12 text-center top-line-height">
                                DCDC状态
                            </p>
                        </div>
                        <div class="row">
                            <p class="col-12 text-center top-line-height">
                                <span class="text-green" v-text="dataMid.vehDCDCStatus">正常</span>
                            </p>
                        </div>
                    </div>
                    <div class="col-2 border-aqua car-box-bottom-height">
                        <div class="row">
                            <p class="col-12 text-center top-line-height">
                                电池状态
                            </p>
                        </div>
                        <div class="row">
                            <p class="col-12 text-center top-line-height">
                                <span class="text-green" v-text="dataMid.fcuRunStatus">正常</span>
                            </p>
                        </div>
                    </div>
                    <div class="col-2 border-aqua car-box-bottom-height">
                        <div class="row">
                            <p class="col-12 text-center top-line-height">
                                控制器温度
                            </p>
                        </div>
                        <div class="row">
                            <p class="col-12 text-center top-line-height">
                                <span class="font-number" v-text="dataMid.motCtrlTemp">00</span>℃
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row margin-top-10">
                    <div class="col-6">
                        <div class="col-12">
                            <p class="top-line-height">
                                电机电压-电流(半小时内)
                            </p>
                        </div>
                        <v-s-m-one-table class="border-aqua" />
                    </div>
                    <div class="col-6">
                        <div class="col-12">
                            <p class="top-line-height">SOC(半小时内)</p>
                        </div>
                        <v-s-m-two-table class="border-aqua" />
                    </div>
                </div>
            </div>
            <div class="col-2" style="margin-top: 46px">
                <div class="row border-aqua">
                    <p class="col-6 top-line-height">故障信息:</p>
                    <p class="col-6 top-line-height text-green">无</p>
                </div>
                <div class="row border-aqua margin-top-10">
                    <p class="col-6 top-line-height">氢气泄漏:</p>
                    <p class="col-6 top-line-height text-green">无</p>
                </div>
                <div
                    class="row border-aqua margin-top-10"
                    style="height: 300px"
                >
                    <p class="text-center col-12">燃料电池注册信息</p>
                    <div class="row col-12">
                        <p class="col-6">类型:</p>
                        <p class="col-6 text-green">暂无</p>
                    </div>
                    <div class="row col-12">
                        <p class="col-6">VIN:</p>
                        <p class="col-6 text-green" v-text="vin">暂无</p>
                    </div>
                    <div class="row col-12">
                        <p class="col-6">车牌:</p>
                        <p class="col-6 text-green">暂无</p>
                    </div>
                    <div class="row col-12">
                        <p class="col-6">生产商:</p>
                        <p class="col-6 text-green">暂无</p>
                    </div>
                    <div class="row col-12">
                        <p class="col-6">注册时间:</p>
                        <p class="col-6 text-green">暂无</p>
                    </div>
                </div>
                <div
                    class="row border-aqua margin-top-10"
                    style="height: 290px"
                >
                    <p class="col-12 text-center text-green top-line-height">
                        驾驶员信息
                    </p>
                    <div class="header-box"></div>
                    <div class="row col-12 text-center">
                        <p class="col-6 text-glod top-line-height">紧急联系:</p>
                        <p class="col-6 top-line-height text-green">
                            12345678910
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </scales>
</template>

<script>
import VSOneTable from "../components/fuel-cell-vehicle-simple/left/VSOneTable.vue";
import VSTwoTable from "../components/fuel-cell-vehicle-simple/left/VSTwoTable.vue";
import VSThreeTable from "../components/fuel-cell-vehicle-simple/left/VSThreeTable.vue";
import VSMOneTable from "../components/fuel-cell-vehicle-simple/mid/VSMOneTable.vue";
import VSMTwoTable from "../components/fuel-cell-vehicle-simple/mid/VSMTwoTable.vue";
import VSData from "../components/fuel-cell-vehicle-simple/top/VSData.vue";
import VSTitle from "../components/fuel-cell-vehicle-simple/top/VSTitle.vue";
import Scales from "../components/public/Scales.vue";
import TopNav from "../components/public/TopNav.vue";
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
            dataTop: null,
            dataMid: null,
        };
    },
    components: {
        TopNav,
        Scales,
        VSTitle,
        VSData,
        VSOneTable,
        VSTwoTable,
        VSThreeTable,
        VSMOneTable,
        VSMTwoTable,
    },
    async mounted() {
        this.receive();
        this.carId = getUrlKey("carId");
        const data = {
            dataStationId: this.carId,
        };
        this.vin = await vinByDataStationId(data);
    },
    methods: {
        toFCInfo(param) {
            this.$router.push({
                path: "/fuel-cell-vehicle/fuel-cell-vehicle-simple/fc-info",
                query: { carId: param },
            });
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
                console.log(value);
                that.dataTop = value.data.content;
                that.dataMid = value.data.content;
            };
        },
    },
    beforeDestroy() {
        clearInterval(this.itervalId);
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
.icon-car {
    position: relative;
    width: 600px;
    left: 50%;
    margin-left: -300px;
    top: -90px;
}
.img-light {
    position: relative;
    top: -410px;
    z-index: -1000;
    transform: rotateZ(-2deg);
    right: 100px;
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
