<template>
    <div class="top">
        <div class="row">
            <div class="col-12">
                <div class="" style="height: 30px;line-height:30px;">每日制氢量</div>
            </div>
        </div>
        <div class="row border-aqua">
            <day-h-table/>
        </div>
        <div class="row">
            <div class="col-12">
                <p class="top-line-height">每月制氢量</p>
            </div>
        </div>
        <div class="row border-aqua">
            <month-h-table />
        </div>
        <div class="row">
            <div class="col-12">
                <p class="top-line-height">每日售氢量</p>
            </div>
        </div>
        <div class="row border-aqua">
            <day-h-sell />
        </div>
    </div>
</template>

<script>
import DayHSell from './table/DayHSell.vue'
import DayHTable from './table/DayHTable.vue'
import MonthHTable from './table/MonthHTable.vue'
export default {
    components: {
        DayHTable,
        MonthHTable,
        DayHSell
    }
}
</script>

<style scoped>
.top {
    height: 750px;
}
.top-line-height {
    height: 20px;line-height:30px;
}
</style>>