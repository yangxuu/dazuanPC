var config = require('../../config');
Page({
    data: {
        keywords:"白炽灯",
        inputValue: "",
        page: 1,
        limit: 10,
        total: "",
        flag: false
    },
    bindInput(e) {
        this.setData({
            inputValue: e.detail.value
        })
    },
    submit() {
        this.setData({
            page: "",
            total: ""
        })
        if (this.data.inputValue) {
            swan.request({
                url: config.config.api_base_url + "shop_item/search",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                data: {
                    data: JSON.stringify({
                        key: this.data.inputValue,
                        limit: this.data.limit,
                        page: this.data.page
                    })
                },
                success: res => {
                    // console.log(res)
                    this.setData({
                        info: res.data.list,
                        page: res.data.page,
                        total: Math.ceil(res.data.total / this.data.limit),
                        flag: true
                    });
                }
            });
        } else {
            swan.showModal({
                title: '提示',
                content: '关键词不能为空',
                showCancel: false
            });
        }
    },
    backto(){
        swan.navigateBack();
    },
    toindex() {
        swan.switchTab({
            url: '/pages/index/index'
        });
    },
    next() {
        this.data.page++;
        if (this.data.page >= this.data.total) {
            this.data.page = this.data.total
        }
        // Loading
        swan.showToast({
            title: '拼命加载中...',
            icon: 'loading',
            mask: true
        });
        swan.request({
            url: config.config.api_base_url + "shop_item/search",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: {
                data: JSON.stringify({
                    key: this.data.inputValue,
                    limit: this.data.limit,
                    page: this.data.page
                })
            },
            success: res => {
                this.setData({
                    info: res.data.list,
                    page: res.data.page,
                    total: Math.ceil(res.data.total / this.data.limit),
                    flag: true
                });
                swan.hideToast();
            }
        });
    },
    prev() {
        this.data.page--;
        if (this.data.page <= 1) {
            this.page = 1
        }
        // Loading
        swan.showToast({
            title: '拼命加载中...',
            icon: 'loading',
            mask: true
        });
        swan.request({
            url: config.config.api_base_url + "shop_item/search",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: {
                data: JSON.stringify({
                    key: this.data.inputValue,
                    limit: this.data.limit,
                    page: this.data.page
                })
            },
            success: res => {
                this.setData({
                    info: res.data.list,
                    page: res.data.page,
                    total: Math.ceil(res.data.total / this.data.limit),
                    flag: true
                });
                swan.hideToast();
            }
        });
    },
    tofirst() {
        this.data.page = 1;
        // Loading
        swan.showToast({
            title: '拼命加载中...',
            icon: 'loading',
            mask: true
        });
        swan.request({
            url: config.config.api_base_url + "shop_item/search",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: {
                data: JSON.stringify({
                    key: this.data.inputValue,
                    limit: this.data.limit,
                    page: this.data.page
                })
            },
            success: res => {
                this.setData({
                    info: res.data.list,
                    page: res.data.page,
                    total: Math.ceil(res.data.total / this.data.limit),
                    flag: true
                });
                swan.hideToast();
            }
        });
    },
    tolast() {
        this.data.page = this.data.total;
        // Loading
        swan.showToast({
            title: '拼命加载中...',
            icon: 'loading',
            mask: true
        });
        swan.request({
            url: config.config.api_base_url + "shop_item/search",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: {
                data: JSON.stringify({
                    key: this.data.inputValue,
                    limit: this.data.limit,
                    page: this.data.page
                })
            },
            success: res => {
                this.setData({
                    info: res.data.list,
                    page: res.data.page,
                    total: Math.ceil(res.data.total / this.data.limit),
                    flag: true
                });
                swan.hideToast();
            }
        });
    },
    onLoad: function () {
        // 监听页面加载的生命周期函数
    },
});