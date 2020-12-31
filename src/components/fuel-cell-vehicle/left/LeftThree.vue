<template>
    <div class="col-12" id="MonthMiles" style="height: 200px"></div>
</template>

<script>
import { eb_f } from "../../../assets/js/table.js";
import { data_max,data_calculation,x_date } from "../../../assets/js/public.js";
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
            let MonthMiles = this.$echarts.init(document.getElementById("MonthMiles"));
            eb_f(dataList,colorList,titleList,unitList,xArary,max, MonthMiles, false,false);
            setTimeout(function () {
                window.onresize = function () {
                    MonthMiles.resize();
                };
            }, 200);
        },
    },
};
var dataList = [data_calculation(31,800,400)];
var colorList = ["#ecac78"];
var titleList = ["当日"]
var unitList = ["日期(日)","行驶里程/Km"];
var xArary = x_date("day");
var max = data_max(dataList[0]);
</script>
<style>
</style>