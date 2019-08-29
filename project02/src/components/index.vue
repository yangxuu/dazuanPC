<template>
  <div>
    <!-- 轮播图 -->
    <div class="banner">
      <!-- 默认轮播 -->
      <el-carousel
        v-show="obj.banner.length==0?true:false"
        :interval="5000"
        height="500px"
        arrow="always"
        id="self"
      >
        <el-carousel-item class="ban-box">
          <img src="http://files.cailiao.com/vue/lianlv/pc_2/images/banner1.jpg" alt />
        </el-carousel-item>
        <el-carousel-item class="ban-box">
          <img src="http://files.cailiao.com/vue/lianlv/pc_2/images/banner2.jpg" alt />
        </el-carousel-item>
      </el-carousel>
      <!-- 用户上传的轮播 -->
      <el-carousel
        v-show="obj.banner.length==0?false:true"
        :interval="5000"
        height="500px"
        arrow="always"
      >
        <el-carousel-item v-for="(item,key) in obj.banner" :key="key">
          <a class="ban-box" :href="item.url" rel="external nofollow">
            <img :src="item.url" alt />
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 公司介绍 -->
    <div class="company-box">
      <div class="company">
        <img class="singal1" src="http://files.cailiao.com/vue/lianlv/pc_2/images/singal1.png" alt />
        <img class="singal2" src="http://files.cailiao.com/vue/lianlv/pc_2/images/singal2.png" alt />
        <div class="title">关于我们</div>
        <div id="content" ref="text" v-html="obj.shop.basic_info"></div>
      </div>
    </div>
    <!-- 新闻资讯  v-show="news.news.list.length==0?false:true"-->
    <div class="news-box">
      <div class="safe auto news">
        <div class="title">资讯中心</div>
        <div class="news-container">
          <router-link :to="{path:'/newsdetail',query:{id:addp1.id}}" class="news-col-1">
            <img class="bg-img" :src="addp1.thumbnail" alt />
            <div class="col-1-title">
              <div class="left">{{addp1.post_title}}</div>
              <div class="right"></div>
            </div>
          </router-link>
          <!-- 资讯2 -->
          <div class="news-col-2">
            <router-link :to="{path:'/newsdetail',query:{id:addp2.id}}" class="col-2-row">
              <div class="newstitle">{{addp2.post_title}}</div>
              <div class="newsabs">{{addp2.post_excerpt | ellipsis}}</div>
              <div class="newsdate">
                <div class="left">
                  <div class="day">{{addp2.create_time.split(".")[2]}}</div>
                  <div class="line"></div>
                  <div
                    class="month"
                  >{{addp2.create_time.split(".")[0]}}.{{addp2.create_time.split(".")[1]}}</div>
                </div>
                <div class="right"></div>
              </div>
            </router-link>
            <router-link :to="{path:'/newsdetail',query:{id:addp3.id}}" class="col-2-row">
              <div class="newstitle">{{addp3.post_title}}</div>
              <div class="newsabs">{{addp3.post_excerpt | ellipsis}}</div>
              <div class="newsdate">
                <div class="left">
                  <div class="day">{{addp3.create_time.split(".")[2]}}</div>
                  <div class="line"></div>
                  <div
                    class="month"
                  >{{addp3.create_time.split(".")[0]}}.{{addp3.create_time.split(".")[1]}}</div>
                </div>
                <div class="right"></div>
              </div>
            </router-link>
          </div>
          <!-- 资讯3 -->
          <div class="news-col-3">
            <router-link :to="{path:'/newsdetail',query:{id:addp4.id}}" class="col-3-row">
              <div class="left">
                <div class="day m-t-20">{{addp4.create_time.split(".")[2]}}</div>
                <div class="line"></div>
                <div
                  class="month"
                >{{addp4.create_time.split(".")[0]}}.{{addp4.create_time.split(".")[1]}}</div>
              </div>
              <div class="right">
                <div class="newsname">{{addp4.post_title}}</div>
                <div class="arrow3"></div>
              </div>
            </router-link>
            <router-link :to="{path:'/newsdetail',query:{id:addp5.id}}" class="col-3-row">
              <div class="left">
                <div class="day m-t-20">{{addp5.create_time.split(".")[2]}}</div>
                <div class="line"></div>
                <div
                  class="month"
                >{{addp5.create_time.split(".")[0]}}.{{addp5.create_time.split(".")[1]}}</div>
              </div>
              <div class="right">
                <div class="newsname">{{addp5.post_title}}</div>
                <div class="arrow3"></div>
              </div>
            </router-link>
            <router-link :to="{path:'/newsdetail',query:{id:addp6.id}}" class="col-3-row">
              <div class="left">
                <div class="day m-t-20">{{addp6.create_time.split(".")[2]}}</div>
                <div class="line"></div>
                <div
                  class="month"
                >{{addp6.create_time.split(".")[0]}}.{{addp6.create_time.split(".")[1]}}</div>
              </div>
              <div class="right">
                <div class="newsname">{{addp6.post_title}}</div>
                <div class="arrow3"></div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- 热销产品 -->
    <div class="bg-f1">
      <div class="safe auto hot-floor">热销产品</div>
      <div class="hot-box safe auto">
        <router-link
          :to="{path:'/detail',query:{id:item.id}}"
          class="hot-item"
          v-for="(item,index) in info.list"
          :key="index"
        >
          <div class="goods-img">
            <img :src="item.img" alt />
          </div>
          <div class="goods-name">{{item.title}}</div>
        </router-link>
      </div>
      <div class="safe auto">
        <router-link class="tomore" to="/product">查看更多</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "index",
  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 45) {
        return value.slice(0, 45) + "...";
      }
      return value;
    }
  },
  data() {
    return {
      //热销
      info: {
        list: []
      },
      // 店铺
      obj: {
        shop: {},
        banner: []
      },
      // 新闻
      news: {
        news: {
          limit: "",
          list: [],
          page: "",
          total: ""
        }
      },
      // news1
      addp1: {
        id: "",
        post_title: "",
        thumbnail: ""
      },
      // news2
      addp2: {
        post_excerpt: "",
        id: "",
        create_time: "",
        post_title: ""
      },
      // news3
      addp3: {
        post_excerpt: "",
        id: "",
        create_time: "",
        post_title: ""
      },
      // news4
      addp4: {
        id: "",
        create_time: "",
        post_title: ""
      },
      // news5
      addp5: {
        id: "",
        create_time: "",
        post_title: ""
      },
      // news6
      addp6: {
        id: "",
        create_time: "",
        post_title: ""
      }
    };
  },
  created() {
    let _this = this;
    // 店铺信息
    _this.api("index/index", { shop_id: window._global.shop_id }, resp => {
      Vue.set(this.obj, "shop", resp.data.shop);
      Vue.set(this.obj, "banner", resp.data.banner);
    });
    // 热销商品
    _this.api(
      "index/hot_list",
      { shop_id: window._global.shop_id, limit: 8 },
      resp => {
        _this.render(resp.data);
      }
    );
    // 资讯
    _this.http("news/index", { user_id: window._global.cailiao_id }, resp => {
      Vue.set(this.news, "news", resp);
      // addp1
      Vue.set(this.addp1, "thumbnail", resp.list[0].thumbnail);
      Vue.set(this.addp1, "post_title", resp.list[0].post_title);
      Vue.set(this.addp1, "id", resp.list[0].id);
      // addp2
      Vue.set(this.addp2, "post_excerpt", resp.list[1].post_excerpt);
      Vue.set(this.addp2, "create_time", resp.list[1].create_time);
      Vue.set(this.addp2, "post_title", resp.list[1].post_title);
      Vue.set(this.addp2, "id", resp.list[1].id);
      // addp3
      Vue.set(this.addp3, "post_excerpt", resp.list[2].post_excerpt);
      Vue.set(this.addp3, "create_time", resp.list[2].create_time);
      Vue.set(this.addp3, "post_title", resp.list[2].post_title);
      Vue.set(this.addp3, "id", resp.list[2].id);
      // addp4
      Vue.set(this.addp4, "create_time", resp.list[3].create_time);
      Vue.set(this.addp4, "post_title", resp.list[3].post_title);
      Vue.set(this.addp4, "id", resp.list[3].id);
      // addp5
      Vue.set(this.addp5, "create_time", resp.list[4].create_time);
      Vue.set(this.addp5, "post_title", resp.list[4].post_title);
      Vue.set(this.addp5, "id", resp.list[4].id);
      // addp6
      Vue.set(this.addp6, "create_time", resp.list[5].create_time);
      Vue.set(this.addp6, "post_title", resp.list[5].post_title);
      Vue.set(this.addp6, "id", resp.list[5].id);
    });
  }
};
</script>
<style scoped>
/* 轮播 */
.banner {
  width: 100%;
  height: 500px;
  overflow: hidden;
}
.ban-box {
  display: block;
  width: 100%;
  height: 500px;
}
.ban-box img {
  width: 100%;
  height: 100%;
}
.el-carousel__item a:hover {
  opacity: 1;
}
/* 公司介绍 */
.company-box {
  height: 232px;
  position: relative;
}
.singal1 {
  position: absolute;
  left: 221px;
  top: 100px;
  width: 41px;
  height: 30px;
}
.singal2 {
  position: absolute;
  right: 234px;
  bottom: 20px;
  width: 41px;
  height: 30px;
}
.company {
  width: 1200px;
  height: 221px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 8px -3px rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 50%;
  margin-left: -600px;
  top: -58px;
  z-index: 500;
  overflow: hidden;
}
.company .title {
  color: #000;
  font-size: 30px;
  margin-top: 20px;
  height: 80px;
  text-align: center;
  background-image: url(http://files.cailiao.com/vue/lianlv/pc_2/images/aboutus.png);
  background-repeat: no-repeat;
  background-position: 55% 50%;
  background-size: 189px 55px;
}
#content {
  width: 654px;
  height: 100px;
  /* height: 73px; */
  margin: 0 auto;
  overflow: hidden;
  font-weight: normal !important;
  font-size: 18px !important;
  color: #7b7b7b !important;
}
#content >>> span {
  font-size: 18px !important;
  color: #7b7b7b !important;
}
#content >>> h1 {
  font-weight: normal !important;
  font-size: 18px !important;
  color: #7b7b7b !important;
}
/* 新闻资讯 */
.news-box {
  width: 100%;
  height: 577px;
  background: #ca5a5a;
}
.news .title {
  height: 135px;
  line-height: 135px;
  font-size: 28px;
  color: #fff;
  text-align: center;
  background-image: url(http://files.cailiao.com/vue/lianlv/pc_2/images/news.png);
  background-repeat: no-repeat;
  background-position: 53% 70%;
  background-size: 152px 55px;
}
.news-container {
  overflow: hidden;
  padding-top: 8px;
}
.news-col-1 {
  float: left;
  display: block;
  width: 362px;
  height: 388px;
  color: #000;
  font-size: 16px;
  position: relative;
  opacity: 1;
  background: #fff;
  transition: all 0.3s ease-in;
}
.news-col-1:hover {
  transform: translate(0, -5px);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
}

.col-2-row:hover {
  transform: translate(0, -5px);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
}
.col-3-row:hover {
  transform: translate(0, -5px);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
}
.news-col-1 .bg-img {
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.col-1-title {
  position: absolute;
  width: 341px;
  height: 76px;
  left: 11px;
  bottom: 7px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 11px;
}
.col-1-title .left {
  width: 272px;
  height: 44px;
  overflow: hidden;
}
.col-1-title .right {
  width: 33px;
  height: 28px;
  background-image: url(http://files.cailiao.com/vue/lianlv/pc_2/images/arrow1.png);
  background-size: 100% 100%;
}
.col-1-title:hover .right {
  background-image: url(http://files.cailiao.com/vue/lianlv/pc_2/images/arrow-h1.png);
}
.news-col-2 {
  float: left;
  width: 408px;
  height: 388px;
  margin-left: 10px;
}
.news-col-2 .col-2-row:nth-child(2) {
  margin-top: 12px;
}
.col-2-row {
  display: block;
  opacity: 1;
  width: 100%;
  height: 188px;
  padding: 30px 10px 10px;
  background: #fff;
  transition: all 0.3s ease-in;
}
.newstitle {
  color: #000;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.newsabs {
  color: #7b7b7b;
  font-size: 16px;
  width: 100%;
  height: 70px;
  overflow: hidden;
  padding: 20px 0 5px;
  border-bottom: 2px solid #ededed;
}
.newsdate {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left .day {
  color: #000;
  font-size: 24px;
}
.left .line {
  width: 20px;
  height: 2px;
  background: #bcbcbc;
}
.left .month {
  color: #7b7b7b;
  font-size: 16px;
}
.newsdate .right {
  width: 26px;
  height: 22px;
  background-image: url(http://files.cailiao.com/vue/lianlv/pc_2/images/arrow2.png);
  background-size: 100% 100%;
}
.newsdate:hover .right {
  background-image: url(http://files.cailiao.com/vue/lianlv/pc_2/images/arrow-h2.png);
}
.news-col-3 {
  float: left;
  margin-left: 10px;
  width: 408px;
  height: 388px;
}
.col-3-row {
  display: block;
  opacity: 1;
  width: 100%;
  height: 122px;
  padding: 9px 10px;
  background: #fff;
  margin-top: 11px;
  transition: all 0.3s ease-in;
}
.news-col-3 .col-3-row:nth-child(1) {
  margin-top: 0;
}
.col-3-row .left {
  float: left;
  width: 84px;
  height: 104px;
  border-right: 1px solid #ededed;
}
.col-3-row .right {
  float: right;
  width: 300px;
  height: 100%;
  padding-left: 10px;
}
.right .newsname {
  height: 44px;
  color: #000;
  font-size: 16px;
  overflow: hidden;
}
.right .arrow3 {
  width: 22px;
  height: 18px;
  margin-top: 15px;
  background-image: url(http://files.cailiao.com/vue/lianlv/pc_2/images/arrow3.png);
  background-size: 100% 100%;
}
.right:hover .arrow3 {
  background-image: url(http://files.cailiao.com/vue/lianlv/pc_2/images/arrow-h3.png);
}
/* 热销产品 */
.bg-f1 {
  background: #f1f1f1;
  padding-bottom: 104px;
}
.hot-floor {
  height: 150px;
  line-height: 150px;
  text-align: center;
  font-size: 28px;
  color: #656565;
  overflow: hidden;
  background-image: url(http://files.cailiao.com/vue/lianlv/pc_2/images/hot.png);
  background-repeat: no-repeat;
  background-position: 56% 70%;
  background-size: 210px 55px;
}
.hot-box {
  overflow: hidden;
}
.hot-item {
  display: block;
  opacity: 1;
  float: left;
  width: 274px;
  height: 332px;
  padding: 5px;
  overflow: hidden;
  margin: 12px 13px;
  background: rgba(255, 255, 255, 1);
  transition: all 0.2s linear;
}
.hot-item:hover {
  transform: translate(0, -6px);
  box-shadow: 6px 6px 4px 0px rgba(214, 214, 214, 0.5);
}
.goods-img {
  width: 100%;
  height: 292px;
  overflow: hidden;
}
.goods-img img {
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in;
}
.goods-img:hover img {
  transform: scale(1.2);
}
.goods-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 5px 12px 0;
  font-size: 16px;
  color: #686868;
}
.tomore {
  display: block;
  width: 113px;
  height: 40px;
  border-radius: 2px;
  color: #df0808;
  text-align: center;
  line-height: 40px;
  opacity: 1;
  font-size: 16px;
  margin: 60px auto 0;
  border: 1px solid rgba(223, 8, 8, 1);
}
.tomore:hover {
  background: #df0808;
  color: #fff;
}
</style>
