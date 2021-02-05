<template>
    <div class="col-12" id="monthTransport" style="height: 180px"></div>
</template>

<script>
import { eb_f } from "../../assets/js/table.js";
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
            let monthTransport = this.$echarts.init(document.getElementById("monthTransport"));
            eb_f(dataList,colorList, titleList,unitList,xArary,max, monthTransport, false,false);
            setTimeout(function () {
                window.onresize = function () {
                    monthTransport.resize();
                };
            }, 200);
        },
    },
};
var dataList = [data_calculation(31,1000,900),null];
var colorList = ["aqua", null];
var titleList = ["当日", null]
var unitList = ["日期(日)","制氢量/Kg"];
var xArary = x_date("day");
var max = data_max(dataList[0]);
</script>
<style>
</style>
