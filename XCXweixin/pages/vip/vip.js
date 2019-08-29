Page({
    data: {

    },
    toindex() {
        swan.switchTab({
            url: '/pages/index/index'
        });
    },
    onLoad: function () {
        // 监听页面加载的生命周期函数
    },
    formSubmit: function (e) {
        var username = e.detail.value.username;
        var usertele = e.detail.value.usertele;
        var shopname = e.detail.value.shopname;
        console.log("ok")
        if (!username) {
            return swan.showModal({
                title: '提示',
                content: '请输入姓名',
                confirmText: '确定',
                cancelText: '取消',
                success(res) {
                    if (res.confirm) {
                        console.log("确定")

                    } else if (res.cancel) {
                        console.log("取消")
                    }
                }
            })
        }
        if (!usertele) {
            return swan.showModal({
                title: '提示',
                content: '请输入联系方式',
                confirmText: '确定',
                cancelText: '取消',
                success(res) {
                    if (res.confirm) {
                        console.log("确定")

                    } else if (res.cancel) {
                        console.log("取消")
                    }
                }
            })
        }
        if (!shopname) {
            return swan.showModal({
                title: '提示',
                content: '请输入公司名称',
                confirmText: '确定',
                cancelText: '取消',
                success(res) {
                    if (res.confirm) {
                        console.log("确定")

                    } else if (res.cancel) {
                        console.log("取消")
                    }
                }
            })
        }
        if (username && usertele && shopname) {
            swan.request({
                url: "http://vip.dazuan.com/index.php/api/shop_item/consult_agent",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                data: { name: username, tel: usertele, company:shopname },
                success: res => {
                    console.log("ok")
                }
            });
            this.setData({
                username: "",
                usertele: "",
                shopname: ""
            })
            return swan.showToast({
                title: '提交成功',
                success() {
                    console.log('form表单submit1：', username);
                    console.log('form表单submit2：', usertele);
                    console.log('form表单submit3：', shopname);
                }
            });
        }
    }
});