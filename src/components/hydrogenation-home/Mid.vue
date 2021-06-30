<template>
    <div>
        <div class="border-aqua top-margin">
            <div class="row text-center text-shadow">
                <div class="col-3">燃料电池CHP总数</div>
                <div class="col-3">燃料电池CHP运行数</div>
                <div class="col-4">累计发电/热/冷</div>
                <div class="col-2">累计碳减排</div>
            </div>
            <div class="row text-center text-shadow">
                <div class="col-3"><span class="text-g-number">398</span></div>
                <div class="col-3"><span class="text-g-number">374</span></div>
                <div class="col-4"><span
                    class="text-g-number">213459<span>kWh</span> 34578<span>GJ</span> 25933<span>GJ</span></span></div>
                <div class="col-2"><span class="text-g-number">0.239</span>万吨</div>
            </div>
        </div>
        <baidu-map-home :carShow="false" class="margin-top-10" mapHeight="height: 625px;" />
    </div>
</template>

<script>
import BaiduMapHome from '../../components/public/BaiduMapHome.vue';
import $ from 'jquery';

export default {
    components: {BaiduMapHome},
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {


        },
    },

}
</script>

<style scoped>
.top-margin {
    margin-top: 30px;
}
</style>
