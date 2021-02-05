<template>
    <div id="dayHCarP" class="col-12 margin-top-10" style="height: 200px"></div>
</template>

<script>
import { eb_line,data_time } from "../../../assets/js/table.js";
import { data_max_list,x_date } from "../../../assets/js/public.js";
export default {
    name: "e-add-h-day-car",
    data() {
        return {};
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            let dayHCarP = this.$echarts.init(document.getElementById("dayHCarP"));
            eb_line(dataList,colorList,titleList,unitList,xArray,maxList,dayHCarP,false);
            setTimeout(function () {
                window.onresize = function () {
                    dayHCarP.resize();
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
    2800,
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
var titleList = ["当日"];
var colorList = ["yellow"];
var unitList = ["日期(日)","售氢量/Kg"];
var maxList = data_max_list(dataList);
var xArray = x_date("day");
</script>
<style>
</style>
