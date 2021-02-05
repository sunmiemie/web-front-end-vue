<template>
    <div class="col-12" id="VSTwoTable" style="height: 200px"></div>
</template>

<script>
import { eb_line } from "../../../assets/js/table.js";
import {
    data_max_list,
    x_date,
    data_calculation,
    random_number
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
            var data = data_calculation(30, 30, 20);
            let VSTwoTable = this.$echarts.init(
                document.getElementById("VSTwoTable")
            );
            eb_line(
                dataList,
                colorList,
                titleList,
                unitList,
                xArray,
                max,
                VSTwoTable,
                false
            );
            setTimeout(function () {
                window.onresize = function () {
                    VSTwoTable.resize();
                };
            }, 200);
        },
    },
};
var dataList = [data_calculation(30, 30, 20)];
var colorList = ["aqua"];
var titleList = ["当前氢气消耗"];
var unitList = ["时间(min)", "Kg"];
var xArray = x_date("min");
var max = [data_max_list(dataList)];
(function () {
    setInterval(() => {
        xArray = x_date("min");
        max = [data_max_list(dataList)];
        dataList[0].shift();
        dataList[0].push(random_number(30, 20));
    }, 1000 * 60);
})();
</script>
<style>
</style>
