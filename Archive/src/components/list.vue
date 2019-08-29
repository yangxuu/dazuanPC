<template>
  <div>
    <div class="pos-fix-box">
      <div class="page-title-box b-b-1">
        <div class="col-xs-12">
          <div class="text">
            产品中心
            <!-- <i class="fa fa-caret-down"></i> -->
          </div>
          <tele/>
        </div>
      </div>
    </div>
    <!-- <div class="title-pro">
      产品分类
      <i class="fa fa-caret-down"></i>
    </div> -->
    <div class="container">
      <div class="row bg-white item-list-box m-b-10">
        <div class="col-xs-6 m-t-10" v-for="(item,index) in info.list" :key="index">
          <router-link :to="{path:'/item',query:{id:item.id}}" class="item style1 block">
            <div class="img-box">
              <img :src="item.img">
            </div>
            <p class="price-box">
              ￥
              <em>{{item.price}}</em>
            </p>
            <p class="title">{{item.title}}</p>
          </router-link>
        </div>
      </div>
      <copyright/>
    </div>
  </div>
</template>
<script>
import _ from "underscore";
import "../vendor/underscore.mixin";
import vueWaterfallEasy from "vue-waterfall-easy";
import tele from "./common/tele";
import copyright from "./common/copyright";
export default {
  components: {
    vueWaterfallEasy,
    tele,
    copyright
  },
  data() {
    return {
      info: {
        list: []
      }
    };
  },
  created() {
    let _this = this;
    _this.$store.commit("loading_show");
    _this.api("shop_item/lists", { shop_id: window._global.shop_id }, res => {
      _this.render(res.data);
      _this.$store.commit("loading_hide");
    });
  }
};
</script>
<style>
.list-page .item-list-box {
  position: absolute;
  top: 50px;
  bottom: 60px;
  width: 100%;
}
.list-page .waterfall-container {
  margin: 0;
  padding: 0;
}
.list-page .img-box {
  position: static !important;
  float: left;
}
.img-box {
  width: 100%;
  height: 171px;
  overflow: hidden;
}
.img-box img {
  width: 100%;
  height: 100%;
}
</style>
