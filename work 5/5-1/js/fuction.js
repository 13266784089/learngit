//计算分数等级的函数
function getLevel() {
    //获取输入的分数
    var score = document.getElementById("test").value;
    //判断输入值是否为数字以及范围是否在0-100
    if (!score.trim() || isNaN(score) || score<0 || score>100){
        document.getElementById('getindex').innerHTML="Error,请输入0-100的分数";
    }else{

        var scoreLevel = Math.floor(parseInt(score)/10);
        //计算分数段所在等级并取整并输出结果
        switch (scoreLevel) {
            case 10:
            case 9:
                document.getElementById('getindex').innerHTML="一等生";
                break;
            case 8:
                document.getElementById('getindex').innerHTML="二等生";
                break;
            case 7:
                document.getElementById('getindex').innerHTML="三等生";
                break;
            case 6:
                document.getElementById('getindex').innerHTML="四等生";
                break;
            case 5:
                document.getElementById('getindex').innerHTML="五等生";
                break;
            case 4:
                document.getElementById('getindex').innerHTML="六等生";
                break;
            case 3:
                document.getElementById('getindex').innerHTML="七等生";
                break;
            case 2:
                document.getElementById('getindex').innerHTML="八等生";
                break;
            case 1:
                document.getElementById('getindex').innerHTML="九等生";
                break;
            default:
                document.getElementById('getindex').innerHTML="没救了";
        }
    }



}