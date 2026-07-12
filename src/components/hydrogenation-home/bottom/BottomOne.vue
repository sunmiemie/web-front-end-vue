<template>
    <div class="row">
        <div id="vLoopTable" class="col-6" style="height: 185px"></div>
        <div id="vLoopTable_2" class="col-6" style="height: 185px"></div>
    </div>
</template>

<script>
import chartLifecycle from "../../public/chart-lifecycle.js";
import { index_car } from "../../../assets/js/table.js";
export default {
    mixins: [chartLifecycle],
    name: "e-one",
    data() {
        return {};
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            let vLoopTable = this.createChart("vLoopTable");
            let vLoopTable_2 = this.createChart("vLoopTable_2");
            index_car(vLoopTable, colorList, nameList, valueList,false);
            index_car(vLoopTable_2, areaColorList, areaList, areaValueList,false);
        },
    },
};
var colorList = ["#80e24a", "#8b572a"];
var areaColorList = ["#f5a623", "#4a90e2"];
var nameList = ["家用", "商用"];
var areaList = ["北京", "佛山"];
var valueList = [220, 120];
var areaValueList = [400, 320];
</script>
<style>
</style>
