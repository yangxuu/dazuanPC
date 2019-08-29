<template>
  <!--底部-->
  <div id="footer-wrapper">
    <div class="footer">
      <div class="f_nav">
        <ul>
          <li v-for="(item,index) in cate.cate.cate" :key="index">
           <router-link to="/productcenter">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
      <div class="f_contact">
        <ul>
          <li>
            <img src="http://files.cailiao.com/vue/cailiao/pc_22/images/1.png" />
            <span>{{info.shop.mobile}}</span>
          </li>
          <li>
            <img src="http://files.cailiao.com/vue/cailiao/pc_22/images/2.png" />
            <span>{{info.shop.user_email}}</span>
          </li>
          <li>
            <img src="http://files.cailiao.com/vue/cailiao/pc_22/images/4.png" />
            <span>{{info.shop.address}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      info: {
        shop: {}
      },
      // 分类字段
      cate: {
        cate: []
      }
    };
  },
  created() {
    let _this = this;
    _this.api("index/index", { user_id: window._global.user_id }, res => {
      _this.render(res.data);
    });
    // 全部分类
    _this.api(
      "shop/cate_all",
      { user_id: window._global.user_id, limit: 5 },
      res => {
        Vue.set(this.cate, "cate", res.data);
      }
    );
  }
};
</script>

<style lang="scss">
/*底部*/
#footer-wrapper {
  padding: 40px 0 40px;
  background: #333333;
  .footer {
    width: 1200px;
    margin: 0 auto;
    background: url("http://files.cailiao.com/vue/cailiao/pc_22/images/footer_bg.jpg") no-repeat center center;
    .f_nav {
      display: block;
      ul {
        width: 100%;
        display: inline-block;
        text-align: center;
        li {
          display: inline-block;
          margin-right: 20px;
          a {
            color: #cecece;
            font-size: 16px;
          }
        }
        li:last-child {
          margin-right: 0;
        }
      }
    }
    .f_contact {
      margin-top: 25px;
      display: block;
      ul {
        width: 100%;
        display: inline-block;
        text-align: center;
        li {
          display: inline-block;
          margin-right: 50px;
          img {
            float: left;
            margin-top: 2px;
            margin-right: 3px;
          }
          span {
            font-size: 12px;
            color: #cecece;
          }
        }
      }
    }
  }
}
</style>

