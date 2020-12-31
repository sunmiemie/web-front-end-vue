<template>
    <div class="col-12" id="monthHTableP" style="height: 200px"></div>
</template>

<script>
import { eb_f } from "../../../assets/js/table.js";
import { data_max,x_date,data_calculation } from "../../../assets/js/public.js";
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
            let monthHTableP = this.$echarts.init(document.getElementById("monthHTableP"));
            eb_f(dataList,colorList,titleList,unitList,month,max, monthHTableP, false,false);
            setTimeout(function () {
                window.onresize = function () {
                    monthHTableP.resize();
                };
            }, 200);
        },
    },
};
var dataList = [data_calculation(12,10000,8000)];
var colorList = ["#E8E637"];
var titleList = ["当月"];
var unitList = ["日期(月)","制氢量/Kg"];
var max = data_max(dataList[0]);
var month = x_date("month");
</script>
<style>
</style>
