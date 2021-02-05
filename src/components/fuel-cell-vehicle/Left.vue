<template>
    <div class="top">
        <div class="row">
            <div class="col-12">
                <div class="" style="height: 30px;line-height:30px;">燃料电池输出能量和功率</div>
            </div>
        </div>
        <div class="row border-aqua">
            <left-one />
        </div>
        <div class="row">
            <div class="col-12">
                <p class="top-line-height">当月车辆耗氢</p>
            </div>
        </div>
        <div class="row border-aqua">
            <left-two />
        </div>
        <div class="row">
            <div class="col-12">
                <p class="top-line-height">当月行驶里程</p>
            </div>
        </div>
        <div class="row border-aqua">
            <left-three />
        </div>
    </div>
</template>

<script>
import LeftOne from './left/LeftOne.vue'
import LeftTwo from './left/LeftTwo.vue'
import LeftThree from './left/LeftThree.vue'
export default {
    components: {
        LeftOne,
        LeftTwo,
        LeftThree
    }
}
</script>

<style scoped>
.top {
    height: 750px;
}
.top-line-height {
    height: 20px;line-height:30px;
}
</style>>