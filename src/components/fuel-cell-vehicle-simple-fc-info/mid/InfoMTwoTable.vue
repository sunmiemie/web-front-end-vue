<template>
    <div
        class="col-12"
        id="infoMtwoTable"
        style="height: 200px"
        @mouseover="stopInterVal(interValId)"
        @mouseout="startMin()"
    ></div>
</template>

<script>
import liveChart from '../../public/live-chart';

export default liveChart({
    ranges: [[100, 0]],
    colors: ["#ffffff"],
    titles: ["增湿器湿度"],
    units: ["时间(s)", "湿度%"],
    timeUnit: "second",
    interval: 1000,
    maximum: 100,
});
</script>
<style>
</style>
