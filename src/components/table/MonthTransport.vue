<template>
    <div class="col-12" id="monthTransport" style="height: 180px"></div>
</template>

<script>
import chartLifecycle from "../public/chart-lifecycle.js";
import { eb_f } from "../../assets/js/table.js";
import { data_calculation,x_date,data_max } from "../../assets/js/public.js";
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
            let monthTransport = this.createChart("monthTransport");
            eb_f(dataList,colorList, titleList,unitList,xArary,max, monthTransport, false,false);
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
