<template>
    <div class="bottom-height">
        <p class="text-center">减碳</p>
        <div id="vCarbonHome" style="height: 200px"></div>
    </div>
</template>

<script>
import chartLifecycle from "../../public/chart-lifecycle.js";
import { eb_line } from "../../../assets/js/table.js";
import { data_max_list, x_date, data_calculation } from "../../../assets/js/public.js";
export default {
    mixins: [chartLifecycle],
    components: {},
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            let vCarbon = this.createChart("vCarbonHome");
            eb_line(dataList,colorList,titleList,unitList,xArray,max,vCarbon,false);
        },
    },
};
var dataList = [data_calculation(31,100,5)];
// var dataList = [0.239, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1];
var colorList = ["aqua"]
var titleList = ["当日累计碳减排"];
var unitList = ["日期(日)","万吨"]
var xArray = x_date("day");
var max = [data_max_list(dataList)];
</script>

<style scoped>
</style>>
