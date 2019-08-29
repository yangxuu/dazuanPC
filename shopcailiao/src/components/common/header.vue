<template>
  <div>
    <div class="header">
      <div class="head container">
        <div class="back" @click="history">
          <i class="fa fa-angle-left fa-3x"></i>
        </div>
        <div class="right">
          <router-link to="/search" id="ipt" type="text">
            <i class="fa fa-search"></i>
            <span class="word">店铺内搜索</span>
          </router-link>
        </div>
      </div>
      <div class="shopname container">
        <span class="name">{{info.shop.enterprise_name}}</span>
        <span class="icon-box">
          <img class="icon1" src="../../assets/images/yx_6.png">
          <img class="icon2" src="../../assets/images/yx_2.png">
        </span>
      </div>
    </div>
    <div class="container">
      <div class="bar">
        <li>
          <router-link to="/">店铺首页</router-link>
        </li>
         <li>
          <router-link to="/allpro">全部商品</router-link>
        </li>
        <li>
          <router-link to="/news">新闻资讯</router-link>
        </li>
        <li>
          <router-link to="/contact">联系我们</router-link>
        </li>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: {
        add_list: [],
        shop: {}
      }
    };
  },
  created() {
    let _this = this;
    _this.api("index/index", { user_id: window._global.user_id }, res => {
      _this.render(res.data);
    });
  },
  methods: {
    history() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 195px;
  position: relative;
  background-image: url(../../assets/images/yx_5.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.head {
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.back {
  text-align: left;
  width: 15%;
  height: 37px;
  line-height: 37px;
  font-size: 12px;
  color: #fff;
}
.right {
  width: 83%;
  height: 37px;
  line-height: 37px;
}
#ipt {
  display: block;
  width: 90%;
  height: 37px;
  background-color: #fff;
  border-radius: 8px;
  text-align: center;
}
#ipt .fa-search {
  color: #8c8c8c;
  font-size: 12px;
}
#ipt .word {
  font-size: 12px;
  color: #666666;
}
.shopname {
  margin-top: 23px;
  text-align: center;
}
.shopname .name {
  color: #ffffff;
  font-size: 26px;
}
.icon-box {
  position: absolute;
  right: 27px;
  bottom: 45px;
  display: inline-block;
  text-align: center;
  width: 16%;
  height: 22px;
  border-radius: 6px;
  background-color: #fff;
}
.icon-box .icon1 {
  width: 15px;
  height: 16px;
}
.icon-box .icon2 {
  width: 16px;
  height: 16px;
  margin-left: 7px;
}
.bar {
  width: 100%;
  height: 52px;
  background: rgba(255, 255, 255, 1);
  border-radius: 6px;
  margin-top: -20px;
  position: relative;
  z-index: 99999;
  box-shadow:-6px 2px 8px 0px rgba(187,187,187,0.48);
}
.bar li {
  display: block;
  width: 25%;
  height: 52px;
  line-height: 52px;
  text-align: center;
  float: left;
}
.bar li a {
  font-size: 15px;
  color: #333333;
  padding-bottom: 6px;
  text-decoration: none;
}
.bar li .router-link-exact-active {
  color: #f29056;
  border-bottom: 2px solid #f29056;
}
</style>

