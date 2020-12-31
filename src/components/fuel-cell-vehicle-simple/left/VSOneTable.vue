<template>
    <div class="col-12" id="VSMOneTable" style="height: 200px"></div>
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
            var data = data_calculation(30, 80, 70);
            let VSMOneTable = this.$echarts.init(
                document.getElementById("VSMOneTable")
            );
            eb_line(
                dataList,
                colorList,
                titleList,
                unitList,
                xArray,
                max,
                VSMOneTable,
                false
            );
            setTimeout(function () {
                window.onresize = function () {
                    VSMOneTable.resize();
                };
            }, 200);
        },
    },
};
var dataList = [data_calculation(30, 1000, 500)];
var colorList = ["#bb9049"];
var titleList = ["当前行驶车速"];
var unitList = ["时间(min)", "Km/h"];
var xArray = x_date("min");
var max = [data_max_list(dataList)];
(function () {
    setInterval(() => {
        xArray = x_date("min");
        max = [data_max_list(dataList)];
        dataList[0].shift();
        dataList[0].push(random_number(1000, 500));
    }, 1000 * 60);
})();
</script>
<style>
</style>
