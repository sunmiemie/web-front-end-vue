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