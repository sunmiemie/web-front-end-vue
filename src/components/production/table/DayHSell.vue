<template>
    <div id="dayHCarP" class="col-12 margin-top-10" style="height: 200px"></div>
</template>

<script>
import chartLifecycle from "../../public/chart-lifecycle.js";
import { eb_line,data_time } from "../../../assets/js/table.js";
import { data_max_list,x_date } from "../../../assets/js/public.js";
export default {
    mixins: [chartLifecycle],
    name: "e-add-h-day-car",
    data() {
        return {};
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            let dayHCarP = this.createChart("dayHCarP");
            eb_line(dataList,colorList,titleList,unitList,xArray,maxList,dayHCarP,false);
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
    2800,
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
    0,
];
var dataList = [day_data];
var titleList = ["当日"];
var colorList = ["yellow"];
var unitList = ["日期(日)","售氢量/Kg"];
var maxList = data_max_list(dataList);
var xArray = x_date("day");
</script>
<style>
</style>
