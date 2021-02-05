<template>
    <div class="col-12 margin-top-30">
        <div class="row">
            <div class="col-4 border-aqua">
                <p class="h5 text-center margin-top-10">制氢厂注册信息</p>
                <div class="row col-12 unline margin-top-30">
                    <span class="col-4">制氢厂类型:</span>
                    <span class="col-8 text-green text-right">电解水型</span>
                </div>
                <div class="row col-12 unline">
                    <span class="col-4">制氢厂编号:</span>
                    <span class="col-8 text-green text-right">ABCDEF</span>
                </div>
                <div class="row col-12 unline">
                    <span class="col-4">制氢厂名称:</span>
                    <span class="col-8 text-green text-right">张家口海珀尔新能源科技有限公司</span>
                </div>
                <div class="row col-12 unline">
                    <span class="col-4">制氢厂厂址:</span>
                    <span class="text-green col-8 text-right">张家口桥东区望山循环经济开发区</span>
                </div>
                <div class="row col-12 unline">
                    <span class="col-4">制氢设备名称:</span>
                    <span class="col-8 text-green text-right">电解水制氢</span>
                </div>
                <div class="row col-12 unline">
                    <span class="col-6">电解槽制氢设备数:</span>
                    <span class="col-6 text-green text-right">4</span>
                </div>
                <div class="row col-12">
                    <span class="col-6">非电解槽制氢设备数:</span>
                    <span class="col-6 text-green text-right">20</span>
                </div>
            </div>
            <div class="col-4">
                <month-production />
            </div>
            <div class="col-2 border-aqua">
                <p class="h5 text-center margin-top-10">当日运氢车</p>
                <div class="row text-center">
                    <span class="col-6">编号</span>
                    <span class="col-6">运氢量/kg</span>
                </div>
                <div class="car-list-h-scrollable">
                    <div class="row text-center unline clear-margin-padding">
                        <span class="col-6">1232113</span>
                        <span class="col-6 text-g font-number">3200</span>
                    </div>
                    <div class="row text-center unline clear-margin-padding">
                        <span class="col-6">1232113</span>
                        <span class="col-6 text-g font-number">3200</span>
                    </div>
                    <div class="row text-center unline clear-margin-padding">
                        <span class="col-6">1232113</span>
                        <span class="col-6 text-g font-number">3200</span>
                    </div>
                    <div class="row text-center unline clear-margin-padding">
                        <span class="col-6">1232113</span>
                        <span class="col-6 text-g font-number">3200</span>
                    </div>
                    <div class="row text-center unline clear-margin-padding">
                        <span class="col-6">1232113</span>
                        <span class="col-6 text-g font-number">3200</span>
                    </div>
                    <div class="row text-center unline clear-margin-padding">
                        <span class="col-6">1232113</span>
                        <span class="col-6 text-g font-number">3200</span>
                    </div>
                    <div class="row text-center unline clear-margin-padding">
                        <span class="col-6">1232113</span>
                        <span class="col-6 text-g font-number">3200</span>
                    </div>
                </div>
            </div>
            <div class="col-2">
                <div class="row text-center border-aqua">
                    <span class="col-6">故障信息:</span>
                    <span class="col-6 text-green">无</span>
                </div>
                <div class="row text-center border-aqua margin-top-10">
                    <span class="col-6">氢气泄漏:</span>
                    <span class="col-6 text-green">无</span>
                </div>
                <div class="row margin-top-10 border-aqua">
                    <count-production />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CountProduction from './table/CountProduction.vue'
import MonthProduction from './table/MonthProduction.vue'
export default {
    components: {MonthProduction, CountProduction}
}
</script>

<style scoped>
span {
    display: inline-block;
    line-height: 35px;
}
</style>