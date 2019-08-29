var x = 0;
$("#banner img").eq(x).show();
$("#click li").eq(x).css({
    backgroundColor: "#47C2FB"
});
//下一张
$("#right").click(function () {
    clearInterval(timer);
    $("#banner img").eq(x).hide();
    $("#click li").eq(x).css({
        backgroundColor: "#ffffff"
    });
    x++;
    if (x > $("#banner img").length - 1) {
        x = 0;
    }
    $("#banner img").eq(x).show();
    $("#click li").eq(x).css({
        backgroundColor: "#47C2FB"
    });
})

//上一张
$("#left").click(function () {
    clearInterval(timer);
    $("#banner img").eq(x).hide();
    $("#click li").eq(x).css({
        backgroundColor: "#ffffff"
    });
    x--;
    if (x < 0) {
        x = $("#banner img").length - 1;
    }
    $("#banner img").eq(x).show();
    $("#click li").eq(x).css({
        backgroundColor: "#47C2FB"
    });
})

// 小圆点切换
$("#click li").click(function () {
    clearInterval(timer);
    $("#banner img").eq(x).hide();
    $("#click li").eq(x).css({
        backgroundColor: "#ffffff"
    });
    x = $(this).index();
    $("#banner img").eq(x).show();
    $("#click li").eq(x).css({
        backgroundColor: "#47C2FB"
    });
})

// 自动播放
$("#dian").click(function () {
    $("#banner img").eq(x).hide();
    $("#click li").eq(x).css({
        backgroundColor: "#ffffff"
    });
    x++;
    if (x > $("#banner img").length - 1) {
        x = 0;
    }
    $("#banner img").eq(x).show();
    $("#click li").eq(x).css({
        backgroundColor: "#47C2FB"
    });
})

var timer = setInterval(function () {
    $("#dian").click();
}, 3000);

// 左右按钮
$('#view').mouseenter(function () {
    clearInterval(timer);
    $('#left').show()
    $('#right').show()
})
$('#view').mouseleave(function () {
    timer = setInterval(function () {
        $("#dian").click();
    }, 3000);
    $('#left').hide()
    $('#right').hide()
})
// 鼠标在导航移动
$(".s-right-n").mouseenter(function () {
    $(".fixed").show()
}).mouseleave(function () {
    $(".fixed").hide()
})
// // 鼠标在输入框移动
$(".ipt-ico").mouseenter(function () {
    $(".ipt-nav1").show()
}).mouseleave(function () {
    $(".ipt-nav1").hide()

})
$(".ipt-nav1 span").click(function () {
    $(".ipt-show").html($(this).html())
})
// 点击供应求购
$('.sup-show').show()
$(".suport").click(function () {
    $(this).css({
        color: '#333333'
    })
    $('.purchase').css({
        color: '#999999'
    })
    $(".line01").show()
    $(".line02").hide()
    $('.sup-show').show()
    $('.pur-show').hide()
})
$(".purchase").click(function () {
    $(this).css({
        color: '#333333'
    })
    $('.suport').css({
        color: '#999999'
    })
    $(".line02").show()
    $(".line01").hide()
    $('.sup-show').hide()
    $('.pur-show').show()
})
//新闻滚动
function next() {
    $(".sup-show").animate({
        marginTop: -25
    }, 900, function () {

        $(".sup-show").css({
            marginTop: 0
        });
        var node = $(".sup-show").children().eq(0);
        $(".sup-show").append(node);
    })
    $(".pur-show").animate({
        marginTop: -25
    }, 900, function () {

        $(".pur-show").css({
            marginTop: 0
        });
        var node = $(".pur-show").children().eq(0);
        $(".pur-show").append(node);
    })
}
//新闻滚动自动
var timer2 = setInterval(next, 2000);
$(".out-box").mouseover(function () {
    clearInterval(timer2);
})

$(".out-box").mouseout(function () {
    timer2 = setInterval(next, 2000);
})

//鼠标移动图片右移
$(".img-box img").mouseenter(function () {
    $(this).animate({
        marginLeft: "10px"
    }, 200)
}).mouseleave(function () {
    $(this).animate({
        marginLeft: 0
    }, 200)
})

$(".img-boxs").mouseenter(function () {
    $(this).animate({
        marginTop: "30px"
    }, 200)
}).mouseleave(function () {
    $(this).animate({
        marginTop: "40px"
    }, 200)
})
// 点击nav
var y = 0;
$("#nav-or a").click(function () {
    $("#nav-or a").eq(y).css({
        borderBottom: 'none'
    })
    y = $(this).index();
    $("#nav-or a").eq(y).css({
        borderBottom: '2px solid #47c2fb'
    })
})
// 列表
var m = 0;
$(".list a").mouseenter(function () {
    $(".list a").eq(m).css({
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    });
    $(".list a img").eq(m).stop(true, true).animate({
        marginLeft: 0
    }, 300);
    m = $(this).index();
    $(".list a").eq(m).css({
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    });
    $(".list a img").eq(m).stop(true, true).animate({
        marginLeft: 5
    }, 300);
    $(".list-des").eq(m).show();

}).mouseleave(function () {
    $(".list-des").eq(m).hide();
    $(".list a").eq(m).css({
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    });
});
$(".list").mouseleave(function () {
    $(".list a img").eq(m).stop(true, true).animate({
        marginLeft: 0
    }, 300);
})

//详情列表鼠标移动
$(".list-des").mouseenter(function () {
    $(this).show();
    var x = $(this).index();
    $(".list a img").eq(x - 1).stop(true, true).animate({
        marginLeft: 15
    }, 300);
})
$(".list-des").mouseleave(function () {
    $(this).hide();
    var x = $(this).index();
    $(".list a img").eq(x - 1).stop(true, true).animate({
        marginLeft: 0
    }, 300);
})

//左侧热门企业
var n = 0;
$(".spot li").eq(n).css({
    border: '1px solid #47C2FB'
})
$(".n-down .good-com").eq(n).show();
$('.spot li').click(function () {
    clearInterval(timer1);
    $(".spot li").eq(n).css({
        border: 'none'
    });
    $(".n-down .good-com").eq(n).hide();

    n = $(this).index();

    $(".n-down .good-com").eq(n).show();
    $(".spot li").eq(n).css({
        border: '1px solid #47C2FB'
    })
})

$('.com-btn').click(function () {
    $(".spot li").eq(n).css({
        border: 'none'
    });
    $(".n-down .good-com").eq(n).hide();
    n++;
    if (n > $(".n-down .good-com").length - 1) {
        n = 0;
    }
    $(".n-down .good-com").eq(n).show();
    $(".spot li").eq(n).css({
        border: '1px solid #47C2FB'
    })
})

var timer1 = setInterval(function () {
    $(".com-btn").click();
}, 3000);

$('.n-left').mouseenter(function () {
    clearInterval(timer1);
}).mouseleave(function () {
    timer1 = setInterval(function () {
        $(".com-btn").click();
    }, 3000);
})













// 右侧焦点资讯
var z = 0;
$(".bar .bar-1").eq(z).css({
    color: '#47C2FB'
})
$(".n-info .sec1").eq(z).show()

$(".bar .bar-1").click(function () {
    $(".bar .bar-1").eq(z).css({
        color: '#666666'
    })
    $(".n-info .sec1").eq(z).hide();
    z = $(this).index();

    $(".bar .bar-1").eq(z).css({
        color: '#47C2FB'
    })
    $(".n-info .sec1").eq(z).show();
})
// 点击关闭广告位
$(".foot-shut").click(function () {
    $(".bg-adver").hide()
})