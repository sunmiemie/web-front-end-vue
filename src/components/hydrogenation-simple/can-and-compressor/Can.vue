<template>
    <div class="col-12 margin-top-30">
        <p class="text-center h4 text-g">储氢罐</p>
        <div class="row text-center">
            <div
                class="col-3 clear-margin-padding can-list-h-scrollable border-aqua"
            >
                <table class="table">
                    <tbody>
                        <tr v-for="item in 10" :key="item">
                            <td><span class="text-g h5" v-text="item"></span>号储氢罐</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-6">
                <table class="table border-aqua" style="height: 351px">
                    <thead>
                        <tr>
                            <td>储氢容器编码</td>
                            <td>
                                <span class="text-green-min">HBID-CQ-01</span>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>储氢罐压力</td>
                            <td class="text-green-min">PT021</td>
                        </tr>
                        <tr>
                            <td>储氢量</td>
                            <td><span class="text-green-min">xx</span> Kg</td>
                        </tr>
                        <tr>
                            <td>储氢罐下次检验时间</td>
                            <td>
                                <span class="text-green-min">2020-12-10</span>
                            </td>
                        </tr>
                        <tr>
                            <td>储氢罐安全阀下次检验时间</td>
                            <td>
                                <span class="text-green-min">2020-12-10</span>
                            </td>
                        </tr>
                        <tr>
                            <td>储氢罐压力表下次检验时间</td>
                            <td>
                                <span class="text-green-min">2020-12-10</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-3 clear-margin-padding">
                <div class="border-aqua can-heihgt">
                    <p class="h5 can-line-heihgt">储氢总量</p>
                    <p><span class="font-number">0000</span> KG</p>
                </div>
                <div class="border-aqua can-heihgt margin-top-10">
                    <p class="h5 can-line-heihgt">储氢罐个数</p>
                    <p><span class="font-number">0000</span> 个</p>
                </div>
                <div class="border-aqua can-heihgt margin-top-10">
                    <p class="h5 can-line-heihgt">储氢罐压力</p>
                    <p><span class="font-number">0000</span> Mpa</p>
                </div>
                <div class="border-aqua can-heihgt margin-top-10">
                    <p class="h5 can-line-heihgt">储氢罐温度</p>
                    <p><span class="font-number">0000</span> ℃</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.can-line-heihgt {
    line-height: 40px;
}
.can-heihgt {
    height: 80px;
}
</style>