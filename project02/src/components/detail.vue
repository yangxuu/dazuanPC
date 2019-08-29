<template>
  <div>
    <div class="bread-nav safe auto">
      <img class="shouye-ico" src="http://files.cailiao.com/vue/lianlv/pc_2/images/yx9.png" alt />
      <router-link class="link" style="width:50px;" to="/">
        首页
        <span class="arrow">></span>
      </router-link>
      <router-link class="link" to="/product">
        产品中心
        <span class="arrow">></span>
      </router-link>
      <span class="post_title">{{info.shop_item_info.cate_name}}</span>
      <span class="arrow">></span>
      <span
        style="color:#4B4B4B;font-size:14px;  display: inline-block;vertical-align: middle;"
      >{{info.shop_item_info.title}}</span>
    </div>

    <div class="safe auto show">
      <!-- 左边放大镜 -->
      <div class="left" id="big">
        <div id="pic" @mousemove="move($event)" @mouseout="out">
          <img
            v-for="(item,index) in info.shop_item_img_list"
            v-show="index==num"
            :key="index"
            :src="item.url"
            alt
          />
        </div>
        <div class="ul">
          <button class="btn-left" @click="prev"></button>
          <ul class="ul-imgs">
            <li
              class="li"
              v-for="(item,index) in info.shop_item_img_list"
              :class="{spot:index==num}"
              @mouseenter="num=index"
              :key="index"
            >
              <img :src="item.url" alt />
            </li>
          </ul>
          <button class="btn-right" @click="next"></button>
        </div>
        <div class="glass" v-show="flag1">
          <img
            v-show="index==num"
            v-for="(item,index) in info.shop_item_img_list"
            :style="{left:l+'px',top:t+'px'}"
            :src="item.url"
            :key="index"
            alt
          />
        </div>
      </div>
      <!-- 右边商品详情 -->
      <div class="right">
        <div class="right-title">{{info.shop_item_info.title}}</div>
        <div class="right-de">
          <p class="p">
            <span class="name">价格：</span>
            <span class="price">￥{{info.shop_item_info.price}}</span>
          </p>
          <p class="p">
            <span class="name">产品数量：</span>
            <span class="same">{{info.shop_item_info.amount}}个</span>
          </p>
          <p class="p">
            <span class="name">企业：</span>
            <span class="same">{{info.shop.name}}</span>
          </p>
          <p class="p">
            <span class="name">所在区域：</span>
            <span class="same">{{info.shop.address}}</span>
          </p>
          <p class="p">
            <span class="name">联系电话：</span>
            <span class="mobile">{{info.shop.tele}}</span>
          </p>
        </div>
        <div class="button-box clearfix">
          <div @click="showAlert" class="ask-btn">询盘</div>
          <div class="call-btn">
            联系方式
            <div class="show-block">
              <p>手机：{{info.shop.tele}}</p>
              <p>电话：{{info.shop.phone}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 商品推荐 -->
    <div class="recoment-head safe auto">
      <div class="re-title">商品推荐</div>
      <div class="fleft"></div>
    </div>
    <div class="re-box safe auto">
      <router-link
        :to="{path:'/detail',query:{id:item.id}}"
        v-for="(item,index) in info.shop_reitem"
        :key="index"
        class="re-item"
      >
        <div class="img-container">
          <img :src="item.img" alt />
        </div>
        <div class="re-name">{{item.title | ellipsis}}</div>
        <div class="re-price">￥{{item.price}}</div>
      </router-link>
    </div>
    <!-- 底部详情 -->
    <div class="bottom-view safe auto">
      <div class="view-left">
        <div class="kind-head">产品分类</div>
        <ul class="cate-box">
          <li class="cate-name" v-for="(item,index) in cate.cate" :key="index">
            <router-link class="cate-link" to="/product">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
      <div class="float-right">
        <div class="view-right">
          <div class="right-header">
            <div
              class="header-left"
              :class="type1==1?'bottom-line':'default'"
              @click="showType1"
            >商品参数</div>
            <div
              class="header-right"
              :class="type2==1?'bottom-line':'default'"
              @click="showType2"
            >商品详情</div>
          </div>
          <!-- 详情 -->
          <div class="detail-table">
            <div class="table-head">商品参数</div>
            <div class="table">
              <div class="table-row" v-for="(item,index) in info.shop_item_attr_list" :key="index">
                <div class="table-cell">{{item.name}}</div>
                <div class="table-value">{{item.val}}</div>
              </div>
            </div>
          </div>
          <!-- 详情 -->
          <div class="table2">
            <div class="table2-head">商品详情</div>
            <div class="table2-content" v-html="info.shop_item_info.content"></div>
          </div>
        </div>
        <!-- 地图 -->
        <div class="map-box">
          <div class="map-title">
            <div class="t-top">联系方式>></div>
            <div class="t-line"></div>
          </div>
          <div class="map-intro">
            <div class="map-left">
              <div class="row-1">
                <div class="imgcontainer imgbox-1"></div>
                <div class="key-value">联系人：{{info.shop.link_man}}</div>
              </div>
              <div class="row-1">
                <div class="imgcontainer imgbox-2"></div>
                <div class="key-value">电&#x3000;话：{{info.shop.phone}}</div>
              </div>
              <div class="row-1">
                <div class="imgcontainer imgbox-3"></div>
                <div class="key-value">手&#x3000;机：{{info.shop.tele}}</div>
              </div>
              <div class="row-1">
                <div class="imgcontainer imgbox-4"></div>
                <div class="key-value">
                  <div class="val-l">地&#x3000;址：</div>
                  <div class="val-r">{{info.shop.address}}{{info.shop.address}}</div>
                </div>
              </div>
            </div>
            <div class="map-right" id="map"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 询价遮罩层 -->
    <div class="mark" :style="flag==1?'':'display:none'">
      <div class="content">
        <div class="title">发送询价单</div>
        <div class="line"></div>
        <form method="post">
          <div class="f-row">
            <span class="forward">您的姓名：</span>
            <span class="input">
              <input v-model="uname" :placeholder="uname_placeholder" type="text" />
            </span>
          </div>
          <div class="f-row">
            <span class="forward">联系电话：</span>
            <span class="input">
              <input v-model="tel" :placeholder="tel_placeholder" type="text" />
            </span>
          </div>
          <div class="f-row">
            <span class="forward">采购留言：</span>
            <span class="input">
              <textarea
                v-model="content"
                type="text"
                :placeholder="content_placeholder"
                cols="20"
                rows="5"
              ></textarea>
            </span>
          </div>
          <div class="submit" @click="submit">立即询价</div>
          <div class="shut" @click="shut">
            <img src="http://files.cailiao.com/vue/lianlv/pc_2/images/yx8.png" alt />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
// import BMap from "BMap";
import Vue from "vue";
import _ from "underscore";
import "../vendor/underscore.mixin.js";
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
      num: 0, //轮播
      l: 0,
      t: 0,
      type1: 1, //参数切换
      type2: 0, //参数切换
      flag: 0, //遮罩层
      flag1: false, //鼠标移入移出
      uname: "",
      uname_placeholder: "请输入您的姓名",
      tel: "",
      tel_placeholder: "请输入留言主题",
      content: "",
      content_placeholder: "请输入留言内容",
      // 商品详情
      info: {
        shop_item_img_list: [],
        shop_item_info: {},
        shop: {},
        shop_item_attr_list: {}
      },
      // 产品分类
      cate: {
        cate: []
      }
    };
  },
  created() {
    let _this = this;
    // 详情
    _this.api(
      "shop_item/info",
      { shop_item_id: _this.$route.query.id },
      resp => {
        _this.render(resp.data);
      }
    );
    // 分类
    _this.api(
      "shop/cate",
      {
        shop_id: window._global.shop_id
      },
      resp => {
        Vue.set(this.cate, "cate", resp.data.cate);
      }
    );
  },
  mounted() {
    window.addEventListener("scroll", () => {
      var st = document.body.scrollTop || document.documentElement.scrollTop;
    });
    // 百度地图
    let _this = this;
    _this.ready();
  },
  watch: {
    //监听相同路由下参数变化的时候，从而实现异步刷新
    $route(to, from) {
      let _this = this;
      _this.api(
        "shop_item/info",
        { shop_item_id: _this.$route.query.id },
        resp => {
          _this.render(resp.data);
        }
      );
    }
  },
  methods: {
    // 百度地图
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
          map.addOverlay(marker); // 将标注添加到地图中
          // let opts = {
          //   width: 290, // 信息窗口宽度
          //   height: 100, // 信息窗口高度
          //   title: _this.info.shop.name, // 信息窗口标题
          //   enableMessage: true //设置允许信息窗发送短息
          // };
          // let infoWindow = new window.BMap.InfoWindow(
          //   _this.info.shop.address,
          //   opts
          // ); // 创建信息窗口对象
          // marker.addEventListener("click", function() {
          //   map.openInfoWindow(infoWindow, point); //开启信息窗口
          // });
        }
      );
    },
    // 参数切换
    showType1() {
      this.type1 = 1;
      this.type2 = 0;
       window.scrollTo(0, 950);
    },
    showType2() {
      this.type1 = 0;
      this.type2 = 1;
      window.scrollTo(0, 1300);
    },
    // 显示遮罩层
    showAlert() {
      this.flag = 1;
    },
    // 关闭遮罩层
    shut() {
      this.flag = 0;
    },
    // 遮罩层内提交
    submit() {
      var _this = this;
      if (_.empty(_this.uname)) {
        return alert(_this.uname_placeholder);
      }
      if (_.empty(_this.tel)) {
        return alert(_this.tel_placeholder);
      }
      if (_.empty(_this.content)) {
        return alert(_this.content_placeholder);
      }
      _this.api(
        "shop_item/consult",
        {
          supply_id: _this.$route.query.id,
          name: _this.uname,
          tel: _this.tel,
          content: _this.content,
          title: "官网店铺详情留言",
          shop_id: window._global.shop_id
        },
        resp => {
          alert(resp.return_msg);
          _this.uname = "";
          _this.tel = "";
          _this.content = "";
        }
      );
      // 提交后清空input
      this.uname = "";
      this.title = "";
      this.infoo = "";
    },
    // 轮播下一张
    next() {
      this.num++;
      if (this.num == this.info.shop_item_img_list.length) {
        this.num = 0;
      }
    },
    // 轮播下一张
    prev() {
      if (this.num <= 0) {
        this.num = this.info.shop_item_img_list.length;
      }
      this.num--;
    },
    // 放大镜移入
    move(e) {
      this.flag1 = true;
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      var scrollLeft =
        document.documentElement.scrollLeft || document.body.scrollLeft;
      var big = document.getElementById("big");
      var box = document.getElementById("pic");
      var left = e.clientX - big.offsetLeft + scrollLeft;
      var top = e.clientY - big.offsetTop + scrollTop;
      if (left < 50) {
        left = 50;
      }
      if (left > 390) {
        left = 390;
      }
      if (top < 50) {
        top = 50;
      }
      if (top > 390) {
        top = 390;
      }
      this.l = -left * 2 + 100;
      this.t = -top * 2 + 100;
    },
    // 放大镜移出
    out() {
      this.flag1 = false;
    }
  }
};
</script>
<style scoped>
/* 面包屑 */
.shouye-ico {
  width: 14px;
  height: 14px;
}
.bread-nav {
  padding: 50px 0 7px;
}
.link {
  display: inline-block;
  text-align: center;
  color: #9e9e9e;
  font-size: 14px;
  width: 80px;
  vertical-align: middle;
}
.arrow {
  color: #939393;
  font-size: 14px;
}
.post_title {
  color: #939393;
  font-size: 14px;
  display: inline-block;
  vertical-align: middle;
}
/* 详情 */
.show {
  height: 524px;
  overflow: hidden;
}
/* 左边 */
.show .left {
  float: left;
  width: 441px;
  height: 100%;
  position: relative;
}
#pic {
  position: relative;
  width: 441px;
  height: 441px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid #DCDCDC;
}
#pic img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 441px;
}
.ul {
  width: 100%;
  height: 80px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btn-left {
  width: 20px;
  height: 72px;
  border: none;
  outline: 0;
  cursor: pointer;
  background-color: #e2e2e2;
  background-image: url(http://files.cailiao.com/vue/lianlv/pc_2/images/left.png);
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 10px 15px;
}
.btn-right {
  width: 20px;
  height: 72px;
  border: none;
  outline: 0;
  cursor: pointer;
  background-color: #e2e2e2;
  background-image: url(http://files.cailiao.com/vue/lianlv/pc_2/images/right.png);
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 10px 15px;
}
.ul-imgs {
  width: 390px;
  height: 72px;
  overflow: hidden;
}
.ul-imgs .li {
  float: left;
  margin: 0 3px;
  width: 72px;
  height: 72px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid #dcdcdc;
}
.ul-imgs .spot {
  border: 1px solid #ffa1a1;
}
.li img {
  width: 100%;
  height: 100%;
}
/* 放大镜 */
.glass {
  position: absolute;
  width: 200px;
  height: 200px;
  top: 0;
  left: 450px;
  overflow: hidden;
  border-radius: 10px;
}
.glass img {
  position: absolute;
  width: 882px;
  height: 882px;
}
/* 右边 */
.show .right {
  float: right;
  width: 720px;
  height: 441px;
  font-family: "宋体";
  background-color: #f1f1f1;
}
.right-title {
  height: 90px;
  padding: 12px 40px;
  font-size: 24px;
  font-weight: bold;
  color: #0c0c0c;
  overflow: hidden;
  background-color: #fddddd;
}
.right-de {
  padding: 23px 40px 0;
}
.right-de .p {
  padding: 10px 0;
}
.p .name {
  display: inline-block;
  width: 100px;
  color: #0c0c0c;
  font-size: 16px;
}
.p .price {
  color: #df0808;
  font-weight: bold;
  font-size: 22px;
}
.p .mobile {
  color: #df0808;
  font-size: 22px;
}
.p .same {
  color: #0c0c0c;
  font-size: 16px;
}
.button-box {
  padding: 30px 40px 0;
}
.ask-btn {
  float: left;
  width: 155px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  font-size: 16px;
  padding-left: 70px;
  cursor: pointer;
  background-color: #df0808;
  background-image: url(http://files.cailiao.com/vue/lianlv/pc_2/images/yx2.png);
  background-repeat: no-repeat;
  background-position: 36% 52%;
  background-size: 18px 17px;
}
.call-btn {
  float: left;
  margin-left: 50px;
  width: 155px;
  height: 40px;
  line-height: 40px;
  color: #df0808;
  font-size: 16px;
  padding-left: 55px;
  cursor: pointer;
  background-color: #ffd9d9;
  border: 1px solid #df0808;
  background-image: url(http://files.cailiao.com/vue/lianlv/pc_2/images/yx3.png);
  background-repeat: no-repeat;
  background-position: 25% 52%;
  background-size: 18px 18px;
  position: relative;
}
.show-block {
  width: 155px;
  padding: 10px;
  position: absolute;
  left: -1px;
  top: 38px;
  background: #fff;
  z-index: 500;
  color: #4b4b4b;
  font-size: 14px;
  display: none;
  border-left: 1px solid #df0808;
  border-right: 1px solid #df0808;
  border-bottom: 1px solid #df0808;
}

.call-btn:hover .show-block {
  display: block;
}
.call-btn:hover {
  border-bottom: 1px solid #fff;
}
/* 商品推荐 */
.recoment-head {
  margin-top: 30px;
  overflow: hidden;
}
.re-title {
  float: left;
  width: 122px;
  height: 35px;
  color: #fff;
  text-align: center;
  line-height: 35px;
  font-size: 14px;
  background-image: url(http://files.cailiao.com/vue/lianlv/pc_2/images/yx1.png);
  background-size: 100% 100%;
}
.fleft {
  width: 1078px;
  float: left;
  height: 35px;
  border-bottom: 2px solid #fc7373;
}
.re-box {
  height: 276.67px;
  overflow: hidden;
  margin-top: 15px;
}
.re-item {
  display: block;
  width: 217px;
  float: left;
  margin: 0 11.5px;
  opacity: 1;
}
.img-container {
  width: 217px;
  height: 217px;
  padding: 3px;
  overflow: hidden;
  border: 1px solid rgba(235, 205, 205, 1);
}
.img-container img {
  width: 100%;
  height: 100%;
  transition:  all .2s linear;
}
.re-item:hover img{
  transform: scale(1.2);
}
.re-name {
  height: 40.32px;
  padding: 2px 8px;
  color: #646464;
  font-size: 14px;
  font-family: "宋体";
  overflow: hidden;
}
.re-price {
  font-size: 14px;
  font-family: "宋体";
  color: #fc7373;
  text-align: center;
}
/* 底部详情 */
.bottom-view {
  overflow: hidden;
  margin-top: 25px;
  margin-bottom: 180px;
}
/* 左边 */
.view-left {
  width: 247px;
  float: left;
  background: #ffeded;
  border: 1px solid #e7e7e7;
}
.kind-head {
  width: 100%;
  height: 43px;
  text-align: center;
  line-height: 43px;
  font-size: 14px;
  color: #fff;
  background: #fc7373;
}
.cate-box {
  width: 100%;
}
.cate-name {
  width: 100%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  color: #de7575;
  font-size: 14px;
  border-bottom: 2px solid #ffffff;
}
.cate-link {
  display: block;
  width: 100%;
  height: 100%;
  opacity: 1;
  text-align: center;
  color: #de7575;
  font-size: 14px;
}
.cate-link:hover {
  color: #fff;
  background: #fc7373;
}
/* 右边 */
.float-right {
  width: 932px;
  float: right;
}
.view-right {
  width: 932px;
  border: 1px solid #e7e7e7;
}
.right-header {
  height: 42px;
  overflow: hidden;
  border-bottom: 2px solid #e7e7e7;
}
.header-left,
.header-right {
  float: left;
  width: 120px;
  line-height: 40px;
  height: 40px;
  text-align: center;
  cursor: pointer;
}
.bottom-line {
  border-bottom: 2px solid #fc7373;
}
/* 参数 */
.detail-table {
  overflow: hidden;
}
.table-head {
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  color: #656565;
}
.table {
  width: 798px;
  margin: 10px auto 15px;
  overflow: hidden;
  border: 1px solid rgba(233, 235, 236, 1);
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
/* 详情 */
.table2 {
  margin-top: 20px;
  overflow: hidden;
  padding: 0 60px 20px;
}
.table2-head {
  text-align: center;
  font-size: 14px;
  color: #656565;
  padding-bottom: 20px;
}
/* 地图 */
.map-box {
  width: 932px;
}
.map-title {
  padding-top: 14px;
  color: #000;
  font-size: 14px;
  border-bottom: 2px solid #e7e7e7;
}
.t-top {
  width: 80px;
}
.t-line {
  width: 72px;
  height: 2px;
  margin-top: 2px;
  background: #fc7373;
}
.map-intro {
  width: 932px;
  height: 325px;
  margin-top: 5px;
  overflow: hidden;
  background: #faf2f2;
}
.map-left {
  width: 399px;
  height: 325px;
  float: left;
  padding: 10px 20px;
}
.row-1 {
  overflow: hidden;
  margin-top: 20px;
}
.imgcontainer {
  width: 20px;
  height: 20px;
  float: left;
  background-position: center center;
  background-repeat: no-repeat;
}
.imgbox-1 {
  background-image: url(http://files.cailiao.com/vue/lianlv/pc_2/images/yx15.png);
  background-size: 19px 19px;
}
.imgbox-2 {
  background-image: url(http://files.cailiao.com/vue/lianlv/pc_2/images/yx12.png);
  background-size: 18px 18px;
}
.imgbox-3 {
  background-image: url(http://files.cailiao.com/vue/lianlv/pc_2/images/yx14.png);
  background-size: 11px 18px;
}
.imgbox-4 {
  background-image: url(http://files.cailiao.com/vue/lianlv/pc_2/images/yx13.png);
  background-size: 17px 16px;
}
.key-value {
  float: left;
  width: 329px;
  margin-left: 8px;
  color: #373737;
  font-size: 14px;
  overflow: hidden;
}
.val-l {
  float: left;
  width: 60px;
}
.val-r {
  float: left;
  width: 268px;
}
.map-right {
  float: right;
  width: 532px;
  height: 325px;
  border: 1px solid #e7e7e7;
}
/* 询价遮罩层 */
.mark {
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  color: #151515;
}
.mark > .content {
  width: 460px;
  height: 400px;
  background: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 25px 50px;
  border-radius: 10px;
}
.mark > .content > .title {
  font-weight: bolder;
  margin: 0 auto;
  font-size: 18px;
  width: 100px;
  height: 20px;
  text-align: center;
  line-height: 20px;
}
.mark > .content > .line {
  font-weight: bolder;
  margin: 10px auto;
  width: 70px;
  height: 2px;
  background: #232323;
}
.forward {
  font-size: 16px;
  font-weight: bolder;
  display: inline-block;
  width: 80px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  border-bottom: 1px solid #dcdcdc;
}
.f-row {
  margin-top: 30px;
}
.input input {
  width: 200px;
  height: 30px;
  margin-left: 5px;
  border: none;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  padding-left: 10px;
}
.input textarea {
  width: 200px;
  height: 50px;
  margin-left: 5px;
  border: none;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  padding-left: 10px;
}
.submit {
  width: 102px;
  margin: 45px auto 0;
  height: 27px;
  color: #ffffff;
  background: #181818;
  font-size: 14px;
  line-height: 27px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
}
.spot {
  border: 1px solid #f19149;
}
.shut {
  width: 25px;
  height: 25px;
  position: absolute;
  top: 20px;
  right: 20px;
  text-align: center;
  cursor: pointer;
}
.shut img {
  width: 100%;
  height: 100%;
}
</style>


