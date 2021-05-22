<template>
  <scales>
       <top-nav/>
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <h-top class="col-3" />
            <h-top-mid :manufactureData="manufactureData" class="col-6" />
            <h-top-right  class="col-3 clear-margin-padding"/>
        </div>
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <h-bottom class="col-12" />
        </div>
  </scales>
</template>

<script>
import HBottom from '../components/production/HBottom.vue'
import HTop from '../components/production/HTop.vue'
import HTopMid from '../components/production/HTopMid.vue'
import HTopRight from '../components/production/HTopRight.vue'
import Scales from '../components/public/Scales.vue'
import TopNav from '../components/public/TopNav.vue'
import {statisticalManufacture, statisticalManufactureList} from "../api/tisinghua-static"
export default {
    components: { Scales, TopNav, HBottom, HTop, HTopMid, HTopRight,  },
    data() {
        return {
            manufactureData: {
                day: 0,
                month: 0,
            }
        };
    },
    async mounted() {
        const day = {
            date: "day"
        };
        const month = {
            date: "month"
        };
        this.manufactureData.day = await statisticalManufacture(day);
        this.manufactureData.month = await statisticalManufacture(month);
    }

}
</script>

<style>

</style>