<template>
    <scales>
        <top-nav />
        <div class="row height" style="max-width: 99%; margin: 0 auto">
            <div class="row border-aqua col-12 clear-margin-padding" style="height: 60px;margin-top:20px;">
                <p class="col-12 text-center h5" style="line-height:60px;">运氢车&nbsp;&nbsp;<span class="h5 text-green" v-text="carrierId"></span>&nbsp;&nbsp;详细信息</p>
            </div>
            <div class="row col-12 clear-margin-padding">
                <div class="col-6 margin-top-10">
                    <div class="row">
                        <div class="col-6 border-aqua">
                            <div class="row col-12 margin-top-10">
                                <p class="col-4">车牌号:</p>
                                <p class="col-8 font-number text-right">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-4">车架号:</p>
                                <p class="col-8 font-number text-right">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-4">车型:</p>
                                <p class="col-8 font-number text-right">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-4">最大载氢量:</p>
                                <p class="col-8 font-number text-right">0000</p>
                            </div>
                        </div>
                        <div class="col-6 border-aqua">
                            <div class="row col-12 margin-top-10">
                                <p class="col-8">实时储氢罐温度:</p>
                                <p class="col-4 font-number text-right" v-text="carrierData.CCTHyTemp">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-8">实时储氢罐压力:</p>
                                <p class="col-4 font-number text-right" v-text="carrierData.CCTHyPres">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-4">储氢容量:</p>
                                <p class="col-8 font-number text-right" v-text="carrierData.CCTHyMass">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-4">氢气泄漏:</p>
                                <p class="col-8 font-number text-right" v-text="carrierData.CCTLeak">0000</p>
                            </div>
                        </div>
                    </div>
                    <div class="row border-aqua margin-top-10" style="height: 280px">
                        <img src="../assets/img/carrier.png" class="icon car-center margin-top-30" alt="" width="760" height="212">
                    </div>
                    <div class="row margin-top-10">
                        <div class="col-6 border-aqua">
                            <div class="row col-12 margin-top-10">
                                <p class="col-4">实时车速:</p>
                                <p class="col-8 font-number text-right">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-4">实时经纬度:</p>
                                <p class="col-8 font-number text-right">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-4">制动器:</p>
                                <p class="col-8 font-number text-right">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-4">预定路线:</p>
                                <p class="col-8 font-number text-right">0000</p>
                            </div>
                        </div>
                        <div class="col-6 border-aqua">
                            <div class="row col-12 margin-top-10">
                                <p class="col-4">氢气来源:</p>
                                <p class="col-8 font-number text-right" v-text="carrierData.CCTSource">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-4">氢气去向:</p>
                                <p class="col-8 font-number text-right">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-4">运氢量:</p>
                                <p class="col-8 font-number text-right">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-4">预计时长:</p>
                                <p class="col-8 font-number text-right">0000</p>
                            </div>
                        </div>
                    </div>
                    <div class="row margin-top-10">
                        <div class="col-6 border-aqua">
                            <div class="row col-12 margin-top-10">
                                <p class="col-8">温度传感器检验时间:</p>
                                <p class="col-4 font-number text-right">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-8">温度传感器有效时间:</p>
                                <p class="col-4 font-number text-right">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-8">压力传感器检验时间:</p>
                                <p class="col-4 font-number text-right">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-8">压力传感器有效时间:</p>
                                <p class="col-4 font-number text-right">0000</p>
                            </div>
                        </div>
                        <div class="col-6 border-aqua">
                            <div class="row col-12 margin-top-10">
                                <p class="col-4">司机姓名:</p>
                                <p class="col-8 font-number text-right">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-4">性别:</p>
                                <p class="col-8 font-number text-right">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-4">联系方式:</p>
                                <p class="col-8 font-number text-right">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-4">工作时长:</p>
                                <p class="col-8 font-number text-right">0000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="clear-margin-padding">
                    <baidu-map
                        class="margin-top-10"
                        mapHeight="height: 900px;width: 930px;margin-left:20px;"
                        dShow=true
                        :carrierShow="true"
                    />
                </div>
            </div>
        </div>
    </scales>
</template>

<script>
import BaiduMap from "../components/public/BaiduMap.vue";
import Scales from "../components/public/Scales.vue";
import TopNav from "../components/public/TopNav.vue";
import {
    allValues,
    data_station_type,
    jsonFormat,
    getUrlKey,
} from "../api/util"
export default {
    created() {
        this.initWs();
    },
    destroyed() {
        this.ws.close();
    },
    data() {
        return {
            carrierId: null,
            carrierData: {
                CCTHyPres: 0,
                CCTHyMass: 0,
                CCTLeak: 0,
                CCTHyTemp: 0
            }
        }
    },
    components: {
        Scales,
        TopNav,
        BaiduMap,
    },
    async mounted() {
        this.carrierId = getUrlKey("carrierId");
        this.receive();
    },
    methods: {
        initWs() {
            const result = allValues(
                data_station_type.carrier,
                getUrlKey("carrierId")
            );
            this.ws = this.websocket.ws(result);
        },
        receive() {
            const that = this;
            that.ws.onmessage = function (data) {
                let value = jsonFormat(data);
                that.carrierData = value.data.content;
            };
        },
    },
};
</script>

<style scoped>
.height {
    height: 990px;
}
.car-center {
    position: relative;
    width: 600px;
    left: 50%;
    margin-left: -300px;
}
p {
    line-height: 30px;
}
</style>
