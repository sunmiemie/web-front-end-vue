<template>
    <div class="index-r-b col-3">
        <div class="row">
            <p class="col-12 text-center h5">加氢站监控</p>
        </div>
        <div class="row border-aqua">
            <div class="col-12">
                <div class="row">
                    <div class="col-7">
                        <p clas>本日加氢量</p>
                    </div>
                    <div class="col-5">
                        <p class="text-right">
                            <span class="font-number">{{
                                addTotalData.aDay.data
                            }}</span
                            >KG
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-7">
                        <p clas>本月加氢量</p>
                    </div>
                    <div class="col-5">
                        <p class="text-right">
                            <span class="font-number">{{
                                addTotalData.aMonth.data
                            }}</span
                            >KG
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-7">
                        <p clas>本年加氢量</p>
                    </div>
                    <div class="col-5">
                        <p class="text-right">
                            <span class="font-number">{{
                                addTotalData.aYear.data
                            }}</span
                            >KG
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row border-aqua margin-top-10">
            <double-table />
        </div>
        <div class="row margin-top-10">
            <p class="col-12 text-center h5">车俩监控</p>
        </div>
        <div class="row border-aqua">
            <div class="col-12">
                <div class="row">
                    <div class="col-7">
                        <p clas>当前接入车辆</p>
                    </div>
                    <div class="col-5">
                        <p class="text-right font-number">
                            {{ addTotalData.carCount }}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-7">
                        <p clas>当前车辆报警数</p>
                    </div>
                    <div class="col-5">
                        <p
                            class="text-right font-number"
                        >5</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row border-aqua margin-top-10">
            <index-car class="clear-margin-padding" />
        </div>
    </div>
</template>

<script>
import DoubleTable from "../table/DoubleTable.vue";
import IndexCar from "../table/IndexCar.vue";
export default {
    props: ["addTotalData"],
    components: { DoubleTable, IndexCar },
};
</script>

<style>
.index-r-b {
    height: 750px;
    border-bottom: 1px solid yellow;
}
</style>