<template>
    <div class="col-12" id="dayHTableP" style="height: 200px"></div>
</template>

<script>
import { eb_f } from "../../../assets/js/table.js";
import { data_max,x_date } from "../../../assets/js/public.js";
export default {
    name: "e-add-h-day",
    data() {
        return {};
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            let dayHTableP = this.$echarts.init(document.getElementById("dayHTableP"));
            eb_f(dataList,colorList,titleList,unitList,day,max, dayHTableP, false,false);
            setTimeout(function () {
                window.onresize = function () {
                    dayHTableP.resize();
                };
            }, 200);
        },
    },
};
var day_data = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2900,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
];
var dataList = [day_data];
var colorList = ["aqua"];
var titleList = ["当日"];
var unitList = ["日期(日)","制氢量/Kg"];
var max = data_max(dataList[0]);
var day = x_date("day");
</script>
<style>
</style>
