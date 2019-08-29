// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import _ from 'underscore'
import Config from './config'
require("babel-polyfill"); //es5

import store from "@/store/store.js";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import axios from "axios"
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
    } else {
      if (fail) {
        fail(resp.data);
      } else {
        alert(resp.data.result);
      }
    }
  });
}
Vue.prototype.render = function (data) {
  Vue.set(this, 'info', data);
}
Vue.config.productionTip = false
import "@/assets/common.css"
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
