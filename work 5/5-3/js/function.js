    var arr = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];
    // 打印该数组
    document.write("数组arr=" + arr + "<br>");
    // 定义对象：存放每个字母及其位置和出现次数
    var count = {};
    var pos = {};
    //遍历arr，统计每个字母出现的次数并记录位置,以对象形式存储在obj对象中
    arr.forEach(function(value, index) {
        if (count[value]) {
            pos[value] += "," + index;
            count[value]++;
        } else {
            pos[value] = "" + index;
            count[value] = 1;

        }
    });
    //打印对象的函数
    function printObj(obj) {
        var s = "";
        var m = "";
        for (var i in obj) {
            s = s + "<br>" + i + ":" + obj[i] + "<br>";

        }

        document.write(s);
    }
    document.write("每个字母及其出现次数:");
    printObj(count);
    document.write("每个字母及其出现位置:");
    printObj(pos);


    // 计算出现次数最多的字母
    var max = 0;
    var maxArr = [];
    for (i in pos) {
        if (pos[i].length >= max) {
            max = pos[i].length;
            maxArr.push(i);
        }

    }
    console.log(count);
    console.log(pos);
    console.log(maxArr);
    console.log(pos[maxArr]);
    // 打印结果

    document.write("出现次数最多的是：" + maxArr + "<br>");
    document.write("位置分布：" + pos[maxArr] + "<br>");
