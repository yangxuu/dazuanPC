<template>
  <div class="body">
     <headerBox/>
    <div class="floor">
      <div class="f-l">
        <span class="pot"></span>
        <span class="desc">最新供应</span>
        <img class="img2" src="../assets/images/yx_1.png" alt>
      </div>
    </div>
    <div class="products">
      <a
        v-for="(item,index) in arr.list"
        :key="index"
        :href="'http://m.cailiao.com/supply/'+item.id+'.html'"
        class="item style1 block"
      >
        <div class="img-box">
          <img :src="item.image">
        </div>
        <p class="title">{{item.name}}</p>
        <div class="flex">
          <p class="price-box">
            ￥
            <span class="p">{{item.price_description}}</span>
          </p>
          <p class="sign">{{(item.category_str).split(',')[2]}}</p>
        </div>
      </a>
    </div>
    <div class="floor">
      <div class="f-l">
        <span class="pot"></span>
        <span class="desc">老板推荐</span>
        <img class="img3" src="../assets/images/yx_3.png" alt>
      </div>
    </div>
    <div class="products">
      <a
        v-for="(item,index) in info.re_list"
        :key="index"
        :href="'http://m.cailiao.com/supply/'+item.id+'.html'"
        class="item style1 block"
      >
        <div class="img-box">
          <img :src="item.image">
        </div>
        <p class="title">{{item.name}}</p>
        <div class="flex">
          <p class="price-box">
            ￥
            <span class="p">{{item.price_description}}</span>
          </p>
          <p class="sign">{{(item.category_str).split(',')[2]}}</p>
        </div>
      </a>
    </div>
    <router-link to="/allpro" class="block navgator">查看全部商品</router-link>
    <copyright/>
    <totop/>
  </div>
</template>

<script>
import Vue from "vue";
import copyright from "./common/copyright";
import headerBox from "./common/header"
import totop from "./common/totop"
export default {
  components: { copyright,headerBox,totop },
  data() {
    return {
      // 推荐
      info: {
        re_list: {},
        re_page: { page: 1 }
      },
      // 店铺
      obj: {
        shop: {},
        ad_list: {},
        item_list: []
      },
      // 最新
      arr: {
        list: [],
        pageInfo: {}
      }
    };
  },
  created() {
    let _this = this;
    // 推荐
    _this.api(
      "index/re_list",
      { user_id: window._global.user_id, page: 1, perPage: 10 },
      res => {
        _this.render(res.data);
      }
    );
    // 店铺信息
    _this.api("index/index", { user_id: window._global.user_id, perpage: 8 }, res => {
      Vue.set(this.obj, "shop", res.data.shop);
      Vue.set(this.obj, "item_list", res.data.item_list);
      Vue.set(this.obj, "ad_list", res.data.ad_list);
    });
    // 最新 order:'update_time'
    _this.api(
      "shop_item/lists",
      {
        user_id: window._global.user_id,
        order: "update_time",
        page: 1,
        perPage: 10
      },
      res => {
        Vue.set(this.arr, "list", res.data.list);
        Vue.set(this.arr, "pageInfo", res.data.pageInfo);
      }
    );
  },
 

};
</script>
<style scoped>
.floor {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #ffffff;
  padding: 0 10px;
  margin-top: 13px;
  margin-bottom: 13px;
}
.m-t-20 {
  margin-top: 20px;
}
.f-l .pot {
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #ff9c01;
}
.f-l .desc {
  color: #777777;
  font-size: 15px;
}
.f-l .img1 {
  width: 14px;
  height: 15px;
  position: relative;
  left: 2px;
  top: -6px;
}
.f-l .img2 {
  width: 18px;
  height: 11px;
  position: relative;
  left: 2px;
  top: -6px;
}
.f-l .img3 {
  width: 15px;
  height: 15px;
  position: relative;
  left: 2px;
  top: -6px;
}
.products {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
}
.products .item {
  width: 47%;
  background: #ffffff;
  margin: 9px 4.5px;
  overflow: hidden;
  border-radius: 6px;
}
.item .img-box {
  width: 100%;
  height: 171px;
  overflow: hidden;
}
.img-box img {
  width: 100%;
  height: 100%;
}
.item .title {
  color: #000000;
  font-size: 14px;
  overflow: hidden;
  padding: 0 3px;
  margin-top: 3px;
  width: 100%;
  height: 40px;
}
.flex {
  height: 25px;
  line-height: 25px;
  margin-top: 3px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.flex .price-box {
  width: 70%;
  padding-left: 3px;
  font-size: 11px;
  color: #c80303;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.price-box .p {
  font-size: 15px;
}
.flex .sign {
  width: 30%;
  padding-right: 6px;
  color: #8c8c8c;
  font-size: 11px;
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.navgator {
  width: 116px;
  height: 46px;
  line-height: 46px;
  text-align: center;
  margin: 30px auto 92px;
  color: #ffffff;
  font-size: 15px;
  background: rgba(255, 156, 1, 1);
  border-radius: 3px;
}
</style>
