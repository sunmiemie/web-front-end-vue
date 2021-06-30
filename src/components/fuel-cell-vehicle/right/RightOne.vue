<template>
    <div class="col-12 text-center">
        <div class="row">
            <div class="col-12">燃料电池汽车厂商列表</div>
        </div>
        <div
            class="row border-aqua custom-scrollable"
            style="margin-top: 6px; height: 690px"
        >
            <div
                v-for="item in carList"
                :key="item.index"
                class="row row-unline col-12 clear-margin-padding"
            >
                <p v-text="item.name" class="col-6 text-left"></p>
                <p class="col-3">车辆总数</p>
                <p
                    class="col-3 text-green"
                >{{ item.number}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import {carCount} from "../../../api/tisinghua-static";

export default {
    data() {
        return {
            carList: [
                {
                    id: 1,
                    name: "北汽福田汽车股份有限公司",
                    number: 139,
                },
            ],
        };
    },
    components: {},
    methods: {
    },
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
