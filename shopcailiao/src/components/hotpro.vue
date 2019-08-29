<template>
  <div>
    <headerBox/>
    <div class="products">
      <a
        v-for="(item,index) in info.item_list"
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
      <div class="page">
        <button @click="tofirst" class="pad-10">首页</button>
        <button @click="prev" class="pad-12">上一页</button>
        <button class="pad-no">{{currentPage}}/{{Math.ceil(info.total/10)}}</button>
        <button @click="next" class="pad-12">下一页</button>
        <button @click="tolast" class="pad-10">尾页</button>
      </div>
      <copyright/>
      <totop/>
    </div>
  </div>
</template>

<script>
import _ from "underscore";
import "../vendor/underscore.mixin";
import Vue from "vue";
import copyright from "./common/copyright";
import headerBox from "./common/header";
import totop from "./common/totop";
export default {
  components: { copyright, headerBox,totop },
  data() {
    return {
      // 热卖
      info: {
        item_list: [],
        page: 1,
        total: ""
      },
      currentPage: 1
    };
  },
  created() {
    let _this = this;
    // 热卖商品
    _this.api(
      "index/update_list",
      { user_id: window._global.user_id, page: 1, perpage: 10 },
      res => {
        _this.render(res.data);
      }
    );
  },
  watch: {
    currentPage: function(newValue, oldValue) {
      let _this = this;
      _this.api(
        "index/update_list",
        {
          user_id: window._global.user_id,
          page: newValue,
          perpage: 10
        },
        res => {
          _this.render(res.data);
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
      if (this.currentPage > Math.ceil(this.info.total / 10)) {
        this.currentPage = Math.ceil(this.info.total / 10);
      }
    },
    tofirst() {
      this.currentPage = 1;
    },
    tolast() {
      this.currentPage = Math.ceil(this.info.total / 10);
    }
  }
};
</script>

<style <style scoped>
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

