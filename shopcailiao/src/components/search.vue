<template>
  <div id="id" @click="flag=false">
    <div class="bigbox">
      <div class="bbox">
        <div class="s-head container clearfix">
          <div class="back" @click="history">
            <i class="fa fa-angle-left fa-3x"></i>
          </div>
          <div class="title-btn">搜索</div>
          <div class="more" @click.stop="flag=!flag">
            <img class="img" src="../assets/images/yx_13.png" alt />
          </div>
          <div class="navgate" v-if="flag">
            <div class="angle"></div>
            <div class="showblock">
              <div @click="tosearch" class="sousuo">
                <img class="img1" src="../assets/images/yx_10.png" alt />
                &#x3000;搜索
              </div>
              <div @click="toindex" class="shouye">
                <img class="img2" src="../assets/images/yx_11.png" alt />
                店铺首页
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="empty1"></div>
    <div class="s-flex">
      <div class="ipt-box">
        <img class="ico" src="../assets/images/yx_9.png" alt />
        <input class="ipt" type="text" v-model="val" />
        <div class="button" @click="search">搜索</div>
      </div>
    </div>
    <div class="empty2"></div>
    <div class="re-word" v-if="flag1">
      <div class="floor m-t-20">
        <div class="f-l">
          <span class="pot"></span>
          <span class="desc">主营产品</span>
          <img class="img1" src="../assets/images/yx_4.png" alt />
        </div>
      </div>
      <div class="recoment">
        <div
          class="every block"
          v-for="(item,index) in shop.cate"
          @click="hotClick(item.category_str)"
          :key="index"
        >{{item.category_str}}</div>
      </div>
      <!-- <div class="hot-word">
        <img src="../assets/images/yx_8.png" alt>
        您可能感兴趣的热词
      </div>
      <div class="hotwords">
        <div
          @click="hotClick(item)"
          v-for="(item,index) in arr.arr"
          :key="index"
          class="search-word"
        >{{item}}</div>
      </div>-->
    </div>
    <div class="empty"></div>
    <div class="search-pro" v-if="!flag1">
      <div class="follow">为您找到了以下相关商品。</div>
      <div class="products">
        <a
          v-for="(item,index) in info.list"
          :href="'http://m.cailiao.com/supply/'+item.id+'.html'"
          :key="index"
          class="item style1 block"
        >
          <div class="img-box">
            <img :src="item.image" />
          </div>
          <p class="title">{{item.name}}</p>
          <div class="flex">
            <p class="price-box">
              <span class="p">￥{{item.price_description}}</span>
            </p>
            <!-- <p class="sign">{{(item.category_str).split(',')[2]}}</p> -->
          </div>
        </a>
      </div>
      <!-- 分页 -->
      <div class="page">
        <button @click="tofirst" class="pad-10">首页</button>
        <button @click="prev" class="pad-12">上一页</button>
        <button class="pad-no">{{currentPage}}/{{Math.ceil(info.total/8)}}</button>
        <button @click="next" class="pad-12">下一页</button>
        <button @click="tolast" class="pad-10">尾页</button>
      </div>
    </div>

    <copyright class="copy" />
    <totop />
  </div>
</template>
<script>
import Vue from "vue";
import copyright from "./common/copyright";
import totop from "./common/totop";
export default {
  components: { copyright, totop },
  data() {
    return {
      flag: false,
      flag1: true,
      val: "",
      info: {
        list: [],
        page: 1,
        total: ""
      },
      currentPage: 1,
      arr: [],
      // 主营产品
      shop: {}
    };
  },
  created() {
    let _this = this;
    // 热词
    _this.api("index/search", {}, res => {
      Vue.set(this.arr, "arr", res.data);
    });
    // 主营产品
    _this.api(
      "shop/cate",
      { user_id: window._global.user_id, limit: 20 },
      res => {
        Vue.set(this.shop, "cate", res.data.cate);
      }
    );
  },
  watch: {
    currentPage: function(newValue, oldValue) {
      let _this = this;
      _this.api(
        "shop_item/search",
        {
          user_id: window._global.user_id,
          key: _this.val,
          page: newValue,
          limit: 8
        },
        res => {
          _this.render(res);
        }
      );
    }
  },
  methods: {
    // 输入框搜索
    search() {
      let _this = this;
      this.currentPage = 1;
      _this.flag1 = false;
      _this.api(
        "shop_item/search",
        { user_id: window._global.user_id, key: _this.val, limit: 8 },
        res => {
          _this.render(res);
        }
      );
      // _this.val = "";
    },
    // 热词点击
    hotClick(item) {
      this.val = item;
      this.search();
    },
    history() {
      this.$router.go(-1);
    },
    // 去首页
    toindex() {
      this.$router.push({ path: "/" });
      this.flag = false;
    },
    // 去搜索页
    tosearch() {
      this.$router.push({ path: "/search" });
      this.flag = false;
    },
    // 分页
    prev() {
      this.currentPage--;
      if (this.currentPage < 1) {
        this.currentPage = 1;
      }
    },
    next() {
      this.currentPage++;
      if (this.currentPage > Math.ceil(this.info.total / 8)) {
        this.currentPage = Math.ceil(this.info.total / 8);
      }
    },
    tofirst() {
      this.currentPage = 1;
    },
    tolast() {
      this.currentPage = Math.ceil(this.info.total / 8);
    }
  }
};
</script>
<style scoped>
/* #id{
    position: relative;
    width: 100%;
    min-height: 100%;
    padding-bottom: 130px;
    box-sizing: border-box;
}
 */
.copy {
  margin-top: 230px;
}
.bigbox{
  width: 100%;
  height: 50px;
}
.bbox {
  width: 100%;
  height: 50px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
}
.s-head {
  width: 100%;
  height: 50px;
  width: 100%;
  background: #ff9c01;
  position: relative;
}
.back {
  text-align: left;
  width: 15%;
  height: 50px;
  line-height: 50px;
  font-size: 12px;
  color: #fff;
  float: left;
}
.back .fa-angle-left {
  display: block;
  width: 15%;
  height: 50px;
  line-height: 50px;
}
.title-btn {
  width: 70%;
  height: 50px;
  line-height: 50px;
  font-size: 17px;
  text-align: center;
  color: #ffffff;
  float: left;
}
.more {
  display: block;
  width: 15%;
  height: 50px;
  text-align: right;
  line-height: 50px;
  float: right;
}
.more .img {
  width: 21px;
  height: 18px;
}
.navgate {
  position: absolute;
  z-index: 999;
  top: 50px;
  right: 10px;
}
.s-head .showblock {
  width: 110px;
  background: #767676;
  border-radius: 2px;
}
.angle {
  position: relative;
  left: 84px;
  top: 1px;
  width: 0;
  height: 0;
  border-width: 0 7px 7px;
  border-style: solid;
  border-color: transparent transparent #767676;
}
.showblock div {
  color: #ffffff;
  font-size: 14px;
  text-align: center;
}
.showblock .sousuo {
  padding: 13px 0;
  margin: 0 5px;
  border-bottom: 1px solid #979797;
}
.showblock .shouye {
  padding: 13px 0;
  margin: 0 5px;
}
.showblock .img1 {
  width: 15px;
  height: 15px;
  position: relative;
  top: -1px;
  left: -6px;
}
.showblock .img2 {
  width: 17px;
  height: 15px;
  position: relative;
  top: -1px;
}
.empty1 {
  width: 100%;
  height: 12px;
  background: #ececec;
}
.empty2 {
  width: 100%;
  height: 7px;
  background: #ececec;
}
.s-flex {
  width: 100%;
  background: #ffffff;
}
.ipt-box {
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.ipt-box .ico {
  width: 24px;
  height: 24px;
  position: absolute;
  left: 8%;
  top: 50%;
  margin-top: -12px;
}
.ipt-box .ipt {
  width: 70%;
  height: 42px;
  outline: none;
  text-indent: 3em;
  background: #ffffff;
  border: 1px solid #ff9c01;
}
.ipt-box .button {
  display: inline-block;
  width: 20%;
  height: 42px;
  font-size: 14px;
  text-align: center;
  line-height: 42px;
  color: #ffffff;
  background: #ff9c01;
  border: 1px solid #ff9c01;
}
.re-word {
  background: #ffffff;
}
.hot-word {
  padding-left: 10px;
  padding-top: 16px;
  color: #4f4f4f;
  font-size: 15px;
}
.hot-word img {
  width: 19px;
  height: 23px;
  position: relative;
  top: -2px;
}
.hotwords {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}
.search-word {
  width: 100px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  margin: 10px;
  background: #ffb034;
  color: #ffffff;
  font-size: 15px;
  border-radius: 15px;
}
.empty {
  width: 100%;
  height: 7px;
  background: #ececec;
}
.follow {
  color: #838383;
  font-size: 15px;
  margin-left: 10px;
  padding-top: 15px;
}
/* 分类 */
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
/* 分页 */
.page {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: #5e5e5e;
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 100px;
}
.pad-10 {
  padding: 10px 10px 11px 11px;
  background: #ffffff;
  border-radius: 2px;
}
.pad-12 {
  padding: 12px 3px;
  background: #ffffff;
  border-radius: 2px;
}
.pad-no {
  background: #f5f5f5;
  padding: 12px 3px;
  font-size: 14px;
}
/* 主营产品 */
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
.recoment {
  width: 100%;
  overflow: hidden;
  padding-top: 15px;
  padding-left: 10px;
  padding-bottom: 15px;
}
.recoment .every {
  float: left;
  margin: 8px 6px;
  padding: 7px 8px;
  font-size: 15px;
  color: #ffffff;
  background: #000;
  background: linear-gradient(
    180deg,
    rgba(255, 164, 42, 1) 0%,
    rgba(255, 156, 1, 1) 100%
  );
  border-radius: 5px;
}
</style>

