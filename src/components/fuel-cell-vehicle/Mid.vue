<template>
    <div>
        <div class="border-aqua top-margin">
            <div class="row text-center text-shadow">
                <div class="col-3">车辆总数</div>
                <div class="col-3">在线车辆</div>
                <div class="col-3">今日注册数</div>
                <div class="col-3">累计碳减排</div>
            </div>
            <div class="row text-center text-shadow">
                <div class="col-3"><span class="text-g-number">{{carCount}}</span>辆</div>
                <div class="col-3"><span class="text-g-number">{{onlineCar}}</span>辆</div>
                <div class="col-3"><span class="text-g-number">{{todayRegCount}}</span>辆</div>
                <div class="col-3"><span class="text-g-number">0000</span>万吨</div>
            </div>
        </div>
        <baidu-map :carShow="true" class="margin-top-10" mapHeight="height: 625px;" />
    </div>
</template>

<script>
import BaiduMap from '../../components/public/BaiduMap.vue'
// import {getAllVehicles} from "../../api/foton.js"
import {carCount,onlineCarCount} from "../../api/tisinghua-static"
export default {
    components: {  BaiduMap  },
    data() {
        return {
            onlineCar: 0,
            carCount: 0,
            todayRegCount: 0
        }
    },
    // async mounted() {
    //     const req = {token: "d1031dab966544129ff3618df9b0d57f"};
    //     const {data} = await getAllVehicles(req);
    //     this.onlineCar = data.data.onlineVehicleCount;
    //     this.carCount = data.data.regTerminalCount;
    //     this.todayRegCount = data.data.dayRegTerminalCount;
    // }
    async mounted() {
        this.carCount = await carCount();
        this.onlineCar = await onlineCarCount();
    },

}
</script>

<style scoped>
.top-margin {
    margin-top: 30px;
}
</style>
