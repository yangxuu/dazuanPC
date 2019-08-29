<template>
  <div>
    <div class="head safe auto floor1">
      <div class="chinese">企业介绍</div>
      <div class="english">
        <span class="word">Profile</span>
      </div>
    </div>
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

        <div class="telephone">
          <img class="link-tele" src="../assets/images/link.png" alt />
          <span>联系电话：{{info.shop.tele}}</span>
        </div>
      </div>
    </div>
    <!-- 企业信息 -->
    <div class="head safe auto floor1">
      <div class="chinese">企业信息</div>
      <div class="english">
        <span class="word">Information</span>
      </div>
    </div>
    <div class="table safe auto">
      <!-- 左 -->
      <div class="table-left">
        <div class="table-row">
          <span class="key">企业名称：</span>
          <span class="value">{{info.shop.name}}</span>
        </div>
        <div class="table-row">
          <span class="key">企业地址：</span>
          <span class="value">{{info.shop.address}}</span>
        </div>
        <div class="table-row">
          <span class="key">所属行业：</span>
          <span class="value">{{info.shop.category_str}}</span>
        </div>
        <div class="table-row">
          <span class="key">企业类型：</span>
          <span class="value">{{info.shop.company_type}}</span>
        </div>
        <div class="table-row">
          <span class="key">注册地址：</span>
          <span class="value">{{info.shop.address}}</span>
        </div>
      </div>
      <!--右  -->
      <div class="table-right">
        <div class="table-row">
          <span class="key">公司法人：</span>
          <span class="value">{{info.shop.legal_person}}</span>
        </div>
        <div class="table-row">
          <span class="key">联系人：</span>
          <span class="value">{{info.shop.link_man}}</span>
        </div>
        <div class="table-row">
          <span class="key">联系电话：</span>
          <span class="value">{{info.shop.phone}}</span>
        </div>
        <div class="table-row">
          <span class="key">手机号码：</span>
          <span class="value">{{info.shop.tele}}</span>
        </div>

        <div class="table-row">
          <span class="key">经营范围：</span>
          <span class="value">{{info.shop.business_scope}}</span>
        </div>
      </div>
    </div>
    <!-- 企业住址 -->
    <div class="m-t-50 safe auto mapbox">
    <div class="chinese" style="color:#F3F3F3;margin-top:18px;">企业地址</div>
      <div class="english">
        <span class="word">Address</span>
      </div>
      <div id="map"></div>
    </div>
  </div>
</template>
<script>
// import BMap from "BMap";
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
      map: {}
    };
  },
  created() {
    let _this = this;
    _this.api("shop/info", { shop_id: window._global.shop_id }, resp => {
      _this.render(resp.data);
    });
  },
  mounted() {
    // 百度地图
    let _this = this;
    _this.ready();
  },
  methods: {
    ready() {
      let _this = this;
      _this.api(
        "shop_item/get_map",
        { shop_id: window._global.shop_id },
        resp => {
          let map = new window.BMap.Map("map"); // 创建地图实例
          let point = new window.BMap.Point(resp.result.lng, resp.result.lat); // 创建点坐标
          map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
          let marker = new window.BMap.Marker(point); // 创建标注
          // map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
          map.addOverlay(marker); // 将标注添加到地图
        }
      );
    }
  }
};
</script>
<style scoped>
/* 企业介绍 */
.head {
  margin-top: 40px;
}
.chinese {
  text-align: center;
  font-size: 26px;
  color: #575757;
}
.english {
  text-align: center;
  font-size: 16px;
  color: #b1b1b1;
  margin-top: 5px;
}
.word {
  border-top: 2px solid #b1b1b1;
}
/* 企业1信息 */
.shop {
  height: 337px;
  margin-top: 30px;
  overflow: hidden;
}
/* 左侧轮播 */
.banner-shop {
  width: 529px;
  height: 100%;
  float: left;
  overflow: hidden;
  border: 5px solid #b3b3b3;
}
.ban-box {
  display: block;
  width: 529px;
  height: 337px;
}
.ban-box img {
  width: 529px;
  height: 337px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.el-carousel--horizontal {
  overflow: hidden;
}
/* 右侧信息 */
.info-shop {
  width: 671px;
  height: 337px;
  float: right;
  padding-left: 23px;
  position: relative;
}
.shopname {
  font-size: 22px;
  color: #262626;
  font-family: "宋体";
  padding-bottom: 12px;
  border-bottom: 1px solid #dbdbdb;
}
.content {
  width: 621px;
  height: 92px;
  overflow: hidden;
  font-size: 14px;
  color: #616161;
  margin-top: 15px;
}
.content >>> span {
  font-size: 14px !important;
  color: #616161 !important;
}
.content >>> h1 {
  font-weight: normal !important;
  font-size: 14px !important;
  color: #616161 !important;
}
.telephone {
  width: 540px;
  height: 153px;
  position: absolute;
  left: 120px;
  bottom: 0;
  font-size: 32px;
  color: #575757;
  padding-left: 24px;
  line-height: 153px;
  font-family: "宋体";
  background-color: #f0f0f0;
  background-image: url(../assets/images/man.png);
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: 97px 129px;
}
.link-tele {
  width: 61px;
  height: 61px;
}
/* 企业信息 */
.table {
  margin-top: 25px;
  height: 291px;
  background-image: url(../assets/images/bg.png);
  background-size: 100% 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
}
.table-left {
  width: 40%;
  float: left;
}
.table-right {
  width: 35%;
  float: right;
}
.table-row {
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.key {
  color: #dcdcdc;
  font-size: 16px;
}
.value {
  color: #f3f3f3;
  font-size: 16px;
}

/* 企业住址 */
.mapbox {
  height: 371px;
  background-image: url(../assets/images/mapbg.png);
  background-size: 100% 100%;
  margin-bottom: 150px;
  overflow: hidden;
}
#map {
  width: 1034px;
  height: 246px;
  margin: 15px auto;
}
</style>
