<template>
    <div>
        <div class="row">
            <p class="text-center col-12">运氢车信息列表</p>
        </div>
        <div class="row text-center col-12 clear-margin-padding">
            <p class="col-3" v-text="carListTitle[0]"></p>
            <p class="col-3" v-text="carListTitle[1]"></p>
            <p class="col-3" v-text="carListTitle[2]"></p>
            <p class="col-3" v-text="carListTitle[3]"></p>
        </div>
        <div class="row car-list-scrollable">
        <div class="row text-center col-12 car-list-unline clear-margin-padding" v-for="item in CarrierDataList" :key="item.id">
            <p class="col-3" v-text="item.name"></p>
            <router-link :to="{ path: carPath, query: { carrierId: item.id }}" tag="p" class="col-3" v-text="item.id"></router-link>
            <p class="col-3 text-glod" v-text="2000"></p>
            <div class="col-3 clear-margin-padding" v-if="0">
                <p class="col-12 text-green">运输中</p>
            </div>
            <div class="col-3 clear-margin-padding" v-else>
                <p class="col-12">未运输</p>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    props: ["CarrierDataList"],
    data() {
        return {
            carPath: "/h-transportation/transport-simple",
            carListTitle: ["车型","车辆ID","运氢量/Kg","状态"],
        }
    }
}
</script>

<style>
.car-list-unline {
    border-bottom: 1px dotted aqua;
}
p:hover {
    cursor: pointer;
}
</style>