$(document).ready(function() {
  /*鼠标悬停显示侧边栏*/
  $("#more_list").mouseenter(function() {
    $(".morethings").show();
  });
  $(".morethings").mouseenter(function() {
    $(".morethings").show();
  });
  $("#more_list").mouseleave(function() {
    $(".morethings").hide();
  });
  $(".morethings").mouseleave(function() {
    $(".morethings").hide();
  });
  // 标签切换
  $(".menu_item").click(function() {
    var tab = $(this).attr("data-id");
    $(this).addClass("current").siblings().removeClass("current");
    $(this).parent().parent().siblings().removeClass("current");
    $(this).siblings().children().children().removeClass("current");
    $("#" + tab).show().siblings().hide();

  });
  // 猜你喜欢导航标签鼠标划过显示隐藏
  $(".nav_block").mouseenter(function() {
    $(this).siblings(".fanli_inner").show();
  });
  $(".nav_block").mouseleave(function() {
    $(this).siblings(".fanli_inner").hide();
  });

  // 滚动加载更多内容
  $("#container").mousewheel(function(event, delta) {

    if (delta < 0) {

      var $dataid = $(".current").attr("data-id");
     
      $("#" + $dataid).removeClass("content_inner");
    }
  });

  // 返回顶部
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      $("#top_feed").fadeIn(1500);
    } else {
      $("#top_feed").fadeOut(1500);
    }
    $("#top_feed").click(function() {
      $('body,html').animate({
        scrollTop: 0
      }, 100);
      return false;
    });
    // 结束动画
    if ($('body,html').is(':animated')) {
      $('body,html').stop(true, true);
    }
  });

  // 显示隐藏换肤菜单
  $(".skin").click(function(e) {

    $(".head_skin").animate({
      height: "288px"
    }, 500);
    e.stopPropagation();
    //阻止事件冒泡 e.stopPropagation()
  });
  $(".bg_title").click(function() {
    $(".head_skin").animate({
      height: "0px"
    }, 500);

  });
  //点击页面空白处隐藏换肤下拉
  var $skin = $(".head_skin")
  $(document).click(function(e) {
    if (!(e.target == $skin[0] || $.contains($skin[0], e.target))) {
      $(".head_skin").animate({
        height: "0px"
      }, 500);
    }
    e.stopPropagation();

  });
  // 换肤
  var i = 1;
  $(".skin_bgcon img").hover(function() {
    i = $(this).attr("data-skin");
    $(".skin_content img").attr("src", 'Images/skin' + i + '.jpg');
  })
  $(".skin_bgcon img").click(function() {
    i = $(this).attr("data-skin");
    $(".skin_container img").attr("src", 'Images/skin' + i + 's.jpg');
    $.cookie("MyCssSkin", i, {
      path: '/',
      expires: 10
    }); //存储当前皮肤cookie
  });
  var cookie_skin = $.cookie("MyCssSkin"); //读取cookie
  //通过cookie加载上一次保存的皮肤
  if (cookie_skin) {
    $(".skin_container img").attr("src", 'Images/skin' + cookie_skin + 's.jpg');
  }
  // 用户设置鼠标划过显示下拉菜单
  $(".username").hover(function() {
    $("#username_menu").show();
  }, function() {
    $("#username_menu").hide();

  })
  $("#username_menu").mouseenter(function() {
    $("#username_menu").show();
  })
  $("#username_menu").mouseleave(function() {
    $("#username_menu").hide();
  })
  $("#username_menu div a").hover(function() {
    $(this).addClass('hover_change');
  }, function() {
    $(this).removeClass('hover_change');
  })

  $(".usersetting").hover(function() {
    $("#usersetting_menu").show();
  }, function() {
    $("#usersetting_menu").hide();

  })
  $("#usersetting_menu").mouseenter(function() {
    $("#usersetting_menu").show();
  })
  $("#usersetting_menu").mouseleave(function() {
    $("#usersetting_menu").hide();
  })
  $("#usersetting_menu div a").hover(function() {
    $(this).addClass('hover_change');
  }, function() {
    $(this).removeClass('hover_change');

  })

});