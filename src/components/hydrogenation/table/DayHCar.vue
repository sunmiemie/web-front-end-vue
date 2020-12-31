<template>
    <div id="dayHCar" class="col-12 margin-top-10" style="height: 200px"></div>
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
            let dayHCar = this.$echarts.init(document.getElementById("dayHCar"));
            eb_line(dataList,colorList,titleList,unitList,xArray,maxList,dayHCar,false,);
            setTimeout(function () {
                window.onresize = function () {
                    dayHCar.resize();
                };
            }, 200);
        },
    },
};
var day_data = [
    2,
    3,
    2,
    1,
    1,
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
    0,
    0,
    0,
];
var dataList = [day_data];
var titleList = ["当日加氢车次"];
var colorList = ["yellow"];
var unitList = ["日期(日)","车次/次"];
var maxList = data_max_list(dataList);
var xArray = x_date("day");
</script>
<style>
</style>
