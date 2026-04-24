<template>
    <div
        class="col-12"
        id="infoThreeTable"
        style="height: 200px"
        @mouseover="stopInterVal(interValId)"
        @mouseout="startMin()"
    ></div>
</template>

<script>
import liveChart from '../../public/live-chart';

export default liveChart({
    ranges: [[180, 80]],
    colors: ["#f5a623"],
    titles: ["输出功率"],
    units: ["时间(s)", "功率 Kw/s"],
    timeUnit: "second",
    interval: 1000,
    maximum: 200,
});
</script>
<style>
</style>
