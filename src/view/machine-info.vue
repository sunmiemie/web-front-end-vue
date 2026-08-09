<template>
    <scales>
        <top-nav />
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <m-left />
            <m-mid :stationName="stationName" />
            <m-right />
        </div>
    </scales>
</template>

<script>
import { getUrlKey } from "../api/util";
import MLeft from "../components/hydrogenation-simple/Hydrogenation-machine/MLeft.vue";
import MMid from "../components/hydrogenation-simple/Hydrogenation-machine/MMid.vue";
import MRight from "../components/hydrogenation-simple/Hydrogenation-machine/MRight.vue";
import Scales from "../components/public/Scales.vue";
import TopNav from "../components/public/TopNav.vue";
export default {
    components: { Scales, TopNav, MLeft, MMid, MRight },
    data() {
        return {
            stationName: null,
        };
    },
    mounted() {
        this.stationName = this.getUrlKey("name");
    },
    methods: {
        getUrlKey(name) {
            const value = getUrlKey(name);
            return value === 404 ? "获取失败" : value;
        },
    },
};
</script>

<style>
</style>