<template>
  <div>
    <div class="head safe auto floor1">企业信息</div>
    <div class="shop safe auto">
      <div class="banner-shop">
        <!-- 默认相册 -->
        <el-carousel
          id="self"
          :interval="5000"
          height="337px"
          v-show="info.photo.length==0?true:false"
        >
          <el-carousel-item class="ban-box">
            <img src="http://files.cailiao.com/vue/lianlv/pc_2/images/comany-pic.png" alt />
          </el-carousel-item>
        </el-carousel>

        <!-- 用户上传的相册 -->
        <el-carousel :interval="5000" height="337px" v-show="info.photo.length==0?false:true">
          <el-carousel-item class="ban-box" v-for="(item,key) in info.photo" :key="key">
            <img :src="item.url" alt />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="info-shop">
        <div class="shopname">{{info.shop.name}}</div>
        <div class="content" v-html="info.shop.basic_info"></div>
        <div class="telephone">联系电话：{{info.shop.tele}}</div>
      </div>
    </div>
    <!-- 详细信息 -->
    <div class="head safe auto floor2">详细信息</div>
    <div class="table safe auto">
      <div class="table-row">
        <div class="table-cell">企业名称</div>
        <div class="table-value">{{info.shop.name}}</div>
      </div>
      <div class="table-row">
        <div class="table-cell">企业类型</div>
        <div class="table-value">{{info.shop.company_type}}</div>
      </div>
      <div class="table-row">
        <div class="table-cell">经营范围</div>
        <div class="table-value">{{info.shop.business_scope}}</div>
      </div>
      <div class="table-row">
        <div class="table-cell">公司法人</div>
        <div class="table-value">{{info.shop.legal_person}}</div>
      </div>
      <div class="table-row">
        <div class="table-cell">联系方式</div>
        <div class="table-value">{{info.shop.tele}}</div>
      </div>
      <div class="table-row">
        <div class="table-cell">注册地址</div>
        <div class="table-value">{{info.shop.address}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import _ from "underscore";
import "../vendor/underscore.mixin";
export default {
  name: "introduce",
  data() {
    return {
      info: {
        photo: [],
        shop: {}
      },
    };
  },
  created() {
    let _this = this;
    _this.api("shop/info", { shop_id: window._global.shop_id }, resp => {
      _this.render(resp.data);
    });
  }
};
</script>
<style scoped>
#self .el-carousel-item img {
  width: 529px;
  height: 337px;
}
/* 头部 */
.head {
  color: #656565;
  font-size: 28px;
  text-align: center;
  height: 160px;
  padding-top: 50px;
}
.floor1 {
  background-image: url(http://files.cailiao.com/vue/lianlv/pc_2/images/yx4.png);
  background-repeat: no-repeat;
  background-position: 54% 60%;
  background-size: 165px 55px;
}
.floor2 {
  background-image: url(http://files.cailiao.com/vue/lianlv/pc_2/images/yx5.png);
  background-repeat: no-repeat;
  background-position: 57% 60%;
  background-size: 229px 55px;
}
.floor3 {
  background-image: url(http://files.cailiao.com/vue/lianlv/pc_2/images/yx6.png);
  background-repeat: no-repeat;
  background-position: 55% 58%;
  background-size: 182px 55px;
}
/* 企业1信息 */
.shop {
  height: 337px;
  overflow: hidden;
}
/* 左侧轮播 */
.banner-shop {
  width: 574px;
  height: 100%;
  float: left;
  overflow: hidden;
  background: #eeeeee;
}
.ban-box {
  display: block;
  width: 100%;
  height: 337px;
}
.ban-box img {
  width: 100%;
  height: 100%;
}
.el-carousel--horizontal {
  overflow: hidden;
}
/* 右侧信息 */
.info-shop {
  width: 626px;
  height: 100%;
  float: left;
  padding-top: 25px;
  background: #eeeeee;
}
.shopname {
  padding: 0 50px;
  font-size: 22px;
  color: #000;
}
.content {
  padding: 0 50px;
  color: #616161;
  font-size: 16px;
  margin-top: 25px;
  height: 140px;
  overflow: hidden;
}
.content >>> span {
  font-size: 16px !important;
  color: #616161 !important;
}
.content >>> h1 {
  font-weight: normal !important;
  font-size: 16px !important;
  color: #616161 !important;
}
.telephone {
  width: 100%;
  height: 60px;
  line-height: 60px;
  margin-top: 54px;
  background-color: #b74141;
  color: #fff;
  font-size: 18px;
  padding-left: 260px;
  background-image: url(http://files.cailiao.com/vue/lianlv/pc_2/images/yx7.png);
  background-repeat: no-repeat;
  background-position: 35% 50%;
  background-size: 44px 37px;
}
/* 详细信息 */
.table {
  overflow: hidden;
}
.table-row {
  float: left;
  overflow: hidden;
}
.table-cell {
  float: left;
  width: 130px;
  height: 60px;
  font-size: 16px;
  color: #aaaaaa;
  line-height: 60px;
  text-align: center;
  background: rgba(250, 250, 250, 1);
  border: 1px solid rgba(233, 235, 236, 1);
}
.table-value {
  float: left;
  color: #5d5d5d;
  font-size: 16px;
  padding: 0 10px;
  width: 268px;
  height: 60px;
  line-height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 1px solid rgba(233, 235, 236, 1);
}

</style>
