<template>
    <div class="bottom-height">
        <p class="text-center">当月累计碳减排</p>
        <div id="vCarbon" style="height: 200px"></div>
    </div>
</template>

<script>
import { eb_line } from "../../../assets/js/table.js";
import { data_max_list, x_date, data_calculation } from "../../../assets/js/public.js";
export default {
    components: {},
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            var data = data_calculation(31, 1000, 500);
            let vCarbon = this.$echarts.init(
                document.getElementById("vCarbon")
            );
            eb_line(dataList,colorList,titleList,unitList,xArray,max,vCarbon,false);
            setTimeout(function () {
                window.onresize = function () {
                    vCarbon.resize();
                };
            }, 200);
        },
    },
};
var dataList = [data_calculation(31,1000,500)];
var colorList = ["green"]
var titleList = ["当日累计碳减排"];
var unitList = ["日期(日)","吨"]
var xArray = x_date("day");
var max = [data_max_list(dataList)];
</script>

<style scoped>
</style>>