import { eb_line } from '../../assets/js/table';
import { data_calculation, data_max_list, random_number, x_date } from '../../assets/js/public';

// 演示曲线的采样、图表和监听器由组件统一管理，切换页面后不再后台运行。
export default function liveChart(options) {
    return {
        data() {
            return {
                interValId: null,
                series: options.ranges.map(range => data_calculation(30, range[0], range[1])),
            };
        },
        mounted() {
            this._chart = this.$echarts.init(this.$el);
            window.addEventListener('resize', this.resizeChart);
            this.drawLine();
            this.startMin();
        },
        beforeDestroy() {
            this.stopInterVal();
            window.removeEventListener('resize', this.resizeChart);
            if (this._chart) this._chart.dispose();
            this._chart = null;
        },
        methods: {
            drawLine() {
                if (!this._chart) return;
                const maximum = options.maximum === undefined ? [data_max_list(this.series)] : options.maximum;
                eb_line(this.series, options.colors, options.titles, options.units,
                    x_date(options.timeUnit), maximum, this._chart, false);
            },
            resizeChart() {
                if (this._chart) this._chart.resize();
            },
            stopInterVal() {
                clearInterval(this.interValId);
                this.interValId = null;
            },
            startMin() {
                // 多次 mouseout 也只保留一个采样定时器。
                this.stopInterVal();
                this.interValId = setInterval(() => {
                    this.series.forEach((values, index) => {
                        values.shift();
                        values.push(random_number(options.ranges[index][0], options.ranges[index][1]));
                    });
                    this.drawLine();
                }, options.interval);
            },
        },
    };
}
