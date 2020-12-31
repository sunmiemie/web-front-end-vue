<template>
    <div class="col-12" id="VSThreeTable" style="height: 200px"></div>
</template>

<script>
import { eb_line_double } from "../../../assets/js/table.js";
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
            itervalId: null,
        };
    },
    mounted() {
        this.drawLine();
        this.itervalId = setInterval(() => {
            this.drawLine();
        }, 1000 * 60);
    },
    beforeDestroy() {
        clearInterval(this.itervalId);
    },
    methods: {
        drawLine() {
            let VSThreeTable = this.$echarts.init(
                document.getElementById("VSThreeTable")
            );
            eb_line_double(
                dataList,
                colorList,
                titleList,
                unitList,
                xArray,
                max,
                VSThreeTable,
                false
            );
            setTimeout(function () {
                window.onresize = function () {
                    VSThreeTable.resize();
                };
            }, 200);
        },
    },
};

var dataList = [data_calculation(30, 180, 80), data_calculation(30, 20, 10)];
var colorList = ["#50e3c2", "#f5a623"];
var titleList = ["FC电压", "FC电流"];
var unitList = ["时间(min)", "电压/V", "电流/A"];
var xArray = x_date("min");
var max = [data_max_list(dataList)];
(function () {
    setInterval(() => {
        xArray = x_date("min");
        max = [data_max_list(dataList)];
        dataList[0].shift();
        dataList[1].shift();
        dataList[0].push(random_number(180, 80));
        dataList[1].push(random_number(20, 10));
    }, 1000 * 60);
})();
</script>
<style>
</style>
