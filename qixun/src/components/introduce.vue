<template>
  <div>
    <div class="banner-box"></div>
    <div class="safe auto com">公司介绍</div>
    <div class="max">
      <div class="container safe auto">
        <div class="left">
          <div class="img-box"></div>
          <div class="des">
            <p>
              公司名称：
              <b style="font-weight:bolder">{{info.shop.enterprise_name}}</b>
            </p>
            <p>
              主营产品：
              <b style="color:#686869">{{info.shop.product}}</b>
            </p>
            <p>
              <b>企业类型：</b>
             <b style="color:#686869"> {{info.shop.enterprise_type}}</b>
            </p>
            <p>
              <b>公司地址：</b>
             <b style="color:#686869"> {{info.shop.address}}</b>
            </p>
          </div>
          <ul class="contact">
            <li>
              <div class="img-box img-1"></div>
              <div class="img-des">联系人：{{info.shop.link_manage}}</div>
            </li>
            <!-- <li>
              <div class="img-box img-2"></div>
              <div class="img-des">QQ：123456</div>
            </li>-->
            <li>
              <div class="img-box img-3"></div>
              <div class="img-des">电话：{{info.shop.phone}}</div>
            </li>
            <li>
              <div class="img-box img-4"></div>
              <div class="img-des">手机：{{info.shop.mobile}}</div>
            </li>
          </ul>
        </div>
        <div class="right">
          <div class="head-box">
            <div class="head">
              <ul>
                <li>
                  <div class="logo-box1">
                    <img :src="info.shop.logo" alt>
                  </div>
                  <div class="des">{{info.shop.enterprise_name}}</div>
                </li>
                <li class="m-l-50">
                  <div class="logo-box">
                    <img src="http://files.cailiao.com/vue/cailiao/pc_18/images/icon-1.png" alt>
                  </div>
                  <div class="des1">{{info.shop.grade_name}}</div>
                </li>
                <li class="m-l-20">
                  <div class="logo-box">
                    <img src="http://files.cailiao.com/vue/cailiao/pc_18/images/icon-2.png" alt>
                  </div>
                  <div class="des2">企业认证</div>
                </li>
              </ul>
            </div>
            <div class="bd">
              <b>公司介绍：</b>
              <span v-html="info.shop.content||'敬请期待，为您展现更好的我们……'"></span>
            </div>
          </div>
          <div class="table m-t-30">
            <div class="t-h">详细信息</div>
            <div id="table">
              <div class="t-r" v-for="(item,key) in info.shop.business_registration" :key="key">
                <div class="td-1">{{key}}:</div>
                <div class="td-2">{{item||'-'}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        shop: {
          business_registration: {}
        }
      }
    };
  },
  created() {
    let _this = this;
    _this.api("shop/info", { user_id: window._global.user_id }, res => {
      _this.render(res.data);
    });
  }
};
</script>

<style scoped>
.banner-box {
  width: 100%;
  height: 400px;
  overflow: hidden;
  background: url(http://files.cailiao.com/vue/cailiao/pc_18/images/banner7.png);
}
.com {
  width: 1200px;
  height: 40px;
  margin-top: 20px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
  font-size: 16px;
  background: #3660ab;
}
.max {
  width: 100%;
  background: #f4f4f4;
}
.container {
  width: 1200px;
  overflow: hidden;
  margin-top: 10px;
}
.left {
  width: 300px;
  float: left;
}
.left .img-box {
  width: 300px;
  height: 55px;
  background: url(http://files.cailiao.com/vue/cailiao/pc_18/images/super.png) no-repeat;
}
.left .des {
  width: 100%;
  padding: 20px;
  font-size: 14px;
  color: #000000;
  background: #ffffff;
}
.left .des p {
  line-height: 30px;
}
.left .contact {
  width: 100%;
  overflow: hidden;
  padding: 0 15px;
  background: #e9e9e9;
}
.left .contact li {
  width: 100%;
  height: 30px;
  margin-top: 15px;
  display: flex;
}
.left .contact li .img-box {
  width: 31px;
  height: 31px;
  background-position: center center;
  background-size: 30px 30px;
  background-repeat: no-repeat;
}
.left .contact li .img-1 {
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_18/images/icon-17.png);
}
.left .contact li .img-2 {
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_18/images/icon-18.png);
}
.left .contact li .img-3 {
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_18/images/icon-19.png);
}
.left .contact li .img-4 {
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_18/images/icon-20.png);
}
.left .contact li .img-des {
  width: 250px;
  height: 30px;
  margin-left: 10px;
  line-height: 30px;
  border-bottom: 1px solid #dedede;
}
.right {
  width: 880px;
  float: right;
  margin-left: 20px;
  margin-bottom: 100px;
}
.right .head-box {
  width: 100%;
  background: #ffffff;
  padding: 20px;
}
.head .logo-box1 {
  width: 70px;
  height: 58px;
  text-align: center;
  overflow: hidden;
}
.logo-box1 img{
  width: 100%;
  height: 100%;
}
.head ul {
  width: 100%;
  height: 58px;
  line-height: 58px;
  overflow: hidden;
}
.head ul li {
  float: left;
  overflow: hidden;
}
.head ul li div {
  float: left;
}
.head .des {
  font-size: 16px;
  color: #1d1d1d;
  margin-left: 10px;
}
.head .des1 {
  font-size: 12px;
  color: #f56110;
}
.head .des2 {
  font-size: 12px;
  color: #393939;
}
.right .bd {
  font-size: 14px;
  text-indent: 2em;
  line-height: 160%;
  margin-top: 37px;
  color: #5c5c5c;
}
.right .table {
  width: 100%;
  font-size: 14px;
  color: #000000;
}
.table #table {
  width: 100%;
  overflow: hidden;
   border-left: 1px solid #a7a7a7;
}
.table .t-h {
  width: 100%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  font-size: 14px;
  color: #000000;
  background: #d1d0d0;
}
#table .t-r{
  height: 50px;
  float: left;
  overflow: hidden;
   border-bottom: 1px solid #a7a7a7;
}
.t-r .td-1{
  width: 197px;
  height: 50px;
  padding: 10px;
  float: left;
  background: #f4f4f4;
   border-right: 1px solid #a7a7a7;
}
.t-r .td-2{
  width: 242px;
  height: 50px;
  padding: 7px;
  float: left;
  background: #ffffff;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient: vertical;
  border-right: 1px solid #a7a7a7;
}

</style>
