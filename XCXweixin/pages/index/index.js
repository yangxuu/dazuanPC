const app = getApp();
var config = require('../../config');
Page({
  data: {},
  onLoad() {
    wx.request({
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
        console.log(res)
      }
    });

  },
  kinds() {
    // console.log("ok")
    wx.switchTab({
      url: '/pages/kinds/kinds'
    })
  },
  tosearch() {
    wx.switchTab({
      url: '/pages/search/search'
    });
  },
  vip() {
    wx.switchTab({
      url: '/pages/vip/vip'
    })
  },
  about() {
    wx.switchTab({
      url: '/pages/about/about'
    })
  },
  contact() {
    wx.switchTab({
      url: '/pages/contact/contact'
    })
  }
})
