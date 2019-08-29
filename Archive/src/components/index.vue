<template>
  <div>
    <div class="pos-fix-box">
      <div class="page-title-box">
        <tele/>
        <div class="text">{{info.shop.name}}</div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 p-l-0 p-r-0 swiper-container index-swiper-container">
          <el-carousel v-show="info.ad_list.length==0?false:true" :interval="5000" height="250px">
            <el-carousel-item v-for="(item,key) in info.ad_list" :key="key">
              <img :src="item.img">
            </el-carousel-item>
          </el-carousel>

          <el-carousel
            v-show="info.ad_list.length==0?true:false"
            :interval="5000"
            height="250px"
            id="self"
          >
            <el-carousel-item></el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="row bg-white">
        <div class="col-xs-12">
          <div class="index-header-box m-t-5">
            <span class="box">
              <p class="name">公司介绍</p>
              <p class="text">Introduce</p>
            </span>
          </div>
        </div>
      </div>
      <div class="row bg-white p-b-10">
        <div class="col-xs-12 lh-18 m-t-5 text-in">
          <div class="p-l-5 p-r-5 f-grey p-b-5">
            <span v-html="info.shop.basic_info"></span>
          </div>
        </div>
      </div>
      <div class="row bg-white tc p-b-10 fs-13" id="three-btn">
        <router-link to="/about" class="col-xs-4">
          <span class="valign-middle">企业介绍</span>
        </router-link>
        <a :href="'tel:'+info.shop.tele" class="col-xs-4">
          <span class="valign-middle">电话咨询</span>
        </a>
        <router-link to="/feedback" class="col-xs-4">
          <span class="valign-middle">给我留言</span>
        </router-link>
      </div>

      <div class="row">
        <div class="col-xs-12 m-t-7 m-b-5">
          <div class="index-header-box">
            <span class="box">
              <p class="name">公司宗旨</p>
              <p class="text">Our advantages</p>
            </span>
          </div>
        </div>
      </div>
      <div class="row row-four bg-white">
        <div class="row-col">
          <div class="row-col-box">
            <div class="icon-box">
              <img src="http://files.cailiao.com/vue/lianlv/h5_1/images/icon-2.png" class="icon">
            </div>
            <div class="out-box">
              <p class="name">优质制造</p>
              <p class="desc">每一道精心的制作过程只为带给优质的体验</p>
            </div>
          </div>
          <div class="row-col-box box-left">
            <div class="icon-box">
              <img src="http://files.cailiao.com/vue/lianlv/h5_1/images/icon-3.png" class="icon">
            </div>
            <div class="out-box">
              <p class="name">品质保证</p>
              <p class="desc">供应优质产品,保证产品质量,反对不合格产品</p>
            </div>
          </div>
        </div>

        <div class="row-col">
          <div class="row-col-box box-top">
            <div class="icon-box">
              <img src="http://files.cailiao.com/vue/lianlv/h5_1/images/icon-4.png" class="icon">
            </div>
            <div class="out-box">
              <p class="name">品质服务</p>
              <p class="desc">坚持“客户最大”的准则提供贴心服务</p>
            </div>
          </div>
          <div class="row-col-box box-left box-top">
            <div class="icon-box">
              <img src="http://files.cailiao.com/vue/lianlv/h5_1/images/icon-1.png" class="icon">
            </div>
            <div class="out-box">
              <p class="name">优质售后</p>
              <p class="desc">贴心的售后客服，为您一一解答疑难杂惑</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row bg-white">
        <div class="col-xs-12 m-t-5 m-b-5">
          <div class="index-header-box">
            <span class="box">
              <p class="name">商品展示</p>
              <p class="text">Boutique</p>
            </span>
          </div>
        </div>
      </div>
      <div class="row bg-white item-list-box">
        <div class="col-xs-6 m-t-10" v-for="(item,key) in info.item_list" :key="key">
          <router-link :to="{path:'/item',query:{id:item.id}}" class="item style1 block">
            <div class="img-box">
              <img :src="item.img">
            </div>
            <p class="price-box">￥{{item.price}}</p>
            <p class="title">{{item.title}}</p>
          </router-link>
        </div>
      </div>
      <copyright/>
    </div>
  </div>
</template>

<script>
import tele from "./common/tele";
import copyright from "./common/copyright";

export default {
  components: { tele, copyright },
  data() {
    return {
      info: {
        shop: {},
        ad_list: [],
        item_list: []
      },
      swiperHeight: 0
    };
  },
  created() {
    let _this = this;
    _this.$store.commit("loading_show");
    _this.api("index/index", { shop_id: window._global.shop_id }, resp => {
      _this.render(resp.data);
      _this.$store.commit("loading_hide");
    });
  }
};
</script>

<style scoped>
#self .el-carousel__item:nth-child(2n) {
  background:purple;
  /* background-image: url(../assets/images/banner1.png); */
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}
#self .el-carousel__item:nth-child(2n + 1) {
  background: purple;
  /* background-image: url(../assets/images/banner1.png); */
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.pos-fix-box{
  width: 100%;
  height: 50px;
}
#three-btn {
  height: 50px;
  overflow: hidden;
}
#three-btn a {
  display: block;
  width: 30%;
  height: 40px;
  float: left;
  background: #676aab;
  color: #ffffff;
  line-height: 40px;
  text-align: center;
  margin: 0 6px;
  border-radius: 5px;
}
.img-box{
  width: 100%;
  height: 171px;
  overflow: hidden;
}
.img-box img{
  width: 100%;
  height: 100%;
}
</style>
