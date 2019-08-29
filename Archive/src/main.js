// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Config from './config'
import _ from 'underscore'
import './vendor/underscore.mixin'
// 全局引入element-ui
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

Vue.use(ElementUI);
import store from "./store/store"
Vue.config.productionTip = false

// 引入公共样式
import "./assets/css/bootstrap-font-awesome.min.css"
import "./assets/css/main-v1.css"

// 请求后台数据资源跨域在config下index.js
import axios from "axios";

Vue.prototype.api = function (api_url, data, success, fail) {
    let post_data = _.http_build_query({
        token: '',
        data: _.json_encode(data || {})
    })
    axios.post(Config.api_url + api_url, post_data).then(resp => {
        if (resp.data.status == 1) {
            if (success) {
                success(resp.data);
            }
        }
        else {
            if (fail) {
                fail(resp.data);
            }
            else {
                alert(resp.data.result);
            }
        }
    });
}
Vue.prototype.settings = function (data) {
    if (data == null) {
        return _.json_decode(window.localStorage.getItem('settings'))
    }
    else {
        window.localStorage.setItem('settings', _.json_encode(data))
    }
}
Vue.prototype.render = function (data) {
    Vue.set(this, 'info', data);
}


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
