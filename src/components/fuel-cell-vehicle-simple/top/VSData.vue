<template>
    <div class="col-12 margin-top-10">
        <div class="margin-top-10">
            <div class="row text-center top-height text-shadow">
                <div class="col-2 border-aqua">
                    <div>当前车速</div>
                    <div>
                        <span class="text-g-number">{{ VSData.vehSpeed }}</span
                        >Km/h
                    </div>
                </div>
                <div class="col-2 border-aqua">
                    <div>当前氢气消耗</div>
                    <div>
                        <span class="text-g-number">{{ VSData.fcFuelConsRate }}</span
                        >KG
                    </div>
                </div>
                <div class="col-2 border-aqua">
                    <div>当前FC电压</div>
                    <div>
                        <span class="text-g-number">{{ VSData.fcVoltage }}</span
                        >V
                    </div>
                </div>
                <div class="col-2 border-aqua">
                    <div>当前FC电流</div>
                    <div>
                        <span class="text-g-number">{{ VSData.fcCurrent }}</span
                        >A
                    </div>
                </div>
                <div class="col-2 border-aqua">
                    <div>当前电机功率</div>
                    <div>
                        <span class="text-g-number">{{ VSData.fcCurrent * VSData.fcVoltage }}</span
                        >KW
                    </div>
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
    props: ["VSData"],
    data() {
        return {
            itervalId: null,
        };
    },
    beforeDestroy() {
        clearInterval(this.itervalId);
    },
};
</script>

<style scoped>
.top-height {
    height: 100px;
    line-height: 50px;
}
</style>