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
        >
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

export default {
    data() {
        return {
            center: { lng: 0, lat: 0 }, //经纬度
            zoom: 100, //地图展示级别
            lableTxt: {
                color: "white",
                fontSize: "20px",
                border: "1px solid aqua",
                borderRadius: "10px",
                background: "#03103a",
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
                            color: "#f1ede4",
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
    props: ["mapHeight"],
    methods: {
        handler() {
            this.center.lng = 116.404;
            this.center.lat = 39.915;
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
