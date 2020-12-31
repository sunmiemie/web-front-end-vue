<template>
    <div
        class="margin-top-30 border-aqua"
        style="margin-left: 10px; width: 306px; height: 500px"
    >
        <div class="text-white">
            <p class="text-g text-center" style="line-height: 40px">
                车辆详细信息
            </p>
        </div>
        <div class="col-12 text-white" style="line-height: 35px">
            <div class="row">
                <p class="col-6">车牌号:</p>
                <p class="col-6 text-green-min text-right">123456</p>
            </div>
            <div class="row">
                <p class="col-6">车辆类型:</p>
                <p class="col-6 text-green-min text-right">公交车</p>
            </div>
            <div class="row">
                <p class="col-6">最大加注压力:</p>
                <p class="col-6 text-right">
                    <span class="text-green-min">35</span> Mpa
                </p>
            </div>
            <div class="row">
                <p class="col-6">氢储量:</p>
                <p class="col-6 text-green-min text-right">暂无</p>
            </div>
            <div class="row">
                <p class="col-6">载客量:</p>
                <p class="col-6 text-green-min text-right">暂无</p>
            </div>
            <div class="row">
                <p class="col-6">最大行驶速度:</p>
                <p class="col-6 text-green-min text-right">暂无</p>
            </div>
            <div class="row">
                <p class="col-6">车辆唯一标识码:</p>
                <p class="col-6 text-green-min text-right">暂无</p>
            </div>
            <div class="row">
                <p class="col-6">所属公司:</p>
                <p class="col-6 text-green-min text-right">暂无</p>
            </div>
            <div class="row">
                <p class="col-6">其他信息暂无:</p>
                <p class="col-6 text-green-min text-right">暂无</p>
            </div>
        </div>
        <div
            class="border-warn"
            style="
                width: 306px;
                height: 350px;
                margin-left: 0px;
                margin-top: 30px;
            "
        >
            <p class="text-center col-12 h5" style="line-height: 100px">
                安全责任人
            </p>
            <div class="driver"></div>
            <div class="row text-center">
                <p class="col-6">姓名:</p>
                <p class="col-6 text-green-min">xxx</p>
            </div>
            <div class="row text-center">
                <p class="col-6">联系方式:</p>
                <p class="col-6 text-green-min">12345678910</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.driver {
    width: 100px;
    height: 100px;
    position: relative;
    left: 50%;
    margin-left: -50px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
}
</style>