<template>
  <div>
    <div class="pos-fix-box">
      <div class="page-title-box">
        <tele/>
        <div class="text">商品详情</div>
        <span @click="history" class="size">
          <i class="fa fa-angle-left fa-lg"></i>&nbsp;返回
        </span>
      </div>
    </div>
    <div class="title-pro">商品信息</div>
    <div class="empty"></div>
    <div class="container">
      <div class="row bg-white">
        <div class="col-xs-12 p-l-0 p-r-0">
          <el-carousel>
            <el-carousel-item v-for="(item,key) in info.shop_item_img_list" :key="key">
              <img :src="item.url" style="width:100%;height:100%">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="row bg-white item-detail-box">
        <div class="col-xs-12">
          <p class="price">
            ￥
            <em>{{info.shop_item_info.price||0}}</em>
          </p>
          <p class="title">{{info.shop_item_info.title}}</p>
        </div>
        <div class="col-xs-12 desc">
          <span class="f-shallow">商家：</span>
          {{info.shop_item_info.shop_name}}
        </div>
        <div class="col-xs-12 desc" style="margin-top: 0;">
          <span class="f-shallow">产品类型：</span>
          {{info.shop_item_info.cate_name}}
        </div>
      </div>
      <div class="row fs-12 lh-18 bg-white m-b-10">
        <div class="col-xs-3 p-r-0">
          <p class="b-t-1 f-shallow p-l-10 p-t-5">起定量</p>
          <p class="p-l-10 f-grey p-b-5">≥1{{info.shop_item_info.unit}}</p>
        </div>
        <div class="col-xs-4 tc p-l-0 p-r-0">
          <p class="b-t-1 f-shallow p-t-5">总供应</p>
          <p class="f-grey p-b-5">{{info.shop_item_info.amount}}{{info.shop_item_info.unit}}</p>
        </div>
        <div class="col-xs-5 p-l-0 tc">
          <p class="b-t-1 f-shallow p-t-5">所在地</p>
          <p class="f-grey p-b-5">{{info.shop.address}}</p>
        </div>
      </div>
      <div class="row bg-white fs-16">
        <div class="col-xs-12 pos-re">
          <div class="fl pc-50 tag-title" @click="showType(0)">
            <span :class="type==0?'':'default'">商品详情</span>
          </div>
          <span class="line"></span>
          <div class="fl pc-50 tag-title" @click="showType(1)">
            <span :class="type==1?'':'default'">商品参数</span>
          </div>
        </div>
      </div>
      <div class="row bg-white" :style="type==0?'':'display:none;'">
        <div class="col-xs-12 pd10 item_content">
          <div class="col-xs-12 pd10">
            <div class="detail-thing">
              <span class="line left"></span>
              <span class="text">商品信息</span>
              <span class="line right"></span>
            </div>
          </div>
          <div class="html-xs" v-html="info.shop_item_info.content"></div>
        </div>
      </div>

      <div class="row bg-white" :style="type==1?'':'display:none;'">
        <div class="col-xs-12 pd10">
          <div class="detail-thing">
            <span class="line left"></span>
            <span class="text">参数详情</span>
            <span class="line right"></span>
          </div>
          <table class="pro-det fs-14">
            <tr class="pro-det-tr" v-for="(item,index) in info.shop_item_attr_list" :key="index">
              <td class="td-head">{{item.name}}</td>
              <td class="td-foot">{{item.val}}</td>
            </tr>
          </table>
        </div>
      </div>
      <copyright/>
    </div>
  </div>
</template>

<script>
import _ from "underscore";
import "../vendor/underscore.mixin";
import tele from "./common/tele";
import copyright from "./common/copyright";

export default {
  components: { tele, copyright },
  data() {
    return {
      type: 0,
      info: {
        shop_item_img_list: [],
        shop_item_info: {},
        shop: {},
        shop_item_attr_list: {}
      }
    };
  },
  created() {
    let _this = this;
    _this.$store.commit("loading_show");
    _this.api(
      "shop_item/info",
      { shop_item_id: _this.$route.query.id },
      resp => {
        _this.render(resp.data);
        _this.$store.commit("loading_hide");
      }
    );
  },
  watch: {
    $route(to, from) {
      if (to.path == "/list") {
        window.location.reload();
      }
      if (to.path == "/") {
        window.location.reload();
      }
    }
  },
  methods: {
    showType(type) {
      this.type = type;
    },
    history() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
.item_content img {
  max-width: 100% !important;
  height: auto !important;
}
.html-xs p {
  margin-top: 10px;
}
.html-xs span {
  font-size: 17px;
}
.html-xs p span {
  font-size: 17px !important;
}
</style>
