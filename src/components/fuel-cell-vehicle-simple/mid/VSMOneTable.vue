<template>
    <div class="col-12" id="vSMOneTable" style="height: 200px"></div>
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
    async mounted() {
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
            let vSMOneTable = this.$echarts.init(
                document.getElementById("vSMOneTable")
            );
            eb_line_double(
                dataList,
                colorList,
                titleList,
                unitList,
                xArray,
                max,
                vSMOneTable,
                false
            );
            setTimeout(function () {
                window.onresize = function () {
                    vSMOneTable.resize();
                };
            }, 200);
        },
    },
};
var dataList = [data_calculation(30, 240, 80), data_calculation(30, 10, 5)];
var colorList = ["#ff4700", "#acff00"];
var titleList = ["电机电压", "电机电流"];
var unitList = ["时间(min)", "电压/V", "电流/A"];
var xArray = x_date("min");
var max = [data_max_list(dataList)];
(function () {
    setInterval(() => {
        xArray = x_date("min");
        max = [data_max_list(dataList)];
        dataList[0].shift();
        dataList[1].shift();
        dataList[0].push(random_number(240, 80));
        dataList[1].push(random_number(10, 5));
    }, 1000 * 60);
})();
</script>
<style>
</style>
