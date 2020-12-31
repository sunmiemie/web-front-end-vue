<template>
    <div class="bottom-height">
        <p class="text-center">当年加氢站售氢量排名(前四)  kg</p>
        <div id="rankCar" style="height: 200px;"></div>
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
            let rankCar = this.$echarts.init(document.getElementById("rankCar"));
            ranking(rankCar,dataList,nameList,colorList,"kg");
            setTimeout(function () {
                window.onresize = function () {
                    rankCar.resize();
                };
            }, 200);
        },
    },
}
var nameList =  ['一号加氢站', '二号加氢站', '三号加氢站', '四号加氢站'];
var dataList =  [17500, 16200, 15700, 14800];
var colorList = ['rgba(248,231,28', 'rgba(189,16,224', 'rgba(144,19,254', 'rgba(235,283,255'];
</script>

<style scoped>

</style>>