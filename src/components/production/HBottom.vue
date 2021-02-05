<template>
    <div class="h-bottom">
        <div class="row">
            <div class="col-3 border-aqua">
                <p class="">每月售氢量</p>
                <div class="row">
                    <month-h-sell class="col-12" />
                </div>
            </div>
            <bottom-warn class="col-3 border-warn" />
            <bottom-rank class="col-3 border-aqua" />
            <bottom-rank-sell class="col-3 border-aqua" />
        </div>
    </div>
</template>

<script>
import BottomWarn from './BottomWarn.vue'
import BottomRank from './table/BottomRank.vue'
import BottomRankSell from './table/BottomRankSell.vue'
import MonthHSell from './table/MonthHSell.vue'
export default {
    components: {MonthHSell, BottomWarn, BottomRank, BottomRankSell },
}
</script>

<style scoped>
.h-bottom {
    height: 240px;
}
</style>>