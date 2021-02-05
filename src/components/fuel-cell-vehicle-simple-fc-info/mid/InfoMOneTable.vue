<template>
    <div
        class="col-12"
        id="infoMOneTable"
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
            let infoMOneTable = this.$echarts.init(
                document.getElementById("infoMOneTable")
            );
            eb_line(
                dataList,
                colorList,
                titleList,
                unitList,
                xArray,
                max,
                infoMOneTable,
                false
            );
            setTimeout(function () {
                window.onresize = function () {
                    infoMOneTable.resize();
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
var dataList = [data_calculation(30, 100, 20)];
var colorList = ["#ff4700"];
var titleList = ["电推温度"];
var unitList = ["时间(s)", "℃"];
var xArray = x_date("second");
var max = 200;
(function () {
    setInterval(() => {
        xArray = x_date("second");
        // max = [data_max_list(dataList)];
        dataList[0].shift();
        dataList[0].push(random_number(100, 20));
    }, 1000);
})();
</script>
<style>
</style>
