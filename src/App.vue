<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
import Index from "./view/index";

export default {
    name: "App",
    components: {
        Index,
    },
};
</script>

<style>
* {
    font-family: PingFangSC-Regular, Microsoft Yahei, 宋体, Tahoma, Verdana,
    sans-serif, simsun, Arial;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    color: white;
    font-size: 16px;
}

body,
html {
    height: 100%;
    -webkit-font-smoothing: subpixel-antialiased;
    -webkit-text-size-adjust: 100% !important;
    -moz-text-size-adjust: 100% !important;
    -ms-text-size-adjust: 100% !important;
    text-size-adjust: 100% !important;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    overflow: hidden;
}

#app {
    background: url(./assets/img/background.png) no-repeat fixed center;
    background-size: 100% 100%;
    height: 100%;
}
</style>
