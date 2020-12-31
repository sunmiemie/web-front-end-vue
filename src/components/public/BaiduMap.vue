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
                    :position="item.position"
                    :draggable="false"
                    :icon="item.icon"
                    :animation="item.animation"
                    v-for="item in markerList"
                    :key="item.index"
                    @click="toStation(item.name, item.type)"
                >
                    <bm-label
                        :content="item.content"
                        :labelStyle="lableTxt"
                        :offset="item.iconOffset"
                        @click="toStation(item.name, item.type)"
                    />
                </bm-marker>
            </div>
            <div v-if="carShow">
                <bml-marker-clusterer :averageCenter="true">
                    <bm-marker
                        :position="{
                            lng: randomPoints(117, 115),
                            lat: randomPoints(41, 39),
                        }"
                        :draggable="false"
                        :icon="{
                            url: require('../../assets/svg/car.svg'),
                            size: {
                                width: 40,
                                height: 40,
                            },
                        }"
                        animation="BMAP_ANIMATION_DROP"
                        v-for="item in 100"
                        :key="item.index"
                        @click="toVehicleSimple()"
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
                <svg
                    t="1607563665197"
                    class="icon icon-center"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="5958"
                    width="40"
                    height="40"
                >
                    <path
                        d="M768 678.4C608 844.8 512 832 512 832s-121.6-12.8-249.6-153.6C128 531.2 128 396.8 128 339.2 128 147.2 307.2 0 512 0c211.2 0 384 147.2 384 339.2 0 76.8 12.8 198.4-128 339.2zM512 256c-70.4 0-128 57.6-128 128s57.6 128 128 128 128-57.6 128-128-57.6-128-128-128z m0 640c140.8 0 192 25.6 192 64s-51.2 64-192 64-192-25.6-192-64c0-32 51.2-64 192-64z"
                        fill="#19f6e3"
                        p-id="5959"
                    ></path>
                </svg>
                <p class="text-center">加氢站</p>
            </div>
            <div>
                <svg
                    t="1607563508335"
                    class="icon icon-center"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="4704"
                    width="40"
                    height="40"
                >
                    <path
                        d="M32.276 512.415c0 264.493 214.415 478.908 478.908 478.908s478.908-214.415 478.908-478.908c0-264.493-214.415-478.908-478.908-478.908-264.493 0-478.908 214.415-478.908 478.908z"
                        fill="#1296db"
                        p-id="4705"
                        data-spm-anchor-id="a313x.7781069.0.i6"
                        class="selected"
                    ></path>
                    <path
                        d="M409.618 253.634c0.092 0.647 0.276 1.268 0.405 1.825 0.267 1.118 0.537 2.043 0.834 2.796 0.547 1.492 0.926 2.251 0.926 2.251s0.669-0.591 1.766-1.627c7.605-7.037 16.754-12.526 26.873-15.893-20.082 10.348-17.699 8.715-14.977 7.293 2.713-1.434 5.717-2.667 8.912-3.711 3.193-1.050 6.654-1.886 10.297-2.668 3.672-0.761 7.571-1.445 11.701-2.089 4.129-0.649 8.483-1.225 12.974-1.853l6.761-0.886c2.403-0.299 5.050-0.65 7.715-1.059 5.355-0.825 11.041-1.903 16.753-3.367 5.729-1.469 11.503-3.376 17.093-5.822 5.596-2.459 11.003-5.452 15.876-9.022 4.876-3.587 9.184-7.759 12.493-12.197 3.328-4.428 5.604-9.091 6.856-13.326 0.157-0.531 0.326-1.034 0.453-1.552l0.327-1.538c0.207-0.998 0.401-1.94 0.477-2.885 0.106-0.928 0.169-1.817 0.225-2.647 0.037-0.839-0.016-1.661-0.035-2.409-0.035-0.761-0.042-1.432-0.123-2.132-0.078-0.686-0.179-1.322-0.267-1.897-0.101-0.574-0.159-1.102-0.29-1.556-0.137-0.455-0.263-0.867-0.376-1.237-0.453-1.478-0.765-2.289-0.765-2.289s-0.697 0.517-1.872 1.522c-0.582 0.507-1.315 1.15-2.152 1.731-0.861 0.604-1.719 1.246-2.812 1.942-2.079 1.406-4.647 2.781-7.405 3.923-2.778 1.147-5.803 2.006-9.039 2.631-3.238 0.628-6.699 1.050-10.451 1.406-3.774 0.34-7.859 0.603-12.237 0.895-4.396 0.278-9.099 0.57-14.066 1.015-4.988 0.435-10.224 0.973-15.786 1.793-2.791 0.427-5.604 0.889-8.617 1.549l-2.324 0.506c-4.19 0.951-7.87 2.273-11.329 3.979 7.398-2.975 5.857-2.563 4.342-2.087-12.706 3.968-23.694 10.15-33.065 18.17 7.546-6.329 0.807-0.676-4.684 6.037 14.805-13.565 13.502-12.652 12.24-11.755-1.268 0.928-2.509 1.828-3.696 2.836-6.907 5.607-12.524 12.512-16.535 20.374 8.624-13.196 4.879-8.595 2.151-3.854-2.744 4.731-4.477 9.496-5.323 13.765-0.855 4.282-0.867 8.034-0.521 11.018l0.295 2.096zM412.608 192.73l0.327-1.538c0.206-0.998 0.4-1.94 0.476-2.885 0.106-0.928 0.17-1.817 0.225-2.648 0.037-0.839-0.015-1.661-0.034-2.409-0.035-0.761-0.042-1.432-0.123-2.132-0.079-0.686-0.179-1.322-0.268-1.897-0.1-0.574-0.159-1.102-0.29-1.556l-0.376-1.237c-0.454-1.478-0.765-2.289-0.765-2.289s-0.698 0.517-1.871 1.522c-0.584 0.507-1.316 1.15-2.155 1.731-0.861 0.604-1.718 1.246-2.811 1.942-2.079 1.406-4.648 2.781-7.405 3.923-2.778 1.147-5.804 2.006-9.039 2.631-3.238 0.628-6.699 1.050-10.452 1.406-3.774 0.34-7.859 0.603-12.235 0.895-4.396 0.278-9.099 0.57-14.067 1.015-4.987 0.435-10.224 0.973-15.786 1.793-2.79 0.427-5.604 0.889-8.616 1.549l-2.325 0.506c-4.228 0.961-7.943 2.298-11.432 4.020 7.502-3.016 5.961-2.604 4.446-2.128-12.706 3.968-23.694 10.15-33.065 18.17 7.546-6.329 0.807-0.676-4.684 6.038 14.806-13.565 13.503-12.652 12.241-11.755-1.269 0.928-2.509 1.828-3.697 2.836-6.976 5.667-12.65 12.645-16.702 20.588 8.792-13.41 5.047-8.809 2.318-4.069-2.744 4.731-4.477 9.496-5.323 13.765-0.855 4.282-0.867 8.034-0.522 11.018 0.105 0.739 0.203 1.438 0.295 2.096 0.092 0.647 0.276 1.268 0.405 1.825 0.267 1.117 0.538 2.043 0.835 2.796 0.547 1.492 0.924 2.251 0.924 2.251s0.67-0.591 1.768-1.627c7.598-7.033 16.741-12.518 26.851-15.884-20.063 10.339-17.678 8.707-14.957 7.284 2.713-1.434 5.717-2.667 8.912-3.711 3.192-1.050 6.654-1.886 10.297-2.668 3.672-0.761 7.573-1.445 11.701-2.089 4.129-0.649 8.484-1.225 12.973-1.853l6.763-0.886c2.403-0.299 5.049-0.65 7.715-1.059 5.355-0.825 11.040-1.903 16.753-3.367 5.728-1.469 11.503-3.376 17.093-5.822 5.595-2.459 11.002-5.452 15.877-9.022 4.874-3.587 9.182-7.759 12.492-12.197 3.328-4.428 5.603-9.091 6.856-13.326 0.158-0.531 0.325-1.034 0.453-1.552zM894.109 755.512h-32.384v-276.699l-183.523-90.37v90.37l-183.526-90.37v90.37l-44.031-21.682v-181.156h-87.183v138.225l-52.31-25.758v-112.467h-87.184v479.537h-40.562v33.631h710.703z"
                        fill=""
                        p-id="4706"
                    ></path>
                    <path
                        d="M200.478 252.485h43.593v487.705h-43.593z"
                        fill="#EBEBED"
                        p-id="4707"
                    ></path>
                    <path
                        d="M244.070 252.485h43.591v487.705h-43.591z"
                        fill="#D5D6DA"
                        p-id="4708"
                    ></path>
                    <path
                        d="M339.972 252.485h43.593v487.705h-43.593z"
                        fill="#EBEBED"
                        p-id="4709"
                    ></path>
                    <path
                        d="M383.562 252.485h43.591v487.705h-43.591z"
                        fill="#D5D6DA"
                        p-id="4710"
                    ></path>
                    <path
                        d="M200.478 298.323h87.184v19.728h-87.184zM339.972 298.323h87.184v19.728h-87.184z"
                        fill="#9D1127"
                        p-id="4711"
                    ></path>
                    <path
                        d="M287.661 364.953v375.238h183.525v-284.869zM654.71 364.953v375.238h183.525v-284.869z"
                        fill="#515151"
                        p-id="4712"
                    ></path>
                    <path
                        d="M471.186 364.953v375.238h183.524v-284.869z"
                        fill="#434142"
                        p-id="4713"
                    ></path>
                    <path
                        d="M349.024 514.44h30.399v60.801h-30.399z"
                        fill="#FDCF76"
                        p-id="4714"
                    ></path>
                    <path
                        d="M379.424 514.44h30.4v60.801h-30.4z"
                        fill="#E2B249"
                        p-id="4715"
                    ></path>
                    <path
                        d="M532.548 514.44h30.399v60.801h-30.399z"
                        fill="#FDCF76"
                        p-id="4716"
                    ></path>
                    <path
                        d="M562.947 514.44h30.4v60.801h-30.4z"
                        fill="#E2B249"
                        p-id="4717"
                    ></path>
                    <path
                        d="M716.073 514.44h30.399v60.801h-30.399z"
                        fill="#FDCF76"
                        p-id="4718"
                    ></path>
                    <path
                        d="M746.473 514.44h30.4v60.801h-30.4z"
                        fill="#E2B249"
                        p-id="4719"
                    ></path>
                    <path
                        d="M349.024 624.349h30.399v60.801h-30.399z"
                        fill="#FDCF76"
                        p-id="4720"
                    ></path>
                    <path
                        d="M379.424 624.349h30.4v60.801h-30.4z"
                        fill="#E2B249"
                        p-id="4721"
                    ></path>
                    <path
                        d="M532.548 624.349h30.399v60.801h-30.399z"
                        fill="#FDCF76"
                        p-id="4722"
                    ></path>
                    <path
                        d="M562.947 624.349h30.4v60.801h-30.4z"
                        fill="#E2B249"
                        p-id="4723"
                    ></path>
                    <path
                        d="M716.073 624.349h30.399v60.801h-30.399z"
                        fill="#FDCF76"
                        p-id="4724"
                    ></path>
                    <path
                        d="M746.473 624.349h30.4v60.801h-30.4z"
                        fill="#E2B249"
                        p-id="4725"
                    ></path>
                    <path
                        d="M529.013 150.65s0.311 0.81 0.765 2.289l0.376 1.237c0.131 0.456 0.187 0.983 0.29 1.556 0.088 0.575 0.189 1.209 0.267 1.897 0.082 0.7 0.088 1.37 0.123 2.132 0.018 0.749 0.070 1.57 0.035 2.409-0.138 2.211-0.376 4.226-0.716 6.207 0.416-2.616 0.221-1.674 0.015-0.677l-0.327 1.539c-0.127 0.518-0.296 1.021-0.453 1.551-1.252 4.236-3.528 8.898-6.856 13.327-3.311 4.439-7.619 8.611-12.493 12.197-4.873 3.569-10.28 6.562-15.876 9.022-5.589 2.446-11.364 4.353-17.093 5.822-5.712 1.463-11.398 2.542-16.753 3.367-2.665 0.41-5.312 0.76-7.715 1.059l-6.762 0.886c-4.489 0.628-8.844 1.205-12.973 1.853-4.131 0.645-8.030 1.327-11.701 2.089-3.643 0.783-7.104 1.618-10.297 2.668-3.195 1.042-6.199 2.274-8.912 3.71-2.721 1.422-5.105 3.056-7.16 4.582-8.341 6.537-15.133 14.643-20.011 23.912 14.179-18.858 13.508-18.266 13.508-18.266s-0.377-0.758-0.925-2.251c-0.297-0.753-0.567-1.678-0.834-2.796-0.129-0.558-0.313-1.179-0.405-1.825l-0.295-2.097c-0.345-2.983-0.335-6.736 0.521-11.018 0.846-4.27 2.579-9.036 5.323-13.765 2.728-4.742 6.474-9.341 10.919-13.507 6.38-5.977 14.048-10.666 22.537-13.596-17.886 9.577-16.644 8.676-15.376 7.748 1.262-0.896 2.565-1.808 3.899-2.616 7.118-4.619 15.476-8.035 24.443-9.727-9.994 1.491 2.194-2.459 15.165-3.739-16.484 3.153-14.943 2.741-13.408 2.335 0.752-0.201 1.56-0.416 2.396-0.597l2.324-0.506c3.011-0.659 5.825-1.122 8.617-1.549 5.561-0.822 10.797-1.359 15.786-1.793 4.967-0.445 9.67-0.737 14.066-1.015 4.378-0.294 8.463-0.556 12.237-0.895 3.752-0.356 7.214-0.778 10.451-1.406 3.236-0.624 6.262-1.485 9.039-2.631 2.758-1.144 5.326-2.519 7.405-3.923 1.093-0.697 1.95-1.338 2.812-1.943 0.838-0.58 1.57-1.223 2.153-1.73 1.178-1.007 1.873-1.523 1.873-1.523z"
                        fill="#211915"
                        p-id="4726"
                    ></path>
                    <path
                        d="M388.292 150.65s0.311 0.81 0.765 2.289l0.376 1.237c0.13 0.456 0.187 0.983 0.29 1.556 0.089 0.575 0.189 1.209 0.268 1.897 0.081 0.7 0.088 1.37 0.123 2.132 0.017 0.749 0.070 1.57 0.034 2.409-0.135 2.17-0.368 4.152-0.702 6.098 0.402-2.506 0.207-1.566 0.002-0.567-0.108 0.503-0.217 1.017-0.327 1.539-0.127 0.518-0.296 1.021-0.453 1.551-1.253 4.236-3.528 8.898-6.856 13.327-3.312 4.439-7.619 8.611-12.493 12.197-4.873 3.569-10.281 6.562-15.876 9.022-5.59 2.446-11.365 4.353-17.093 5.822-5.713 1.463-11.399 2.542-16.753 3.367-11.225 1.798-24.28 2.91-37.564 3.070l23.086-1.125c-4.489 0.628-8.844 1.205-12.973 1.853-4.13 0.645-8.030 1.327-11.701 2.089-3.642 0.783-7.104 1.618-10.297 2.668-3.195 1.042-6.199 2.274-8.912 3.71-2.721 1.422-5.106 3.056-7.161 4.582-8.367 6.56-15.181 14.692-20.075 23.992 14.243-18.937 13.572-18.346 13.572-18.346s-0.376-0.758-0.924-2.251c-0.297-0.753-0.568-1.678-0.835-2.796-0.129-0.558-0.313-1.179-0.405-1.825l-0.294-2.097c-0.345-2.983-0.335-6.736 0.521-11.017 0.846-4.27 2.578-9.036 5.323-13.765 2.728-4.742 6.473-9.341 10.918-13.508 6.448-6.037 14.198-10.772 22.774-13.733-18.123 9.713-16.882 8.813-15.612 7.885 1.262-0.896 2.565-1.808 3.899-2.616 7.087-4.6 15.407-8.003 24.335-9.689-9.886 1.453 2.301-2.498 15.272-3.777-16.484 3.153-14.942 2.741-13.407 2.335 0.752-0.201 1.56-0.416 2.395-0.597l2.324-0.506c3.012-0.659 5.825-1.122 8.617-1.549 5.561-0.822 10.798-1.359 15.786-1.793 4.968-0.445 9.671-0.737 14.067-1.015 4.377-0.294 8.462-0.556 12.235-0.895 3.754-0.356 7.214-0.778 10.452-1.406 3.235-0.624 6.262-1.485 9.039-2.631 2.757-1.144 5.326-2.519 7.405-3.923 1.093-0.697 1.951-1.338 2.812-1.943 0.838-0.58 1.57-1.223 2.153-1.73 1.174-1.007 1.871-1.522 1.871-1.522z"
                        fill="#211915"
                        p-id="4727"
                    ></path>
                    <path
                        d="M159.916 732.021h710.703v33.633h-710.703z"
                        fill="#2D2620"
                        p-id="4728"
                    ></path>
                </svg>
                <p class="text-center">制氢厂</p>
            </div>
        </div>
        <div class="demo-icon-2" v-if="carShow">
            <img src="../../assets/svg/car.svg" class="icon-center img-responsive" alt="">
            <p class="text-center">燃料电池车</p>
        </div>
    </div>
</template>
<script>
import {
    BmLabel,
    BmMarker,
    BaiduMap,
    BmScale,
    BmGeolocation,
    BmDriving,
    BmCityList,
    BmlMarkerClusterer,
} from "vue-baidu-map";
import $ from "jquery";
import { car_palte } from "../../assets/js/public.js";
export default {
    data() {
        return {
            center: { lng: 0, lat: 0 }, //经纬度
            zoom: 9, //地图展示级别
            lableTxt: {
                color: "white",
                fontSize: "20px",
                border: "1px solid aqua",
                borderRadius: "10px",
                background: "#03103a",
            },
            markerList: [
                {
                    content: "张家口-望山制氢厂",
                    name: "张家口-望山",
                    type: false, //false为制氢厂 true为加氢站
                    position: {
                        lng: 114.993582,
                        lat: 40.758328,
                    },
                    icon: {
                        url: require("../../assets/svg/gc.svg"),
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
                {
                    content: "中关村-永丰加氢站",
                    name: "中关村-永丰",
                    type: true,
                    position: {
                        lng: 116.243784,
                        lat: 40.075483,
                    },
                    icon: {
                        url: require("../../assets/svg/station.svg"),
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
                {
                    content: "张家口-创坝加氢站",
                    name: "张家口-创坝",
                    type: true,
                    position: {
                        lng: 114.930178,
                        lat: 40.7664,
                    },
                    icon: {
                        url: require("../../assets/svg/station.svg"),
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
                {
                    content: "房山-京辉制氢厂",
                    name: "房山-京辉",
                    type: false,
                    position: {
                        lng: 115.995168,
                        lat: 39.744019,
                    },
                    icon: {
                        url: require("../../assets/svg/gc.svg"),
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
            ],
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
    props: ["mapHeight", "dShow", "carShow"],
    mounted() {},
    methods: {
        updateCirclePath(e) {
            this.circlePath.center = e.target.getCenter();
            this.circlePath.radius = e.target.getRadius();
        },
        handler({ BMap, map }) {
            // console.log(BMap, map);
            this.center.lng = 116.404;
            this.center.lat = 39.915;
            // this.updateCirclePath();
        },
        toStation(name, type) {
            if (type) {
                this.$router.push({
                    path: "/hydrogenation/station-simple",
                    query: { name: name },
                });
            } else {
                this.$router.push({
                    path: "/h-production/production-simple",
                    query: { name: name },
                });
            }
        },
        changePathColor(flag) {
            if (flag) {
                this.changeEndAndStartIcon(flag);
                var length = $("[stroke-linejoin]").length;
                // console.log(length);
                var index = 0;
                for (var i = 0; i < length; i++) {
                    $("[stroke-linejoin]:nth-child(" + (i + 1) + ")").attr({
                        "stroke-opacity": "0.7",
                        stroke: pathColor[index],
                    });
                    index = index > length ? 0 : ++index;
                }
            }
        },
        changeEndAndStartIcon(show) {
            var length = $(".BMap_Marker img").length;
            for (var i = 0; i < length; i++) {
                var flag = $(".BMap_Marker:nth-child(" + (i + 1) + ") img")
                    .attr("src")
                    .indexOf("http");
                if (flag == 0 && show) {
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
        toVehicleSimple() {
            var plate = car_palte("京");
            this.$router.push({
                path: "/fuel-cell-vehicle/fuel-cell-vehicle-simple",
                query: { plate: plate },
            });
        },
    },
};
var pathColor = ["#ff7700", "#00ffc6", "#f8e71c", "#0075ff"];
</script>
<style>
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