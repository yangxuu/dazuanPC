// 点击分类展开
var fenlei = 0;
$(".fenlei-click").click(function () {
    fenlei++;
    if (fenlei % 2) {
        $(".fenlei-click").html("收起")
        $(".suport-row-fenlei").css({
            height: "200px"
        })
    } else {
        $(".fenlei-click").html("展开")
        $(".suport-row-fenlei").css({
            height: "61px"
        })
    }
})
// 点击城市展开
var city = 0;
$(".city-click").click(function () {
    city++;
    if (city % 2) {
        $(".city-click").html("收起")
        $(".suport-row-city").css({
            height: "200px"
        })
    } else {
        $(".city-click").html("展开")
        $(".suport-row-city").css({
            height: "61px"
        })
    }
})
// 点击关键词展开
var key = 0;
$(".key-click").click(function () {
    key++;
    if (key % 2) {
        $(".key-click").html("收起")
        $(".suport-row-key").css({
            height: "200px"
        })
    } else {
        $(".key-click").html("展开")
        $(".suport-row-key").css({
            height: "61px"
        })
    }
})