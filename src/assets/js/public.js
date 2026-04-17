var data_max = function (data) {
    // 先找真实最大值再增加留白，避免把留白参与下一轮比较。
    var max = -Infinity;
    data.forEach(function (item) {
        if (item === null || item === '' || typeof item === 'boolean') return;
        var value = Number(item);
        if (Number.isFinite(value)) max = Math.max(max, value);
    });
    return Number.isFinite(max) ? Math.max(0, Math.ceil(max + 5)) : 0;
}
var data_max_list = function (list) {
    return data_max(list.reduce(function (values, row) {
        return values.concat(row);
    }, []));
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
    var now = new Date();
    var month = now.getMonth() + 1;
    var labels = [];
    var pad = function (value) { return value < 10 ? '0' + value : String(value); };
    var i;
    switch (type) {
        case "month":
            for (i = 1; i <= month; i++) labels.push(i + "月");
            break;
        case "day":
            // 当前月已发生的日期，不借用下个月计算，避免月底发生日期溢出。
            for (i = 1; i <= now.getDate(); i++) labels.push(month + "月" + i + "日");
            break;
        case "week":
            for (i = 7; i > 0; i--) {
                var day = new Date(now.getTime());
                day.setDate(day.getDate() - i);
                labels.push((day.getMonth() + 1) + "月" + day.getDate());
            }
            break;
        case "hour":
            for (i = 1; i <= 24; i++) labels.push(i + "点");
            break;
        case "min":
        case "second":
            // 用时间戳回退，统一处理跨小时、午夜和跨月边界。
            var step = type === "min" ? 60000 : 1000;
            for (i = 30; i > 0; i--) {
                var point = new Date(now.getTime() - i * step);
                var label = pad(point.getHours()) + ":" + pad(point.getMinutes());
                if (type === "second") label += ":" + pad(point.getSeconds());
                labels.push(label);
            }
            break;
        default:
            return undefined;
    }
    return labels;
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
