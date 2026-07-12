<template>
    <div class="">
        <div id="stationBottom" style="height: 200px"></div>
    </div>
</template>

<script>
import chartLifecycle from "../../public/chart-lifecycle.js";
import { eb_f_line } from "../../../assets/js/table.js";
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
            let stationBottom = this.createChart("stationBottom");
            eb_f_line(
                data1,
                data2,
                colorList,
                nameList,
                stationBottom,
                false,
                100,
                typeList,
                ["时间(24小时)","压力/Mpa"]
            );
        },
    },
};
var colorList = ["aqua","purple"];
var nameList = ["储氢罐压力","加氢机压力"];
var typeList = ['line','bar'];
var data2 = [
    60,
    70,
    70,
    10,
    40,
    40,
    60,
    60,
    70,
    70,
    10,
    40,
    40,
    60,
    60,
    70,
    70,
    10,
    40,
    40,
    60,
    60,
    70,
    70,
];
var data1 = [
    60,
    70,
    70,
    60,
    60,
    70,
    70,
    10,
    40,
    40,
    60,
    10,
    40,
    40,
    60,
    60,
    70,
    70,
    10,
    40,
    40,
    60,
    70,
    70,
];
</script>
<style scoped>
.line-height {
    line-height: 45px;
}
</style>
