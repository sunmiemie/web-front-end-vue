<template>
    <div class="col-12" id="factory" style="height: 240px"></div>
</template>

<script>
import { eb_bar_double } from "../../assets/js/table.js";
import { data_calculation,x_date,data_max } from "../../assets/js/public.js";
export default {
    name: "e-one",
    data() {
        return {};
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            let factory = this.$echarts.init(document.getElementById("factory"));
            eb_bar_double(dataList,colorList,titleList,unitList,xArary,max, factory, false,false);
            setTimeout(function () {
                window.onresize = function () {
                    factory.resize();
                };
            }, 200);
        },
    },
};
var dataList = [data_calculation(31,500,100),data_calculation(31,1000,500)];
var colorList = ["aqua", "purple"];
var titleList = ["当日", "当月"]
var unitList = ["日期(日)","运氢量/Kg"];
var xArary = x_date("day");
var max = data_max(dataList[1]);
</script>
<style>
</style>
