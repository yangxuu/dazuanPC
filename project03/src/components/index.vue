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
    <!-- 热卖商品 -->
    <div class="hotsale-box">
      <div class="hotsale safe">
        <div class="overflow">
          <div class="hot" ref="margin">
            <router-link
              :to="{path:'/detail',query:{id:item.id}}"
              v-for="(item,index) in info.list"
              :key="index"
              class="block item"
            >
              <div class="imgbox">
                <img :src="item.img" alt />
              </div>
              <div class="pro-title">{{item.title}}</div>
            </router-link>
          </div>
        </div>
        <div class="m-t-20">
          <button class="btn btn-left" @click="prev"></button>
          <button class="btn btn-right m-l-10" @click="next"></button>
        </div>
      </div>
    </div>
    <!-- 热点资讯 -->
    <div class="news-box" v-show="news.news.list.length==0?false:true">
      <div class="news-head">热点资讯</div>
      <div class="news-eng">
        <span class="news-line">News</span>
      </div>
      <div class="safe auto news">
        <div class="news-left">
          <router-link class="news-imgbox" :to="{path:'/newsdetail',query:{id:addp1.id}}">
            <img :src="addp1.thumbnail" alt />
          </router-link>
        </div>
        <div class="news-right">
          <router-link class="news-row" :to="{path:'/newsdetail',query:{id:addp1.id}}">
            <div class="create-time-r">{{addp1.create_time}}</div>
            <div class="post-title-r">{{addp1.post_title}}</div>
            <div class="post-excerpt-r">{{addp1.post_excerpt | ellipsis}}</div>
            <div class="tomore-r">查看更多</div>
          </router-link>
          <router-link class="news-row m-t-10" :to="{path:'/newsdetail',query:{id:addp2.id}}">
            <div class="create-time-r">{{addp2.create_time}}</div>
            <div class="post-title-r">{{addp2.post_title}}</div>
            <div class="post-excerpt-r">{{addp2.post_excerpt | ellipsis}}</div>
            <div class="tomore-r">查看更多</div>
          </router-link>
        </div>
      </div>
    </div>
    <!-- 公司简介 -->
    <div class="company">
      <div class="shop-info safe auto">
        <div class="infomation">
          <div class="intro-title"></div>
          <div class="intro-content" v-html="obj.shop.basic_info"></div>
          <div class="more-box">
            <router-link class="more-info" to="/introduce">更多信息</router-link>
          </div>
        </div>
        <div class="telephone">联系热线：{{obj.shop.tele}}</div>
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
      if (value.length > 66) {
        return value.slice(0, 66) + "...";
      }
      return value;
    }
  },
  data() {
    return {
      // 边界
      left: 0,
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
        post_excerpt: "",
        create_time: "",
        thumbnail: ""
      },
      // news2
      addp2: {
        post_excerpt: "",
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
      Vue.set(this.addp1, "post_excerpt", resp.list[0].post_excerpt);
      Vue.set(this.addp1, "create_time", resp.list[0].create_time);
      Vue.set(this.addp1, "id", resp.list[0].id);
      // addp2
      Vue.set(this.addp2, "post_excerpt", resp.list[1].post_excerpt);
      Vue.set(this.addp2, "create_time", resp.list[1].create_time);
      Vue.set(this.addp2, "post_title", resp.list[1].post_title);
      Vue.set(this.addp2, "id", resp.list[1].id);
    });
  },
  methods: {
    prev() {
      this.left -= 310;
      if (this.left < 0) {
        this.left = 0;
      }
      this.$refs.margin.style.marginLeft = "-" + this.left + "px";
    },
    next() {
      this.left += 310;
      if (this.left > 1820) {
        this.left = 0;
      }
      this.$refs.margin.style.marginLeft = "-" + this.left + "px";
    }
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
  width: 1920px;
  height: 500px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.el-carousel__item a:hover {
  opacity: 1;
}
/* 热卖产品 */
.hotsale-box {
  overflow: hidden;
}
.hotsale {
  margin: 35px auto 15px;
}
.overflow {
  width: 100%;
  overflow: hidden;
}
.hot {
  width: 2440px;
  overflow: hidden;
  transition: all 0.3s linear;
}
.block {
  display: block;
}
.item {
  float: left;
  width: 270px;
  opacity: 1;
  margin-left: 40px;
}
.hot .item:nth-child(1) {
  margin-left: 0;
}
.item .imgbox {
  width: 270px;
  height: 220px;
  overflow: hidden;
}
.imgbox img {
  width: 100%;
  height: 100%;
  transition: all 0.2s linear;
}
.item:hover img {
  transform: scale(1.2);
}
.pro-title {
  width: 100%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background-color: #efefef;
  color: #858585;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 20px;
}
.btn {
  width: 37px;
  height: 37px;
  border-radius: 2px;
  border: 2px solid rgba(218, 218, 218, 1);
  color: #dadada;
  outline: 0;
  font-size: 30px;
  cursor: pointer;
  background-color: #fff;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 14px 17px;
}
.btn-left {
  background-image: url(../assets/images/arrowleft.png);
}
.btn-right {
  background-image: url(../assets/images/arrowright.png);
}
/* 新闻资讯 */
.news-box {
  width: 100%;
  margin-top: 15px;
}
.news-head {
  text-align: center;
  font-size: 26px;
  color: #575757;
}
.news-eng {
  text-align: center;
  font-size: 16px;
  color: #b1b1b1;
  margin-top: 5px;
  padding-bottom: 20px;
}
.news-line {
  border-top: 2px solid #b1b1b1;
}
.news {
  overflow: hidden;
}
.news-left {
  width: 557px;
  float: left;
}
.news-right {
  float: right;
  width: 622px;
}
.news-imgbox {
  display: block;
  width: 557px;
  height: 357px;
  overflow: hidden;
  opacity: 1;
}
.news-imgbox img {
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in;
}
.news-left:hover img {
  transform: scale(1.2);
}
.news-row:hover .create-time-r {
  color: #d4d4d4;
}
.news-row:hover .post-title-r {
  color: #fff;
}
.news-row:hover .post-excerpt-r {
  color: #fff;
}
.news-row:hover .tomore-r {
  color: #fff;
  background: #616161;
  border: 1px solid #ffffff;
}
.news-row {
  display: block;
  width: 100%;
  padding: 22px 70px;
  opacity: 1;
  background: #fff;
  border: 1px solid #e5e5e5;
}
.news-row:hover {
  background: #616161;
}
.create-time-r {
  font-size: 14px;
  color: #afafaf;
}
.post-title-r {
  font-size: 20px;
  color: #3e3e3e;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.post-excerpt-r {
  font-size: 14px;
  color: #a3a3a3;
}
.tomore-r {
  display: block;
  width: 85px;
  height: 30px;
  text-align: center;
  line-height: 28px;
  font-size: 14px;
  color: #3e3e3e;
  border-radius: 18px;
  margin-top: 10px;
  border: 1px solid rgba(217, 217, 217, 1);
}
/* 公司简介 */
.company {
  width: 100%;
  height: 500px;
  margin-top: 55px;
  margin-bottom: 200px;
  display: flex;
  justify-content: center;
  background-color: #3a3a3a;
  background-image: url(../assets/images/img-fix.png);
  background-repeat: no-repeat;
  background-size: 50% 500px;
  background-position: 0 100%;
}
.shop-info {
  height: 500px;
  position: relative;
}
.infomation {
  width: 550px;
  height: 375px;
  position: absolute;
  right: 20px;
  top: 40px;
}
.intro-title {
  width: 530px;
  height: 100px;
  background-image: url(../assets/images/intro.png);
  background-size: 100% 100%;
}
.intro-content {
  width: 530px;
  height: 165px;
  margin-top: 50px;
  overflow: hidden;
  color: #e1e1e1 !important;
  font-size: 16px !important;
}
.intro-content>>>span{
  color: #e1e1e1 !important;
  font-size: 16px !important;
}
.more-box{
  position: relative;
  width: 100%;
  height: 30px;
  margin-top: 20px;
}
.more-info {
  position: absolute;
  right: 10px;
  top: 0;
  display: block;
  width: 95px;
  height: 30px;
  color: #4e4e4e;
  font-size: 16px;
  text-align: center;
  line-height: 30px;
  background: rgba(245, 245, 245, 1);
  border-radius: 15px;
}
.telephone {
  width: 335px;
  height: 66px;
  line-height: 66px;
  font-size: 22px;
  color: #fff;
  padding-left: 70px;
  position: absolute;
  bottom: -20px;
  z-index: 500;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(58, 58, 58, 1);
  background-image: url(../assets/images/tele.png);
  background-repeat: no-repeat;
  background-position: 8% 50%;
  background-size: 39px 34px;
}
</style>
