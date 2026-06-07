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
                    <div>当前FC功率</div>
                    <div>
                        <span class="text-g-number">{{ powerKw }}</span
                        >kW
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
    props: { VSData: { type: Object, default: () => ({}) } },
    computed: {
        powerKw() {
            const values = [this.VSData.fcCurrent, this.VSData.fcVoltage];
            if (values.some(value => value === null || value === undefined || value === '' || !Number.isFinite(Number(value)))) return '-';
            return Number((Number(values[0]) * Number(values[1]) / 1000).toFixed(2));
        },
    },
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