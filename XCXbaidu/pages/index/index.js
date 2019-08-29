const app = getApp();
var config = require('../../config');
Page({
    data: {},
    onLoad() {
        swan.request({
            url: config.config.api_base_url + "index/index",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: config.config.newData,
            success: res => {
                this.setData({ 
                    info: res.data.data,
                });
                // console.log(res)
            }
        });
        
    },
    kinds() {
        swan.switchTab({
            url: '/pages/kinds/kinds'
        })
    },
    tosearch(){
        swan.switchTab({
            url: '/pages/search/search'
        });
    },
    vip() {
        swan.switchTab({
            url: '/pages/vip/vip'
        })
    },
    about() {
        swan.switchTab({
            url: '/pages/about/about'
        })
    },
    contact() {
        swan.switchTab({
            url: '/pages/contact/contact'
        })
    }
})
