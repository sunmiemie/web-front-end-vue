<template>
    <div class="col-12" id="VSTwoTable" style="height: 200px"></div>
</template>

<script>
import liveChart from '../../public/live-chart';

export default liveChart({
    ranges: [[30, 20]],
    colors: ["aqua"],
    titles: ["当前氢气消耗"],
    units: ["时间(min)", "Kg"],
    timeUnit: "min",
    interval: 60000,
});
</script>
<style>
</style>
