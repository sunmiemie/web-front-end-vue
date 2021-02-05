var data_max = function (data) {
    var max = 0;
    for (var i = 0; i < data.length; i++) {
        if (data[i] > max) {
            max = data[i] + 5;
        }
    }
    return parseInt(max);
}
var data_max_list = function (list) {
    var max = 0;
    for (var i = 0; i < list.length; i++) {
        for (var j = 0; j < list[i].length; j++) {
            if (list[i][j] > max) {
                max = list[i][j] + 5;
            }
        }
    }
    return parseInt(max);
}
var date = function (type) {
    var yearList = [];
    var monthList = [];
    var weekList = [];
    var hourList = [];
    var minList = [];
    if (type == "year") {
        for (var i = 0; i < 12; i++) {
            yearList[i] = (i + 1);
        }
        return yearList;
    }
    if (type == "month") {
        for (var i = 0; i < 31; i++) {
            monthList[i] = (i + 1);
        }
        return monthList;
    }
    if (type == "week") {
        for (var i = 0; i < 7; i++) {
            weekList[i] = (i + 1);
        }
        return weekList;
    }
    if (type == "hour") {
        for (var i = 0; i < 24; i++) {
            hourList[i] = (i + 1);
        }
        return hourList;
    }
    if (type == "min") {
        for (var i = 0; i < 30; i++) {
            minList[i] = (i + 1);
        }
        return minList;
    }

}
var data_calculation = function (length, max, min) {
    var dataList = [];
    for (var i = 0; i < length; i++) {
        dataList[i] = Math.round(Math.random() * (max - min)) + min;
    }
    return dataList;
}

var random_number = function (max, min) {
    return parseInt(Math.random() * (max - min) + min);
}

var car_palte = function (area) {
    var areaCode = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
    var areaIndex = Math.round(Math.random() * areaCode.length);
    var number = parseInt(Math.random() * 1000000);
    return area + areaCode[areaIndex] + number;
}

var x_date = function (type) {
    var date = new Date();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var days = new Date(year, month, date.getDate()).getDate();
    var now_day = date.getDate();
    var now_min = date.getMinutes();
    var now_hour = date.getHours();
    var now_second = date.getSeconds();
    var dayList = [];
    var monthList = [];
    var weekList = [];
    var hourList = []
    var minList = [];
    var secondList = [];
    var unitList = ["月", "日", "年", "点", "分"];
    switch (type) {
        case "month":
            for (var i = 1; i <= month; i++) {
                monthList.push(i + unitList[0]);
            }
            return monthList;
        case "day":
            for (var i = 1; i <= days; i++) {
                dayList.push(month + unitList[0] + i + unitList[1]);
            }
            return dayList;
        case "week":
            for (var i = 7; i > 0; i--) {
                weekList.push(month + unitList[0] + (now_day - i))
            }
            return weekList;
        case "hour":
            for (var i = 1; i <= 24; i++) {
                hourList.push(i + unitList[3]);
            }
            return hourList;
        case "min":
            for (var i = 30; i > 0; i--) {
                var temp = now_min;
                if (temp + i < 10 || temp - i < 10) {
                    temp = 0 + "" + now_min;
                }
                if (now_min - 30 < 0) {
                    minList.push((now_hour - 1) + ":" + temp + i);
                } else {
                    minList.push(now_hour + ":" + (temp - i));
                }
            }
            return minList;
        case "second":
            for (var i = 30; i > 0; i--) {
                if (now_second - 30 < 0) {
                    var temp_min = now_min - 1;
                    var temp_second = now_second - i + 60;
                    if (now_second - i + 60 > 60) {
                        temp_min = now_min;
                        temp_second = now_second - i;
                    }
                    if (temp_min - 1 < 0) {
                        now_hour -= 1;
                        if (now_hour - 1 < 0) {
                            now_hour = 23;
                        }
                        temp_min = 59;
                    }
                    if (temp_min < 10) {
                        temp_min = 0 + "" + temp_min;
                    }
                    if (temp_second < 10) {
                        temp_second = 0 + "" + temp_second;
                    }
                    secondList.push(now_hour + ":" + temp_min + ":" + temp_second);
                } else {
                    secondList.push(now_hour + ":" + now_min + ":" + (now_second - i));
                }
            }
            return secondList;
        default:
            break;
    }
}


export {
    data_max,
    data_max_list,
    date,
    data_calculation,
    random_number,
    car_palte,
    x_date,
}
