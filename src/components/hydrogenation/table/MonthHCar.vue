<template>
    <div id="monthHCar" style="height: 200px"></div>
</template>

<script>
import { eb_line,data_time } from "../../../assets/js/table.js";
import { data_max_list,x_date } from "../../../assets/js/public.js";
export default {
    name: "e-add-month-h-car",
    data() {
        return {};
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            let monthHCar = this.$echarts.init(document.getElementById("monthHCar"));
            eb_line(dataList,colorList,titleList,unitList,xArray,maxList,monthHCar,false);
            setTimeout(function () {
                window.onresize = function () {
                    monthHCar.resize();
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
    13,
    78,
    51,
    69,
    53,
    13,
];
var dataList = [day_data];
var titleList = ["当月加氢车次"];
var colorList = ["#868ff8"];
var unitList = ["日期(月)","车次/次"];
var maxList = data_max_list(dataList);
var xArray = x_date("month");
</script>
<style>
</style>
