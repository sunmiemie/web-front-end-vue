<template>
    <div class="col-12" id="carProduction" style="height: 233px"></div>
</template>

<script>
import { index_car } from "../../../assets/js/table.js";
export default {
    name: "e-one",
    data() {
        return {};
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            let carProduction = this.$echarts.init(document.getElementById("carProduction"));
            index_car(carProduction,colorList,nameList,valueList);
            setTimeout(function () {
                window.onresize = function () {
                    carProduction.resize();
                };
            }, 200);
        },
    },
};
var colorList = ['aqua', '#fc5a25', null];
var nameList = ['剩余储氢量/kg','今日已售/kg',null];
var valueList = [5000,3030,null];
</script>
<style>
</style>
