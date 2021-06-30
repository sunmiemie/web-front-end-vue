<template>
    <div class="h-bottom">
        <div class="row">
            <bottom-four class="col-3 border-aqua" />
            <bottom-three class="col-3 border-aqua" />
            <div class="col-3 border-aqua">
                <div class="row col-12 text-center">
                    <p class="col-6 line-heihgt">设备种类分布</p>
                    <p class="col-6 line-heihgt">地区分布</p>
                </div>
                <div class="row">
                    <bottom-one class="col-12" />
                </div>
            </div>
            <bottom-two class="col-3 border-warn" />
        </div>
    </div>
</template>

<script>
import BottomFour from './bottom/BottomFour.vue'
import BottomOne from './bottom/BottomOne.vue'
import BottomThree from './bottom/BottomThree.vue'
import BottomTwo from './bottom/BottomTwo.vue'
export default {
    components: {BottomOne, BottomTwo, BottomThree, BottomFour },
}
</script>

<style scoped>
.h-bottom {
    height: 240px;
}
.line-heihgt {
    line-height: 35px;;
}
</style>>
