<template>
  <div id="bd">
    <div class="layout">
      <div class="main-wrap">
        <div class="about-title-box box">
          <p class="title">企业介绍</p>
          <p class="desc">Enterprise introduction.</p>
        </div>
        <div class="box">
          <div class="w1200 m-t-50 m-b-50 fs-20 p-l-20 p-r-20 lh-20">
            <p class="m-b-10" v-html="info.shop.content"></p>

          </div>
        </div>
        <div class="about-title-box box no-mb bg-f2" style>
          <p class="title">公司风采</p>
          <p class="desc">Company elegant demeanor</p>
        </div>
        <div class="bg-f2 oh box">
          <div id class="w1200 p-b-30 m-b-30" style="border-bottom:1px solid #999999;">
            <div class="about-swiper-container">
              <el-carousel :interval="2000" type="card" height="300px">
                <el-carousel-item class="pic-box">
                 <img src="http://files.cailiao.com/vue/lianlv/pc_1/images/asset7.jpg">
                </el-carousel-item>
                <el-carousel-item class="pic-box">
                 <img src="http://files.cailiao.com/vue/lianlv/pc_1/images/asset6.jpg">
                </el-carousel-item>
                <el-carousel-item class="pic-box">
                 <img src="http://files.cailiao.com/vue/lianlv/pc_1/images/asset4.jpg">
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </div>
        <div class="about-title-box box no-mb bg-white" style>
          <p class="title">企业背景</p>
          <p class="desc">Enterprise background</p>
        </div>
        <div class="w1200">
          <div class="fl fs-16 lh-25 m-t-30 p-l-50" style="border-left:1px solid #4d4d4d;width: 60%">
            <p>企业名称： {{info.shop.name}}</p>
            <p>企业类型： {{info.shop.company_type}}</p>
            <p>经营范围： {{info.shop.business_scope}}</p>
            <p>经营状态： 存续</p>
            <p>公司法人： {{info.shop.legal_person}}</p>
            <p>注册地址： {{info.shop.address}}</p>
          </div>
          <div class="fr">
            <img src="http://files.cailiao.com/vue/lianlv/pc_1/images/asset7.jpg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import _ from 'underscore'
    import '../vendor/underscore.mixin'
export default {
    name: "introduce",
    data() {
        return {
              info:{
                  shop:{
                      business_registration:[]
                  }
              },
        }
    },
    created() {
        let _this = this;
        _this.api('shop/info', {shop_id:window._global.shop_id}, function (resp) {
            _this.render(resp.data);
        });
    },
};
</script>
<style scoped>
.pic-box img{
    width: 100%;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

</style>
