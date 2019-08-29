<template>
  <div>
    <div class="safe auto show">
      <div class="left" id="view">
        <div class="img-box pic" id="pic">
          <img
            v-for="(item,index) in info.shop_item_img_list"
            v-show="index==num"
            :key="index"
            :src="item.url"
            @mousemove="move"
            @mouseout="out"
            alt
          >
        </div>
        <div class="img-box imgs-box">
          <li
            class="img-box"
            v-for="(item,index) in info.shop_item_img_list"
            :class="{spot:index==num}"
            @click="num=index"
            :key="index+'1'"
          >
            <img :src="item.url" alt>
          </li>
        </div>
        <div id="right" @click="next">&gt;</div>
        <div id="left" @click="prev">&lt;</div>
        <div class="glass" v-show="flag1">
          <img
            v-show="index==num"
            v-for="(item,index) in info.shop_item_img_list"
            :style="{left:l+'px',top:t+'px'}"
            :src="item.url"
            :key="index+'1'"
            alt
          >
        </div>
      </div>

      <div class="right">
        <p class="title-h">{{info.shop_item_info.title}}</p>
        <p class="small">{{info.shop_item_info.title}}，欢迎选购！</p>
        <ul class="list">
          <li>
            <span class="title">价&#x3000;&#x3000;格：</span>
            <span class="price" >￥{{info.shop_item_info.price||'面议'}}</span>
          </li>
          <li>
            <span class="title">产品数量：</span>
            <span class="color-b">{{info.shop_item_info.amount}}个</span>
          </li>
          <li>
            <span class="title">电话号码：</span>
            <span class="color-b">{{info.shop.phone||'暂无'}}</span>
          </li>
          <li>
            <span class="title">手机号码：</span>
            <span class="color-b">{{info.shop.tele||"暂无"}}</span>
          </li>
        </ul>
        <div class="contact clear">
          <div class="quest" @click="showAlert(1)">询盘</div>
          <div class="connect">
            <span>联系方式</span>
            <p class="person">联系人：{{info.shop.link_man}}</p>

            <p class="phone">联系方式：{{info.shop.tele}}</p>

          </div>
        </div>
      </div>
    </div>
    <div class="safe auto m-t-50 navbar">
      <div class="head">
        <div class="header auto">商品推荐</div>
      </div>
      <div class="product-show">
        <router-link
          :to="{path:'/detail',query:{id:item.id}}"
          class="div"
          style="display:block"
          v-for="(item,index) in info.shop_reitem"
          :key="index+'p'"
        >
          <div class="img-box">
            <img :src="item.img" alt>
          </div>
          <p class="price">￥{{item.price||'面议'}}</p>
          <p class="title">{{item.title}}</p>
        </router-link>
      </div>
    </div>
    <div class="safe auto m-t-50">
      <div class="container">
        <div class="left">
          <li class="nav">产品分类</li>
          <router-link class="list" to="/product">全部分类</router-link>
        </div>
        <div class="right">
          <div class="col-1">
            <div class="tab-can" @click="showType(0)" :class="type==1?'select1':'default'">产品详情</div>
            <div class="tab-detail" @click="showType(1)" :class="type==1?'select2':'default'">产品参数</div>
          </div>

          <div class="col-2" :style="type==1?'':'display:none;'">
            <div class="row" v-for="(item,index) in info.shop_item_attr_list" :key="index+'a'">
              <span class="title">{{item.name}}</span>
              <span class="des">{{item.val}}</span>
            </div>
          </div>
          <div class="col-2" :style="type==0?'':'display:none;'">
            <div class="head-title">
              <div class="font">产品详情</div>
              <div class="line"></div>
            </div>
            <div class="pictures" >
              <div class="img-box">
                <div v-html="info.shop_item_info.content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 询价遮罩层 -->
    <div class="mark" :style="flag==1?'':'display:none'">
      <div class="content">
        <div class="title">发送询价单</div>
        <div class="line"></div>
        <form method="post" action>
          <div class="f-row">
            <span class="forward">您的姓名：</span>
            <span class="input">
              <input v-model="uname" :placeholder="uname_placeholder" type="text">
            </span>
          </div>
          <div class="f-row">
            <span class="forward">联系电话：</span>
            <span class="input">
              <input v-model="title" :placeholder="title_placeholder" type="text">
            </span>
          </div>
          <div class="f-row">
            <span class="forward">采购留言：</span>
            <span class="input">
              <textarea v-model="infoo" :placeholder="info_placeholder" cols="20" rows="5"></textarea>
            </span>
          </div>
          <div class="submit" @click="submit">立即询价</div>
          <div class="shut" @click="shut">x</div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import _ from "underscore";
import "../vendor/underscore.mixin.js";
export default {
  data() {
    return {
      num: 0, //轮播
      l: 0,
      t: 0,
      type: 0, //参数切换
      flag: 0, //遮罩层
      flag1: false, //鼠标移入移出
      uname: "",
      uname_placeholder: "请输入您的姓名",
      title: "",
      title_placeholder: "请输入留言主题",
      infoo: "",
      info_placeholder: "请输入留言内容",
      info: {
        shop_item_img_list: [],
        shop_item_info: {},
        shop: {},
        shop_item_attr_list: {}
      },
    };
  },
  created() {
    let _this = this;
    _this.api(
      "shop_item/info",
      { shop_item_id: _this.$route.query.id },
      resp => {
        _this.render(resp.data);

      }
    );
  },
  watch: {
    //监听相同路由下参数变化的时候，从而实现异步刷新
    $route(to, from) {
      //做一些路由变化的响应
      let _this = this;
      _this.api(
        "shop_item/info",
        { shop_item_id: _this.$route.query.id },
        resp => {
          _this.render(resp.data);
        }
      );
      //重新获取数据
    }
  },

  methods: {
    // 参数切换
    showType: function(type) {
      this.type = type;
    },
    // 显示遮罩层
    showAlert(flag) {
      this.flag = flag;
    },
    // 关闭遮罩层
    shut() {
      this.flag = 0;
    },
    // 遮罩层内提交
    submit() {
      var _this = this;
      let data = {
        uname: _this.uname,
        title: _this.title,
        infoo: _this.info0
      };
      if (_.empty(_this.uname)) {
        return alert(_this.uname_placeholder);
      }
      if (_.empty(_this.title)) {
        return alert(_this.title_placeholder);
      }
      if (_.empty(_this.infoo)) {
        return alert(_this.infoo_placeholder);
      }
      _this.api("feedback/add", data, function(resp) {
        alert("添加成功");

      });
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
    prev() {
      if (this.num <= 0) {
        this.num = this.info.shop_item_img_list.length;
      }
      this.num--;
    },
    // 放大镜
    move(e) {
      this.flag1 = true;
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      var scrollLeft =
        document.documentElement.scrollLeft || document.body.scrollLeft;
      var left = e.clientX - (view.offsetLeft - 123);
      var top = e.clientY + scrollTop - (view.offsetTop + pic.offsetTop);
      if (left < 50) {
        left = 50;
      }
      if (left > 550) {
        left = 550;
      }
      if (top < 50) {
        top = 50;
      }
      if (top > 350) {
        top = 350;
      }
      this.l = -left * 2 + 100;
      this.t = -top * 2 + 100;
    },
    out() {
      this.flag1 = false;
    }
  }
};
</script>
<style scoped>
.glass {
  position: absolute;
  width: 200px;
  height: 200px;
  top: 0;
  left: 380px;
  overflow: hidden;
  border-radius: 10px;
}
#pic {
  position: relative;
}
.glass img {
  position: absolute;
  width: 1200px;
  height: 800px;
}
.show {
  margin-top: 95px;
  overflow: hidden;
}
#view {
  width: 373px;
  height: 476px;
  position: relative;
}
.show > div {
  float: left;
}
.show > .left > .pic {
  width: 373px;
  height: 404px;
  overflow: hidden;
}
.show > .left > .pic > img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;
}
#left,
#right {
  width: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 50px;
  height: 60px;
  position: absolute;
  color: #cdcdcd;
  cursor: pointer;
  top: 400px;
}
#left {
  left: 0;
}
#right {
  right: 0;
}
#left:hover,
#right:hover {
  color: #f19149;
}
.imgs-box {
  width: 228px;
  height: 60px;
  position: absolute;
  overflow: hidden;
  top: 400px;
  left: 60px;
}
.imgs-box li {
  width: 57px;
  height: 60px;
  float: left;
  list-style: none;
}
.img-box {
  overflow: hidden;
}
.img-box img {
  width: 100%;
  height: auto;
}
.show > .right {
  margin-left: 35px;
}
.right .title-h {
  color: #000000;
  font-size: 16px;
  font-weight: bolder;
  padding: 5px 0;
}
.right .small {
  color: #959595;
  font-size: 12px;
  padding: 5px 0;
}
.right .list {
  width: 790px;
  background: #f5f5f2;
  padding: 20px 30px;
  border-top: 2px solid #575757;
  border-bottom: 1px solid #c2c2c1;
  margin-top: 5px;
}
.right .list li {
  font-size: 14px;
  color: #9b9b9b;
  line-height: 250%;
}
.right .list li .price {
  color: #e42f2e;
  font-weight: bolder;
}
.right .list .title {
  margin-right: 5px;
}
.right .list .color-b {
  color: #696968;
}
.contact {
  margin-top: 35px;
  width: 365px;
  transition: all 0.5s;
}
.contact .quest {
  width: 135px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
  background: #f19149;
  border-radius: 5px;
  color: #ffffff;
  float: left;
  cursor: pointer;
}
.contact .connect {
  width: 135px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
  border: 1px solid #f19149;
  color: #f19149;
  border-radius: 5px;
  float: right;
  margin-left: 90px;
  cursor: pointer;
  position: relative;
  transition: height 0.5s;
  overflow: hidden;
}
.contact .connect:hover {
  height: 190px;
}
.contact > .connect > p {
  width: 100%;
  text-align: left;
  margin-left: 5px;
  color: #696968;
  font-size: 14px;
}
.navbar > .head {
  width: 100%;
  height: 37px;
  border-bottom: 2px solid #343434;
}
.navbar > .head > .header {
  color: #ffffff;
  text-align: center;
  font-size: 18px;
  line-height: 37px;
  width: 228px;
  height: 37px;
  background: url(http://files.cailiao.com/vue/lianlv/pc_1/images/detail-head.png) no-repeat;
}
.product-show {
  width: 100%;
  height: 320px;
  overflow: hidden;
}
.product-show > .div {
  float: left;
  width: 177px;
  height: 260px;
  margin: 30px 11.5px;
  box-shadow: 0 0 5px #666666;
}
.product-show > .div > .img-box {
  width: 177px;
  height: 170px;
  background: #dedede;
}
.product-show > .div > .price {
  color: #e21414;
  font-size: 14px;
  padding: 5px;
  text-align: center;
}
.product-show > .div > .title {
  color: #4c4c4c;
  font-size: 14px;
  padding: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.container {
  overflow: hidden;
}
.container > .left {
  width: 243px;
  float: left;
  background: #f5f5f2;
  border: 1px solid #d9d9d9;
}
.container > .left > .nav {
  background: #232323;
  color: #ffffff;
  font-size: 16px;
  text-align: center;
  width: 100%;
  height: 39px;
  line-height: 39px;
}
.container > .left > .list {
  display: block;
  width: 100%;
  height: 39px;
  line-height: 39px;
  text-align: center;
  cursor: pointer;
  border-bottom: 1px solid #d9d9d9;
  border-left: 1px solid #d9d9d9;
  border-right: 1px solid #d9d9d9;
}
.container > .left > .list:hover {
  color: #ffffff;
  background: #585858;
}
.container .right {
  width: 928px;
  float: right;
  margin: 0 0 30px 27px;
  border-left: 1px solid #d9d9d9;
  border-right: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
}
.right > .col-1 {
  width: 100%;
  height: 45px;
  background: #f5f5f2;
  color: #000000;
  font-size: 14px;
  overflow: hidden;
}
.col-1 > div {
  float: left;
}
.col-1 > .tab-can {
  width: 82px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  background: #ffffff;
  border-top: 1px solid #e6e6e3;
  cursor: pointer;
}
.col-1 > .tab-detail {
  width: 844px;
  height: 45px;
  line-height: 45px;
  padding: 0 10px;
  border: 1px solid #e6e6e3;
  border-right: none;
  cursor: pointer;
}
.col-2 {
  width: 809px;
  margin: 30px auto;
  overflow: hidden;
}
.col-2 > .row {
  float: left;
  overflow: hidden;
  border-top: 1px solid #d8d8d5;
  border-bottom: 1px solid #d8d8d5;
}
.row > span {
  display: block;
  float: left;
}
.row .title {
  width: 130px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #9b9b9b;
  font-size: 14px;
  background: #e7e7e5;
  border-right: 1px solid #d8d8d5;
  border-left: 1px solid #d8d8d5;
}
.row .des {
  width: 273px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #585858;
  font-size: 14px;
  border-right: 1px solid #d8d8d5;
}
.col-2 > .head-title {
  width: 100%;
  color: #000000;
  font-size: 14px;
}
.head-title > .font {
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin: 0 auto;
}
.head-title > .line {
  width: 40px;
  margin: 0 auto;
  height: 1px;
  border: 0.5px solid #181818;
}
.pictures {
  margin: 50px auto;
}
.pictures > .img-box {
  width: 750px;
  margin: 0 auto;
  /*border: 1px solid #dedede;*/
}
li {
  list-style: none;
}
.col-1 > .select2 {
  background: #ffffff;
  border-bottom: none;
}
.col-1 > .select1 {
  background: #f5f5f2;
  border-bottom: 1px solid #e6e6e3;
}
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
  height: 1px;
  border: 1px solid #232323;
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
}
.input textarea {
  width: 200px;
  height: 50px;
  margin-left: 5px;
  border: none;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
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
  width: 50px;
  height: 50px;
  font-size: 30px;
  color: #999999;
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
}
.shut:hover {
  color: red;
}
</style>


