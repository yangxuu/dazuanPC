var config = require('../../config');
Page({
    data: {
        id: '',
        flag1: true,
        flag2: false,
        html: "",
        info: {}
    },
    selected1: function (e) {
        this.setData({
            flag1: true,
            flag2: false,
        })
    },
    selected2: function (e) {
        this.setData({
            flag1: false,
            flag2: true,
        })
    },
    onLoad: function (options) {
        console.log(options)
        this.setData({
            id: options.id
        })
        
        var newData = {
            data: JSON.stringify({ shop_item_id: this.data.id })
        }; 
        swan.request({
            url: config.config.api_base_url + "shop_item/info",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: config.config.newData,
            success: res => {
                console.log(res)
                var html = res.data.data.shop_item_info.content
                    .replace(/<p([\s\w"=\/\.:;]+)((?:(style="[^"]+")))/ig, '<p')
                    .replace(/<p>/ig, '<p style="font-size: 15Px; line-height: 25Px;">')
                    .replace(/<img([\s\w"-=\/\.:;]+)((?:(height="[^"]+")))/ig, '<img$1')
                    .replace(/<img([\s\w"-=\/\.:;]+)((?:(width="[^"]+")))/ig, '<img$1')
                    .replace(/<img([\s\w"-=\/\.:;]+)((?:(style="[^"]+")))/ig, '<img$1')
                    .replace(/<img([\s\w"-=\/\.:;]+)((?:(alt="[^"]+")))/ig, '<img$1')
                    .replace(/<img([\s\w"-=\/\.:;]+)/ig, '<img$1 style="width: 100%;"');
                this.setData({
                    info: res.data.data,
                    html: html
                });

            }
        });
        swan.setNavigationBarTitle({
            title: "商品详情"
        });
    }
});