<template>
    <div class="">
        <div id="electrolysisTop" style="height: 200px"></div>
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
            let electrolysisTop = this.$echarts.init(document.getElementById("electrolysisTop"));
            eb_f(dataList,colorList,titleList,unitList,xArary,max, electrolysisTop, false,false);
            setTimeout(function () {
                window.onresize = function () {
                    electrolysisTop.resize();
                };
            }, 200);
        },
    },
};
var dataList = [data_calculation(31,100,0),data_calculation(31,0,100)];
var colorList = ["aqua", "orange"];
var titleList = ["氢中氧", "氧中氢"]
var unitList = ["时间(小时)","浓度/%"];
var xArary = x_date("hour");
var max = data_max(dataList[0]);
</script>
<style scoped>
.line-height {
    line-height: 45px;;
}
</style>
