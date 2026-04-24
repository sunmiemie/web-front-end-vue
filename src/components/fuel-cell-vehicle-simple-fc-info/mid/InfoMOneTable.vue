<template>
    <div
        class="col-12"
        id="infoMOneTable"
        style="height: 200px"
        @mouseover="stopInterVal(interValId)"
        @mouseout="startMin()"
    ></div>
</template>

<script>
import liveChart from '../../public/live-chart';

export default liveChart({
    ranges: [[100, 20]],
    colors: ["#ff4700"],
    titles: ["电推温度"],
    units: ["时间(s)", "℃"],
    timeUnit: "second",
    interval: 1000,
    maximum: 200,
});
</script>
<style>
</style>
