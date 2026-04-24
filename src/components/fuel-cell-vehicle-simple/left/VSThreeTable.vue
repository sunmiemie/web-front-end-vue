<template>
    <div class="col-12" id="VSThreeTable" style="height: 200px"></div>
</template>

<script>
import liveChart from '../../public/live-chart';

export default liveChart({
    ranges: [[180, 80], [20, 10]],
    colors: ["#50e3c2", "#f5a623"],
    titles: ["FC电压", "FC电流"],
    units: ["时间(min)", "电压/V", "电流/A"],
    timeUnit: "min",
    interval: 60000,
});
</script>
<style>
</style>
