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
                <p>燃料电池CHP列表</p>
                <div
                    v-for="item in chpList"
                    :key="item.index"
                    class="row row-unline col-12 clear-margin-padding"
                >
                    <p v-text="item.name" class="col-8 text-left"></p>
                    <p
                        class="col-4 text-green font-number"
                    >{{ item.number }}
                    </p>
                </div>
                <p>辅助设备列表</p>
                <div
                    v-for="item in auxiliary"
                    :key="item.index"
                    class="row row-unline col-12 clear-margin-padding"
                >
                    <p v-text="item.name" class="col-8 text-left"></p>
                    <p
                        class="col-4 text-green font-number"
                    >{{ item.number }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            chpList: [
                {
                    id: 1,
                    name: "Purecell M400 NG",
                    number: 4,
                },
                {
                    id: 2,
                    name: "Enefarm Type S",
                    number: 394,
                },
            ],
            auxiliary: [
                {
                    id: 1,
                    name: "MKG-42GH(溴冷补燃)",
                    number: 2,
                },
            ],
        };
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
