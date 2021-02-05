<template>
    <div class="col-12" id="car" style="height: 200px"></div>
</template>

<script>
import { index_car } from "../../assets/js/table.js";
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
            let car = this.$echarts.init(document.getElementById("car"));
            index_car(car,colorList,nameList,valueList,true,"kg");
            setTimeout(function () {
                window.onresize = function () {
                    car.resize();
                };
            }, 200);
        },
    },
};
var colorList = ['#FC4567', '#2F8DF4', '#C25EC4'];
var nameList = ['本日用氢量','本月用氢量','本年用氢量'];
var valueList = [220,120,189];
</script>
<style>
</style>
