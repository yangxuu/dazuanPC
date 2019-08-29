<template>
  <div>
    <div class="banner-box">
      <!-- <div class="safe auto rela">
        <div class="banner-div">
          <p class="china">联系我们</p>
          <p class="eng">Contact us</p>
        </div>
      </div> -->
    </div>
    <div class="safe auto bread">
      当前位置：
      <span class="web" @click="blank">中国材料网&gt;</span>
      <router-link to="/" class="infoName">{{info.shop.name}}&gt;</router-link>
      <span>联系我们</span>
    </div>
    <div class="safe auto m-t-60 bottom">
      <div class="head auto">联系我们&#x3000;Contact us</div>
      <div class="m-t-60 flex">
        <ul>
          <li>
            <span class="icon-box">
              <img src="http://files.cailiao.com/vue/cailiao/pc_18/images/icon-11.png" alt>
            </span>
            <span class="des">公司名称：{{info.shop.enterprise_name}}</span>
          </li>
          <li>
            <span class="icon-box">
              <img src="http://files.cailiao.com/vue/cailiao/pc_18/images/icon-12.png" alt>
            </span>
            <span class="des">联系人：{{info.shop.link_manage}}</span>
          </li>
          <li>
            <span class="icon-box">
              <img src="http://files.cailiao.com/vue/cailiao/pc_18/images/icon-13.png" alt>
            </span>
            <span class="des">电话：{{info.shop.mobile}}</span>
          </li>
          <li>
            <span class="icon-box">
              <img src="http://files.cailiao.com/vue/cailiao/pc_18/images/icon-14.png" alt>
            </span>
            <span class="des">地址：{{info.shop.address}}</span>
          </li>
           <li>
            <span class="icon-box">
              <img src="http://files.cailiao.com/vue/cailiao/pc_18/images/icon-15.png" alt>
            </span>
            <span class="des">邮箱：{{info.shop.user_email}}</span>
          </li>
        </ul>
        <div class="img-box bottom-right">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        shop: {}
      }
    };
  },
  created() {
    let _this = this;
    _this.api("shop/info", { user_id: window._global.user_id }, res => {
      _this.render(res.data);
    });
  },
  methods: {
    blank() {
      window.location.href = "http://www.cailiao.com";
    }
  }
};
</script>

<style scoped>
.bread {
  font-size: 14px;
  color: #767676;
  margin-top: 20px;
}
.bread a {
  font-size: 14px;
  color: #767676;
}
.web:hover,
.infoName:hover {
  color: #2e8ac7;
  cursor: pointer;
  font-weight: bolder;
}
.bread .el-breadcrumb {
  display: inline-block;
}
.banner-box {
  width: 100%;
  height: 400px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_18/images/banner4.jpg);
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.bottom {
  margin-bottom: 150px;
}
.banner-div {
  width: 200px;
  height: 150px;
  position: absolute;
  top: 50%;
  margin-top: -75px;
}
.banner-div .china {
  font-size: 35px;
  color: #000000;
}
.banner-div .eng {
  font-size: 20px;
  color: #000000;
}
.safe .head {
  width: 270px;
  height: 36px;
  line-height: 36px;
  font-size: 16px;
  color: white;
  text-align: center;
  background: url(http://files.cailiao.com/vue/cailiao/pc_18/images/icon-head1.png) no-repeat;
}
.flex {
  width: 100%;
  overflow: hidden;
}
.flex ul {
  width: 50%;
  float: left;
}
.flex ul li {
  width: 600px;
  margin: 8px 150px;
  display: flex;
}
.flex ul .icon-box {
  display: block;
  width: 40px;
  height: 40px;
  overflow: hidden;
}
.flex ul .icon-box img {
  width: 100%;
  height: auto;
}
.flex ul .des {
  display: block;
  width: 300px;
  font-size: 16px;
  color: #000000;
  padding: 7px;
  border-bottom: 1px solid rgba(214, 214, 214, 1);
}
.bottom-right {
  width: 500px;
  height: 333px;
  float: right;
  text-align: right;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_18/images/contact.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
