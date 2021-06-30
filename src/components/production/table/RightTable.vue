<template>
    <div class="col-12 text-center">
        <div class="row text-center clear-margin-padding">
            <div class="col-6">制氢厂</div>
            <div class="col-3">储氢剩余量</div>
            <div class="col-3">储氢剩余比</div>
        </div>
        <div class="row border-aqua custom-scrollable" style="margin-top: 6px;height:690px;">
            <div
                class="row col-12 row-unline clear-margin-padding"
                v-for="item in factoryAddr"
                :key="item.index"
            >
                <router-link
                    :to="{ path: pathSimple, query: { name: item.name } }"
                    tag="p"
                    class="col-6"
                    v-text="item.name"
                ></router-link>
                <div class="row text-center col-6">
                    <p class="col-6 text-center text-green">暂无</p>
                    <p class="col-6 text-center text-green">暂无</p>
<!--                    <p
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
                    ></p>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {allFactoryAddr} from "../../../api/tisinghua-static";
export default {
    data() {
        return {
            pathSimple: "/h-production/production-simple",
            factoryAddr: [],
        };
    },
    components: {},
    methods: {
        intWidth(num) {
            return Math.round((num / 10) * 12);
        },
    },
    async mounted() {
        this.factoryAddr = await allFactoryAddr();
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
