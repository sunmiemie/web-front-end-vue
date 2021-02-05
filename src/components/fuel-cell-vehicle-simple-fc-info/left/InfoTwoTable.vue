<template>
    <div
        class="col-12"
        id="infoTwoTable"
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
            let infoTwoTable = this.$echarts.init(
                document.getElementById("infoTwoTable")
            );
            eb_line(
                dataList,
                colorList,
                titleList,
                unitList,
                xArray,
                max,
                infoTwoTable,
                false
            );
            setTimeout(function () {
                window.onresize = function () {
                    infoTwoTable.resize();
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
var dataList = [data_calculation(30, 30, 20)];
var colorList = ["aqua"];
var titleList = ["空气流量"];
var unitList = ["时间(s)", "流量 g/s"];
var xArray = x_date("second");
// var max = [data_max_list(dataList)];
var max = 40;
(function () {
    setInterval(() => {
        xArray = x_date("second");
        // max = [data_max_list(dataList)];
        dataList[0].shift();
        dataList[0].push(random_number(30, 20));
    }, 1000);
})();
</script>
</script>
<style>
</style>
