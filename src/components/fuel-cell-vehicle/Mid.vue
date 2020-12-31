<template>
    <div>
        <div class="border-aqua top-margin">
            <div class="row text-center text-shadow">
                <div class="col-3">累计接入车辆</div>
                <div class="col-3">累计行驶里程</div>
                <div class="col-3">累计输出能量</div>
                <div class="col-3">累计碳减排</div>
            </div>
            <div class="row text-center text-shadow">
                <div class="col-3"><span class="text-g-number">0000</span></div>
                <div class="col-3"><span class="text-g-number">2900</span>千米</div>
                <div class="col-3"><span class="text-g-number">2800</span>千焦</div>
                <div class="col-3"><span class="text-g-number">0000</span>万吨</div>
            </div>
        </div>
        <baidu-map :carShow="true" class="margin-top-10" mapHeight="height: 625px;" />
    </div>
</template>

<script>
import BaiduMap from '../../components/public/BaiduMap.vue'
export default {
    components: {  BaiduMap  },

}
</script>

<style scoped>
.top-margin {
    margin-top: 30px;
}
</style>