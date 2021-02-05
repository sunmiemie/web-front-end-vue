<template>
    <div class="col-12 border-aqua margin-top-30">
        <p class="text-center top-height h4"><span class="text-green h4" v-text="simpleTitle"></span>&nbsp;&nbsp;加氢站</p>
    </div>
</template>

<script>
export default {
    props:["simpleTitle"]
}
</script>

<style scoped>
.top-height {
    height: 40px;
    line-height: 40px;
    text-shadow: 0 0 2px aqua;
}
</style>