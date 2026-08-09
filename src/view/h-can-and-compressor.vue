<template>
    <scales>
        <top-nav />
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <c-a-c-title :stationName="stationName" />
        </div>
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <can />
        </div>
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <compressor />
        </div>
    </scales>
</template>

<script>
import { getUrlKey } from "../api/util";
import CACTitle from "../components/hydrogenation-simple/can-and-compressor/CACTitle.vue";
import Can from '../components/hydrogenation-simple/can-and-compressor/Can.vue';
import Compressor from '../components/hydrogenation-simple/can-and-compressor/Compressor.vue';
import Scales from "../components/public/Scales.vue";
import TopNav from "../components/public/TopNav.vue";
export default {
    components: { Scales, TopNav, CACTitle, Can, Compressor },
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