<template>
    <div>
        <div class="text-center">运氢总量(近一年) kg</div>
        <div id="carCount" class="border-aqua margin-top-10" style="height: 200px"></div>
        <div class="text-center margin-top-10">当日运氢量(近一月) kg</div>
        <div id="carCountDay" class="border-aqua margin-top-10" style="height: 200px"></div>
        <div class="text-center" style="margin-top: 6.5px;">当日运氢车次(近一月)</div>
        <div id="carNumberDay" class="border-aqua margin-top-10" style="height: 200px"></div>
        <div class="text-center">当日行驶距离(近一月) km</div>
        <div id="carDistanceDay" class="border-aqua margin-top-10" style="height: 240px"></div>
    </div>
</template>

<script>
import { eb_line,data_time,eb_f } from "../../../assets/js/table.js";
import { data_calculation,x_date,data_max } from "../../../assets/js/public.js";
export default {
    data() {
        return {};
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            let carCount = this.$echarts.init(document.getElementById("carCount"));
            let carCountDay = this.$echarts.init(document.getElementById("carCountDay"));
            let carNumberDay = this.$echarts.init(document.getElementById("carNumberDay"));
            let carDistanceDay = this.$echarts.init(document.getElementById("carDistanceDay"));
            //dataList, colorList, titleList, unitList, xArary, max, el, zomFlag, flag
            eb_f(dataList_1,colorList_1,titleList_1,unitList_1,day,max_1, carNumberDay, false,false);
            eb_f(dataList_2,colorList_2,titleList_1,unitList_2,day,max_2, carDistanceDay, false,false);
            eb_line(dataList_3,colorList_3,titleList_2, unitList_3,month,max_3,carCount,false);
            eb_line(dataList_4,colorList_1,titleList_1, unitList_4,day,max_4,carCountDay,false);
            setTimeout(function () {
                window.onresize = function () {
                    carCount.resize();
                    carCountDay.resize();
                    carNumberDay.resize();
                    carDistanceDay.resize();
                };
            }, 200);
        },
    },
};

var dataList_1 = [data_calculation(31,200,100),null];
var dataList_2 = [data_calculation(31,1000,600),null];
var dataList_3 = [data_calculation(31,1000,600),null];
var dataList_4 = [data_calculation(31,1000,600),null];

var titleList_1 = ["当日",null];
var titleList_2 = ["当月",null];

var colorList_1 = ["aqua",null];
var colorList_2 = ["#bd10e0",null];
var colorList_3 = ["yellow",null];

var unitList_1 = ["日期(日)","运氢车次/次"];
var unitList_2 = ["日期(日)","行驶距离/Km"];

var unitList_3 = ["日期(月)","运氢量/Kg"];
var unitList_4 = ["日期(日)","运氢量/Kg"];

var max_1 = data_max(dataList_1[0]);
var max_2 = data_max(dataList_2[0]);

var max_3 = data_max(dataList_3[0]);
var max_4 = data_max(dataList_4[0]);
var day = x_date("day");
var month = x_date("month");
</script>
<style>
</style>
