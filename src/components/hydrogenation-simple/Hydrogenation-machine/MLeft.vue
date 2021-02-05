<template>
    <div class="col-3 margin-top-30">
        <div class="border-aqua text-center p-height">
            <p class="mechine-txt">加氢机当日累计加氢次数</p>
            <p><span class="font-number">0000</span>次</p>
        </div>
        <div class="border-aqua text-center p-height margin-top-30">
            <p class="mechine-txt">加氢机当日累计加氢量</p>
            <p><span class="font-number">0000</span>KG</p>
        </div>
        <div class="border-aqua text-center p-height margin-top-30">
            <p class="mechine-txt">加氢机当日累计加氢时长</p>
            <p><span class="font-number">0000</span>min</p>
        </div>
        <div class="border-aqua text-center p-height margin-top-30">
            <p class="mechine-txt">加氢机当日平均加注时长</p>
            <p><span class="font-number">0000</span>min</p>
        </div>
        <div class="row margin-top-30">
            <svg
                t="1607052984770"
                class="icon"
                viewBox="0 0 1834 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="28760"
                width="50"
                height="50"
            >
                <path
                    d="M1458.889 714.682c-16.449-36.767-10.643-74.502-4.999-110.947 8.708-56.602 19.029-125.783-70.954-166.259 5.967-21.609 5.644-46.443-12.578-55.151l-107.077-51.603c-23.383-11.288-84.5-8.869-91.596 5.967s-26.769 45.798 23.221 57.247c49.991 11.611 96.595 70.148 96.595 70.148 16.771 16.287 35.961 25.963 51.119 26.285 59.989 21.125 56.763 45.798 47.733 103.529-6.289 41.444-14.191 93.047 9.998 146.908 32.413 72.728 34.348 115.301 6.289 142.715-34.348 33.865-80.791 23.060-109.979 3.709-39.509-26.285-40.315-74.825-36.606-151.584 1.935-43.54 4.193-88.532-8.708-126.911-28.543-84.984-115.946-85.951-119.977-85.951l-38.864-0.161v-288.655c0-17.577-14.352-32.091-32.091-32.091h-384.927c-17.577 0-32.091 14.513-32.091 32.091v673.744h-32.091s-32.091 0-32.091 32.091v32.091h577.471v-32.091s0-32.091-32.091-32.091h-32.091v-320.907h38.541c4.677 0.161 45.959 2.096 59.505 42.411 9.031 26.93 7.257 64.020 5.322 103.368-3.548 74.986-7.418 159.809 65.31 208.025 29.027 19.351 60.956 29.027 91.757 29.027 36.445 0 71.599-13.546 98.691-40.315 71.922-70.309 24.834-175.128 7.257-214.637zM1312.788 448.604c-8.869 0-15.965-7.257-15.965-16.126s7.095-15.965 15.965-15.965 16.126 7.095 16.126 15.965-7.257 16.126-16.126 16.126zM707.579 298.148c0-17.577 14.352-32.091 32.091-32.091h256.726c17.577 0 32.091 14.513 32.091 32.091v192.544c0 17.577-14.513 32.091-32.091 32.091h-256.726c-17.739 0-32.091-14.513-32.091-32.091v-192.544z"
                    p-id="28761"
                    data-spm-anchor-id="a313x.7781069.0.i94"
                    class="selected"
                    fill="#1296db"
                ></path>
            </svg>
            <p class="text-g" style="font-size: 18px;margin-top: 20px;">
                加氢机详细信息
            </p>
        </div>
        <div class="col-12 border-aqua info" style="height: 350px;">
            <div class="row">
                <p class="col-4">
                    加氢机编码: 
                </p>
                <p class="col-8 text-green-min text-right">
                    HBIS-JQJ-01
                </p>
            </div>
            <div class="row">
                <p class="col-4">
                    加氢机生产商:
                </p>
                <p class="col-8 text-green-min text-right">安泰环境工程技术有限公司</p>
            </div>
            <div class="row">
                <p class="col-4">
                    加氢机型号:
                </p>
                <p class="text-green-min col-8 text-right">AT-H35-500</p>
            </div>
            <div class="row">
                <p class="col-4">加氢枪总数:
                <p class="text-green-min col-8 text-right">2</p>
            </div>
            <div class="row">
                <p @click="addSixList" class="col-12">
                    <router-link to="#">加氢抢信息列表</router-link>
                </p>
                <div
                    class="custom-scrollable-six add-h-six-list"
                    v-show="isShow"
                >
                    <div class="add-h-six-back col-12">
                        <p>加氢机编码: <span>HBIS-JQJ-01-TK16</span></p>
                        <p>加氢枪类型: <span>35</span>Mpa</p>
                        <p>加氢枪生产商: <span>WHE</span></p>
                    </div>
                    <div class="add-h-six-back col-12">
                        <p>加氢机编码: <span>HBIS-JQJ-01-TK125</span></p>
                        <p>加氢枪类型: <span>35</span>Mpa</p>
                        <p>加氢枪生产商: <span>WHE</span></p>
                    </div>
                </div>
            </div>
            <div class="row">
                <p class="col-4">
                    设备生产日期:
                </p>
                <p class="text-green-min col-8 text-right">
                    2020-1-10
                </p>
            </div>
            <div class="row">
                <p class="col-4">
                    投入使用时间:
                </p>
                <p class="col-8 text-right text-green-min">
                    2020-8-20
                </p>
            </div>
            <div class="row">
                <p class="col-4">加注压力:</p>
                <p class="col-8 text-right"><span class="text-green-min">35</span>Mpa</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow: false,
        };
    },
    methods: {
        addSixList: function () {
            this.isShow = !this.isShow;
        },
    },
};
</script>

<style scoped>
.p-height {
    height: 90px;
}
.info p {
    font-size: 18px;
}
span {
    display: inline-block;
}
</style>