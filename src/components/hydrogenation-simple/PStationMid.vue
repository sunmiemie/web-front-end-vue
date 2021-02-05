<template>
    <div class="col-12 margin-top-30">
        <div class="row">
            <div class="col-3 border-aqua">
                <p class="h5 text-center margin-top-10">加氢站注册信息</p>
                <div class="row col-12 unline margin-top-30">
                    <span class="col-4">加氢站类型:</span>
                    <span class="col-8 text-green text-right">xxx</span>
                </div>
                <div class="row col-12 unline">
                    <span class="col-4">加氢站编号:</span>
                    <span class="col-8 text-green text-right">xxx</span>
                </div>
                <div class="row col-12 unline">
                    <span class="col-4">加氢站名称:</span>
                    <span class="col-8 text-green text-right">xxx</span>
                </div>
                <div class="row col-12 unline">
                    <span class="col-4">加氢站地址:</span>
                    <span class="text-green col-8 text-right">xxx</span>
                </div>
                <div class="row col-12 unline">
                    <span class="col-4">加氢设备名称:</span>
                    <span class="col-8 text-green text-right">xxx</span>
                </div>
                <div class="row col-12 unline">
                    <span class="col-6">加氢机设备数:</span>
                    <span class="col-6 text-green text-right">4</span>
                </div>
                <div class="row col-12">
                    <span class="col-6">储氢罐设备数:</span>
                    <span class="col-6 text-green text-right">20</span>
                </div>
            </div>
            <div class="col-4">
                <month-station />
            </div>
            <div class="col-3 border-aqua">
                <p class="h5 text-center margin-top-10">当日加氢车</p>
                <div class="row text-center">
                    <span class="col-4">车牌号</span>
                    <span class="col-4">加氢量/kg</span>
                    <span class="col-4">日期</span>
                </div>
                <div class="car-list-h-scrollable">
                    <div
                        v-for="item in carList"
                        :key="item.index"
                        class="row text-center unline clear-margin-padding"
                    >
                        <span v-text="item.plate" class="col-4"></span>
                        <span v-text="item.addNumber" class="col-4 font-number">3200</span>
                        <span v-text="item.date" class="col-4 ">3200</span>
                    </div>
                </div>
            </div>
            <div class="col-2">
                <div class="row text-center border-aqua">
                    <span class="col-6">故障信息:</span>
                    <span class="col-6 text-green">无</span>
                </div>
                <div class="row text-center border-aqua margin-top-10">
                    <span class="col-6">氢气泄漏:</span>
                    <span class="col-6 text-green">无</span>
                </div>
                <div class="row margin-top-10 border-aqua">
                    <count-station />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CountStation from "./table/CountStation.vue";
import MonthStation from "./table/MonthStation.vue";
import carJson from "../../assets/json/car.json";
export default {
    components: { CountStation, MonthStation },
    data() {
        return {
            carList: null,
        };
    },
    methods: {},
    created() {
        this.carList = carJson["12"];
    },
};
</script>

<style scoped>
span {
    display: inline-block;
    line-height: 35px;
}
</style>