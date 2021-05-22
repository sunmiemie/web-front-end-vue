<template>
    <div>
        <div class="border-aqua top-margin">
            <div class="row text-center text-shadow">
                <div class="col-3">当日制氢总量</div>
                <div class="col-3">当月制氢总量</div>
                <div class="col-3">当月销售总量</div>
                <div class="col-3">当前故障报警</div>
            </div>
            <div class="row text-center text-shadow">
                <div class="col-3"><span class="text-g-number">{{ manufactureData.day.data}}</span>KG</div>
                <div class="col-3"><span class="text-g-number">{{ manufactureData.month.data}} </span>KG</div>
                <div class="col-3"><span class="text-g-number">2800</span>KG</div>
                <div class="col-3"><span class="text-g-number">0000</span></div>
            </div>
        </div>
        <baidu-map class="margin-top-10" mapHeight="height: 625px;" />
    </div>
</template>

<script>
import BaiduMap from '../../components/public/BaiduMap.vue'
export default {
    props: ["manufactureData"],
    components: {  BaiduMap  },

}
</script>

<style scoped>
.top-margin {
    margin-top: 30px;
}
</style>