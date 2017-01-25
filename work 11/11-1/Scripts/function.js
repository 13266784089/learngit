$(document).ready(function() {
    // 导航条hover效果显示三角

    $(function() {
        $(".nav_item").hover(function(){
            $(this).children(".arrow").show();
        }, function() {
            $(this).children(".arrow").hide();
        })

    })
    $(function() {
        // 轮播图
        var $banner_left = $("#banner_left");
        var $banner_right = $("#banner_right");
        var $banner_wrapper = $(".banner_wrapper");
        var $banner_item = $(".banner_wrapper a");


        // 为第一个按钮添加样式
        $(".banner_btn span").first().addClass("on");
        // 复制第一张图片并添加到末尾
        var cloneimg = $(".banner_wrapper a").first().clone();
        $(".banner_wrapper").append(cloneimg);
        var i = 0;
        // 获取图片数量
        var imgnum = $(".banner_wrapper").children().length;

        // 左按钮点击轮播
        $banner_left.on("click", function() {
            i--;
            move()

        })


        // 右按钮点击轮播
        $banner_right.on("click", function() {
                i++;
                move()
            })
            // 运动
        function move() {


            // 当点击到第一张图时，将索引变成最后一张
            if (i == -1) {
                $banner_wrapper.css({
                    "margin-left": -(imgnum - 1) * 560 + "px"
                })
                i = imgnum - 2;
                console.log(i);
            }
            // 当点击到最后一张图时，将索引变成第一张
            if (i == imgnum) {

                $banner_wrapper.css({
                    "margin-left": "0"
                })
                i = 1;
            }
            $banner_wrapper.stop().animate({
                    "margin-left": -i * 560 + "px"
                }, 500)
                // 按钮移动样式变化
                // 判断达到最后一张图时按钮显示
            if (i == imgnum - 1) {
                $(".banner_btn span").eq(0).addClass("on").siblings().removeClass("on");
            } else {
                $(".banner_btn span").eq(i).addClass("on").siblings().removeClass("on");
            }
        }


        // 鼠标点击轮播
        $(".banner_btn span").click(function() {
            var index = $(this).index();
            i = index;
            $banner_wrapper.stop().animate({
                "margin-left": -index * 560 + "px"
            }, 500)
            $(this).addClass("on").siblings().removeClass("on");
        })

        //自动轮播
        var t = setInterval(function() {
            i++;
            move();
        }, 3000)

        // 鼠标hover移除定时器
        $(".lesson_center").hover(function() {
            clearInterval(t);
        }, function() {
            t = setInterval(function() {
                i++;
                move();
            }, 3000)

        })
    })


    // 极客公开课 鼠标hover切换标签
    $(function() {
            $(".livebox_week .livebox_day").hover(function() {

                $(this).addClass("weekactive").siblings().removeClass("weekactive");
                var dataindex = $(this).attr("data-index");
                $("." + dataindex).css({
                    "display": "block"
                }).siblings().css({
                    "display": "none"
                });
            })
        })
        // 侧边栏hover显示隐藏
    $(function() {
            $(".lesson_nav li").hover(function() {


                $(this).children().children(".lesson_show").show()
            }, function() {

                $(this).children().children(".lesson_show").hide();
            })

        })
        // banner下方点击左右移动标签
    $(function() {
            var j = 0;
            var tagnum = $(".focuswork_list li").length;
            var tagwidth = $(".focuswork_list li").outerWidth();
            console.log(tagnum);
            $("#work_left").click(function() {
                    j--;
                    if (j == -1) {
                        j = 3;
                        $(".focuswork_list").css({
                            "margin-left": -j * tagwidth
                        })
                    } else {
                        console.log(j);
                        $(".focuswork_list").css({
                            "margin-left": -j * tagwidth
                        })
                    }
                })
                // 鼠标hover箭头颜色加深
            $("#work_left").hover(function() {
                $(this).addClass("arrowleft_hover").removeClass("arrow_left1")
            }, function() {
                $(this).addClass("arrow_left1").removeClass("arrowleft_hover")
            })
            $("#work_right").hover(function() {
                    $(this).addClass("arrowright_hover").removeClass("arrow_right1")
                }, function() {
                    $(this).addClass("arrow_right1").removeClass("arrowright_hover")
                })
                // 鼠标点击左右移动切换标签
            $("#work_right").click(function() {
                j++;
                if (j == tagnum - 3) {
                    j = 3;
                    $(".focuswork_list").css({
                        "margin-left": -j * tagwidth
                    })
                } else {
                    console.log(j);
                    $(".focuswork_list").css({
                        "margin-left": -j * tagwidth
                    })
                }
            })
        })
        // 热门推荐：鼠标移入切换标签
    $(function() {
            $(".hot_lesson li").each(function(index) {
                    var hoton = $(this);
                    $(this).mouseover(function() {
                        $(".hot_lesson .hoton").removeClass("hoton");
                        $(".hotlesson_show").removeClass("hotlesson_show").addClass("hotlesson_hide");
                        $("#fivelesson").show();
                        $(".one_lesson").eq(index).removeClass("hotlesson_hide").addClass("hotlesson_show").siblings().addClass("hotlesson_hide");
                        hoton.addClass("hoton");
                    })

                })
                // 热门推荐：鼠标移入卡片伸缩动画
            $(".lesson_imgbox").mouseover(function() {
                $(this).siblings(".lesson_info").stop().animate({
                    height: "175px"
                }, 500)
                $(this).siblings(".lesson_info").children("p").css({
                    height: "52px",
                    opacity: "1",
                    display: "block"
                })
                $(this).siblings(".lesson_info").children(".timeandicon").children(".learn_number").show().siblings("dl").children(".lesson_rank").show();

                $(this).children().children(".lesson_play").stop().animate({
                    opacity: "1"
                }, 100)


            }).mouseout(function() {
                $(this).siblings(".lesson_info").stop().animate({
                    height: "88px"
                }, 500)
                $(this).siblings(".lesson_info").children("p").css({
                    height: "0px",
                    opacity: "0",
                    display: "none"
                })
                $(this).siblings(".lesson_info").children(".timeandicon").children(".learn_number").hide().siblings("dl").children(".lesson_rank").hide();

                $(this).children().children(".lesson_play").stop().animate({
                    opacity: "0"
                }, 100)


            });
        })
        // 职业路径图问号图标hover显示
    $(function() {
        $(".way").hover(function() {
                $(this).siblings(".way_info").stop().animate({
                    opacity: "1"
                }, 100)
            }, function() {
                $(this).siblings(".way_info").stop().animate({
                    opacity: "0"
                }, 100)
            })
            // 职业路径图卡片hover动画
        $(".learncard_link").hover(function() {
            $(this).css({
                border: "1px solid rgb(53,181,88)"
            }).children(".learncard_btn").css({
                background: "#35b558",
                color: "#fff"
            })
        }, function() {
            $(this).css({
                border: "1px solid #E4E4E4"
            }).children(".learncard_btn").css({
                background: "#f3fff6",
                color: "#35b558"
            })
        })
    })

    // 精品系列课程鼠标hover动画
    $(function() {
            $(".lesson_card").hover(function() {
                $(this).find(".describe").css({
                    visibility: "visible",
                    opacity: "10"

                })
            }, function() {
                $(this).find(".describe").css({
                    visibility: "hidden",
                    opacity: "0"

                })
            })
        })
        // 战略合作企业点击左右切换
    $(function() {
            var n = 0;
            var numlist = $(".company_wrapper a").length;
            var numwidth = $(".company_wrapper a").outerWidth();
            console.log(numlist);
            $("#banner_left1").click(function() {
                n--;
                if (n == -1) {
                    n = numlist - 13;
                    $(".company_wrapper").css({
                        "margin-left": -n * numwidth
                    })
                } else {
                    console.log(n);
                    $(".company_wrapper").css({
                        "margin-left": -n * numwidth
                    })
                }
            })

            $("#banner_right1").click(function() {
                n++;
                if (n == numlist - 12) {
                    n = 1;
                    $(".company_wrapper").css({
                        "margin-left": -n * numwidth
                    })
                } else {
                    console.log(n);
                    $(".company_wrapper").css({
                        "margin-left": -n * numwidth
                    })
                }
            })
        })
        //合作院校点击左右切换
    $(function() {
            var n = 0;
            var numlist = $(".school_wrapper a").length;
            var numwidth = $(".school_wrapper a").outerWidth();
            console.log(numlist);
            $("#banner_left2").click(function() {
                n--;
                if (n == -1) {
                    n = numlist - 15;
                    $(".school_wrapper").css({
                        "margin-left": -n * numwidth
                    })
                } else {
                    console.log(n);
                    $(".school_wrapper").css({
                        "margin-left": -n * numwidth
                    })
                }
            })

            $("#banner_right2").click(function() {
                n++;
                if (n == numlist - 14) {
                    n = 1;
                    $(".school_wrapper").css({
                        "margin-left": -n * numwidth
                    })
                } else {
                    console.log(n);
                    $(".school_wrapper").css({
                        "margin-left": -n * numwidth
                    })
                }
            })
        })
        //合作院校点击左右切换
    $(function() {
        var n = 0;
        var numlist = $(".media_wrapper a").length;
        var numwidth = $(".media_wrapper a").outerWidth();
        console.log(numlist);
        $("#banner_left3").click(function() {
            n--;
            if (n == -1) {
                n = numlist - 13;
                $(".media_wrapper").css({
                    "margin-left": -n * numwidth
                })
            } else {
                console.log(n);
                $(".media_wrapper").css({
                    "margin-left": -n * numwidth
                })
            }
        })

        $("#banner_right3").click(function() {
            n++;
            if (n == numlist - 12) {
                n = 1;
                $(".media_wrapper").css({
                    "margin-left": -n * numwidth
                })
            } else {
                console.log(n);
                $(".media_wrapper").css({
                    "margin-left": -n * numwidth
                })
            }
        })
    })



});