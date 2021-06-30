<template>
    <div class="index-r-t">
        <baidu-map
            :style="mapHeight"
            :center="center"
            :zoom="zoom"
            @ready="handler"
            ak="WBh1E3bk1r7QNdWyZDl19K2Vr9wXLzEf"
            :scroll-wheel-zoom="true"
            :mapStyle="mapStyle"
            class="y-hidden"
            @tilesloaded="changePathColor(dShow)"
            @moveend="changeEndAndStartIcon(dShow)"
        >
            <div v-if="!carShow">
                <bm-marker
                    :position="{
                        lng: factory.longitude,
                        lat: factory.latitude,
                    }"
                    :draggable="false"
                    :icon="facotryStyle.icon"
                    :animation="facotryStyle.animation"
                    v-for="factory in factoryAddr"
                    :key="factory.id"
                    @click="
                        toStation(factory.name, facotryStyle.type, factory.id)
                    "
                >
                    <bm-label
                        :content="factory.name"
                        :labelStyle="lableTxt"
                        :offset="facotryStyle.iconOffset"
                        @click="
                            toStation(
                                factory.name,
                                facotryStyle.type,
                                factory.id
                            )
                        "
                    />
                </bm-marker>
            </div>
            <div v-if="!carShow">
                <bm-marker
                    :position="{
                        lng: station.longitude,
                        lat: station.latitude,
                    }"
                    :draggable="false"
                    :icon="stationStyle.icon"
                    :animation="stationStyle.animation"
                    v-for="station in stationAddr"
                    :key="station.id"
                    @click="
                        toStation(station.name, stationStyle.type, station.id)
                    "
                >
                    <bm-label
                        :content="station.name"
                        :labelStyle="lableTxt"
                        :offset="stationStyle.iconOffset"
                        @click="
                            toStation(
                                station.name,
                                stationStyle.type,
                                station.id
                            )
                        "
                    />
                </bm-marker>
            </div>
            <div v-if="carShow">
<!--                <div class="car-box-mouse" v-if="carMouseOver()">

                </div>-->
                <bml-marker-clusterer :averageCenter="true">
                    <bm-marker
                        v-for="car in onlineCarList"
                        :lazy="true"
                        :stretch="true"
                        :key="car.id"
                        :position="{
                            lng: car.longitude,
                            lat: car.latitude,
                        }"
                        :draggable="false"
                        :icon="{
                            url: require('../../assets/svg/car-online.svg'),
                            size: {
                                width: 40,
                                height: 40,
                            },
                        }"
                        animation="BMAP_ANIMATION_DROP"
                        @click="toVehicleSimple(car.id)"
                    >
                    </bm-marker>
                </bml-marker-clusterer>
                <bml-marker-clusterer :averageCenter="true">
                    <bm-marker
                        v-for="car in offlineCarList"
                        :lazy="true"
                        :stretch="true"
                        :key="car.id"
                        :position="{
                            lng: car.longitude,
                            lat: car.latitude,
                        }"
                        :draggable="false"
                        :icon="{
                            url: require('../../assets/svg/car-offline.svg'),
                            size: {
                                width: 40,
                                height: 40,
                            },
                        }"
                        animation="BMAP_ANIMATION_DROP"
                        @click="toVehicleSimple(car.id)"
                    >
                    </bm-marker>
                </bml-marker-clusterer>
            </div>

            <div v-if="carrierShow">
                <bml-marker-clusterer :averageCenter="true">
                    <bm-marker
                        :key="carrier.id"
                        :position="{
                        lng: carrier.longitude,
                        lat: carrier.latitude,
                    }"
                        :draggable="false"
                        :icon="{
                        url: require('../../assets/svg/carrier.svg'),
                        size: {
                            width: 40,
                            height: 40,
                        },
                    }"
                        animation="BMAP_ANIMATION_DROP"
                    >
                    </bm-marker>
                </bml-marker-clusterer>
            </div>
            <bm-driving
                v-if="dShow"
                :start="{ lng: 115.995168, lat: 39.744019 }"
                :end="{ lng: 116.243784, lat: 40.075483 }"
                startCity="北京"
                endCity="北京"
                :auto-viewport="true"
                :selectFirstResult="true"
            ></bm-driving>
            <bm-driving
                v-if="dShow"
                :start="{ lng: 114.993582, lat: 40.758328 }"
                :end="{ lng: 114.930178, lat: 40.7664 }"
                startCity="张家口"
                endCity="张家口"
                :auto-viewport="true"
                :selectFirstResult="true"
            ></bm-driving>
            <bm-driving
                v-if="dShow"
                :start="{ lng: 114.993582, lat: 40.758328 }"
                :end="{ lng: 116.243784, lat: 40.075483 }"
                startCity="张家口"
                endCity="北京"
                :auto-viewport="true"
                :selectFirstResult="true"
            ></bm-driving>
            <!-- 驾车路线规划 示例 -->
            <!-- <bm-driving
                v-if="dShow"
                start="新街口"
                end="张家口"
                startCity="北京"
                endCity="北京"
                :auto-viewport="true"
                :waypoints="[
                    '呼和浩特',
                    { lng: 112.53, lat: 37.87 },
                    '陕西兵马俑',
                ]"
            ></bm-driving> -->
            <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
            <bm-geolocation
                anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
                :locationIcon="{
                    url: require('../../assets/svg/locationIcon.svg'),
                    size: { width: 40, height: 40 },
                }"
                :showAddressBar="true"
                :autoLocation="true"
            >
            </bm-geolocation>
        </baidu-map>
        <div class="demo-icon" v-if="!carShow">
            <div>
                <img
                    class="icon icon-center"
                    src="../../assets/img/station.png"
                    alt="station"
                    width="40"
                    height="40"
                />
                <p class="text-center">加氢站</p>
            </div>
            <div>
                <img
                    class="icon icon-center"
                    src="../../assets/img/factory.png"
                    alt="factory"
                    width="40"
                    height="40"
                />
                <p class="text-center">制氢厂</p>
            </div>
        </div>
        <div class="demo-icon-2" v-if="carShow">
            <img
                src="../../assets/svg/car-online.svg"
                class="icon-center img-responsive"
                alt=""
            />
            <p class="text-center">燃料电池车</p>
        </div>
    </div>
</template>
<script>
import {
    BaiduMap,
    BmCityList,
    BmDriving,
    BmGeolocation,
    BmLabel,
    BmlMarkerClusterer,
    BmMarker,
    BmScale,
} from "vue-baidu-map";
import $ from "jquery";
import {
    allCarrierAddr,
    allFactoryAddr, allOfflineCar, allOnlineCar,
    allStationAddr,
} from "../../api/tisinghua-static";

const pathColor = ["#ff7700", "#00ffc6", "#f8e71c", "#0075ff"];
export default {
    data() {
        return {
            factoryAddr: [],
            stationAddr: [],
            carrierAddr: [],
            carMouse: {},
            carMouseShow: false,
            onlineCarList: [],
            offlineCarList: [],
            center: { lng: 0, lat: 0 }, //经纬度
            zoom: 9, //地图展示级别
            lableTxt: {
                color: "white",
                fontSize: "20px",
                border: "1px solid aqua",
                borderRadius: "10px",
                background: "#03103a",
            },
            facotryStyle: {
                type: false, //false为制氢厂 true为加氢站
                icon: {
                    url: require("../../assets/img/factory.png"),
                    size: {
                        width: 40,
                        height: 140,
                    },
                },
                animation: "BMAP_ANIMATION_DROP",
                iconOffset: {
                    width: -20,
                    height: -40,
                },
            },
            stationStyle: {
                type: true,
                icon: {
                    url: require("../../assets/img/station.png"),
                    size: {
                        width: 40,
                        height: 140,
                    },
                },
                animation: "BMAP_ANIMATION_BOUNCE",
                iconOffset: {
                    width: -20,
                    height: -40,
                },
            },

            mapStyle: {
                styleJson: [
                    {
                        featureType: "land",
                        elementType: "geometry",
                        stylers: {
                            color: "#083658",
                        },
                    },
                    {
                        featureType: "building",
                        elementType: "geometry",
                        stylers: {
                            color: "#016d79",
                        },
                    },
                    {
                        featureType: "highway",
                        elementType: "all",
                        stylers: {
                            lightness: -42,
                            saturation: -91,
                        },
                    },
                    {
                        featureType: "arterial",
                        elementType: "geometry",
                        stylers: {
                            lightness: -77,
                            saturation: -94,
                        },
                    },
                    {
                        featureType: "green",
                        elementType: "geometry",
                        stylers: {
                            color: "#011123",
                        },
                    },
                    {
                        featureType: "water",
                        elementType: "geometry",
                        stylers: {
                            color: "#010e21",
                        },
                    },
                    {
                        featureType: "subway",
                        elementType: "geometry.stroke",
                        stylers: {
                            color: "#010e21",
                        },
                    },
                    {
                        featureType: "railway",
                        elementType: "geometry",
                        stylers: {
                            lightness: -52,
                        },
                    },
                    {
                        featureType: "all",
                        elementType: "labels.text.stroke",
                        stylers: {
                            color: "#000000",
                        },
                    },
                    {
                        featureType: "all",
                        elementType: "labels.text.fill",
                        stylers: {
                            color: "#ffffff",
                        },
                    },
                    {
                        featureType: "manmade",
                        elementType: "geometry",
                        stylers: {
                            color: "#010e21",
                        },
                    },
                    {
                        featureType: "local",
                        elementType: "geometry",
                        stylers: {
                            lightness: -75,
                            saturation: -91,
                        },
                    },
                    {
                        featureType: "subway",
                        elementType: "geometry",
                        stylers: {
                            lightness: -65,
                        },
                    },
                    {
                        featureType: "railway",
                        elementType: "all",
                        stylers: {
                            lightness: -40,
                        },
                    },
                    {
                        featureType: "boundary",
                        elementType: "geometry",
                        stylers: {
                            color: "#8b8787",
                            weight: "1",
                            lightness: -29,
                        },
                    },
                ],
            },
            data: [],
            carPoints: [],
        };
    },
    components: {
        BmLabel,
        BmMarker,
        BaiduMap,
        BmScale,
        BmGeolocation,
        BmDriving,
        BmCityList,
        BmlMarkerClusterer,
    },
    props: ["mapHeight", "dShow", "carShow", "carrierShow"],
    async mounted() {
        this.onlineCarList = await allOfflineCar();
        this.offlineCarList = await allOnlineCar();
        this.factoryAddr = await allFactoryAddr();
        this.stationAddr = await allStationAddr();
        this.carrierAddr = await allCarrierAddr();
    },
    methods: {
        updateCirclePath(e) {
            this.circlePath.center = e.target.getCenter();
            this.circlePath.radius = e.target.getRadius();
        },
        /*carMouseOver(car) {
            this.carMouse = car;
            return true;
        },*/
        handler({ BMap, map }) {
            // console.log(BMap, map);
            this.center.lng = 116.404;
            this.center.lat = 39.915;
            // this.updateCirclePath();
        },
        toStation(name, type, id) {
            if (type) {
                this.$router.push({
                    path: "/hydrogenation/station-simple",
                    query: {
                        name: name,
                        id: id,
                    },
                });
            } else {
                this.$router.push({
                    path: "/h-production/production-simple",
                    query: {
                        name: name,
                        id: id,
                    },
                });
            }
        },
        changePathColor(flag) {
            if (flag) {
                this.changeEndAndStartIcon(flag);
                const length = $("[stroke-linejoin]").length;
                // console.log(length);
                let index = 0;
                for (let i = 0; i < length; i++) {
                    $("[stroke-linejoin]:nth-child(" + (i + 1) + ")").attr({
                        "stroke-opacity": "0.7",
                        stroke: pathColor[index],
                    });
                    index = index > length ? 0 : ++index;
                }
            }
        },
        changeEndAndStartIcon(show) {
            const length = $(".BMap_Marker img").length;
            for (let i = 0; i < length; i++) {
                const flag = $(".BMap_Marker:nth-child(" + (i + 1) + ") img")
                    .attr("src")
                    .indexOf("http");
                if (flag === 0 && show) {
                    $(".BMap_Marker:nth-child(" + (i + 1) + ")").css(
                        "z-index",
                        "10000"
                    );
                }
            }
        },
        randomPoints(max, min) {
            return Math.random() * (max - min) + min;
        },
        toVehicleSimple(carId) {
            this.$router.push({
                path: "/fuel-cell-vehicle/fuel-cell-vehicle-simple",
                query: { carId: carId },
            });
        },
    },
};</script>
<style>
.car-box-mouse {
    position: relative;
    bottom: 200px;
    left: 0;
    width: 200px;
    height: 200px;
    border: 1px solid red;
    z-index: 20000;
}
.map {
    width: 100%;
}
.BMap_cpyCtrl,
.anchorBL {
    display: none;
}
.demo-icon {
    position: absolute;
    bottom: 100px;
    right: 20px;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 5px aqua;
    border-radius: 10px;
    height: 150px;
}
.demo-icon-2 {
    position: absolute;
    bottom: 120px;
    right: 20px;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 5px aqua;
    border-radius: 10px;
    height: 80px;
}
.icon-center {
    position: relative;
    width: 40px;
    left: 50%;
    margin-left: -20px;
}
.icon-center-2 {
    position: relative;
    width: 60px;
    left: 50%;
    margin-left: -30px;
}
.y-hidden {
    overflow: hidden;
}
.cur_city_info,
#cur_city_spn,
#selCitySubmit,
.sel_city_input,
#cur_city_name,
.city_names_wrap a:link,
.BMap_bubble_content > div > div > b,
.BMap_bubble_content div {
    color: black;
}
</style>
