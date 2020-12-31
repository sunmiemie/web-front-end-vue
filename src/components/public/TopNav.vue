<template>
    <div class="row text-center top-nav">
        <div class="col-3">
            <img
                src="../../assets/img/tsinghua-logo-1.png"
                alt=""
                height="60%"
                width="80%"
                class="img-responsive"
            />
        </div>
        <div class="col-6">
            <div class="row">
                <div class="col-2 offset-1 nav-text-shadow">
                    <router-link
                        to="/index"
                        class="nav-font-size"
                        active-class="_active"
                        >全链</router-link
                    >
                </div>
                <div class="col-2 nav-text-shadow">
                    <router-link
                        to="/h-production"
                        class="nav-font-size"
                        active-class="_active"
                        >制氢</router-link
                    >
                </div>
                <div class="col-2 nav-text-shadow">
                    <router-link
                        to="/h-transportation"
                        class="nav-font-size"
                        active-class="_active"
                        >运氢</router-link
                    >
                </div>
                <div class="col-2 nav-text-shadow">
                    <router-link
                        to="/hydrogenation"
                        class="nav-font-size"
                        active-class="_active"
                        >加氢</router-link
                    >
                </div>
                <div class="col-2 nav-text-shadow">
                    <router-link
                        to="/fuel-cell-vehicle"
                        class="nav-font-size"
                        active-class="_active"
                        >燃料电池车</router-link
                    >
                </div>
            </div>
        </div>
        <div class="col-3">
            <div v-text="date" class="date-text"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "top-nav",
    data() {
        return {
            date: null,
        };
    },
    mounted() {
        this.timeRefresh();
    },
    methods: {
        navDate() {
            return new Date();
        },
        timeRefresh() {
            this.date = new Date().format("yyyy年MM月dd日 h:m:s");
            setInterval(() => {
                this.date = new Date().format("yyyy年MM月dd日 h:m:s");
            }, 1000);
        },
    },
};

Date.prototype.format = function (format) {
    var date = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S+": this.getMilliseconds(),
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(
            RegExp.$1,
            (this.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
    }
    for (var k in date) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(
                RegExp.$1,
                RegExp.$1.length == 1
                    ? date[k]
                    : ("00" + date[k]).substr(("" + date[k]).length)
            );
        }
    }
    return format;
};
</script>
<style scoped>
.nav-text-shadow {
    text-shadow: 0 0 1px aqua;
}
.top-nav {
    height: 80px;
    line-height: 80px;
    max-width: 100%;
    /* border-bottom: 1px solid aqua; */
}
._active {
    display: block;
    border-bottom: 2px solid skyblue;
}
.date-text {
    font-size: 22px;
    font-family: "Number";
    color: aqua;
}
.nav-font-size {
    font-size: 22px;
}
</style>