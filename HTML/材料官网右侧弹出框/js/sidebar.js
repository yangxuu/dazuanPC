var count = 0;
$(".clickarea").click(function () {
    count++;
    if (count % 2) {
        $(".fixed-sidebox").css({
            right: '40px'
        })
    } else {
        $(".fixed-sidebox").css({
            right: '-362px'
        })
    }
})
$(".shutdown").click(function () {
    $(".clickarea").click();
})

$(".real-form").submit(function (e) {
    e.preventDefault();
    if ($(".val_name").val() && $(".val_mobile").val() && $(".val_company").val()) {
        if (($(".val_name").val() != "请输入联系人") && ($(".val_mobile").val() != "请输入手机号") && ($(".val_company")
                .val() != "请输入公司名称")) {
            if ((/^1\d{10}$/.test($(".val_mobile").val()))) {
                $.ajax({
                    type: "POST",
                    url: "http://vip.dazuan.com/index.php/api/shop_item/consult_agent",
                    dataType: "json",
                    data: {
                        name: $(".val_name").val(),
                        tel: $(".val_mobile").val(),
                        company: $(".val_company").val()
                    },
                    success: function (data) {
                        $(".val_name").val("").css({
                            border: "1px solid #C1C0C0"
                        })
                        $(".val_mobile").val("").css({
                            border: "1px solid #C1C0C0"
                        })
                        $(".val_company").val("").css({
                            border: "1px solid #C1C0C0"
                        })
                        $(".form-warn").html("")
                    },
                    error: function () {
                        alert("error")
                    }
                })
            }else{
                $(".form-warn").html("手机号格式不正确")
                $(".val_mobile").css({
                    border: "1px solid red"
                })
            }

        }
    } else {
        if (!$(".val_name").val()) {
            $(".val_name").css({
                border: "1px solid red"
            })
        }
        if (!$(".val_mobile").val()) {
            $(".val_mobile").css({
                border: "1px solid red"
            })
        }
        if (!$(".val_company").val()) {
            $(".val_company").css({
                border: "1px solid red"
            })
        }
        $(".form-warn").html("请填入完整的信息")
    }
})

// 输入框聚焦事件
$(".form-value").focus(function () {
    $(".val_name").css({
        border: "1px solid #C1C0C0"
    })
    $(".val_mobile").css({
        border: "1px solid #C1C0C0"
    })
    $(".val_company").css({
        border: "1px solid #C1C0C0"
    })
    $(".form-warn").html("")
})


// 右侧hover
// 会员中心
$(".icon-man").mouseenter(function () {

    $(this).css({
        backgroundColor: "#FF8800"
    })
    $(".put-man").css({
        left: "-100px"
    });
}).mouseleave(function () {
    $(this).css({
        backgroundColor: "#3F3C3C"
    })
    $(".put-man").css({
        left: "0"
    });
})

// 微信公众号
$(".icon-wx").mouseenter(function () {
    $(this).css({
        backgroundColor: "#FF8800"
    })
    $(".skanimg").show();
}).mouseleave(function () {
    $(this).css({
        backgroundColor: "#3F3C3C"
    })
    $(".skanimg").hide();
})


// 客服电话
$(".icon-server").mouseenter(function () {
    $(this).css({
        backgroundColor: "#FF8800"
    })
    $(".put-server").css({
        left: "-100px"
    });
}).mouseleave(function () {
    $(this).css({
        backgroundColor: "#3F3C3C"
    })
    $(".put-server").css({
        left: "0"
    });
})

//回到顶部
$(".icon-top").mouseenter(function () {
    $(this).css({
        backgroundColor: "#FF8800"
    })
    $(".put-top").css({
        left: "-100px"
    });
}).mouseleave(function () {
    $(this).css({
        backgroundColor: "#3F3C3C"
    })
    $(".put-top").css({
        left: "0"
    });
})
// 点击回到顶部
$(".icon-top").click(function () {
    window.scrollTo(0, 0);
})