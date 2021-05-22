<template>
    <div class="col-9 index-right" id="right">
        <div class="row">
            <baidu-map class="col-9" mapHeight="height: 695px; margin-top: 33px" />
            <index-mid :addTotalData="rData" />
        </div>
    </div>
</template>

<script>
import BaiduMap from '../public/BaiduMap.vue'
import IndexMid from './IndexMid.vue'
export default {
    props: ["rData"],
    components: { IndexMid,BaiduMap },
}
</script>

<style scoped>
.index-right {
    height: 750px;
    /* border: 1px solid white; */
}
</style>