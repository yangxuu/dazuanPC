<template>
  <div class="body">
    <headerBox />
    <div class="products">
      <router-link
        v-for="(item,index) in info.list"
        :key="index"
        class="item style1 block"
        :to="{path:'/newdetail',query:{id:item.id}}"
      >
        <div class="img-box">
          <img :src="item.thumbnail" />
        </div>
        <p class="title">{{item.post_title}}</p>
        <div class="flex">
          <p class="price-box">{{item.create_time}}</p>
          <p class="sign">查看更多</p>
        </div>
      </router-link>
    </div>
    <div class="page">
      <button @click="tofirst" class="pad-10">首页</button>
      <button @click="prev" class="pad-12">上一页</button>
      <button class="pad-no">{{currentPage}}/{{Math.ceil(info.total/10)}}</button>
      <button @click="next" class="pad-12">下一页</button>
      <button @click="tolast" class="pad-10">尾页</button>
    </div>
    <copyright />
    <totop />
  </div>
</template>

<script>
import Vue from "vue";
import copyright from "./common/copyright";
import headerBox from "./common/header";
import totop from "./common/totop";
export default {
  components: { copyright, headerBox, totop },
  data() {
    return {
      info: {},
      currentPage: 1
    };
  },
  created() {
    let _this = this;
    _this.api(
      "news/index",
      { user_id: window._global.user_id, limit: 8 },
      res => {
        _this.render(res);
      }
    );
  },
  watch: {
    currentPage: function(newValue, oldValue) {
      let _this = this;
      _this.api(
        "news/index",
        {
          user_id: window._global.user_id,
          page: newValue,
          perpage: 8
        },
        res => {
          _this.render(res);
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
<style scoped>
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
  color: #707070;
  font-size: 12px;
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
