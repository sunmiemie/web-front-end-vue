<template>
    <div class="col-12 margin-top-30">
        <p class="text-center h4 text-g">压缩机</p>
        <div class="row text-center">
            <div
                class="col-3 clear-margin-padding can-list-h-scrollable border-aqua"
            >
                <table class="table">
                    <tbody>
                       <tr v-for="item in 10" :key="item">
                            <td><span class="text-g h5" v-text="item"></span>号压缩机</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-6">
                <table class="table border-aqua" style="height: 351px">
                    <thead>
                        <tr>
                            <td>压缩机编码</td>
                            <td>
                                <span class="text-green-min">HBID-CQ-01</span>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>压缩机状态</td>
                            <td class="text-green-min">正常</td>
                        </tr>
                        <tr>
                            <td>压缩机进气压力</td>
                            <td><span class="text-green-min">xx</span> Mpa</td>
                        </tr>
                        <tr>
                            <td>压缩机排气压力</td>
                            <td><span class="text-green-min">xx</span> Mpa</td>
                        </tr>
                        <tr>
                            <td>压缩机排气温度</td>
                            <td><span class="text-green-min">xx</span> ℃</td>
                        </tr>
                        <tr>
                            <td>压缩机运行时间</td>
                            <td><span class="text-green-min">xx</span> min</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-3 clear-margin-padding border-warn" style="height: 351px;">
                <p class="text-center text-green margin-top-30">储氢罐-安全责任人</p>
                <div class="row text-center">
                    <p class="col-6">姓名:</p>
                    <p class="col-6">xxx</p>
                </div>
                <div class="row text-center">
                    <p class="col-6">联系方式:</p>
                    <p class="col-6 font-number-min">12345678910</p>
                </div>
                <p class="text-center text-green margin-top-30">压缩机-安全责任人</p>
                <div class="row text-center">
                    <p class="col-6">姓名:</p>
                    <p class="col-6">xxx</p>
                </div>
                <div class="row text-center">
                    <p class="col-6">联系方式:</p>
                    <p class="col-6 font-number-min">12345678910</p>
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