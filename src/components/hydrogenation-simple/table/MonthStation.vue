<template>
    <div class="border-aqua">
        <p class="h5 text-center line-height">当日加氢量(按日)</p>
        <div class="col-12" id="monthStation" style="height: 270px"></div>
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
            let monthStation = this.$echarts.init(document.getElementById("monthStation"));
            eb_f(dataList,colorList, titleList,unitList,xArary,max, monthStation, false,false);
            setTimeout(function () {
                window.onresize = function () {
                    monthStation.resize();
                };
            }, 200);
        },
    },
};
var dataList = [data_calculation(31,1000,200)];
var colorList = ["aqua"];
var titleList = ["加氢车次"]
var unitList = ["日期(日)","加氢量/Kg"];
var xArary = x_date("day");
var max = data_max(dataList[0]);
</script>
<style scoped>
.line-height {
    line-height: 45px;;
}
</style>
