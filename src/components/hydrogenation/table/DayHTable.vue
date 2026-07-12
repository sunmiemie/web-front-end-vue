<template>
    <div class="col-12" id="dayHTable" style="height: 200px"></div>
</template>

<script>
import chartLifecycle from "../../public/chart-lifecycle.js";
import { eb_f } from "../../../assets/js/table.js";
import { data_max,x_date } from "../../../assets/js/public.js";
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
            let dayHTable = this.createChart("dayHTable");
            eb_f(dataList,colorList,titleList,unitList,day,max,dayHTable, false,false);
        },
    },
};
var day_data = [
    25.95,
    30.35,
    21.22,
    6.75,
    12.09,
    0,
    34.49,
    7.84,
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
var colorList = ["aqua"];
var titleList = ["当日"];
var unitList = ["日期(日)","加氢量/Kg"];
var max = data_max(dataList[0]);
var day = x_date("day");
</script>
<style>
</style>
