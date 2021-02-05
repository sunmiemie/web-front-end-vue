<template>
    <div class="">
        <div id="stationTop" style="height: 200px"></div>
    </div>
    
</template>

<script>
import { eb_f } from "../../../assets/js/table.js";
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
            let stationTop = this.$echarts.init(document.getElementById("stationTop"));
            eb_f(dataList,colorList,titleList,unitList,xArary,max, stationTop, false,false);
            setTimeout(function () {
                window.onresize = function () {
                    stationTop.resize();
                };
            }, 200);
        },
    },
};
var dataList = [data_calculation(31,200,10),data_calculation(31,1000,200)];
var colorList = ["aqua", "orange"];
var titleList = ["加氢车次", "加氢量/kg"]
var unitList = ["日期(日)","加氢量/Kg"];
var xArary = x_date("day");
var max = data_max(dataList[1]);
</script>
<style scoped>
.line-height {
    line-height: 45px;;
}
</style>
