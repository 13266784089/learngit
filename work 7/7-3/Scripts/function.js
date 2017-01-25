$(document).ready(function() {
  waterfall();
  // 创建JSON数据
  var dataInt = {
    "data": [{
      "src": 'Images/01.jpg',"text":'程序员的暗语'
    }, {
      "src": 'Images/02.jpg',"text":'翻转吧~寿司'
    }, {
      "src": 'Images/03.jpg',"text":'精细艺术印刷品'
    }, {
      "src": 'Images/04.jpg',"text":'VET Talks 视觉形象设计'
    }, {
      "src": 'Images/05.jpg',"text":'2013切尔西花展'
    }, {
      "src": 'Images/06.jpg',"text":'高圆圆写真'
    }, {
      "src": 'Images/07.jpg',"text":'绝美张俪俏丽身姿无比'
    }, {
      "src": 'Images/08.jpg',"text":'杨恭如纯美风姿让人情'
    }, {
      "src": 'Images/09.jpg',"text":'曾黎---不死的美人'
    }, {
      "src": 'Images/10.jpg',"text":'清纯美女杨雪写真'
    }, {
      "src": 'Images/11.jpg',"text":'郁可唯写真图片'
    }, {
      "src": 'Images/12.jpg',"text":'云蒸雾绕-秦岭鹿角梁'
    }, {
      "src": 'Images/13.jpg',"text":'六次马代的经验和攻略(附十二岛游记)'
    }, {
      "src": 'Images/14.jpg',"text":'苏州，生活在此处'
    }, {
      "src": 'Images/15.jpg',"text":'漫步欧罗巴的日子'
    }, {
      "src": 'Images/16.jpg',"text":'京都风景图'
    }, {
      "src": 'Images/17.jpg',"text":'莲子银耳炖雪梨'
    }, {
      "src": 'Images/18.jpg',"text":'奶香黑芝麻馒头'
    }, {
      "src": 'Images/19.jpg',"text":'蜜汁豆干'
    }, {
      "src": 'Images/20.jpg',"text":'岩浆巧克力蛋糕'
    }]
  }
  // 滚动条事件
  $(window).on("scroll", function() {
    if (checkScroll) {

      $.each(dataInt.data, function(key, value) {
        // 创建瀑布流盒子
        var imgbox = $("<div>").addClass("imgbox").appendTo($("#main"));
        // 创建图片盒子
        var pic = $("<div>").addClass("pic").appendTo($(imgbox));
        // 创建图片
        var img = $("<img>").attr("src", $(value).attr("src")).appendTo($(pic));
        // 创建文本
        var text=$("<span>").addClass("text").text($(value).attr("text")).appendTo($(imgbox));
        
      })
      waterfall();
    }
  })
});
// 瀑布流
function waterfall() {
  // 获取main下的所有一级子元素imgbox
  var imgbox = $("#main>div");
  // 获取imgbox盒子宽度
  var boxwidth = imgbox.eq(0).outerWidth();
  // 获取每一行图片数量
  var cols = Math.floor($(window).width() / boxwidth);
  // 设置main居中样式
  $("#main").width(cols * boxwidth).css("margin", "20px auto");
  // 创建图片高度数组
  var heightArr = [];
  // 遍历图片盒子
  imgbox.each(function(index, value) {
    var boxheight = imgbox.eq(index).outerHeight();

    if (index < cols) {
      // 存储第一行图片高度
      heightArr[index] = boxheight;
    } else {
      // 获取一行图片的最小高度
      var minHeight = Math.min.apply(null, heightArr);
      // 获取最小高度图片的索引
      var minIndex = $.inArray(minHeight, heightArr);
      // 设置图片的摆放位置
      $(value).css({
        "position": "absolute",
        "top": minHeight + "px",
        "left": minIndex * boxwidth + "px"
      })
      // 更新最小高度
      heightArr[minIndex] += imgbox.eq(index).outerHeight();
    }

  })
}
// 判断是否滚动到最后一张图片
function checkScroll() {
  // 获取最后一张图片
  var lastimg = $("#main>div").last();
  // 最后一张图片的高度=相对浏览器文档的高度+自身高度的一半
  var lastHeight = lastimg.offsetTop() + Math.floor(lastimg.outerHeight() / 2);
  // 获取文档的垂直滚动条位置
  var scrollTop = $(window).scrollTop();
  // 获取页面可视区域高度
  var docHeight = $(window).height();
  console.log(scrollTop,docHeight,lastHeight)
  return (lastHeight < scrollTop + docHeight)
}
// 窗口大小改变时，重新加载页面
$(window).resize(function(){
  location.reload();
})