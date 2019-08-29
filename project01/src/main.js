// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import _ from 'underscore'
import Config from './config'

// 全局引入element-ui
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

Vue.use(ElementUI);

Vue.config.productionTip = false

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

Vue.prototype.$http = axios

// 引入公共样式
import "@/assets/common.css"
import "@/assets/main-v1.css"


// 面包屑导航
var routeList = [];
router.beforeEach((to, from, next) => {
  var index = -1;
  for(var i = 0; i < routeList.length; i++) {
    if(routeList[i].name == to.name) {
      index = i;
      break;
    }
  }
  if (index !== -1) {
//如果存在路由列表，则把之后的路由都删掉
    routeList.splice(index + 1, routeList.length - index - 1);
  } else if(to.name != '登录'){
    routeList.push({"name":to.name,"path":to.fullPath});
  }
  to.meta.routeList = routeList;
  next()
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
