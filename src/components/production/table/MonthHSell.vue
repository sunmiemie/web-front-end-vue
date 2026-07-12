<template>
    <div id="monthHCarP" style="height: 200px"></div>
</template>

<script>
import chartLifecycle from "../../public/chart-lifecycle.js";
import { eb_line,data_time } from "../../../assets/js/table.js";
import { data_max_list,x_date } from "../../../assets/js/public.js";
export default {
    mixins: [chartLifecycle],
    name: "e-add-month-h-car",
    data() {
        return {};
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            let monthHCarP = this.createChart("monthHCarP");
            eb_line(
                dataList,colorList,titleList,unitList,xArray,maxList,
                monthHCarP,
                false
            );
        },
    },
};
var day_data = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2800,
];
var dataList = [day_data];
var titleList = ["当月"];
var colorList = ["#868ff8"];
var unitList = ["日期(月)","售氢量/Kg"];
var maxList = data_max_list(dataList);
var xArray = x_date("month");
</script>
<style>
</style>
