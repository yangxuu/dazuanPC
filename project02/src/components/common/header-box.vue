<template>
  <div class="pos-fix-box">
    <div class="header-container">
      <div class="headerbox">
        <div class="safe auto header">
          <div class="left">欢迎您光临{{info.shop.name}}！</div>
          <div class="right">
            <img class="head-icon1" src="http://files.cailiao.com/vue/lianlv/pc_2/images/head-icon1.png" alt />
            <span class="col1">电话热线：{{info.shop.tele}}</span>
          </div>
        </div>
      </div>
      <div class="navbarbox">
        <div class="safe auto navbar">
          <div class="left">
            <img class="logo" :src="logo.logo" alt />
            <span class="shopname">{{info.shop.name}}</span>
          </div>
          <div class="right">
            <router-link to="/">首页 Home</router-link>/
            <router-link to="/product">产品中心 Products</router-link>/
            <router-link to="/news">资讯动态 News</router-link>/
            <router-link to="/introduce">企业信息 Profile</router-link>
          </div>
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
  height: 110px;
}
.header-container {
  width: 100%;
  height: 110px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
}
.headerbox {
  width: 100%;
  height: 30px;
  background-color: #df0808;
}
.header {
  height: 30px;
  color: #fff;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.head-icon1 {
  width: 17px;
  height: 17px;
}
.head-icon2 {
  width: 18px;
  height: 14px;
}
/* 导航栏 */
.navbarbox {
  background-color: #f5f5f5;
  height: 80px;
  width: 100%;
}
.navbar {
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar .left {
  display: flex;
  align-items: center;
}
.logo {
  display: block;
  width: 78px;
  height: 78px;
}
.shopname {
  font-size: 26px;
  color: #000000;
  margin-left: 24px;
}
.navbar .right {
  color: #979797;
}
.right a {
  opacity: 1;
  color: #000;
  font-size: 16px;
  padding: 0 24px;
}

.right .router-link-exact-active {
  color: #f30000;
}
</style>

