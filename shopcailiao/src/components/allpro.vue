<template>
  <div>
    <headerBox/>
    <div class="list">
      <div class="all-list" @click="flag=!flag">
        <span class="inner">全部商品</span>
        <span class="img" :class="flag==true?'up':'down'"></span>
      </div>
    </div>
    <div class="list-li clearfix" v-if="flag">
      <div
        @click="route(index)"
        class="every"
        v-for="(item,index) in shop.cate"
        :key="index"
      >{{item.category_str}}</div>
    </div>
    <div class="products">
      <a
        v-for="(item,index) in info.list"
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
    <div class="page">
      <button @click="tofirst" class="pad-10">首页</button>
      <button @click="prev" class="pad-12">上一页</button>
      <button class="pad-no">{{currentPage}}/{{info.pageInfo.totalPage}}</button>
      <button @click="next" class="pad-12">下一页</button>
      <button @click="tolast" class="pad-10">尾页</button>
    </div>
    <copyright/>
    <totop/>
  </div>
</template>

<script>
import Vue from "vue";
import _ from "underscore";
import "../vendor/underscore.mixin";
import copyright from "./common/copyright";
import totop from "./common/totop";
import headerBox from "./common/header";
export default {
  components: { copyright, headerBox, totop },
  data() {
    return {
      info: {
        list: [],
        pageInfo: {
          page: 1,
          totalPage: ""
        }
      },
      // 主营产品
      shop: {},
      currentPage: 1,
      flag: false
    };
  },
  created() {
    let _this = this;
    // 主营产品
    _this.api("shop/cate", { user_id: window._global.user_id }, res => {
      Vue.set(this.shop, "cate", res.data.cate);
    });

    _this.api(
      "shop_item/lists",
      {
        user_id: window._global.user_id,
        cate_id: _this.$route.query.cate_id,
        pageParams: { page: _this.info.pageInfo.page, perPage: 10 }
      },
      function(res) {
        _this.render(res.data);
      }
    );
  },
  watch: {
    currentPage: function(newValue, oldValue) {
      let _this = this;
      _this.api(
        "shop_item/lists",
        {
          user_id: window._global.user_id,
          cate_id: _this.$route.query.cate_id,
          page: newValue,
          perpage: 10
        },
        res => {
          _this.render(res.data);
        }
      );
    },
    $route(to, from) {
      //做一些路由变化的响应
      let _this = this;
      _this.currentPage = 1;
      _this.api(
        "shop_item/lists",
        {
          user_id: window._global.user_id,
          cate_id: _this.$route.query.cate_id,
          pageParams: { page: _this.info.pageInfo.page, perPage: 10 }
        },
        resp => {
          _this.render(resp.data);
        }
      );
    }
  },
  methods: {
    prev() {
      this.currentPage--;
      if (this.currentPage < 1) {
        this.currentPage = 1;
      }
    },
    next() {
      this.currentPage++;
      if (this.currentPage > this.info.pageInfo.totalPage) {
        this.currentPage = this.info.pageInfo.totalPage;
      }
    },
    tofirst() {
      this.currentPage = 1;
    },
    tolast() {
      this.currentPage = this.info.pageInfo.totalPage;
    },
    route(index) {
      this.flag = false;
      let _this = this;
      _this.currentPage = 1;
      _this.api(
        "shop_item/lists",
        {
          user_id: window._global.user_id,
          cate_id: _this.shop.cate[index].cate_three_id,
          pageParams: { page: _this.info.pageInfo.page, perPage: 10}
        },
        function(res) {
          _this.render(res.data);
        }
      );
    }
  }
};
</script>

<style scoped>
/* 分类 */
.list {
  width: 100%;
  height: 40px;
  position: relative;
  margin-top: 22px;
}
.all-list {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #fbfbfb;
  color: #777777;
  font-size: 15px;
  border-bottom: 1px solid #e9e9e9;
}
.all-list .img {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-left: 3px;
}
.all-list .down {
  background-image: url(../assets/images/down.png);
  background-repeat: no-repeat;
  background-size: 10px 10px;
}
.all-list .up {
  background-image: url(../assets/images/up.png);
  background-repeat: no-repeat;
  background-size: 10px 10px;
}
.list-li {
  width: 100%;
  height: 400px;
  overflow: auto;
  padding: 13px 14px;
  background: #fff;
}
.list-li .every {
  float: left;
  padding: 0 10px;
  height: 36px;
  line-height: 36px;
  border-radius: 1px;
  margin-top: 13px;
  margin-left: 12px;
  border: 1px solid #dedede;
  font-size: 16px;
  color: #777777;
  text-align: center;
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
</style>
