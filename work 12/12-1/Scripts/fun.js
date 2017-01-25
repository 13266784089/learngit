//单例模式,它用来划分命名空间。可以减少网页中全局变量的数量(在网页中使用全局变量有风险)；可以在多人开发时避免代码的冲突(使用合理的命名空间)
var index={
	init:function(argument){
		var me=this;
		me.render();
		me.bind();
		


	},
	render:function(){
		var me=this;
		me.morelist=$("#more_list");
		me.morethings=$(".morethings");
		me.menuitem=$(".menu_item");
		me.navblock=$(".nav_block");
		me.container=$("#container");
		me.skin=$(".skin");
		me.username=$(".username");
		me.usernamemenu=$("#username_menu");
		me.usersetting=$(".usersetting");
		me.usersettingmenu=$("#usersetting_menu");

	},
	bind:function(){
		var me=this;
		 // 鼠标悬停显示侧边栏
		me.morelist.mouseover(function(){
			me.morethings.show();
			
		});
		me.morethings.mouseover(function(){
			me.morethings.show();
			
		});
		me.morethings.mouseout(function(){
			me.morethings.hide();
		});
		me.morelist.mouseout(function(){
			me.morethings.hide();
		});
		// 标签切换
		me.menuitem.click(function(){
			var tab = $(this).attr("data-id");
		    $(this).addClass("current").siblings().removeClass("current");
		    $(this).parent().parent().siblings().removeClass("current");
		    $(this).siblings().children().children().removeClass("current");
		    $("#" + tab).show().siblings().hide();
		});
		// 猜你喜欢导航标签鼠标划过显示隐藏
		me.navblock.mouseover(function(){
			$(this).siblings(".fanli_inner").show();
		});
		me.navblock.mouseout(function(){
			$(this).siblings(".fanli_inner").hide();
		});
		// 滚动加载更多内容
		me.container.mousewheel(function(event,delta){
			if (delta < 0) {

		      var $dataid = $(".current").attr("data-id");
		     
		      $("#" + $dataid).removeClass("content_inner");
		    }
		});
		// 显示隐藏换肤菜单
		me.skin.click(function(e) {
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
		// 用户设置鼠标划过显示下拉菜单
		me.username.hover(function(){
			me.usernamemenu.show();
		},function(){
			me.usernamemenu.hide();
		});
		me.usernamemenu.mouseenter(function(){
			me.usernamemenu.show();
		});
		me.usernamemenu.mouseleave(function(){
			me.usernamemenu.hide();
		});
		me.usersetting.hover(function() {
		    me.usersettingmenu.show();
		}, function() {
		    me.usersettingmenu.hide();

		});
		me.usersettingmenu.mouseenter(function() {
		    me.usersettingmenu.show();
		});
		  $("#usersetting_menu").mouseleave(function() {
		    me.usersettingmenu.hide();
		});


	},
	event:{
		// 返回顶部
		returntop:function(){
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
		},
		//点击页面空白处隐藏换肤下拉
		hideskinmenu:function(){

		  var $skin = $(".head_skin");
		  $(document).click(function(e) {
		    if (!(e.target == $skin[0] || $.contains($skin[0], e.target))) {
		      $(".head_skin").animate({
		        height: "0px"
		      }, 500);
		    }
		    e.stopPropagation();

		  });
		},
		//换肤
		changeskin:function(){
		
		  var i = 1;
		  $(".skin_bgcon img").hover(function() {
		    i = $(this).attr("data-skin");
		    $(".skin_content img").attr("src", 'Images/skin' + i + '.jpg');
		  });
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
		},
		//hover改变字体颜色
		changefontcolor:function(){
			$("#username_menu div a").hover(function() {
		    $(this).addClass('hover_change');
			}, function() {
			    $(this).removeClass('hover_change');
			});
			$("#usersetting_menu div a").hover(function() {
			    $(this).addClass('hover_change');
			}, function() {
			    $(this).removeClass('hover_change');

			});
		}

	}
};
index.init();
index.event.returntop();
index.event.hideskinmenu();
index.event.changefontcolor();