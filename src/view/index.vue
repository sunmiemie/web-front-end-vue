<template>
    <div class="scales" :style="scales">
        <top-nav />
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <index-left />
            <index-right />
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
import TopNav from "../components/public/TopNav.vue";

export default {
    components: { TopNav, IndexLeft, IndexRight, IndexBottom },
    name: "index",
    data() {
        return {
            scales: {
                transform: "translate3d(0, 0, 0) scale(1)",
            },
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
    mounted: function () {
        this.changeHight();
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