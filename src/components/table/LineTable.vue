<template>
    <div class="col-12" id="line" style="height: 240px"></div>
</template>

<script>
import chartLifecycle from "../public/chart-lifecycle.js";
import { eb_line_double } from "../../assets/js/table.js";
import { x_date,data_calculation,data_max_list } from "../../assets/js/public.js";
export default {
    mixins: [chartLifecycle],
    name: "e-one",
    data() {
        return {};
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            let line = this.createChart("line");
            eb_line_double(dataList,colorList,titleList,unitList,xArray,max,line,false);
        },
    },
};
var dataList = [data_calculation(31,1000,500),data_calculation(12,10000,5000)];
var colorList = ["yellow","white"];
var titleList = ["日","月"];
var unitList = ["日期","用氢量/Kg"];
var max = data_max_list(dataList);
var xArray = x_date("day");
</script>
<style>
</style>
