<template>
    <div class="bottom-height">
        <p class="text-center">当前报警状态</p>
        <div id="bottomWarn" style="height: 200px;"></div>
    </div>
</template>

<script>
import chartLifecycle from "../../public/chart-lifecycle.js";
import { eb_line } from "../../../assets/js/table.js";
import { data_max_list,x_date } from "../../../assets/js/public.js";
import { statisticalAlarm, statisticalAddList } from "../../../api/tisinghua-static";
export default {
    mixins: [chartLifecycle],
    components: { },
    data(){
        return {
            alarm: null,
        }
    },
    async mounted() {
        this.drawLine();
        const data = {
            dataStationId: 2000001,
            date: "year"
        };
        this.alarm = await statisticalAlarm(data);
    },
    methods: {
        drawLine() {
           let bottomWarn = this.createChart("bottomWarn");
           eb_line(dataList,colorList,titleList,unitList,xArray,max,bottomWarn,false);
        },
    },
}
var dataList = [[],[],[]];
for (var i = 0; i < 31; i++) {
    dataList[0][i] = Math.floor(Math.random()*6);
    dataList[1][i] = Math.floor(Math.random()*4);
    dataList[2][i] = Math.floor(Math.random()*2);
}
var colorList = ["#00ffc6","yellow","red"];
var titleList = ["一级报警","二级报警","三级报警"];
var unitList = ["日期(日)","次"];
var xArray = x_date("day");
var max = data_max_list(dataList);
</script>

<style scoped>

</style>>