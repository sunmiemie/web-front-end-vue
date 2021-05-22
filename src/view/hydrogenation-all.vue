<template>
  <scales>
       <top-nav/>
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <h-top class="col-3" />
            <h-top-mid :addTotal="addTotal" class="col-6" />
            <h-top-right  class="col-3 clear-margin-padding"/>
        </div>
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <h-bottom class="col-12" />
        </div>
  </scales>
</template>

<script>
import HBottom from '../components/hydrogenation/HBottom.vue'
import HTop from '../components/hydrogenation/HTop.vue'
import HTopMid from '../components/hydrogenation/HTopMid.vue'
import HTopRight from '../components/hydrogenation/HTopRight.vue'
import Scales from '../components/public/Scales.vue'
import TopNav from '../components/public/TopNav.vue'
import {statisticalAdd, statisticalAddList} from "../api/tisinghua-static"
export default {
    components: { Scales, TopNav, HBottom, HTop, HTopMid, HTopRight,  },
    data() {
        return {
            addTotal: {
                aDay: 0,
                aMonth: 0,
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
        this.addTotal.aDay = await statisticalAdd(day);
        this.addTotal.aMonth = await statisticalAdd(month);
    }

}
</script>

<style>

</style>