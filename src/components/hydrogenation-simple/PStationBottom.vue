<template>
    <div class="col-12 margin-top-30">
        <div class="row">
            <div class="col-6 height">
                <div class="row">
                    <div class="col-6 border-aqua height">
                        <p class="h5 text-center margin-top-30">加氢机</p>
                        <div class="row col-12 margin-top-10">
                            <span class="col-9">当前状态:</span>
                            <span class="col-3 font-number-min text-green"
                            v-text="BottomData.SMAStatus"
                                >暂无</span
                            >
                        </div>
                        <div class="row col-12">
                            <span class="col-9">当前压力:</span>
                            <span class="col-3 font-number-min text-green"
                            v-text="BottomData.SMAPressure"
                                >暂无 <span>Mpa</span></span
                            >
                        </div>
                        <div class="row col-12">
                            <span class="col-9">当前温度:</span>
                            <span class="col-3 font-number-min text-green"
                            v-text="BottomData.SMATemp"
                                >暂无 <span>℃</span></span
                            >
                        </div>
                        <div class="row col-12">
                            <span class="col-9">累计加氢次数:</span>
                            <span class="text-green font-number-min col-3"
                                >暂无
                            </span>
                        </div>
                        <div class="row col-12">
                            <span class="col-9">累计加氢量:</span>
                            <span class="col-3 font-number-min text-green"
                                >暂无 <span>Kg</span></span
                            >
                        </div>
                        <div class="row col-12">
                            <span class="col-9">加氢机型号:</span>
                            <span class="col-3 font-number-min text-green"
                                >暂无</span
                            >
                        </div>
                        <div class="row col-12">
                            <span class="col-9">加氢机编码:</span>
                            <span class="col-3 font-number-min text-green"
                                >暂无
                            </span>
                        </div>
                        <div class="row col-12">
                            <span class="col-9">加氢机生产商:</span>
                            <span class="col-3 font-number-min text-green"
                                >暂无</span
                            >
                        </div>
                        <div class="row col-12">
                            <router-link
                                :to="{
                                    path: pathMachine,
                                    query: { name: stationName ,id: stationId},
                                }"
                            >
                                <p class="text-g col-12">更多加氢机信息</p>
                            </router-link>
                        </div>
                    </div>
                    <div class="col-6 border-aqua">
                        <p class="h5 text-center margin-top-30">储氢罐</p>
                        <div class="row col-12 margin-top-10">
                            <span class="col-9">当前状态:</span>
                            <span class="col-3 font-number-min text-green"
                            v-text="BottomData.SHCStatus"
                                >暂无</span
                            >
                        </div>
                        <div class="row col-12">
                            <span class="col-9">当前压力:</span>
                            <span class="col-3 font-number-min text-green"
                            v-text="BottomData.SHCPres"
                                >暂无 <span>Mpa</span></span
                            >
                        </div>
                        <div class="row col-12">
                            <span class="col-9">当前温度:</span>
                            <span class="col-3 font-number-min text-green"
                            v-text="BottomData.SHCTemp"
                                >暂无 <span>℃</span></span
                            >
                        </div>
                        <div class="row col-12">
                            <span class="col-9">储氢量:</span>
                            <span class="text-green font-number-min col-3"
                            v-text="BottomData.SHCMass"
                                >暂无 <span>Kg</span>
                            </span>
                        </div>
                        <div class="row col-12">
                            <span class="col-9">储氢罐编码:</span>
                            <span class="col-3 font-number-min text-green"
                                >暂无
                            </span>
                        </div>
                        <div class="row col-12">
                            <span class="col-9">储氢罐生产商:</span>
                            <span class="col-3 font-number-min text-green"
                                >暂无</span
                            >
                        </div>
                        <div class="row col-12">
                            <span class="col-9">储氢罐下次检验时间:</span>
                            <span class="col-3 font-number-min text-green"
                                >暂无</span
                            >
                        </div>
                        <div class="row col-12">
                            <span class="col-9">储氢罐安全阀下次检验时间:</span>
                            <span class="col-3 font-number-min text-green"
                                >暂无</span
                            >
                        </div>
                        <div class="row col-12">
                            <router-link
                                :to="{
                                    path: pathCompressor,
                                    query: { name: stationName,id: stationId },
                                }"
                            >
                                <p class="text-g col-12">更多储氢罐和压缩机信息</p>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4 border-aqua height">
                <station-top />
                <station-bottom />
            </div>
            <div class="col-2 border-warn height">
                <p class="text-center text-green margin-top-30">安全责任人一</p>
                <div class="row text-center">
                    <p class="col-6">姓名:</p>
                    <p class="col-6">xxx</p>
                </div>
                <div class="row text-center">
                    <p class="col-6">联系方式:</p>
                    <p class="col-6 font-number-min">12345678910</p>
                </div>
                <p class="text-center text-green">安全责任人二</p>
                <div class="row text-center">
                    <p class="col-6">姓名:</p>
                    <p class="col-6">xxx</p>
                </div>
                <div class="row text-center">
                    <p class="col-6">联系方式:</p>
                    <p class="col-6 font-number-min">12345678910</p>
                </div>
                <p class="text-center text-green">安全责任人三</p>
                <div class="row text-center">
                    <p class="col-6">姓名:</p>
                    <p class="col-6">xxx</p>
                </div>
                <div class="row text-center">
                    <p class="col-6">联系方式:</p>
                    <p class="col-6 font-number-min">12345678910</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import StationTop from "./table/StationTop";
import StationBottom from "./table/StationBottom";
import {
    getUrlKey,
} from "../../api/util"
export default {
    props: ["BottomData"],
    components: { StationTop, StationBottom },
    data() {
        return {
            pathMachine: "/hydrogenation/station-simple/h-machine",
            pathCompressor: "/hydrogenation/station-simple/h-can-compressor",
            stationName: getUrlKey("name"),
            stationId: getUrlKey("id"),
        };
    },
};
</script>

<style scoped>
.height {
    height: 400px;
}
span {
    display: inline-block;
    line-height: 35px;
}
.water-center {
    position: relative;
    width: 60px;
    left: 50%;
    margin-left: -30px;
}
.djc-center {
    position: relative;
    width: 300px;
    left: 50%;
    margin-left: -150px;
}
</style>