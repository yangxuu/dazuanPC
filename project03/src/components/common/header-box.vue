<template>
  <div class="pos-fix-box">
    <div class="navbarbox">
      <div class="safe auto navbar">
        <div class="left">
          <div class="logobox"><img class="logo" :src="logo.logo" alt /></div>
          <span class="shopname">{{info.shop.name}}</span>
        </div>
        <div class="right">
          <router-link to="/">首页</router-link>
          <router-link to="/product">产品中心</router-link>
          <router-link to="/news">资讯动态</router-link>
          <router-link to="/introduce">企业信息</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  data() {
    return {
      info: {
        shop: {}
      },
      logo: { logo: "" }
    };
  },
  created() {
    let _this = this;
    _this.api("index/index", { shop_id: window._global.shop_id }, resp => {
      _this.render(resp.data);
    });
    _this.api("shop/get_logo", { shop_id: window._global.shop_id }, res => {
      Vue.set(this.logo, "logo", res.data.logo.url);
    });
  }
};
</script>
<style scoped>
/* 头部 */
.pos-fix-box {
  width: 100%;
  height: 80px;
}
/* 导航栏 */
.navbarbox {
  background-color: #444444;
  height: 80px;
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
}
.navbar {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navbar .left {
  display: flex;
  align-items: center;
}
.logobox{
  width: 110px;
  height: 80px;
  background-color: #fff;
}
.logo {
  display: block;
  width: 78px;
  height: 78px;
  border-radius: 50%;
  margin-left: 16px;
}
.shopname {
  font-size: 22px;
  color: #fff;
  margin-left: 24px;
}
.right{
  overflow: hidden;
}
.right a {
  display: block;
  width: 108px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  opacity: 1;
  color: #fff;
  font-size: 16px;
  float: left;
}

.right .router-link-exact-active {
  background: #000;
}
.right a:hover{
   background: #000;
}
</style>

