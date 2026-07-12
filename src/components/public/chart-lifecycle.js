// 每个图表组件独立管理窗口监听及实例，避免仪表盘多个图表相互覆盖。
export default {
    methods: {
        createChart(id) {
            const element = this.$el.id === id ? this.$el : this.$el.querySelector('[id="' + id + '"]');
            const charts = this._chartInstances || (this._chartInstances = []);
            const existing = charts.find(entry => entry.element === element);
            if (existing) return existing.chart;
            const chart = this.$echarts.init(element);
            charts.push({ element, chart });
            if (!this._chartResizeHandler) {
                this._chartResizeHandler = () => charts.forEach(entry => entry.chart.resize());
                window.addEventListener('resize', this._chartResizeHandler);
            }
            return chart;
        },
    },
    beforeDestroy() {
        if (this._chartResizeHandler) window.removeEventListener('resize', this._chartResizeHandler);
        (this._chartInstances || []).forEach(entry => entry.chart.dispose());
        this._chartInstances = [];
        this._chartResizeHandler = null;
    },
};
