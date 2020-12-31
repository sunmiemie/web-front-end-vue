<template>
    <scales>
        <top-nav />
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <p-station-title :simpleTitle="stationName" />
        </div>
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <p-station-top />
        </div>
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <p-station-mid />
        </div>
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <p-station-bottom />
        </div>
    </scales>
</template>

<script>
import PStationTitle from '../components/hydrogenation-simple/PStationTitle.vue';
import PStationTop from '../components/hydrogenation-simple/PStationTop.vue';
import PStationMid from '../components/hydrogenation-simple/PStationMid.vue';
import PStationBottom from '../components/hydrogenation-simple/PStationBottom.vue';
import Scales from "../components/public/Scales.vue";
import TopNav from "../components/public/TopNav.vue";
export default {
    data() {
        return {
            stationName: null,
        };
    },
    components: {
        Scales,
        TopNav,
        PStationTitle,
        PStationTop,
        PStationMid,
        PStationBottom
    },
    mounted() {
        this.stationName = this.getUrlKey("name");
    },
    methods: {
        getUrlKey(name) {
            var result =
                decodeURIComponent(
                    (new RegExp(
                        "[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)"
                    ).exec(location.href) || [, ""])[1].replace(/\+/g, "%20")
                ) || null;
            if (result == null) {
                return "获取失败";
            }
            return result;
        },
    },
};
</script>

<style>
</style>