<template>
    <div id="vPower" class="col-12 margin-top-10" style="height: 200px"></div>
</template>

<script>
import { eb_line,data_time, eb_line_double } from "../../../assets/js/table.js";
import { data_max_list,data_calculation,x_date } from "../../../assets/js/public.js";
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
            let vPower = this.$echarts.init(document.getElementById("vPower"));
            eb_line_double(dataList,colorList,titleList,unitList,xArray,max,vPower,false);
            setTimeout(function () {
                window.onresize = function () {
                    vPower.resize();
                };
            }, 200);
        },
    },
};
var dataList = [data_calculation(31,1000,200),data_calculation(31,150,30)];
var colorList = ["yellow","aqua"]
var titleList = ["输出能量","输出功率"];
var unitList = ["日期(日)","KJ","KW"]
var xArray = x_date("day");
var max = [data_max_list(dataList)];
</script>
<style>
</style>
