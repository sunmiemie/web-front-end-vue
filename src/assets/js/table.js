import echarts from 'echarts'
import {
    data
} from 'jquery';
import {
    x_date
} from './public.js'
var eb_f = function (dataList, colorList, titleList, unitList, xArary, max, el, zomFlag, flag) {
    // let ebone = this.$echarts.init(document.getElementById(id));
    var end = zomFlag == false ? 50 : 100;
    var option = {
        backgroundColor: '',
        // color: ["#FF2160", "#E8E637"],
        color: colorList,
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            //   formatter: function (params) {
            //     console.log(params);
            //     return params.name + ":" + params.value + "kg"
            //   },
        },
        grid: {
            left: '2%',
            right: '4%',
            bottom: '14%',
            top: '16%',
            containLabel: true
        },
        legend: {
            data: titleList,
            // data: ['本月30天制氢量/kg', '本年十二个月制氢量/kg'],
            right: 10,
            top: 12,
            textStyle: {
                color: "#fff"
            },
            itemWidth: 12,
            itemHeight: 10,
            // itemGap: 35
        },
        xAxis: {
            type: 'category',
            data: xArary,
            axisLine: {
                lineStyle: {
                    color: 'white'
                }
            },
            axisLabel: {
                // interval: 0,
                // rotate: 40,
                textStyle: {
                    fontFamily: 'Microsoft YaHei'
                }
            },
            nameLocation: "center",
            nameTextStyle: {
                color: "white",
                fontSize: "14",
            },
            nameGap: "25",
            name: unitList[0]
        },

        yAxis: {
            type: 'value',
            max: max,
            nameLocation: "end",
            nameTextStyle: {
                color: "white",
                fontSize: "12",
            },
            nameGap: "10",
            name: unitList[1],
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'white'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.3)'
                }
            },
            axisLabel: {
                // formatter: function (params) {
                //   console.log(params);
                //   return params + "kg"
                // },
            }
        },
        dataZoom: [{
            show: flag,
            realtime: true,
            start: 0,
            end: end,
            textStyle: {
                color: '#fff'
            }
        },
        {
            type: 'inside',
            realtime: true,
            start: 50,
            end: 100,
            textStyle: {
                color: '#fff'
            }
        }
        ],
        series: [{
            name: titleList[0],
            type: 'bar',
            barWidth: '20%',
            itemStyle: {
                barBorderRadius: 3,
            },
            data: dataList[0]
        },
        {
            name: titleList[1],
            type: 'bar',
            barWidth: '20%',
            itemStyle: {
                barBorderRadius: 10,
            },
            data: dataList[1]
        }
        ]
    }
    el.setOption(option, true);
};
var eb_bar_double = function (dataList, colorList, titleList, unitList, xArray, maxList, el, flag, y2) {
    // let ebone = this.$echarts.init(document.getElementById(id));
    var option = {
        backgroundColor: '',
        // color: ["#FF2160", "#E8E637"],
        color: colorList,
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '2%',
            right: '4%',
            bottom: '14%',
            top: '16%',
            containLabel: true
        },
        legend: {
            data: titleList,
            // data: ['本月30天制氢量/kg', '本年十二个月制氢量/kg'],
            //   right: 120,
            top: 2,
            textStyle: {
                color: "#fff",
            },
            itemWidth: 12,
            itemHeight: 10,
            // itemGap: 35
        },
        xAxis: {
            type: 'category',
            data: xArray,
            axisLine: {
                lineStyle: {
                    color: 'white'
                }
            },
            axisLabel: {
                // interval: 0,
                // rotate: 40,
                textStyle: {
                    fontFamily: 'Microsoft YaHei'
                }
            },
            nameLocation: "center",
            nameTextStyle: {
                color: "white",
                fontSize: "14",
            },
            nameGap: "30",
            name: unitList[0]
        },

        yAxis: [{
            type: 'value',
            max: maxList[0],
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'white'
                }
            },
            nameLocation: "end",
            nameTextStyle: {
                color: "white",
                fontSize: "12",
            },
            ameGap: "10",
            name: unitList[1],
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.3)'
                }
            },
            axisLabel: {}
        }, {
            type: 'value',
            max: maxList[1],
            nameLocation: "end",
            nameTextStyle: {
                color: "white",
                fontSize: "12",
            },
            ameGap: "10",
            name: unitList[2],
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'white'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.3)'
                }
            },
            axisLabel: {}
        }],
        dataZoom: [{
            show: flag,
            realtime: true,
            start: 0,
            end: 50,
            textStyle: {
                color: '#fff'
            }
        },
        {
            type: 'inside',
            realtime: true,
            start: 50,
            end: 100,
            textStyle: {
                color: '#fff'
            }
        }
        ],
        series: [
            //虚线
            {
                name: titleList[0],
                type: 'line',
                symbolSize: 5, //拐点圆的大小
                color: colorList[0], //折线条的颜色
                data: dataList[0],
                smooth: false, //关键点，为true是不支持虚线的，实线就用true
                itemStyle: {
                    normal: {
                        color: colorList[0],
                        borderColor: colorList[0], //拐点边框颜色
                    }
                },
            },
            //实线
            {
                name: titleList[1],
                type: 'bar',
                symbol: 'circle',
                symbolSize: 5,
                color: colorList[1], //折线条的颜色
                itemStyle: {
                    normal: {
                        color: colorList[1],
                        borderColor: colorList[1], //拐点边框颜色
                    }
                },
                yAxisIndex: 1,
                data: dataList[1]
            },
            {
                name: titleList[2],
                type: 'bar',
                symbol: 'circle',
                symbolSize: 5,
                color: colorList[2], //折线条的颜色
                itemStyle: {
                    normal: {
                        color: colorList[2],
                        borderColor: colorList[2], //拐点边框颜色
                    }
                },
                data: dataList[2]
            }

        ]
    }
    el.setOption(option, true);
};
var eb_line_double = function (dataList, colorList, titleList, unitList, xArray, maxList, el, flag, y2) {
    // let ebone = this.$echarts.init(document.getElementById(id));
    var option = {
        backgroundColor: '',
        // color: ["#FF2160", "#E8E637"],
        color: colorList,
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '2%',
            right: '4%',
            bottom: '14%',
            top: '16%',
            containLabel: true
        },
        legend: {
            data: titleList,
            // data: ['本月30天制氢量/kg', '本年十二个月制氢量/kg'],
            //   right: 120,
            top: 2,
            textStyle: {
                color: "#fff",
            },
            itemWidth: 12,
            itemHeight: 10,
            // itemGap: 35
        },
        xAxis: {
            type: 'category',
            data: xArray,
            axisLine: {
                lineStyle: {
                    color: 'white'
                }
            },
            axisLabel: {
                // interval: 0,
                // rotate: 40,
                textStyle: {
                    fontFamily: 'Microsoft YaHei'
                }
            },
            nameLocation: "center",
            nameTextStyle: {
                color: "white",
                fontSize: "14",
            },
            nameGap: "30",
            name: unitList[0]
        },

        yAxis: [{
            type: 'value',
            max: maxList[0],
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'white'
                }
            },
            nameLocation: "end",
            nameTextStyle: {
                color: "white",
                fontSize: "12",
            },
            ameGap: "10",
            name: unitList[1],
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.3)'
                }
            },
            axisLabel: {}
        }, {
            type: 'value',
            max: maxList[1],
            nameLocation: "end",
            nameTextStyle: {
                color: "white",
                fontSize: "12",
            },
            ameGap: "10",
            name: unitList[2],
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'white'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.3)'
                }
            },
            axisLabel: {}
        }],
        dataZoom: [{
            show: flag,
            realtime: true,
            start: 0,
            end: 50,
            textStyle: {
                color: '#fff'
            }
        },
        {
            type: 'inside',
            realtime: true,
            start: 50,
            end: 100,
            textStyle: {
                color: '#fff'
            }
        }
        ],
        series: [
            //虚线
            {
                name: titleList[0],
                type: 'line',
                symbolSize: 5, //拐点圆的大小
                color: colorList[0], //折线条的颜色
                data: dataList[0],
                smooth: false, //关键点，为true是不支持虚线的，实线就用true
                itemStyle: {
                    normal: {
                        color: colorList[0],
                        borderColor: colorList[0], //拐点边框颜色
                    }
                },
            },
            //实线
            {
                name: titleList[1],
                type: 'line',
                symbol: 'circle',
                symbolSize: 5,
                color: colorList[1], //折线条的颜色
                itemStyle: {
                    normal: {
                        color: colorList[1],
                        borderColor: colorList[1], //拐点边框颜色
                    }
                },
                yAxisIndex: 1,
                data: dataList[1]
            },
            {
                name: titleList[2],
                type: 'line',
                symbol: 'circle',
                symbolSize: 5,
                color: colorList[2], //折线条的颜色
                itemStyle: {
                    normal: {
                        color: colorList[2],
                        borderColor: colorList[2], //拐点边框颜色
                    }
                },
                data: dataList[2]
            }

        ]
    }
    el.setOption(option, true);
};
var eb_line = function (dataList, colorList, titleList, unitList, xArray, max, el, flag, y2) {
    // let ebone = this.$echarts.init(document.getElementById(id));
    var option = {
        backgroundColor: '',
        // color: ["#FF2160", "#E8E637"],
        color: colorList,
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '2%',
            right: '4%',
            bottom: '14%',
            top: '16%',
            containLabel: true
        },
        legend: {
            data: titleList,
            // data: ['本月30天制氢量/kg', '本年十二个月制氢量/kg'],
            right: 10,
            top: 12,
            textStyle: {
                color: "#fff"
            },
            itemWidth: 12,
            itemHeight: 10,
            // itemGap: 35
        },
        xAxis: {
            type: 'category',
            data: xArray,
            axisLine: {
                lineStyle: {
                    color: 'white'
                }
            },
            axisLabel: {
                // interval: 0,
                // rotate: 40,
                textStyle: {
                    fontFamily: 'Microsoft YaHei'
                }
            },
            nameLocation: "center",
            nameTextStyle: {
                color: "white",
                fontSize: "14",
            },
            nameGap: "30",
            name: unitList[0]
        },

        yAxis: {
            type: 'value',
            max: max,
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'white'
                }
            },
            nameLocation: "end",
            nameTextStyle: {
                color: "white",
                fontSize: "14",
            },
            //   nameGap: "10",
            name: unitList[1],
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.3)'
                }
            },
            axisLabel: {}
        },
        dataZoom: [{
            show: flag,
            realtime: true,
            start: 0,
            end: 100,
            textStyle: {
                color: '#fff'
            }
        },
        {
            type: 'inside',
            realtime: true,
            start: 50,
            end: 100,
            textStyle: {
                color: '#fff'
            }
        }
        ],
        series: [
            //虚线
            {
                name: titleList[0],
                type: 'line',
                symbolSize: 5, //拐点圆的大小
                color: colorList[0], //折线条的颜色
                data: dataList[0],
                smooth: false, //关键点，为true是不支持虚线的，实线就用true
                itemStyle: {
                    normal: {
                        color: colorList[0],
                        borderColor: colorList[0], //拐点边框颜色
                    }
                },
            },
            //实线
            {
                name: titleList[1],
                type: 'line',
                symbol: 'circle',
                symbolSize: 5,
                color: colorList[1], //折线条的颜色
                itemStyle: {
                    normal: {
                        color: colorList[1],
                        borderColor: colorList[1], //拐点边框颜色
                    }
                },
                data: dataList[1]
            },
            {
                name: titleList[2],
                type: 'line',
                symbol: 'circle',
                symbolSize: 5,
                color: colorList[2], //折线条的颜色
                itemStyle: {
                    normal: {
                        color: colorList[2],
                        borderColor: colorList[2], //拐点边框颜色
                    }
                },
                data: dataList[2]
            }

        ]
    }
    el.setOption(option, true);
};

var three_dr = function (threeDr, color, flag, flag2) {
    var dataArr = 44;
    var colorSet = {
        // color: '#468EFD'
        color: color
    };
    var option = {
        backgroundColor: '',
        tooltip: {
            formatter: "{a} <br/>{b} : {c}%"
        },

        series: [{
            name: "氢剩余量",
            type: "gauge",
            // center: ['20%', '50%'],
            // radius: '40%',

            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    color: [
                        [dataArr / 100, colorSet.color],
                        [1, "#111F42"]
                    ],
                    width: 8
                }
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,

            },
            splitLine: {
                show: false,
            },
            itemStyle: {
                show: false,
            },
            detail: {
                formatter: function (value) {
                    if (value !== 0) {
                        if (flag2) {
                            var num = Math.round(value);
                            return parseInt(num).toFixed(0) + "%";
                        }
                    } else {
                        return 0;
                    }
                },
                offsetCenter: [0, 82],
                textStyle: {
                    padding: [0, 0, 0, 0],
                    fontSize: 18,
                    fontWeight: '700',
                    color: colorSet.color
                }
            },
            title: { //标题
                show: flag,
                offsetCenter: [0, 46], // x, y，单位px
                textStyle: {
                    color: "#fff",
                    fontSize: 14, //表盘上的标题文字大小
                    fontWeight: 400,
                    fontFamily: 'PingFangSC'
                }
            },
            data: [{
                name: "氢",
                value: dataArr,
            }],
            pointer: {
                show: true,
                length: '75%',
                radius: '20%',
                width: 10, //指针粗细
            },
            animationDuration: 4000,
        },
        {
            name: '外部刻度',
            type: 'gauge',
            //  center: ['20%', '50%'],
            radius: '50%',
            min: 0, //最小刻度
            max: 100, //最大刻度
            splitNumber: 10, //刻度数量
            startAngle: 225,
            endAngle: -45,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: [
                        [1, 'rgba(0,0,0,0)']
                    ]
                }
            }, //仪表盘轴线
            axisLabel: {
                show: true,
                color: '#4d5bd1',
                distance: 25,
                formatter: function (v) {
                    switch (v + '') {
                        case '0':
                            return '0';
                        case '10':
                            return '10';
                        case '20':
                            return '20';
                        case '30':
                            return '30';
                        case '40':
                            return '40';
                        case '50':
                            return '50';
                        case '60':
                            return '60';
                        case '70':
                            return '70';
                        case '80':
                            return '80';
                        case '90':
                            return '90';
                        case '100':
                            return '100';
                    }
                }
            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 7,
                lineStyle: {
                    color: colorSet.color, //用颜色渐变函数不起作用
                    width: 1,
                },
                length: -8
            }, //刻度样式
            splitLine: {
                show: true,
                length: -20,
                lineStyle: {
                    color: colorSet.color, //用颜色渐变函数不起作用
                }
            }, //分隔线样式
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        },
        ]
    };
    threeDr.setOption(option, true);
}

var add_hydrogen = function (hy) {
    var getfpkszb = [62.35]; //储氢量占比
    var getfpkszb1 = [0.01];
    var getfpksrs = [1265]; //储氢量
    var option = {
        backgroundColor: '',

        title: {
            text: getfpkszb + '%',
            textStyle: {
                color: '#559BF4',
                fontSize: 16
            },

            subtext: '储氢量',
            subtextStyle: {
                color: '#fff',
                fontSize: 16
            },
            itemGap: 20,
            left: 'center',
            top: '43%'
        },
        tooltip: {
            formatter: function (params) {
                return '<span style="color: #fff;">储氢量：' + getfpksrs + ' Kg</span>';
            }
        },
        angleAxis: {
            max: 100,
            clockwise: true, // 逆时针
            // 隐藏刻度线
            show: false
        },
        radiusAxis: {
            type: 'category',
            show: true,
            axisLabel: {
                show: false,
            },
            axisLine: {
                show: false,

            },
            axisTick: {
                show: false
            },
        },
        polar: {
            center: ['50%', '50%'],
            radius: '100%' //图形大小
        },
        series: [{
            stack: '测试',
            type: 'bar',
            data: getfpkszb,
            showBackground: true,
            backgroundStyle: {
                color: '#EFF2F5',
                borderColor: '#EFF2F5',
                borderWidth: 1
            },
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 30,
            silent: true,
            itemStyle: {
                normal: {
                    opacity: 1,
                    color: "#518FEF",
                    borderColor: "#5CBEFF",
                    borderWidth: 1
                }
            },
        }, {
            stack: '测试',
            type: 'bar',
            data: getfpkszb1,
            showBackground: true,
            backgroundStyle: {
                color: '#EFF2F5',
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowBlur: 10,
                shadowOffsetY: 2,

            },
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 15,
            itemStyle: {
                color: '#90BDFF',
                borderColor: 'rgba(81,143,239, 1)',
                borderWidth: 3
            },
        }]
    };
    hy.setOption(option, true);
}


var index_car = function (el, colorList, nameList, valueList, titleFlag, unit) {
    //   var color = ['#FC4567', '#2F8DF4', '#C25EC4']
    var position = titleFlag == true ? 20 : 0;
    var color = colorList;

    var option = {
        color: color,
        backgroundColor: '',
        title: {
            text: '',
            left: 'center',
            top: '50%',
            textStyle: {
                fontSize: 22,
                color: '#fff',
                fontWeight: 'normal'
            }
        },
        tooltip: {
            trigger: 'item',
        },
        legend: {
            //   orient: 'vertical',
            right: position,
            top: position,
            textStyle: {
                color: "#fff"
            }
        },
        series: [{
            type: 'pie',
            roseType: 'radius',
            radius: ['30%', '60%'],
            data: [{
                value: valueList[0],
                //   value: 220,
                name: nameList[0]
                //   name: '本日用氢量'
            }, {
                value: valueList[1],
                //   value: 120,
                name: nameList[1]
                //   name: '本月用氢量'
            },
            {
                value: valueList[2],
                //   value: 189,
                name: nameList[2]
                //   name: '本年用氢量'
            }
            ],
            label: {
                normal: {
                    //   formatter: '{font|{c}}\n{hr|}\n{font|{d}%}',
                    formatter: '{font|{c}' + unit + '}',
                    rich: {
                        font: {
                            fontSize: 10,
                            padding: [5, 0],
                            color: '#fff'
                        },
                        hr: {
                            height: 0,
                            borderWidth: 1,
                            width: '100%',
                            borderColor: '#fff'
                        }
                    }
                },
            },
            labelLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0,0,0,0.5)'
                }
            }
        }]
    };
    el.setOption(option, true);
}
var data_time = function (flag) {
    return flag == true ? ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"] : ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
}

var ranking = function (el, dataList, nameList, colorList, unit) {
    var charts = { // 按顺序排列从大到小
        // cityList: ['一号加氢站', '二号加氢站', '三号加氢站', '四号加氢站'],
        cityList: nameList,
        // cityData: [7500, 6200, 5700, 4800]
        cityData: dataList
    }
    var top10CityList = charts.cityList
    var top10CityData = charts.cityData
    //   var color = ['rgba(248,195,248', 'rgba(100,255,249', 'rgba(135,183,255', 'rgba(235,283,255']
    var color = colorList

    let lineY = []
    for (var i = 0; i < charts.cityList.length; i++) {
        var x = i
        if (x > color.length - 1) {
            x = color.length - 1
        }
        var data = {
            name: charts.cityList[i],
            color: color[x] + ')',
            value: top10CityData[i],
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: color[x] + ', 0.3)'
                    }, {
                        offset: 1,
                        color: color[x] + ', 1)'
                    }], false),
                    barBorderRadius: 10
                },
                emphasis: {
                    shadowBlur: 15,
                    shadowColor: 'rgba(0, 0, 0, 0.1)'
                }
            }
        }
        lineY.push(data)
    }

    var option = {
        backgroundColor: '',
        title: {
            show: false
        },
        tooltip: {
            trigger: 'item',
        },
        grid: {
            borderWidth: 0,
            top: '10%',
            left: '5%',
            right: '15%',
            bottom: '3%'
        },
        color: color,
        yAxis: [{
            type: 'category',
            inverse: true,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false,
                inside: false
            },
            data: top10CityList
        }, {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                inside: false,
                textStyle: {
                    color: '#b3ccf8',
                    fontSize: '14',
                    fontFamily: 'PingFangSC-RegularNu'
                },
                formatter: function (val) {
                    return `${val}` + unit
                }
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: top10CityData
        }],
        xAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            }
        },
        series: [{
            name: '',
            type: 'bar',
            zlevel: 2,
            barWidth: '10px',
            data: lineY,
            animationDuration: 1500,
            label: {
                normal: {
                    color: '#b3ccf8',
                    show: true,
                    position: [0, '-24px'],
                    textStyle: {
                        fontSize: 16
                    },
                    formatter: function (a, b) {
                        return a.name
                    }
                }
            }
        }],
        animationEasing: 'cubicOut'
    }
    el.setOption(option, true);
}
var eb_f_line = function (data1, data2, colorList, nameList, el, flag, max, typeList, unitList) {
    var max = max == null || max == undefined ? 1200 : max;
    var option = {
        backgroundColor: '',
        // color: ["#FF2160", "#E8E637"],
        color: colorList,
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '2%',
            right: '4%',
            bottom: '14%',
            top: '16%',
            containLabel: true
        },
        legend: {
            data: nameList,
            // data: ['本月30天制氢量/kg', '本年十二个月制氢量/kg'],
            right: 10,
            top: 12,
            textStyle: {
                color: "#fff"
            },
            itemWidth: 12,
            itemHeight: 10,
            // itemGap: 35
        },
        xAxis: {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
            axisLine: {
                lineStyle: {
                    color: 'white'
                }
            },
            axisLabel: {
                // interval: 0,
                // rotate: 40,
                textStyle: {
                    fontFamily: 'Microsoft YaHei'
                }
            },
            nameLocation: "center",
            nameTextStyle: {
                color: "white",
                fontSize: "14",
            },
            nameGap: "30",
            name: unitList[0]
        },

        yAxis: {
            type: 'value',
            max: max,
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'white'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.3)'
                }
            },
            nameLocation: "end",
            nameTextStyle: {
                color: "white",
                fontSize: "14",
            },
            //   nameGap: "30",
            name: unitList[1],
            axisLabel: {}
        },
        dataZoom: [{
            show: flag,
            realtime: true,
            start: 0,
            end: 50,
            textStyle: {
                color: '#fff'
            }
        },
        {
            type: 'inside',
            realtime: true,
            start: 50,
            end: 100,
            textStyle: {
                color: '#fff'
            }
        }
        ],
        series: [{
            name: nameList[0],
            type: typeList[0],
            barWidth: '20%',
            itemStyle: {
                barBorderRadius: 3,
            },
            data: data1
        },
        {
            name: nameList[1],
            type: typeList[1],
            barWidth: '20%',
            itemStyle: {
                barBorderRadius: 10,
            },
            data: data2
        }
        ]
    }
    el.setOption(option, true);
};

export { //导出函数,
    eb_line,
    eb_f,
    three_dr,
    add_hydrogen,
    index_car,
    data_time,
    ranking,
    eb_f_line,
    eb_line_double,
    eb_bar_double
}