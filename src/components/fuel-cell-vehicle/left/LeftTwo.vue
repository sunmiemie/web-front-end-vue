<template>
    <div class="col-12" id="cMonthLeftTwo" style="height: 200px"></div>
</template>

<script>
import { eb_line } from "../../../assets/js/table.js";
import { data_max_list, x_date, data_calculation } from "../../../assets/js/public.js";
export default {
    components: {},
    data() {
        return {
        }
    },
    async mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            let cMonthLeftTwo = this.$echarts.init(
                document.getElementById("cMonthLeftTwo")
            );
            eb_line(dataList,colorList,titleList,unitList,xArray,max,cMonthLeftTwo,false);
            this.timer = setTimeout(function () {
                window.onresize = function () {
                    cMonthLeftTwo.resize();
                };
            }, 200);
        },
    },
};
var dataList = [data_calculation(12, 100, 80)];
var colorList = ["aqua"]
var titleList = ["耗氢量"];
var unitList = ["日期(月)","KG"]
var xArray = x_date("month");
var max = data_max_list(dataList);
</script>
<style>
</style>
