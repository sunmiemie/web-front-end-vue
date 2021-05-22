<template>
    <div class="col-3 index-left">
        <div class="row">
            <p class="col-12 text-center h5">制氢厂监控 (kg)</p>
        </div>
        <div class="row border-aqua">
            <div class="row col-12">
                <div class="col-6">
                    <p>
                        本日制氢量&nbsp;&nbsp;&nbsp;&nbsp;<span
                            class="font-number"
                            >
                            {{ lData.pDay.data }}
                            </span
                        >
                    </p>
                </div>
                <div class="col-6">
                    <p>
                        本日售氢量&nbsp;&nbsp;&nbsp;&nbsp;<span
                            class="font-number"
                            >
                            {{ lData.sellDay.data }}
                            </span
                        >
                    </p>
                </div>
            </div>
            <div class="row col-12">
                <div class="col-6">
                    <p>
                        本月制氢量&nbsp;&nbsp;&nbsp;&nbsp;<span
                            class="font-number"
                            >
                            {{ lData.pMonth.data }}
                            </span
                        >
                    </p>
                </div>
                <div class="col-6">
                    <p>
                        本月售氢量&nbsp;&nbsp;&nbsp;&nbsp;<span
                            class="font-number"
                            >
                            {{ lData.sellMonth.data }}
                            </span
                        >
                    </p>
                </div>
            </div>
            <div class="row col-12">
                <div class="col-6">
                    <p>
                        本年制氢量&nbsp;&nbsp;&nbsp;&nbsp;<span
                            class="font-number"
                            >
                            {{ lData.pYear.data }}
                            </span
                        >
                    </p>
                </div>
                <div class="col-6">
                    <p>
                        本年售氢量&nbsp;&nbsp;&nbsp;&nbsp;<span
                            class="font-number"
                            >
                            {{ lData.sellYear.data }}
                            </span
                        >
                    </p>
                </div>
            </div>
        </div>
        <div class="row border-aqua margin-top-10">
            <month-transport />
        </div>
        <div class="row border-aqua margin-top-10">
            <year-transport />
        </div>
        <div class="row margin-top-10">
            <p class="col-12 text-center h5">运氢车监控</p>
        </div>
        <div class="row border-aqua">
            <div class="row col-12">
                <div class="col-6">
                    <p>
                        本日运氢量&nbsp;&nbsp;&nbsp;&nbsp;<span
                            class="font-number"
                            >
                            {{ lData.tDay.data }}
                            </span
                        >
                    </p>
                </div>
                <div class="col-6">
                    <p>
                        本日报警次数&nbsp;&nbsp;&nbsp;&nbsp;<span
                            class="font-number"
                            >000</span
                        >
                    </p>
                </div>
            </div>
            <div class="row col-12">
                <div class="col-6">
                    <p>
                        本月运氢量&nbsp;&nbsp;&nbsp;&nbsp;<span
                            class="font-number"
                            >
                            {{ lData.tMonth.data }}
                            </span
                        >
                    </p>
                </div>
                <div class="col-6">
                    <p>
                        本月报警次数&nbsp;&nbsp;&nbsp;&nbsp;<span
                            class="font-number"
                            >000</span
                        >
                    </p>
                </div>
            </div>
            <div class="row col-12">
                <div class="col-6">
                    <p>
                        本年运氢量&nbsp;&nbsp;&nbsp;&nbsp;<span
                            class="font-number"
                            >
                            {{ lData.tYear.data }}
                            </span
                        >
                    </p>
                </div>
                <div class="col-6">
                    <p>
                        本年报警次数&nbsp;&nbsp;&nbsp;&nbsp;<span
                            class="font-number"
                            >000</span
                        >
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DoubleTableFactory from "../table/DoubleTableFactory.vue";
import MonthTransport from "../table/MonthTransport.vue";
import YearTransport from '../table/YearTransport.vue';
export default {
    props: ["lData"],
    components: { DoubleTableFactory, MonthTransport, YearTransport },
};
</script>

<style scoped>
.index-left {
    height: 750px;
    /* border: 1px solid red; */
}
</style>