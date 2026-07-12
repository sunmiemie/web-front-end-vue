<template>
    <div class="col-12" id="carStation" style="height: 233px"></div>
</template>

<script>
import chartLifecycle from "../../public/chart-lifecycle.js";
import { index_car } from "../../../assets/js/table.js";
export default {
    mixins: [chartLifecycle],
    name: "e-one",
    data() {
        return {};
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            let carStation = this.createChart("carStation");
            index_car(carStation,colorList,nameList,valueList);
        },
    },
};
var colorList = ['aqua', '#fc5a25', null];
var nameList = ['剩余储氢量/kg','今日已售/kg',null];
var valueList = [5000,3030,null];
</script>
<style>
</style>
