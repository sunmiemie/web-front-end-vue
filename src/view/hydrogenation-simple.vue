<template>
    <scales>
        <top-nav />
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <p-station-title :simpleTitle="stationName" />
        </div>
        <div class="row" style="max-width: 99%; margin: 0 auto">
            <p-station-top :addData="addData" />
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
import { statisticalAdd, statisticalAlarm, vinByDataStationId } from "../api/tisinghua-static";
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
            addData: {
                addDay: 0,
                addMonth: 0,
                addYear: 0,
                alarm: 0,
            },
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
        const day = {
            dataStationId: this.stationId,
            date: "day"
        };
        const month = {
            dataStationId: this.stationId,
            date: "month"
        };
        const year = {
            dataStationId: this.stationId,
            date: "year"
        };
        const alarmYear = {
             dataStationId: this.stationId,
            date: "year"
        }
        this.addData.addDay = await statisticalAdd(day);
        this.addData.addMonth = await statisticalAdd(month);
        this.addData.addYear = await statisticalAdd(year);
        this.addData.alarm = await statisticalAlarm(alarmYear);
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