<template>
  <div>
    <div class="bread-nav safe auto">
      <router-link class="link" style="width:50px;" to="/">
        首页
        <span class="arrow">></span>
      </router-link>
      <router-link class="link" to="/news">
        资讯动态
        <span class="arrow">></span>
      </router-link>
      <span class="post_title">{{info.post_title}}</span>
      <span class="arrow">></span>
      <span style="color:#939393;font-size:14px;  display: inline-block;vertical-align: middle;">正文</span>
    </div>

    <div class="safe auto newsdetail-contain">
      <div class="article">
        <div class="title">{{info.post_title}}</div>
        <div class="data-arr">
          <img class="news-ico1" src="http://files.cailiao.com/vue/lianlv/pc_2/images/yx10.png" alt />
          <span class="creat-time">{{info.create_time}}&#x3000;</span>
          <img class="news-ico2" src="http://files.cailiao.com/vue/lianlv/pc_2/images/yx11.png" alt />
          <span class="address-str">{{info.address_str}}</span>
        </div>
        <div class="line"></div>
        <div class="des-content" v-html="info.post_content"></div>
        <div class="bottom-line"></div>
        <div class="bottom-word">我是有底线的</div>
      </div>
      <div class="recoment">
        <div class="re-head">热销产品</div>
        <router-link
          :to="{path:'/detail',query:{id:item.id}}"
          class="re-itembox"
          v-for="(item,index) in re.list"
          :key="index"
        >
          <div class="imgbox">
            <img :src="item.img" alt />
          </div>
          <div class="re-para">
            <div class="re-title">{{item.title | ellipsis}}</div>
            <div class="re-price">￥{{item.price}}</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 25) {
        return value.slice(0, 25) + "...";
      }
      return value;
    }
  },
  data() {
    return {
      info: {},
      re: {}
    };
  },
  created() {
    let _this = this;
    _this.http(
      "news/detail",
      { user_id: window._global.cailiao_id, news_id: _this.$route.query.id },
      res => {
        _this.render(res.data);
      }
    );
    // 热销
    _this.api(
      "index/hot_list",
      { shop_id: window._global.shop_id, limit: 4 },
      resp => {
        Vue.set(this.re, "list", resp.data.list);
      }
    );
  },
  watch: {
    //监听相同路由下参数变化的时候，从而实现异步刷新
    $route(to, from) {
      let _this = this;
      _this.http(
        "news/detail",
        {
          user_id: window._global.cailiao_id,
          news_id: _this.$route.query.id
        },
        resp => {
          _this.render(resp.data);
        }
      );
    }
  }
};
</script>
<style>
.des-content {
  color: #3f3f3f;
  font-size: 16px;
}
.des-content p span {
  color: #3f3f3f;
  font-size: 16px !important;
}
.des-content p img {
  display: block;
  width: 398px;
  height: 226px;
  margin: 0 auto;
}
</style>
<style scoped>
.bread-nav {
  padding: 50px 0 25px;
}
.link {
  display: inline-block;
  color: #4b4b4b;
  font-size: 14px;
  width: 80px;
  vertical-align: middle;
}
.arrow {
  color: #939393;
  font-size: 14px;
}
.post_title {
  color: #4b4b4b;
  font-size: 14px;
  display: inline-block;
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
}
.newsdetail-contain {
  overflow: hidden;
}
.article {
  width: 780px;
  float: left;
}
.article .title {
  color: #000000;
  font-size: 30px;
}
.data-arr {
  padding: 10px 0 15px;
  font-size: 14px;
  color: #939393;
}
.news-ico1 {
  width: 14px;
  height: 14px;
}
.news-ico2 {
  width: 13px;
  height: 15px;
}
.creat-time {
  display: inline-block;
  vertical-align: middle;
}
.address-str {
  display: inline-block;
  vertical-align: middle;
}
.line {
  width: 100%;
  height: 1px;
  margin: 0 auto;
  background: #d5d5d5;
}
.des-content {
  width: 780px;
  padding: 0 25px 50px;
  margin: 0 auto;
}
.bottom-line {
  width: 680px;
  height: 2px;
  border-bottom: 1px dotted #d5d5d5;
}
.bottom-word {
  text-align: center;
  color: #b1b1b1;
  font-size: 12px;
  margin-top: 5px;
  padding-bottom: 165px;
}
/* 热销产品 */
.recoment {
  width: 280px;
  float: right;
  overflow: hidden;
  border: 1px solid #e3e3e3;
}
.re-head {
  color: #131313;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  height: 35px;
  line-height: 35px;
  margin-bottom: 20px;
  border-bottom: 1px solid #e3e3e3;
}
.re-itembox {
  display: block;
  width: 217px;
  margin: 10px auto;
  opacity: 1;
}
.imgbox {
  width: 217px;
  height: 217px;
  overflow: hidden;
  border: 1px solid #ebcdcd;
  padding: 5px;
}
.imgbox img {
  width: 100%;
  height: 100%;
  transition: all 0.2s;
}
.imgbox:hover img {
  transform: scale(1.2);
}
.re-para {
  padding: 3px 8px;
  font-family: "宋体";
}
.re-title {
  color: #646464;
  font-size: 14px;
}
.re-price {
  color: #fc7373;
  font-size: 14px;
  text-align: center;
}
</style>
