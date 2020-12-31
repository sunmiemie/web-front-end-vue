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
             <!-- <div class="row col-12 row-unline clear-margin-padding" v-for="item in stationList" :key="item.index">
                
                <p class="col-3" v-text="item.value"></p>
                <div class="row text-center col-5">
                    <p v-text="item.proportion[0]*10 + '%'" :class="'bg-1 clear-margin-padding' + ' col-' + intWidth(item.proportion[0])"></p>
                    <p v-text="item.proportion[1]*10 + '%'" :class="'bg-2 clear-margin-padding' + ' col-' + intWidth(item.proportion[1])"></p>
                </div>
            </div> -->
        <div class="row text-center col-12 car-list-unline clear-margin-padding" v-for="item in carStatu" :key="item.id">
            <p class="col-3" v-text="item.type"></p>
            <router-link :to="{ path: carPath, query: { name: item.plate }}" tag="p" class="col-3" v-text="item.plate"></router-link>
            <p class="col-3 text-glod" v-text="item.hNumber"></p>
            <div class="col-3 clear-margin-padding" v-if="item.statu">
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
    data() {
        return {
            carPath: "/h-transportation/transport-simple",
            carListTitle: ["车型","车牌","运氢量/Kg","状态"],
            carStatu: [{
                id: 1,
                type: "ABC-123-DEF",
                plate: "京B17444E",
                statu: true,
                hNumber: 2000
            },{
                id: 2,
                type: "ABC-123-DEF",
                plate: "京B17444E",
                statu: false,
                hNumber: 2000
            },{
                id: 3,
                type: "ABC-123-DEF",
                plate: "京B17444E",
                statu: true,
                hNumber: 2000
            },{
                id: 4,
                type: "ABC-123-DEF",
                plate: "京B17444E",
                statu: false,
                hNumber: 2000
            },{
                id: 5,
                type: "ABC-123-DEF",
                plate: "京B17444E",
                statu: true,
                hNumber: 2000
            },{
                id: 6,
                type: "ABC-123-DEF",
                plate: "京B17444E",
                statu: false,
                hNumber: 2000
            },{
                id: 7,
                type: "ABC-123-DEF",
                plate: "京B17444E",
                statu: true,
                hNumber: 2000
            },{
                id: 8,
                type: "ABC-123-DEF",
                plate: "京B17444E",
                statu: false,
                hNumber: 2000
            },{
                id: 9,
                type: "ABC-123-DEF",
                plate: "京B17444E",
                statu: true,
                hNumber: 2000
            },{
                id: 10,
                type: "ABC-123-DEF",
                plate: "京B17444E",
                statu: true,
                hNumber: 2000
            }]
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