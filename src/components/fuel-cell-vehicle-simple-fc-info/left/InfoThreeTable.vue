<template>
    <div
        class="col-12"
        id="infoThreeTable"
        style="height: 200px"
        @mouseover="stopInterVal(interValId)"
        @mouseout="startMin()"
    ></div>
</template>

<script>
import { eb_line } from "../../../assets/js/table.js";
import {
    data_max_list,
    x_date,
    data_calculation,
    random_number,
} from "../../../assets/js/public.js";
export default {
    components: {},
    data() {
        return {
            interValId: null,
        };
    },
    mounted() {
        this.drawLine();
        this.interValId = setInterval(() => {
            this.drawLine();
        }, 1000);
    },
    beforeDestroy() {
        clearInterval(this.interValId);
    },
    methods: {
        drawLine() {
            let infoThreeTable = this.$echarts.init(
                document.getElementById("infoThreeTable")
            );
            eb_line(
                dataList,
                colorList,
                titleList,
                unitList,
                xArray,
                max,
                infoThreeTable,
                false
            );
            setTimeout(function () {
                window.onresize = function () {
                    infoThreeTable.resize();
                };
            }, 200);
        },
        stopInterVal(id) {
            clearInterval(id);
        },
        startMin() {
            this.interValId = setInterval(() => {
                this.drawLine();
            }, 1000);
        },
    },
};
var dataList = [data_calculation(30, 180, 80)];
var colorList = ["#f5a623"];
var titleList = ["输出功率"];
var unitList = ["时间(s)", "功率 Kw/s"];
var xArray = x_date("second");
var max = 200;
// var max = [data_max_list(dataList)];
(function () {
    setInterval(() => {
        xArray = x_date("second");
        // max = [data_max_list(dataList)];
        dataList[0].shift();
        dataList[0].push(random_number(180, 80));
    }, 1000);
})();
</script>
<style>
</style>
