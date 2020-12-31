<template>
    <div class="row">
        <div id="vLoopTable" class="col-6" style="height: 185px"></div>
        <div id="vLoopTable_2" class="col-6" style="height: 185px"></div>
    </div>
</template>

<script>
import { index_car } from "../../../assets/js/table.js";
export default {
    name: "e-one",
    data() {
        return {};
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            let vLoopTable = this.$echarts.init(
                document.getElementById("vLoopTable")
            );
            let vLoopTable_2 = this.$echarts.init(
                document.getElementById("vLoopTable_2")
            );
            index_car(vLoopTable, colorList, nameList, valueList,false,"辆");
            index_car(vLoopTable_2, areaColorList, areaList, areaValueList,false,"辆");
            setTimeout(function () {
                window.onresize = function () {
                    vLoopTable.resize();
                    vLoopTable_2.resize();
                };
            }, 200);
        },
    },
};
var colorList = ["#f5a623", "#bd10e0", "#7ed321"];
var areaColorList = ["#50e3c2", "#2F8DF4", "#C25EC4"];
var nameList = ["客车", "物流", "公交"];
var areaList = ["北京", "天津", "河北"];
var valueList = [220, 120, 189];
var areaValueList = [400, 320, 100];
</script>
<style>
</style>
