<template>
    <div class="col-12" id="bLine" style="height: 240px"></div>
</template>

<script>
import { x_date,data_calculation,data_max_list } from '../../assets/js/public.js';
import { eb_line } from "../../assets/js/table.js";
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
            let bLine = this.$echarts.init(document.getElementById("bLine"));
            //dataList, colorList, titleList,unitList, xArray, max, el, flag
            eb_line(dataList, colorList, titleList,unitList, xArray, maxList, bLine, false);
            setTimeout(function () {
                window.onresize = function () {
                    bLine.resize();
                };
            }, 200);
        },
    },
};
var dataList = [data_calculation(12,2000,1000),data_calculation(12,2000,1000),data_calculation(12,2000,1000)];
var titleList = ["加氢站","运氢车", "燃料电池车"];
var colorList = ["#868ff8","aqua","yellow"];
var unitList = ["日期(月)","氢量/Kg"];
var maxList = data_max_list(dataList);
var xArray = x_date("month");
</script>
<style>
</style>
