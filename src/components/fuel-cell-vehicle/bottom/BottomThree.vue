<template>
    <div class="bottom-height">
        <p class="text-center">百公里氢气消耗</p>
        <div id="hundredH" style="height: 200px;"></div>
    </div>
</template>

<script>
import chartLifecycle from "../../public/chart-lifecycle.js";
import { eb_line } from "../../../assets/js/table.js";
import { data_max_list,x_date,data_calculation } from "../../../assets/js/public.js";
export default {
    mixins: [chartLifecycle],
    components: { },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
           let hundredH = this.createChart("hundredH");
           eb_line(dataList,colorList,titleList,unitList,xArray,max,hundredH,false);
        },
    },
}
var dataList = [data_calculation(31,20,18)];
var colorList = ["#f5a623"]
var titleList = ["当日车载储氢量"];
var unitList = ["日期(日)","Kg"]
var xArray = x_date("day");
var max = [data_max_list(dataList)];
</script>

<style scoped>

</style>>