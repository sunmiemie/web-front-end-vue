<template>
  <scales>
       <top-nav/>
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <h-top class="col-3" />
            <h-top-mid class="col-6" />
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
export default {
    components: { Scales, TopNav, HBottom, HTop, HTopMid, HTopRight,  },

}
</script>

<style>

</style>