<template>
    <div class="">
        <div id="electrolysisBottom" style="height: 200px"></div>
    </div>
</template>

<script>
import { eb_f_line } from "../../../assets/js/table.js";
export default {
    data() {
        return {};
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            let electrolysisBottom = this.$echarts.init(
                document.getElementById("electrolysisBottom")
            );
            eb_f_line(
                data1,
                data2,
                colorList,
                nameList,
                electrolysisBottom,
                false,
                100,
                typeList,
                ["时间(24小时)","Mpa/℃"]
            );
            setTimeout(function () {
                window.onresize = function () {
                    electrolysisBottom.resize();
                };
            }, 200);
        },
    },
};
var colorList = ["aqua","purple"];
var nameList = ["氢气压力","电解槽温度"];
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
