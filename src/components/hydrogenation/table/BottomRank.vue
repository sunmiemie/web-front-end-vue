<template>
    <div class="bottom-height">
        <p class="text-center">当月加氢站加氢车次排名(前四)  kg</p>
        <div id="rank" style="height: 200px;"></div>
    </div>
</template>

<script>
import chartLifecycle from "../../public/chart-lifecycle.js";
import { ranking } from "../../../assets/js/table.js";
export default {
    mixins: [chartLifecycle],
    components: { },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            let rank = this.createChart("rank");
            ranking(rank,dataList,nameList,colorList,"kg");
        },
    },
}
var nameList =  ['一号加氢站', '二号加氢站', '三号加氢站', '四号加氢站'];
var dataList =  [7500, 6200, 5700, 4800];
var colorList = ['rgba(248,195,248', 'rgba(100,255,249', 'rgba(135,183,255', 'rgba(235,283,255'];
</script>

<style scoped>

</style>>