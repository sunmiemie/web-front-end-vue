<template>
    <div class="col-12" id="vSMTwoTable" style="height: 200px"></div>
</template>

<script>
import liveChart from '../../public/live-chart';

export default liveChart({
    ranges: [[100, 0]],
    colors: ["#bd10e0"],
    titles: ["SOC"],
    units: ["时间(min)", "电量%"],
    timeUnit: "min",
    interval: 60000,
});
</script>
<style>
</style>
