<template>
    <div class="col-12" id="VSMOneTable" style="height: 200px"></div>
</template>

<script>
import liveChart from '../../public/live-chart';

export default liveChart({
    ranges: [[1000, 500]],
    colors: ["#bb9049"],
    titles: ["当前行驶车速"],
    units: ["时间(min)", "Km/h"],
    timeUnit: "min",
    interval: 60000,
});
</script>
<style>
</style>
