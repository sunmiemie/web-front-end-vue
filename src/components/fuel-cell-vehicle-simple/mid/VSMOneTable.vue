<template>
    <div class="col-12" id="vSMOneTable" style="height: 200px"></div>
</template>

<script>
import liveChart from '../../public/live-chart';

export default liveChart({
    ranges: [[240, 80], [10, 5]],
    colors: ["#ff4700", "#acff00"],
    titles: ["电机电压", "电机电流"],
    units: ["时间(min)", "电压/V", "电流/A"],
    timeUnit: "min",
    interval: 60000,
});
</script>
<style>
</style>
