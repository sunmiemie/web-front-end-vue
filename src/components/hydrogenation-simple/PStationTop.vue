<template>
    <div class="col-12 margin-top-10">
        <div class="margin-top-10">
            <div class="row text-center top-height text-shadow">
                <div class="col-2 border-aqua">
                    <div>当日加氢量</div>
                    <div><span class="text-g-number">{{ addData.addDay.data}}</span>KG</div>
                </div>
                <div class="col-2 border-aqua">
                    <div>当月加氢量</div>
                    <div><span class="text-g-number">{{ addData.addMonth.data}}</span>KG</div>
                </div>
                <div class="col-2 border-aqua">
                    <div>累计加氢量</div>
                    <div><span class="text-g-number">{{ addData.addYear.data}}</span>KG</div>
                </div>
                <div class="col-2 border-aqua">
                    <div>今日加氢次数</div>
                    <div><span class="text-g-number">0000</span>次</div>
                </div>
                <div class="col-2 border-aqua">
                    <div>剩余储氢量</div>
                    <div><span class="text-g-number">0000</span>KG</div>
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
    props:["addData"]
}
</script>

<style scoped>
.top-height {
    height: 100px;
    line-height: 50px;
}
</style>