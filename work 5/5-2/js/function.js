// 获取第一个输入框ID
var num1Ele = document.getElementById("num1");
// 获取操作符ID
var operatorEle = document.getElementById("operator");
// 获取第二个输入框ID
var num2Ele = document.getElementById("num2");

function calculator() {
    // 获取第一个输入值
    var num1Val = num1Ele.value;
    // 获取操作符
    var operator = operatorEle.value;
    // 获取第二个输入值
    var num2Val = num2Ele.value;
    if (num1Val == "") {
        alert("请输入数字1！")
        num1Ele.focus();
        return;
    }
    if (num2Val == "") {
        alert("请输入数字2！")
        num2Ele.focus();
        return;
    }
    // 将输入值转化为数字

    // 判断输入值是否为数字
    if (isNaN(num1Val) == false && isNaN(num2Val) == false) {
        var num1Val = parseInt(num1Val);
        var num2Val = parseInt(num2Val);
        var result;
        if (operator == "+") {
            result = num1Val + num2Val;

        } else if (operator == "-") {
            result = num1Val - num2Val;
        } else if (operator == "*") {
            result = num1Val * num2Val;
        } else if (operator == "/") {
            if (num2Val == 0) {
                alert("除数不能为0！！！")
                return;
            } else {
                result = num1Val / num2Val;
            }


        }
    } else {
        alert("请输入数字！");
        return;
    }
    // 将结果输出
    document.getElementById("result").value = result;

}
