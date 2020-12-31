<template>
    <scales>
        <top-nav />
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <p-simple-title :simpleTitle="titleName" />
        </div>
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <p-simple-top />
        </div>
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <p-simple-mid />
        </div>
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <p-simple-bottom />
        </div>
    </scales>
</template>

<script>
import PSimpleBottom from "../components/production-simple/PSimpleBottom.vue";
import PSimpleMid from "../components/production-simple/PSimpleMid.vue";
import PSimpleTitle from "../components/production-simple/PSimpleTitle.vue";
import PSimpleTop from "../components/production-simple/PSimpleTop.vue";
import Scales from "../components/public/Scales.vue";
import TopNav from "../components/public/TopNav.vue";
export default {
    data() {
        return {
            titleName: null,
        }  
    },
    components: {
        Scales,
        TopNav,
        PSimpleTitle,
        PSimpleTop,
        PSimpleMid,
        PSimpleBottom,
    },
    mounted() {
        this.titleName = this.getUrlKey("name");
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