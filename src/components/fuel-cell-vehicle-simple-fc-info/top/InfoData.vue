<template>
    <div class="col-12 margin-top-10">
        <div class="margin-top-10">
            <div class="row text-center top-height text-shadow">
                <div class="col-2 border-aqua">
                    <div>当前氢气流量</div>
                    <div><span class="text-g-number" v-text="InfoData.fcuAnodFlow">0010</span>g/s</div>
                </div>
                <div class="col-2 border-aqua">
                    <div>当前空气流量</div>
                    <div><span class="text-g-number" v-text="InfoData.fcuCathFlow">0000</span>g/s</div>
                </div>
                <div class="col-2 border-aqua">
                    <div>当前FC电压</div>
                    <div><span class="text-g-number" v-text="InfoData.fcVoltage">0000</span>V</div>
                </div>
                <div class="col-2 border-aqua">
                    <div>当前FC电流</div>
                    <div><span class="text-g-number" v-text="InfoData.fcCurrent">0000</span>A</div>
                </div>
                <div class="col-2 border-aqua">
                    <div>当前氢气浓度</div>
                    <div><span class="text-g-number" v-text="InfoData.fcH2ConcMax">0000</span>%</div>
                </div>
                <div class="col-2 border-aqua">
                    <div>整体安全等级</div>
                    <div><span class="text-g-number">高</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["InfoData"]
}
</script>

<style scoped>
.top-height {
    height: 100px;
    line-height: 50px;
}
</style>