<template>
    <div class="col-12" id="monthHTable" style="height: 200px"></div>
</template>

<script>
import { eb_f } from "../../../assets/js/table.js";
import { data_max,x_date } from "../../../assets/js/public.js";
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
            let monthHTable = this.$echarts.init(document.getElementById("monthHTable"));
            eb_f(dataList,colorList,titleList,unitList,month,max, monthHTable, true,false);
            setTimeout(function () {
                window.onresize = function () {
                    monthHTable.resize();
                };
            }, 200);
        },
    },
};
var month_data = [0, 0, 0, 0, 0, 0, 91.04, 529.57, 348.58, 605.27, 512.22, 138.69];
var dataList = [month_data];
var colorList = ["#E8E637"];
var titleList = ["当月"];
var unitList = ["日期(月)","加氢量/Kg"];
var max = data_max(dataList[0]);
var month = x_date("month");
</script>
<style>
</style>
