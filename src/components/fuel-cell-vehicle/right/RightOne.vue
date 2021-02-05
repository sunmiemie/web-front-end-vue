<template>
    <div class="col-12 text-center">
        <div class="row">
            <div class="col-12">燃料电池汽车厂商列表</div>
        </div>
        <div
            class="row border-aqua custom-scrollable"
            style="margin-top: 6px; height: 690px"
        >
            <p class="text-center col-12 clear-margin-padding">客车厂商列表</p>
            <div
                v-for="item in PassengerCar"
                :key="item.index"
                class="row row-unline col-12 clear-margin-padding"
            >
                <p v-text="item.name" class="col-6 text-left"></p>
                <p
                    v-text="item.number"
                    :class="'bg-1' + ' col-' + intWidth(item.number,529)"
                ></p>
            </div>
            <p class="text-center col-12 clear-margin-padding">物流车厂商列表</p>
            <div
                v-for="item in LogisticsVehicles"
                :key="item.index"
                class="row row-unline col-12 clear-margin-padding"
            >
                <p v-text="item.name" class="col-6 text-left"></p>
                <p
                    v-text="item.number"
                    :class="'bg-1' + ' col-' + intWidth(item.number,1332)"
                ></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            PassengerCar: [
                {
                    id: 1,
                    name: "佛山飞驰汽车制造有限公司",
                    number: 529,
                },
                {
                    id: 2,
                    name: "上汽大通汽车有限公司",
                    number: 407,
                },
                {
                    id: 3,
                    name: "郑州宇通客车股份有限公司",
                    number: 290,
                },
                {
                    id: 4,
                    name: "厦门金龙旅行车有限公司",
                    number: 246,
                },
                {
                    id: 5,
                    name: "云南五龙汽车有限公司",
                    number: 200,
                },
                {
                    id: 6,
                    name: "中通客车控股股份有限公司",
                    number: 177,
                },
                {
                    id: 7,
                    name: "北汽福田汽车股份有限公司",
                    number: 139,
                },
                {
                    id: 8,
                    name: "上海申龙客车有限公司",
                    number: 124,
                },
                {
                    id: 9,
                    name: "成都客车股份有限公司",
                    number: 100,
                },
                {
                    id: 10,
                    name: "南京金龙客车制造有限公司",
                    number: 86,
                }
                
            ],
            LogisticsVehicles: [
                {
                    id: 1,
                    name: "中通客车控股股份有限公司",
                    number: 1332,
                },
                {
                    id: 2,
                    name: "上海申龙客车有限公司",
                    number: 808,
                },
                {
                    id: 3,
                    name: "东风汽车公司",
                    number: 584,
                },
                {
                    id: 4,
                    name: "佛山飞驰汽车制造有限公司",
                    number: 170,
                },
                {
                    id: 5,
                    name: "金华青年汽车制造有限公司",
                    number: 91,
                },
                {
                    id: 6,
                    name: "北汽福田汽车股份有限公司",
                    number: 65,
                },
                {
                    id: 7,
                    name: "南通皋开汽车制造有限公司",
                    number: 57,
                },
                {
                    id: 8,
                    name: "江苏奥新新能源汽车有限公司",
                    number: 12,
                },
                {
                    id: 9,
                    name: "江铃重型汽车有限公司",
                    number: 10,
                }
            ],
        };
    },
    components: {},
    methods: {
        intWidth(num,than) {
            return Math.round((num / than) * 6);
        },
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