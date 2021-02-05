<template>
    <div
        class="col-12"
        id="infoMtwoTable"
        style="height: 200px"
        @mouseover="stopInterVal(interValId)"
        @mouseout="startMin()"
    ></div>
</template>

<script>
import { eb_f } from "../../../assets/js/table.js";
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
            // (data1, ys1, t1, max, three_table, tableType, flag)
            let infoMtwoTable = this.$echarts.init(
                document.getElementById("infoMtwoTable")
            );

            eb_f(
                dataList,
                colorList,
                titleList,
                unitList,
                xArray,
                max,
                infoMtwoTable,
                true,
                false
            );
            setTimeout(function () {
                window.onresize = function () {
                    infoMtwoTable.resize();
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
//eb_f(dataList, colorList, titleList, unitList, xArary, max, one , false, false);
var dataList = [data_calculation(30, 100, 0)];
var colorList = ["#ffffff"];
var titleList = ["增湿器湿度"];
var unitList = ["时间(s)", "湿度%"];
var xArray = x_date("second");
var max = 100;
// var max = data_max_list(dataList);
(function () {
    setInterval(() => {
        xArray = x_date("second");
        // max = [data_max_list(dataList)];
        dataList[0].shift();
        dataList[0].push(random_number(100, 0));
    }, 1000);
})();
</script>
<style>
</style>
