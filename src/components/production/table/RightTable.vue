<template>
    <div class="col-12 text-center">
        <div class="row">
            <div class="col-4">制氢厂</div>
            <div class="col-3">储氢剩余量</div>
            <div class="col-5">储氢剩余比例</div>
        </div>
        <div class="row border-aqua custom-scrollable" style="margin-top: 6px;height:690px;">
            <div
                class="row col-12 row-unline clear-margin-padding"
                v-for="item in stationList"
                :key="item.index"
            >
                <router-link
                    :to="{ path: pathSimple, query: { name: item.name } }"
                    tag="p"
                    class="col-4"
                    v-text="item.name"
                ></router-link>
                <p class="col-3" v-text="item.value"></p>
                <div class="row text-center col-5">
                    <p
                        v-text="item.proportion[0] * 10 + '%'"
                        :class="
                            'bg-1 clear-margin-padding' +
                            ' col-' +
                            intWidth(item.proportion[0])
                        "
                    ></p>
                    <p
                        v-text="item.proportion[1] * 10 + '%'"
                        :class="
                            'bg-2 clear-margin-padding' +
                            ' col-' +
                            intWidth(item.proportion[1])
                        "
                    ></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pathSimple: "/h-production/production-simple",
            stationList: [
                {
                    name: "张家口海玻尔",
                    value: "40%",
                    proportion: [4, 6],
                },
                {
                    name: "房山京辉",
                    value: "40%",
                    proportion: [4, 6],
                },
                {
                    name: "京辉大兴",
                    value: "40%",
                    proportion: [1, 9],
                },
                {
                    name: "京辉张家口",
                    value: "40%",
                    proportion: [3, 7],
                },
                {
                    name: "中石油金龙",
                    value: "40%",
                    proportion: [4, 6],
                },
                {
                    name: "中石油福田",
                    value: "40%",
                    proportion: [5, 5],
                },
                {
                    name: "中关村延庆园",
                    value: "40%",
                    proportion: [4, 6],
                },
                {
                    name: "北京永丰",
                    value: "40%",
                    proportion: [6, 4],
                },
                {
                    name: "河钢化工邯郸",
                    value: "40%",
                    proportion: [7, 3],
                },
            ],
        };
    },
    components: {},
    methods: {
        intWidth(num) {
            return Math.round((num / 10) * 12);
        },
    },
};
</script>

<style scoped>
.bg-1 {
    background-color: #00b0b4;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    height: 25px;
    margin-top: 12.5px;
    line-height: 25px;
}
.bg-2 {
    background-color: transparent;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    height: 25px;
    margin-top: 12.5px;
    line-height: 25px;
    border: 1px solid aqua;
}
.row-unline {
    height: 50px;
    border-bottom: 1px dotted aquamarine;
}
p {
    line-height: 50px;
}
p:hover {
    cursor: pointer;
}
</style>