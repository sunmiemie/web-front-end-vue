<template>
    <div class="col-12" id="MonthMiles" style="height: 200px"></div>
</template>

<script>
import chartLifecycle from "../../public/chart-lifecycle.js";
import { eb_f } from "../../../assets/js/table.js";
import { data_max,data_calculation,x_date } from "../../../assets/js/public.js";
export default {
    mixins: [chartLifecycle],
    name: "e-add-h-day",
    data() {
        return {};
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            let MonthMiles = this.createChart("MonthMiles");
            eb_f(dataList,colorList,titleList,unitList,xArary,max, MonthMiles, false,false);
        },
    },
};
var dataList = [data_calculation(31,800,400)];
var colorList = ["#b8e986"];
var titleList = ["当日"]
var unitList = ["日期(日)","小时/h"];
var xArary = x_date("day");
var max = data_max(dataList[0]);
</script>
<style>
</style>
