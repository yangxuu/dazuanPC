<template>
  <div>
    <headerBox/>
    <div class="pro-msg">
      <span class="pro-line"></span>
      <span>公司信息</span>
      <span class="pro-line"></span>
    </div>
    <div class="pro-table container">
      <div class="pro-col">
        <span class="name">公司名称：</span>
        <span class="name-value">{{info.shop.enterprise_name}}</span>
      </div>
      <div class="pro-col">
        <span class="name">经营地址：</span>
        <span class="name-value">{{info.shop.address}}</span>
      </div>
      <div class="pro-col">
        <span class="name">联系人：</span>
        <span class="name-value">{{info.shop.link_manage}}</span>
      </div>
      <div class="pro-col">
        <span class="name">联系电话：</span>
        <span class="name-value">{{info.shop.phone}}</span>
      </div>
      <div class="pro-col">
        <span class="name">手机号码：</span>
        <span class="name-value">{{info.shop.mobile}}</span>
      </div>
      <div class="pro-col">
        <span class="name">公司传真：</span>
        <span class="name-value">{{info.shop.facsimile}}</span>
      </div>
      <div class="pro-col">
        <span class="name">邮箱：</span>
        <span class="name-value">{{info.shop.user_email}}</span>
      </div>
      <div class="pro-col">
        <span class="name">QQ：</span>
        <span class="name-value">{{info.shop.qq||'--'}}</span>
      </div>
    </div>
    <div class="pro-msg">
      <span class="pro-line"></span>
      <span>公司简介</span>
      <span class="pro-line"></span>
    </div>
    <div class="pro-content" v-html="info.shop.content"></div>
    <copyright/>
    <totop/>
  </div>
</template>

<script>
import copyright from "./common/copyright";
import totop from "./common/totop";
import headerBox from "./common/header";
export default {
  components: { copyright, headerBox,totop },
  data() {
    return {
      info: { shop: {} }
    };
  },
  created() {
    let _this = this;
    _this.api("shop/info", { user_id:window._global.user_id }, res => {
      _this.render(res.data);
    });
  },
  methods: {}
};
</script>

<style scoped>
.pro-msg {
  width: 100%;
  height: 57px;
  font-size: 15px;
  color: #777777;
  text-align: center;
  line-height: 57px;
}
.pro-line {
  display: inline-block;
  width: 10px;
  height: 1px;
  background: #979797;
  position: relative;
  top: -3px;
}
.pro-table {
  width: 100%;
  background: #fff;
}
.pro-col {
  height: 47px;
  line-height: 47px;
  border-bottom: 1px solid #dddddd;
}
.pro-col .name {
  color: #777777;
  font-size: 14px;
}
.pro-col .name-value {
  color: #000000;
  font-size: 14px;
}
.pro-content {
  background: #ffffff;
  padding: 11px 15px 24px;
  border: 1px solid #e3e3e3;
  margin-bottom: 110px;
}
</style>
