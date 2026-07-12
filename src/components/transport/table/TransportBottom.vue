<template>
    <div>
        <div id="carTimeDay" class="border-aqua clear-margin-padding margin-top-10" style="height: 240px"></div>
    </div>
</template>

<script>
import chartLifecycle from "../../public/chart-lifecycle.js";
import { eb_line,data_time} from "../../../assets/js/table.js";
import { data_calculation,data_max_list,x_date} from "../../../assets/js/public.js";
export default {
    mixins: [chartLifecycle],
    data() {
        return {};
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            let carTimeDay = this.createChart("carTimeDay");
            eb_line(dataList,colorList,titleList,unitList,xArray,maxList,carTimeDay,false);
        },
    },
};
var dataList = [data_calculation(31,100,50)];
var titleList = ["当日"];
var colorList = ["#4a90e2"];
var unitList = ["日期(日)","行驶时间/h"];
var maxList = data_max_list(dataList);
var xArray = x_date("day");
</script>
<style>
</style>
