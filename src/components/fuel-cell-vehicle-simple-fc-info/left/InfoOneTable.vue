<template>
    <div
        class="col-12"
        id="infoOneTable"
        style="height: 200px"
        @mouseover="stopInterVal(interValId)"
        @mouseout="startMin()"
    ></div>
</template>

<script>
import liveChart from '../../public/live-chart';

export default liveChart({
    ranges: [[30, 20]],
    colors: ["#bb9049"],
    titles: ["氢气流量"],
    units: ["时间(s)", "流量 g/s"],
    timeUnit: "second",
    interval: 1000,
    maximum: 40,
});
</script>
<style>
</style>
