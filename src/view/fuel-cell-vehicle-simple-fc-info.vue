<template>
    <scales>
        <top-nav />
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <info-title :FCTitle="plate" />
        </div>
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <info-data />
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
                                    <span class="font-number">00</span>g/s
                                </p>
                            </div>
                        </div>
                        <div class="col-12 border-aqua margin-top-10 box-radius">
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    H2温度
                                </p>
                            </div>
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    <span class="font-number">00</span>℃
                                </p>
                            </div>
                        </div>
                        <div class="col-12 border-aqua margin-top-10 box-radius">
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    H2入口压力
                                </p>
                            </div>
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    <span class="font-number">00</span>MPa
                                </p>
                            </div>
                        </div>
                        <div class="col-12 border-aqua margin-top-10 box-radius">
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    H2出口压力
                                </p>
                            </div>
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    <span class="font-number">00</span>MPa
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
                                    <span class="font-number">00</span>g/s
                                </p>
                            </div>
                        </div>
                        <div class="col-12 border-aqua margin-top-10 box-radius">
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
                        <div class="col-12 border-aqua margin-top-10 box-radius">
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    Air入口压力
                                </p>
                            </div>
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    <span class="font-number">00</span>MPa
                                </p>
                            </div>
                        </div>
                        <div class="col-12 border-aqua margin-top-10 box-radius">
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    Air出口压力
                                </p>
                            </div>
                            <div class="row">
                                <p class="col-12 text-center top-line-height">
                                    <span class="font-number">00</span>MPa
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="row col-12 clear-margin-padding"
                    style="height: 146px"
                >
                    <div class="col-2 offset-2 border-aqua car-box-bottom-height">
                        <div class="row">
                            <p class="col-12 text-center top-line-height">
                                散热风扇状态
                            </p>
                        </div>
                        <div class="row">
                            <p class="col-12 text-center top-line-height">
                                <span class="text-green">正常</span>
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
                                <span class="font-number">00</span>g/s
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
                                <span class="font-number">00</span>%
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
                                <span class="font-number">00</span>℃
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
                            <p class="top-line-height">
                                电推温度(30秒内)
                            </p>
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
                    <p class="col-6 top-line-height text-green">良好</p>
                </div>
                <p class="text-center col-12">FC实时数据</p>
                <div
                    class="row border-aqua margin-top-10 custom-scrollable-fc-info-list"
                    style="height: 636px"
                >
                    <div v-for="item in fcInfo" :key="item.id" class="row col-12 clear-margin-padding">
                        <p v-text="item.name" class="col-8 unline"></p>
                        <p class="col-4 unline"><span class="font-number" v-text="item.value"></span><span v-text="item.unit"></span></p>
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
import fcInfoJson from "../assets/json/vehicle-info-list.json";
export default {
    data() {
        return {
            plate: null,
            fcInfo: null
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
    mounted() {
        this.plate = this.getUrlKey("plate");
    },
    methods: {
        getUrlKey(plate) {
            var result =
                decodeURIComponent(
                    (new RegExp(
                        "[?|&]" + plate + "=" + "([^&;]+?)(&|#|;|$)"
                    ).exec(location.href) || [, ""])[1].replace(/\+/g, "%20")
                ) || null;
            if (result == null) {
                return "获取失败";
            }
            return result;
        },
        toCarInfo(param) {
            this.$router.push({
                path: "/fuel-cell-vehicle/fuel-cell-vehicle-simple",
                query: { plate: param },
            });
        },
    },
    created() {
        this.fcInfo = fcInfoJson["data"]
    }
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
    height: 70px;;
    margin-right: 10px;
    margin-top: 50px;
    border-radius: 10px;
}
.box-radius {
    border-radius: 10px;
}
</style>