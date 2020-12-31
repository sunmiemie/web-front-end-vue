<template>
    <div class="h-bottom">
        <div class="row">
            <div class="col-3 border-aqua">
                <p class="">每月加氢车次</p>
                <div class="row">
                    <month-h-car class="col-12" />
                </div>
            </div>
            <bottom-warn class="col-3 border-warn" />
            <bottom-rank class="col-3 border-aqua" />
            <bottom-rank-car class="col-3 border-aqua" />
        </div>
    </div>
</template>

<script>
import BottomWarn from './BottomWarn.vue'
import BottomRank from './table/BottomRank.vue'
import BottomRankCar from './table/BottomRankCar.vue'
import MonthHCar from './table/MonthHCar.vue'
export default {
    components: {MonthHCar, BottomWarn, BottomRank, BottomRankCar },
}
</script>

<style scoped>
.h-bottom {
    height: 240px;
}
</style>>