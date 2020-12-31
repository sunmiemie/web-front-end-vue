<template>
    <scales>
        <top-nav />
        <div class="row height" style="max-width: 99%; margin: 0 auto">
            <div class="row border-aqua col-12 clear-margin-padding" style="height: 60px;margin-top:20px;">
                <p class="col-12 text-center h5" style="line-height:60px;">运氢车&nbsp;&nbsp;<span class="h5 text-green" v-text="carName"></span>&nbsp;&nbsp;详细信息</p>
            </div>
            <div class="row col-12 clear-margin-padding">
                <div class="col-6 margin-top-10">
                    <div class="row">
                        <div class="col-6 border-aqua">
                            <div class="row col-12 margin-top-10">
                                <p class="col-4">车牌号:</p>
                                <p class="col-8 font-number text-right">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-4">车架号:</p>
                                <p class="col-8 font-number text-right">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-4">车型:</p>
                                <p class="col-8 font-number text-right">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-4">最大载氢量:</p>
                                <p class="col-8 font-number text-right">0000</p>
                            </div>
                        </div>
                        <div class="col-6 border-aqua">
                            <div class="row col-12 margin-top-10">
                                <p class="col-8">实时储氢罐温度:</p>
                                <p class="col-4 font-number text-right">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-8">实时储氢罐压力:</p>
                                <p class="col-4 font-number text-right">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-4">储氢容量:</p>
                                <p class="col-8 font-number text-right">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-4">氢气泄漏:</p>
                                <p class="col-8 font-number text-right">0000</p>
                            </div>
                        </div>
                    </div>
                    <div class="row border-aqua margin-top-10">
                        <svg
                            t="1607681323598"
                            class="icon car-center margin-top-10"
                            viewBox="0 0 2331 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="15516"
                            data-spm-anchor-id="a313x.7781069.0.i41"
                            width="600"
                            height="280"
                        >
                            <path
                                d="M2197.591149 859.549957a120.352681 120.352681 0 0 0-34.619915-84.011574A119.611915 119.611915 0 0 0 2079.221106 740.765957a119.611915 119.611915 0 0 0-83.684766 34.772426A120.43983 120.43983 0 0 0 1960.851064 859.549957c0 31.155745 12.789106 61.962894 34.685276 83.946213a119.699064 119.699064 0 0 0 83.684766 34.837787 119.611915 119.611915 0 0 0 83.750128-34.837787 120.352681 120.352681 0 0 0 34.641702-83.946213z m-1612.255319 43.574469a120.352681 120.352681 0 0 0-34.619915-84.011575A119.611915 119.611915 0 0 0 466.965787 784.340426a119.611915 119.611915 0 0 0-83.684766 34.772425A120.43983 120.43983 0 0 0 348.595745 903.124426c0 31.155745 12.789106 61.962894 34.685276 83.946212a119.699064 119.699064 0 0 0 83.684766 34.837788 119.611915 119.611915 0 0 0 83.750128-34.837788 120.352681 120.352681 0 0 0 34.641702-83.946212z m308.485447-866.042554v176.694468H893.276596a215.693617 215.693617 0 0 1 0 25.621788c2.788766 23.31234 3.006638 46.973277 0.544681 70.307404v31.373617c2.026213 19.042043 1.329021 38.236596-0.392171 57.300425 2.527319 21.830809 2.265872 43.857702 0.174298 65.732086 0.305021 7.756255 0.305021 15.425362 0.043575 23.181617h0.108936v28.650212c2.244085 31.591489 3.202723 63.357277 1.307234 94.796256 2.113362 8.562383 7.364085 15.817532 14.423149 20.915744V7.95234c-9.629957 6.579745-15.468936 17.429787-15.686809 29.15132z"
                                fill="#2c2c2c"
                                p-id="15517"
                                data-spm-anchor-id="a313x.7781069.0.i33"
                                class=""
                            ></path>
                            <path
                                d="M628.605277 871.489362a164.711489 164.711489 0 0 0-47.125788-104.970894A163.491404 163.491404 0 0 0 466.965787 718.978723a163.622128 163.622128 0 0 0-114.491915 47.539745A164.384681 164.384681 0 0 0 305.326298 871.489362H21.787234v-152.510639h1634.042553v152.510639H628.605277z"
                                fill="#13227a"
                                p-id="15518"
                                data-spm-anchor-id="a313x.7781069.0.i34"
                                class=""
                            ></path>
                            <path
                                d="M1350.808511 718.978723c52.594383 31.264681 84.861277 82.203234 84.904851 143.643234 0 3.028426-0.108936 5.882553-0.217873 8.867405h472.129362a175.866553 175.866553 0 0 1 82.116085-158.414979l3.551319-2.222298a174.08 174.08 0 0 1 166.890213-6.492596c4.074213 2.048 8.061277 4.161362 11.982979 6.492596l3.485957 2.222298A175.49617 175.49617 0 0 1 2257.811064 871.489362h73.117957v-167.129873h-0.043574v-180.703319s0.806128-23.15983 0-30.785361c-2.701617-27.451915-18.845957-125.625191-77.911149-210.55183C2176.152511 171.857702 2119.331404 152.510638 2119.331404 152.510638h-278.876595l0.566468 566.468085H1350.808511z m553.395744-346.65668v-154.253617h181.661958l31.199319 31.635063 30.414979 30.240681 30.502127 30.763575 30.654639 31.11217v123.141447H1904.138894V372.34383h0.043574z"
                                fill="#dbdbdb"
                                p-id="15519"
                                data-spm-anchor-id="a313x.7781069.0.i32"
                                class=""
                            ></path>
                            <path
                                d="M1730.080681 0H61.483574C45.099574 0.152511 29.238468 2.941277 16.209702 7.95234V631.611915c13.159489 4.836766 28.998809 7.451234 45.273872 7.473021h1668.597107c42.289021 0 76.691064-16.601872 76.691064-37.038298V37.10366c-0.413957-10.022128-8.714894-19.564936-23.094468-26.515064-14.379574-6.971915-33.661277-10.762894-53.596596-10.566809z"
                                fill="#1296db"
                                p-id="15520"
                                data-spm-anchor-id="a313x.7781069.0.i35"
                                class=""
                            ></path>
                        </svg>
                    </div>
                    <div class="row margin-top-10">
                        <div class="col-6 border-aqua">
                            <div class="row col-12 margin-top-10">
                                <p class="col-4">实时车速:</p>
                                <p class="col-8 font-number text-right">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-4">实时经纬度:</p>
                                <p class="col-8 font-number text-right">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-4">制动器:</p>
                                <p class="col-8 font-number text-right">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-4">预定路线:</p>
                                <p class="col-8 font-number text-right">0000</p>
                            </div>
                        </div>
                        <div class="col-6 border-aqua">
                            <div class="row col-12 margin-top-10">
                                <p class="col-4">氢气来源:</p>
                                <p class="col-8 font-number text-right">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-4">氢气去向:</p>
                                <p class="col-8 font-number text-right">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-4">运氢量:</p>
                                <p class="col-8 font-number text-right">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-4">预计时长:</p>
                                <p class="col-8 font-number text-right">0000</p>
                            </div>
                        </div>
                    </div>
                    <div class="row margin-top-10">
                        <div class="col-6 border-aqua">
                            <div class="row col-12 margin-top-10">
                                <p class="col-8">温度传感器检验时间:</p>
                                <p class="col-4 font-number text-right">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-8">温度传感器有效时间:</p>
                                <p class="col-4 font-number text-right">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-8">压力传感器检验时间:</p>
                                <p class="col-4 font-number text-right">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-8">压力传感器有效时间:</p>
                                <p class="col-4 font-number text-right">0000</p>
                            </div>
                        </div>
                        <div class="col-6 border-aqua">
                            <div class="row col-12 margin-top-10">
                                <p class="col-4">司机姓名:</p>
                                <p class="col-8 font-number text-right">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-4">性别:</p>
                                <p class="col-8 font-number text-right">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-4">联系方式:</p>
                                <p class="col-8 font-number text-right">0000</p>
                            </div>
                            <div class="row col-12">
                                <p class="col-4">工作时长:</p>
                                <p class="col-8 font-number text-right">0000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="clear-margin-padding">
                    <baidu-map
                        class="margin-top-10"
                        mapHeight="height: 900px;width: 930px;margin-left:20px;"
                        dShow=true
                    />
                </div>
            </div>
        </div>
    </scales>
</template>

<script>
import BaiduMap from "../components/public/BaiduMap.vue";
import Scales from "../components/public/Scales.vue";
import TopNav from "../components/public/TopNav.vue";
export default {
    data() {
        return {
            carName: null,
        };
    },
    components: {
        Scales,
        TopNav,
        BaiduMap,
    },
    mounted() {
        this.carName = this.getUrlKey("name");
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

<style scoped>
.height {
    height: 990px;
}
.car-center {
    position: relative;
    width: 600px;
    left: 50%;
    margin-left: -300px;
}
p {
    line-height: 30px;
}
</style>