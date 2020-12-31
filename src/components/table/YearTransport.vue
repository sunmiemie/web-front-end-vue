<template>
    <div class="col-12" id="yearTransport" style="height: 180px"></div>
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
            let yearTransport = this.$echarts.init(document.getElementById("yearTransport"));
            eb_f(dataList,colorList, titleList,unitList,xArary,max, yearTransport, false,false);
            setTimeout(function () {
                window.onresize = function () {
                    yearTransport.resize();
                };
            }, 200);
        },
    },
};
var dataList = [data_calculation(31,1200,900),null];
var colorList = ["#E8E637", null];
var titleList = ["当月", null]
var unitList = ["日期(月)","制氢量/Kg"];
var xArary = x_date("month");
var max = data_max(dataList[0]);
</script>
<style>
</style>
