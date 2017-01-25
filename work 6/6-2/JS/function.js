window.onload=function(){
    var skin=document.getElementById("skin");


    //点击颜色更换主题
    skin.onclick = function (e) {
        var event = window.event || e;//e对象存在时回返e,当window.event存在时返回event，区分Firefox,IE
        var target = event.target || event.srcElement;//IE下支持event.srcElement，Firefox支持event.target
        changeCSS("CSS/skin/"+target.id+".css");
        var clickId=document.getElementById(target.id)
        clickId.setAttribute("class","selected");
        //设置cookie
        setCookie("skinfile",target.id+".css");
        setCookie("skinid",target.id);


    }
    
    //读取cookies
    function getCookie(name)
    {
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    }


    //通过动态引用CSS样式文件来改变主题
    function changeCSS(url){
        var link=document.createElement("link");
        link.rel="stylesheet";
        link.type="text/css";
        link.href=url;
        document.getElementsByTagName("head")[0].appendChild(link);

    }

    //读取cookie
    var skinurl=getCookie("skinfile");
    var changeskin=getCookie("skinid");

    var skinid=document.getElementById(changeskin);
    //通过判断cookie调用不同的css文件
    if(skinurl==null || changeskin==null){
        changeCSS("CSS/skin/reset.css");

    }else{
        changeCSS("CSS/skin/"+skinurl);
        skinid.setAttribute("class","selected");
    }





//设置cookies
    function setCookie(name,value)
    {
        var Days = 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days*24*60*60*1000);
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
    }
}