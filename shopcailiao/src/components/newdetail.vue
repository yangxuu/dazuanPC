<template>
  <div>
    <!-- 头部1 -->
    <div class="yxhead1box">
      <div class="yxhead1">
        <router-link to="/news" class="backbox">
          <img class="img-left" src="../assets/images/yx6.png" alt />
        </router-link>
        <span>新闻资讯</span>
        <div class="imgbox"></div>
      </div>
    </div>
    <!-- 标题 -->
    <div class="yxhead2">
      <div class="yxhead2-title">资讯详情</div>
      <div class="yxhead2-para">
        <span class="yxhead2-date">{{info.create_time}}</span>
        <span class="yxhead2-author-key">来源：</span>
        <span class="yxhead2-author-val">中国材料网</span>
        <img class="img-eye" src="../assets/images/yx12.png" alt />
        <span class="yxhead2-visit">{{info.post_hits}}</span>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content" v-html="info.post_content"></div>
    <copyright />
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
      info: {}
    };
  },
  created() {
    let _this = this;
    _this.api(
      "news/detail",
      { user_id: window._global.user_id, news_id: _this.$route.query.id },
      res => {
        _this.render(res.data);
      }
    );
  },
  watch: {
    //监听相同路由下参数变化的时候，从而实现异步刷新
    $route(to, from) {
      let _this = this;
      _this.api(
        "news/detail",
        {
          user_id: window._global.user_id,
          news_id: _this.$route.query.id
        },
        resp => {
          _this.render(resp.data);
        }
      );
    }
  },
  methods: {
    // history() {
    //   this.$router.go(-1);
    // }
  }
};
</script>
<style>
.content p {
  width: 100%;
}
.content p img {
  width: 80%;
  margin: 0 auto;
}
</style>
<style scoped>
.yxhead1box{
  width: 100%;
  height: 50px;
}
/* 头部1 */
.yxhead1 {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 50px;
  padding: 0 11px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  color: #1a1a1a;
  background: #ededed;
}
.backbox {
  display: block;
  width: 10.5px;
  height: 13.5px;
}
.img-left {
  width: 10.5px;
  height: 13.5px;
}
.yxhead1 .imgbox {
  width: 20.5px;
  height: 50px;
}
/* 标题 */
.yxhead2 {
  overflow: hidden;
}
.yxhead2 .yxhead2-title {
  font-size: 14px;
  font-weight: bold;
  color: #000000;
  text-align: center;
  margin-top: 33px;
}
.yxhead2-para {
  color: #666666;
  font-size: 10px;
  margin-top: 7.5px;
  text-align: center;
}
.yxhead2-author-key {
  margin-left: 10px;
}
.img-eye {
  width: 11px;
  height: 8px;
  margin-left: 10px;
}
.content {
  padding: 25px 10px 10px;
  color: #3f3f3f;
  font-size: 12px;
  text-indent: 2em;
  overflow: hidden;
}
</style>



