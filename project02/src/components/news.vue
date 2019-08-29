<template>
  <div>
    <div class="safe auto mark">
      <div class="brands">资讯动态</div>
      <div class="datetime">
        <img class="news-ico1" src="http://files.cailiao.com/vue/lianlv/pc_2/images/yx10.png" alt />
        <span>{{year}}年{{month+1}}月{{day}}日 {{week}}</span>
        <img class="news-ico2" src="http://files.cailiao.com/vue/lianlv/pc_2/images/yx11.png" alt />
        <span>{{obj.shop.address}}</span>
      </div>
    </div>
    <div class="safe auto infomations">
      <router-link
        class="info-item"
        v-for="(item,index) in info.list"
        :key="index"
        :to="{path:'/newsdetail',query:{id:item.id}}"
      >
        <img class="newsimg" :src="item.thumbnail" alt />
        <div class="description">
          <div class="title">{{item.post_title}}</div>
          <div class="abstr">{{item.post_excerpt | abstr}}</div>
        </div>
        <div class="side-right">
          <div class="newsdate">{{item.create_time}}</div>
          <router-link class="newsdetail" :to="{path:'/newsdetail',query:{id:item.id}}">more ></router-link>
        </div>
      </router-link>
    </div>
    <!-- 分页 -->
    <div class="bottom">
      <div class="page">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="info.page"
          :total="info.total"
          :page-size="6"
          small
          background
          layout="prev, pager, next, jumper"
          prev-text="上一页"
          next-text="下一页"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
export default {
    filters:{
    abstr(value){
      if(!value) return ""
      if(value.length>120){
        return value.slice(0,120) + "..."
      }
      return value
    }
  },
  data() {
    return {
      // 店铺信息
      obj: {
        shop: {},
        banner: []
      },
      // 新闻列表
      info: {},
      year: "",
      month: "",
      day: "",
      week: ""
    };
  },
  created() {
    let _this = this;
    // 新闻列表
    _this.http(
      "news/index",
      { user_id: window._global.cailiao_id, limit: 6 },
      res => {
        _this.render(res);
      }
    );
    // 获取当前年月日
    _this.getTime();
    // 店铺信息
    _this.api("index/index", { shop_id: window._global.shop_id }, res => {
      Vue.set(this.obj, "shop", res.data.shop);
      Vue.set(this.obj, "banner", res.data.banner);
    });
  },
  methods: {
    getTime() {
      var date = new Date();
      var year = date.getFullYear(); //获取年
      var month = date.getMonth(); //获取月
      var day = date.getDate(); //获取当日
      var weekday = date.getDay();
      var weeks = new Array(
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
      );
      var week = weeks[weekday];
      this.year = year;
      this.month = month;
      this.day = day;
      this.week = week;
    },
    handleSizeChange(val) {},
    handleCurrentChange(val) {
      let _this = this;
      _this.http(
        "news/index",
        {
          user_id: window._global.cailiao_id,
          limit: 6,
          pageParams: {
            page: val,
            perPage: 6
          }
        },
        res => {
          _this.render(res);
        }
      );
    }
  }
};
</script>
<style scoped>
/* 资讯头部 */
.mark {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  border-bottom: 1px solid #d5d5d5;
}
.brands {
  width: 80px;
  font-size: 20px;
  color: #2a2a2a;
  padding-bottom: 5px;
  border-bottom: 3px solid #7a7a7a;
}
.datetime {
  color: #939393;
  font-size: 14px;
}
.news-ico1{
  width: 14px;
  height: 14px;
}
.news-ico2{
  width: 13px;
  height: 15px;
}
/* 资讯列表 */
.info-item {
  display: block;
  opacity: 1;
  overflow: hidden;
  height: 157px;
  width: 100%;
  margin: 15px 0;
  transition: all 0.2s ease-in;
}
.info-item:hover {
  box-shadow: 3px 5px 10px #999;
}
.newsimg {
  float: left;
  display: block;
  width: 312px;
  height: 100%;
}
.description {
  float: left;
  width: 677px;
  height: 100%;
  margin-left: 25px;
}
.description .title {
  margin-top: 12px;
  color: #323232;
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.description .abstr {
  margin-top: 20px;
  color: #999999;
  font-size: 16px;
  height: 66px;
  overflow: hidden;
}
.side-right {
  float: right;
  width: 85px;
  height: 100%;
}
.side-right .newsdate {
  color: #999999;
  font-size: 16px;
  margin-top: 18px;
}
.side-right .newsdetail {
  display: block;
  background: #333333;
  width: 83px;
  height: 28px;
  text-align: center;
  line-height: 28px;
  color: #fff;
  font-size: 14px;
  margin-top: 35px;
}
/* 分页 */
.bottom {
  overflow: hidden;
  margin: 100px auto;
}
.page {
  width: 300px;
  margin: 0 auto;
}
</style>
