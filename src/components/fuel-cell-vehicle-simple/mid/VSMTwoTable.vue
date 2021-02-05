<template>
    <div class="col-12" id="vSMTwoTable" style="height: 200px"></div>
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
            let vSMTwoTable = this.$echarts.init(
                document.getElementById("vSMTwoTable")
            );
            eb_line(
                dataList,
                colorList,
                titleList,
                unitList,
                xArray,
                max,
                vSMTwoTable,
                false
            );
            setTimeout(function () {
                window.onresize = function () {
                    vSMTwoTable.resize();
                };
            }, 200);
        },
    },
};
var dataList = [data_calculation(30, 100, 0)];
var colorList = ["#bd10e0"];
var titleList = ["SOC"];
var unitList = ["时间(min)", "电量%"];
var xArray = x_date("min");
var max = [data_max_list(dataList)];
(function () {
    setInterval(() => {
        xArray = x_date("min");
        max = [data_max_list(dataList)];
        dataList[0].shift();
        dataList[0].push(random_number(100, 0));
    }, 1000 * 60);
})();
</script>
<style>
</style>
