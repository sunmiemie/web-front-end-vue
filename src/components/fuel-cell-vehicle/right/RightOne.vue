<template>
    <div class="col-12 text-center">
        <div class="row">
            <div class="col-12">设备列表</div>
        </div>
        <div
            class="row border-aqua custom-scrollable cl"
            style="margin-top: 6px; height: 690px"
        >
            <div class="col-12 clear-margin-padding">
                <p>客车厂商列表</p>
                <div
                    v-for="item in carList"
                    :key="item.index"
                    class="row row-unline col-12 clear-margin-padding"
                >
                    <p v-text="item.name" class="col-8 text-left"></p>
                    <p
                        class="col-4 text-green font-number"
                    >{{ item.number }}
                        <span>辆</span>
                    </p>
                </div>
                <p>物流车厂商列表</p>
                <div
                    v-for="item in logistics"
                    :key="item.index"
                    class="row row-unline col-12 clear-margin-padding"
                >
                    <p v-text="item.name" class="col-8 text-left"></p>
                    <p
                        class="col-4 text-green font-number"
                    >{{ item.number }}
                        <span>辆</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {carCount} from "../../../api/tisinghua-static";

export default {
    data() {
        return {
            logistics: [
                {
                    id: 1,
                    name: "北汽福田汽车股份有限公司",
                    number: 60,
                },
                {
                    id: 2,
                    name: "佛山飞驰汽车制造有限公司",
                    number: 35,
                },
                {
                    id: 3,
                    name: "东风汽车公司",
                    number: 29,
                },
                {
                    id: 4,
                    name: "江苏奥新新能源汽车有限公司",
                    number: 25,
                },
                {
                    id: 5,
                    name: "江铃重型汽车有限公司",
                    number: 17,
                },
            ],
            carList: [
                {
                    id: 1,
                    name: "北汽福田汽车股份有限公司",
                    number: 195,
                },
                {
                    id: 2,
                    name: "郑州宇通客车股份有限公司",
                    number: 37,
                },
                {
                    id: 3,
                    name: "中通客车控股股份有限公司",
                    number: 25,
                },
                {
                    id: 4,
                    name: "上海申龙客车有限公司",
                    number: 20,
                },
                {
                    id: 5,
                    name: "南京金龙客车制造有限公司",
                    number: 12,
                },
            ],
        };
    },
    components: {},
    methods: {},
    async mounted() {
        this.carList[0].number = await carCount();
    },
};
</script>

<style scoped>
.row-unline {
    height: 50px;
    border-bottom: 1px dotted aquamarine;
}

p {
    line-height: 55px;
}

.bg-1 {
    background-color: #00b0b4;
    border-radius: 10px;
    height: 25px;
    margin-top: 12.5px;
    line-height: 25px;
}
</style>
