<template>
    <scales>
        <top-nav />
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <div class="col-9 clear-margin-padding">
                <baidu-map
                    class="col-12 clear-margin-padding"
                    mapHeight="height: 700px;margin-top:35px;margin-bottom: 15px;margin-right: 15px;"
                />
                <div class="col-12 bottom-height margin-top-10">
                    <div class="row">
                        <div class="col-5 border-aqua">
                            <transport-car-list :CarrierDataList="dataCarrierList" />
                        </div>
                        <div class="col-2 border-warn">
                            <p class="text-center h5 margin-top-10">当前报警状态</p>
                            <p class="text-center col-12 h4 text-green">正常</p>
                        </div>
                        <div class="col-5">
                            <transport-bottom />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-3 clear-margin-padding" style="height: 990px">
                <transport-right />
            </div>
        </div>
    </scales>
</template>
<script>
import BaiduMap from "../components/public/BaiduMap.vue";
import Scales from "../components/public/Scales.vue";
import TopNav from "../components/public/TopNav.vue";
import TransportBottom from "../components/transport/table/TransportBottom.vue";
import TransportCarList from "../components/transport/table/TransportCarList.vue";
import TransportRight from "../components/transport/TransportRight.vue";
import {
    allCarrierAddr
} from "../api/tisinghua-static";
export default {
    components: {
        Scales,
        TopNav,
        BaiduMap,
        TransportRight,
        TransportBottom,
        TransportCarList,
    },
    data() {
        return {
            dataCarrierList: null,
        }
    },
    async mounted() {
        this.dataCarrierList = await allCarrierAddr();
    },
    methods: {
        
    },
};
</script>

<style>
</style>