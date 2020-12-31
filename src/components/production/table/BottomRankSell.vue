<template>
    <div class="bottom-height">
        <p class="text-center">当年制氢厂售氢量排名(前四)  kg</p>
        <div id="rankCarP" style="height: 200px;"></div>
    </div>
</template>

<script>
import { ranking } from "../../../assets/js/table.js";
export default {
    components: { },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            let rankCarP = this.$echarts.init(document.getElementById("rankCarP"));
            ranking(rankCarP,dataList,nameList,colorList,"kg");
            setTimeout(function () {
                window.onresize = function () {
                    rankCarP.resize();
                };
            }, 200);
        },
    },
}
var nameList =  ['一号制氢站', '二号制氢站', '三号制氢站', '四号制氢站'];
var dataList =  [17500, 16200, 15700, 14800];
var colorList = ['rgba(248,231,28', 'rgba(189,16,224', 'rgba(144,19,254', 'rgba(235,283,255'];
</script>

<style scoped>

</style>>