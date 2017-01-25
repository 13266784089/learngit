window.onload = function () {
    //有两个数值的四则运算
    function calMethodone(num1, num2, operation) {
        //转换为数值
        num1 = Number(num1);
        num2 = Number(num2);

        switch (operation) {
            case "+":
                return num1 + num2;
                break;
            case "-":
                return num1 - num2;
                break;
            case "*":
                return num1 * num2;
                break;
            case "/":
                if(num2 == 0){
                    alert("除数不能为0！")
                }
                return  num1 / num2;
                break;
        }
    }

//有一个数值的三角函数和对数运算
    function calMethodtwo(num, operation) {
        num = Number(num);
        switch (operation) {
            case "sin":
                return Math.sin(num * Math.PI / 180);
                break;
            case "cos":
                return Math.cos(num * Math.PI / 180);
                break;
            case "tan":
                return Math.tan(num * Math.PI / 180);
                break;
            case "log":
                return Math.log(num);
                break;
            case "exp":
                return Math.exp(num);
                break;
        }
    }

//解决这些浮点数的精度问题
    Math.formatFloat = function (f, digit) {
        var m = Math.pow(10, digit);
        return parseInt(f * m, 10) / m;
    }

//显示区
    var cal_Output = document.getElementById("cal_Output");
//功能区
    var cal_Button = document.getElementById("cal_Button");
//计算结果
    var result = 0;
//操作符
    var operation;
//重置输入值，连续计算
    var Reset = false;
    var Num1, Num2;
//设置显示屏的值
    function setOutput(num) {
        cal_Output.value = num;
    }

//得到显示屏的值
    function getOutput() {
        return cal_Output.value;
    }

//点击按钮事件
    cal_Button.onclick = function (e) {
        var event = window.event || e;//e对象存在时回返e,当window.event存在时返回event，区分Firefox,IE
        var target = event.target || event.srcElement;//IE下支持event.srcElement，Firefox支持event.target
        if (target.type == "button") {
            var sign = target.getAttribute("_type");//获取自定义按钮属性
            var value = target.value;//获取按钮值
            var num = getOutput(num);//获取显示屏值num

            //退格
            if (sign == "back") {
                if (num == 0) return;
                if (num.toString().length == 1) {
                    setOutput(0);

                } else {
                    setOutput(num.toString().slice(0, -1));

                }

            }
            //数字
            if (sign == "num") {
                if (num == "0" || Reset) {
                    setOutput(value);
                    Reset = false;//连续计算
                    return;
                } else {
                    setOutput(num.toString().concat(value));
                }
            }
            //小数点
            if (sign == "point") {
                if (num.toString().indexOf(".") == -1) {
                    if (getOutput(num) == 0) {
                        setOutput("0" + value);
                    } else {
                        setOutput(num.toString().concat(value));
                    }
                } else {
                    setOutput(num.toString().concat(value));
                }

            }
            //操作符
            if (sign == "op") {
                operation = value;

                if (num.toString().indexOf(operation) == -1) {

                    if (getOutput(num) == 0) {
                        setOutput(value);
                    } else {

                        setOutput(num.toString().concat(value));
                    }

                }

            }
            //计算
            if (sign == "equal") {

                if (!operation) return;
                var pos_op = num.toString().indexOf(operation);

                Num1 = num.toString().slice(0, pos_op);
                Num2 = num.toString().slice(pos_op + 1);

                //当有两个数字时，调用计算函数1；当有一个数字时，调用计算函数2
                if (Num1 == "") {

                    Num2 = num.toString().slice(pos_op + 3);
                    result = calMethodtwo(Num2, operation);
                    result =parseFloat(Math.formatFloat(result, 5).toFixed(2));
                } else {
                    result = calMethodone(Num1, Num2, operation);
                    //判断结果是否为数字且输出Infinity
                    if (typeof (result) == "number") {
                        if (result != Infinity && result != -Infinity) {
                            result = parseFloat(Math.formatFloat(result, 5).toFixed(2));
                        }
                    }


                }
                setOutput(result);
                //Reset = true;

            }
            //清零
            if (sign == "clr") {
                setOutput(0);
                Reset = false;
            }


        }
    }

}