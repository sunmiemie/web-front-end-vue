<template>
    <scales>
        <top-nav />
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <p-station-title :simpleTitle="stationName" />
        </div>
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <p-station-top />
        </div>
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <p-station-mid />
        </div>
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <p-station-bottom :BottomData="dataBottom" />
        </div>
    </scales>
</template>

<script>
import PStationTitle from '../components/hydrogenation-simple/PStationTitle.vue';
import PStationTop from '../components/hydrogenation-simple/PStationTop.vue';
import PStationMid from '../components/hydrogenation-simple/PStationMid.vue';
import PStationBottom from '../components/hydrogenation-simple/PStationBottom.vue';
import Scales from "../components/public/Scales.vue";
import TopNav from "../components/public/TopNav.vue";
import { vinByDataStationId } from "../api/tisinghua-static";
import {
    allValues,
    data_station_type,
    jsonFormat,
    getUrlKey,
} from "../api/util";
export default {
    created() {
        this.initWs();
    },
    destroyed() {
        this.ws.close();
    },
    data() {
        return {
            ws: null,
            stationId: null,
            stationName: null,
            dataBottom: {}
        };
    },
    components: {
        Scales,
        TopNav,
        PStationTitle,
        PStationTop,
        PStationMid,
        PStationBottom
    },
    async mounted() {
        this.stationName = getUrlKey("name");
        this.stationId = getUrlKey("id");
        this.receive();
    },
    methods: {
        initWs() {
            var result = allValues(
                data_station_type.station,
                getUrlKey("id")
            );
            this.ws = this.websocket.ws(result);
        },
        receive() {
            var that = this;
            that.ws.onmessage = function (data) {
                let value = jsonFormat(data);
                that.dataBottom = value.data.content;
            };
        },
    },
};
</script>

<style>
</style>