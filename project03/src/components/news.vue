<template>
  <div>
    <div class="safe auto mark">
      <div class="brands">资讯动态</div>
    </div>
    <div class="safe auto infomations">
      <div class="info-item" v-for="(item,index) in info.list" :key="index">
        <router-link class="imgbox" :to="{path:'/newsdetail',query:{id:item.id}}">
          <img class="newsimg" :src="item.thumbnail" alt />
        </router-link>
        <div class="para">
          <div class="post-title">{{item.post_title}}</div>
          <div class="post-excerpt">{{item.post_excerpt | abstr}}</div>
          <div class="post-date">
            <span class="post-createtime">{{item.create_time}}</span>
            <router-link class="tomore" :to="{path:'/newsdetail',query:{id:item.id}}">more ></router-link>
          </div>
        </div>
      </div>
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
  filters: {
    abstr(value) {
      if (!value) return "";
      if (value.length > 60) {
        return value.slice(0, 60) + "...";
      }
      return value;
    }
  },
  data() {
    return {
      // 新闻列表
      info: {}
    };
  },
  created() {
    let _this = this;
    // 新闻列表
    _this.http(
      "news/index",
      { user_id: window._global.cailiao_id, limit: 9 },
      res => {
        _this.render(res);
      }
    );
  },
  methods: {
    handleSizeChange(val) {},
    handleCurrentChange(val) {
      let _this = this;
      _this.http(
        "news/index",
        {
          user_id: window._global.cailiao_id,
          limit: 9,
          pageParams: {
            page: val,
            perPage: 9
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
/* 资讯列表 */
.infomations {
  overflow: hidden;
}
.info-item {
  width: 370px;
  float: left;
  margin: 10px 15px;
}
.imgbox {
  display: block;
  width: 370px;
  height: 195px;
  overflow: hidden;
  opacity: 1;
}
.imgbox img {
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in;
}
.info-item:hover img {
  transform: scale(1.2);
}
.para {
  padding: 5px 10px;
  height: 166px;
  border: 1px solid #ededed;
}
.post-title {
  color: #323232;
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.post-excerpt {
  margin-top: 5px;
  color: #b5b5b5;
  font-size: 15px;
}
.post-date {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
.post-createtime {
  font-size: 14px;
  color: #b5b5b5;
}
.tomore {
  display: block;
  width: 74px;
  height: 24px;
  color: #fff;
  font-size: 14px;
  text-align: center;
  line-height: 24px;
  background: rgba(51, 51, 51, 1);
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
