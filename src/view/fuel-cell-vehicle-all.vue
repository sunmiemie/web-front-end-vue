<template>
  <scales>
       <top-nav/>
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <left class="col-3" />
            <mid  class="col-6" />
            <right class="col-3 clear-margin-padding" />
        </div>
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <bottom class="col-12"  />
        </div>
  </scales>
</template>

<script>
import Bottom from '../components/fuel-cell-vehicle/Bottom.vue'
import Left from '../components/fuel-cell-vehicle/Left.vue'
import Mid from '../components/fuel-cell-vehicle/Mid.vue'
import Right from '../components/fuel-cell-vehicle/Right.vue'
import Scales from '../components/public/Scales.vue'
import TopNav from '../components/public/TopNav.vue'
export default {
    components: { Scales, TopNav, Bottom, Right, Mid, Left,   },
}
</script>

<style>

</style>
