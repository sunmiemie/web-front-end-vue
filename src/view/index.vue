<template>
    <div class="scales" :style="scales">
        <top-nav />
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <index-left :lData="lData" />
            <index-right :rData="rData" />
        </div>
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <index-bottom />
        </div>
    </div>
</template>
<script>
import IndexBottom from "../components/index/IndexBottom.vue";
import IndexLeft from "../components/index/IndexLeft.vue";
import IndexRight from "../components/index/IndexRight.vue";
import TopNav from "../components/public/TopNav";
import {
    carCount,
    statisticalTransportList,
    statisticalStorage,
    statisticalStorageList,
    statisticalManufacture,
    statisticalManufactureList,
    statisticalAlarm,
    statisticalAlarmList,
    statisticalUse,
    statisticalUseList,
    statisticalSell,
    statisticalSellList,
    statisticalAdd,
    statisticalAddList,
    statisticalTransport,
} from "../api/tisinghua-static";

export default {
    components: { TopNav, IndexLeft, IndexRight, IndexBottom },
    name: "index",
    data() {
        return {
            scales: {
                transform: "translate3d(0, 0, 0) scale(1)",
            },
            lData: {
                pDay: 0,
                pMonth: 0,
                pYear: 0,
                tDay: 0,
                tMonth: 0,
                tYear: 0,
                alarmDay: 0,
                alarmMonth: 0,
                alarmYear: 0,
                sellDay: 0,
                sellMonth: 0,
                sellYear: 0
            },
            rData: {
                aDay: 0,
                aMonth: 0,
                aYear: 0,
                carCount: 0,
                carAlarm: 0,
            }

        };
    },
    methods: {
        winResize() {
            window.addEventListener("resize", () => {
                this.getHeight();
            });
        },
        getHeight() {
            let w = 1920;
            let h = 1080;
            var dw = document.documentElement.offsetWidth / w;
            var dh = document.documentElement.offsetHeight / h;
            var d = parseFloat(Math.min(dw, dh).toFixed(2));
            var x = parseInt(
                (document.documentElement.offsetWidth - w * d) / 2
            );
            this.scales = {
                transform: `translate3d(${x}px, 0, 0) scale(${d})`,
                transformOrigin: `0 0`,
            };
        },
        changeHight() {
            this.getHeight();
            setTimeout(() => {
                this.winResize();
            }, 100);
        },
    },
    async mounted () {
        const day = {
            date: "day"
        }
        const month = {
            date: "month"
        }
        const year = {
            date: "year"
        }
        this.changeHight();
        this.rData.carCount = await carCount();
        this.rData.aDay = await statisticalAdd(day);
        this.rData.aMonth = await statisticalAdd(month);
        this.rData.aYear = await statisticalAdd(year);
        this.rData.carAlarm = await statisticalAlarm(day);

        this.lData.sellDay = await statisticalSell(day);
        this.lData.sellMonth = await statisticalSell(month);
        this.lData.sellYear = await statisticalSell(year);

        this.lData.pDay = await statisticalManufacture(day);
        this.lData.pMonth = await statisticalManufacture(month);
        this.lData.pYear = await statisticalManufacture(year);

        this.lData.tDay = await statisticalTransport(day);
        this.lData.tMonth = await statisticalTransport(month);
        this.lData.tYear = await statisticalTransport(year);
        
    },
};
</script>
<style>
.scales {
    width: 1920px;
    height: 1080px;
    /* overflow: hidden; */
}
</style>