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
            window.addEventListener("resize", this.getHeight);
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
            this.winResize();
        },
    },
    created() {
        this._statisticsDisposed = false;
    },
    beforeDestroy() {
        this._statisticsDisposed = true;
        window.removeEventListener("resize", this.getHeight);
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
        // 独立统计分别更新，单个请求等待或失败不阻塞其他指标。
        const loadStatistic = async (request, target, key) => {
            try {
                const value = await request();
                if (!this._statisticsDisposed && value != null) {
                    target[key] = value;
                }
            } catch (error) {
                // 保留原占位值，避免子组件读取缺失统计的 data 时出错。
            }
        };
        await Promise.all([
            loadStatistic(carCount, this.rData, "carCount"),
            loadStatistic(() => statisticalAdd(day), this.rData, "aDay"),
            loadStatistic(() => statisticalAdd(month), this.rData, "aMonth"),
            loadStatistic(() => statisticalAdd(year), this.rData, "aYear"),
            loadStatistic(() => statisticalAlarm(day), this.rData, "carAlarm"),
            loadStatistic(() => statisticalSell(day), this.lData, "sellDay"),
            loadStatistic(() => statisticalSell(month), this.lData, "sellMonth"),
            loadStatistic(() => statisticalSell(year), this.lData, "sellYear"),
            loadStatistic(() => statisticalManufacture(day), this.lData, "pDay"),
            loadStatistic(() => statisticalManufacture(month), this.lData, "pMonth"),
            loadStatistic(() => statisticalManufacture(year), this.lData, "pYear"),
            loadStatistic(() => statisticalTransport(day), this.lData, "tDay"),
            loadStatistic(() => statisticalTransport(month), this.lData, "tMonth"),
            loadStatistic(() => statisticalTransport(year), this.lData, "tYear"),
        ]);
        
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
