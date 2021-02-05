<template>
    <div class="col-12" id="one" style="height: 200px"></div>
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
            let one = this.$echarts.init(document.getElementById("one"));
            //(dataList, colorList, titleList, unitList, xArary, max, el, zomFlag
            eb_bar_double(dataList, colorList, titleList, unitList, xArary, max, one , false, false);
            setTimeout(function () {
                window.onresize = function () {
                    one.resize();
                };
            }, 200);
        },
    },
};
var dataList = [data_calculation(31,500,100),data_calculation(31,1000,500)];
var colorList = ["yellow", "#50e3c2"];
var titleList = ["当日", "当月"]
var unitList = ["日期","加氢量/Kg"];
var xArary = x_date("day");
var max = data_max(dataList[1]);
</script>
<style>
</style>
