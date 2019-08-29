<template>
  <div id="home">
    <!--banner-->
    <div id="banner-wrapper" :height="bannerheight+'px'">
      <el-carousel
        v-if="obj.ad_list.length==0?true:false"
        :interval="5000"
        :height="bannerheight+'px'"
        arrow="always"
        id="self"
      >
        <el-carousel-item class="ban-box" :height="bannerheight+'px'">
          <img src="http://files.cailiao.com/vue/cailiao/pc_22/images/banner.jpg" alt />
        </el-carousel-item>
      </el-carousel>

      <el-carousel
        v-if="obj.ad_list.length==0?false:true"
        :interval="5000"
        :height="bannerheight+'px'"
        arrow="always"
        id="self"
      >
        <el-carousel-item :height="bannerheight+'px'" v-for="(item,key) in obj.ad_list" :key="key">
          <a class="ban-box" :height="bannerheight+'px'" :href="item.url" rel="external nofollow">
            <img :src="item.image" alt />
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!--最新推荐-->
    <div id="newHot-wrapper">
      <div class="newHot">
        <div class="newHot_title">
          <h3>
            {{obj.shop.enterprise_name}}-
            <span>最新推荐</span>
          </h3>
        </div>
        <!-- 新增 -->
        <div class="product_about">
          <div class="productA_text">
            <h3>{{obj.shop.enterprise_name}}的产品</h3>
            <p>公司主营：{{obj.shop.product_desc}}</p>
          </div>
          <div class="productA_img">
            <img :src="showImg.imageUrl" />
          </div>
        </div>
        <!-- 新增 -->
        <div class="newHot_content">
          <ul>
            <li v-for="(item,index) in arr.list" :key="index">
              <a :href="'http://www.cailiao.com/supply/'+item.id+'.html'">
                <div class="newHot_img">
                  <img :src="item.image" />
                </div>
                <div class="newHot_text">
                  <p>{{item.name | ellipsis}}</p>
                </div>
                <div class="newHot_bottom">
                  <h4>￥{{item.price_description}}</h4>
                  <span>≥{{item.amount}}{{item.unit}}</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--公司简介-->

    <div id="about-wrapper">
      <div id="black"></div>
      <img class="bg_bg" src="http://files.cailiao.com/vue/cailiao/pc_22/images/banner.jpg" alt />
      <div class="about">
        <div class="about_title">
          <h3>走进 {{obj.shop.enterprise_name}}</h3>
          <p v-html="obj.content"></p>
        </div>
        <div class="about_lce">
          <ul>
            <li v-for="(item,index) in obj.shop.qua_image" :key="index">
              <img src="../assets/rongyu01.jpg" />
              <!-- <img :src="item.image" /> -->
            </li>
            <!-- <li>
              <img src="../assets/rongyu02.jpg" />
            </li>
            <li>
              <img src="../assets/rongyu03.jpg" />
            </li>
            <li>
              <img src="../assets/rongyu04.jpg" />
            </li>
            <li>
              <img src="../assets/rongyu05.jpg" />
            </li>
            <li>
              <img src="../assets/rongyu06.jpg" />
            </li> -->
          </ul>
        </div>
      </div>
    </div>
    <!--产品分类-->
    <div id="product-wrapper">
      <div class="product">
        <div class="product_title">
          <h3>
            {{obj.shop.enterprise_name}}-
            <span>产品分类</span>
          </h3>
        </div>
        <div class="product_content">
          <ul>
            <li v-for="(item,index) in info.re_list" :key="index">
              <a :href="'http://www.cailiao.com/supply/'+item.id+'.html'">
                <div class="product_img">
                  <img :src="item.image" />
                </div>
                <div class="product_text">
                  <p>{{item.name}}</p>
                </div>
                <div class="product_price">
                  <p>￥{{item.price_description}}</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "home",
  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 55) {
        return value.slice(0, 55) + "...";
      }
      return value;
    }
  },
  data() {
    return {
      // 轮播高度
      bannerheight: "",
      // 店铺
      obj: {
        shop: {},
        ad_list: {}
      },
      // 最新
      arr: {
        list: [],
        pageInfo: {}
      },
      // 推荐
      info: {
        re_list: [],
        re_page: {}
      },
      showImg: {
        imageUrl: ""
      }
    };
  },
  created() {
    let _this = this;
    // 店铺信息
    _this.api(
      "index/index",
      { user_id: window._global.user_id, perpage: 8 },
      res => {
        Vue.set(this.obj, "shop", res.data.shop);
        Vue.set(this.obj, "ad_list", res.data.ad_list);
      }
    );
    _this.api("shop/info", { user_id: window._global.user_id }, res => {
      Vue.set(this.obj, "content", res.data.shop.content);
    });
    // 最新 order:'update_time'
    _this.api(
      "shop_item/lists",
      {
        user_id: window._global.user_id,
        order: "update_time",
        page: 1,
        perPage: 8
      },
      res => {
        Vue.set(this.arr, "list", res.data.list);
        Vue.set(this.arr, "pageInfo", res.data.pageInfo);
      }
    );
    // 推荐
    _this.api(
      "index/re_list",
      { user_id: window._global.user_id, page: 1, perPage: 6 },
      res => {
        _this.render(res.data);
        Vue.set(this.showImg, "imageUrl", res.data.re_list[0].image);
      }
    );
  },
  mounted() {
    this.setSize();
    window.addEventListener(
      "resize",
      () => {
        this.setSize();
      },
      false
    );
  },
  methods: {
    setSize() {
      this.bannerheight = document.body.clientWidth / 3.84;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#home {
  /*banner*/
  #banner-wrapper {
    width: 100%;
    overflow: hidden;
    #self {
      width: 100%;
      overflow: hidden;
      .ban-box {
        display: block;
        width: 100%;
        opacity: 1;
        overflow-y: hidden;
        img {
          width: 100%;
          height: inherit;
          min-height: 312px;
          min-width: 1200px;
        }
      }
    }
  }
  /*最新推荐*/
  #newHot-wrapper {
    padding: 50px 0 100px 0;
    .newHot {
      width: 1200px;
      margin: 0 auto;
      .newHot_title {
        text-align: center;
        margin-bottom: 70px;
        h3 {
          color: #333333;
          font-size: 30px;
          letter-spacing: 1px;
          background: url("http://files.cailiao.com/vue/cailiao/pc_22/images/yx_3.png")
            no-repeat center center;
          line-height: 54px;
          span {
            font-size: 36px;
            color: #2468b6;
          }
        }
      }
      .product_about {
        width: 1200px;
        margin: 0 auto;
        padding-bottom: 20px;
        overflow: hidden;
        .productA_text {
          float: left;
          width: 460px;
          h3 {
            font-size: 24px;
            line-height: 2;
            margin-bottom: 15px;
          }
          p {
            font-size: 16px;
            line-height: 40px;
          }
        }
        .productA_img {
          float: right;
          width: 460px;
          max-height: 360px;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            max-width: 100%;
            max-height: 100%;
          }
        }
      }
      .newHot_content {
        width: 1200px;
        ul {
          width: 100%;
          display: inline-block;
          li {
            width: 280px;
            height: 460px;
            background-color: #ffffff;
            box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.08);
            border: solid 1px #dcdcdc;
            float: left;
            margin-right: 24px;
            margin-bottom: 25px;
            a {
              display: block;
              width: 100%;
              opacity: 1;
              .newHot_img {
                width: 100%;
                height: 300px;
                padding: 10px;
                display: flex;
                overflow: hidden;
                align-items: center;
                justify-content: center;
                img {
                  width: 100%;
                  height: 100%;
                  transition: all 0.3s ease-in;
                }
              }
              .newHot_img:hover img {
                transform: translateX(5px);
              }
              .newHot_text {
                height: 100px;
                border-bottom: 1px #e6e6e6 solid;
                p {
                  padding: 0 10px;
                  box-sizing: border-box;
                  text-overflow: -o-ellipsis-lastline;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 3;
                  line-clamp: 3;
                  -webkit-box-orient: vertical;
                  color: #0f0f0f;
                  font-size: 18px;
                  line-height: 30px;
                }
              }
              .newHot_bottom {
                height: 55px;
                padding: 0 15px;
                box-sizing: border-box;
                line-height: 55px;
                h4 {
                  color: #d30202;
                  font-size: 18px;
                  font-weight: 700;
                  float: left;
                }
                span {
                  color: #a3a3a3;
                  font-size: 18px;
                  font-weight: 700;
                  float: right;
                }
              }
            }
          }
          li:nth-child(4n) {
            margin-right: 0;
          }
        }
      }
    }
  }

  /*公司简介*/
  #about-wrapper {
    // background: url("../assets/banner.jpg") no-repeat;
    height: 650px;
    position: relative;
    .bg_bg {
      position: absolute;
      top: 0;
      left: 0;
      height: 650px;
      width: 100%;
      text-align: center;
    }
    #black {
      width: 100%;
      height: 650px;
      background: rgba(0, 0, 0, 0.6);
      position: absolute;
      z-index: 1;
    }
    .about {
      width: 1200px;
      margin: 0 auto;
      position: relative;
      z-index: 2;
      padding: 70px 0;
      .about_title {
        margin-bottom: 20px;
        h3 {
          font-size: 32px;
          color: #fff;
          text-align: center;
          margin-bottom: 20px;
        }
        p {
          font-size: 16px;
          line-height: 36px;
          color: #fff;
          letter-spacing: 1px;
          padding: 20px 0;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }
      .about_lce {
        width: 1085px;
        margin: 0 auto;
        background: #fff;
        padding: 30px 20px;
        overflow: hidden;
        ul {
          width: 100%;
          display: inline-block;
          display: flex;
          align-items: center;
          li {
            float: left;
            margin: 0 20px;
            max-width: 140px;
            img {
              max-width: 100%;
            }
          }
        }
      }
    }
  }

  /*产品分类*/
  #product-wrapper {
    padding: 50px 0 90px 0;
    background: #f8f8f8;
    .product {
      width: 1200px;
      margin: 0 auto;
      .product_title {
        text-align: center;
        margin-bottom: 70px;
        h3 {
          color: #333333;
          font-size: 30px;
          letter-spacing: 1px;
          background: url("http://files.cailiao.com/vue/cailiao/pc_22/images/yx_3.png")
            no-repeat center center;
          line-height: 54px;
          span {
            font-size: 36px;
            color: #2468b6;
          }
        }
      }
      .product_content {
        width: 1200px;
        ul {
          width: 100%;
          display: inline-block;
          li {
            width: 350px;
            height: 400px;
            background-color: #ffffff;
            box-shadow: 0px 0px 59px 0px rgba(0, 0, 0, 0.08);
            float: left;
            margin: 25px;
            a {
              display: block;
              width: 100%;
              opacity: 1;
            }
            a:hover img {
              transform: scale(1.2);
            }
            .product_img {
              width: 100%;
              height: 300px;
              display: flex;
              align-items: center;
              justify-content: center;
              overflow: hidden;
              img {
                width: 100%;
                height: 100%;
                transition: all 0.3s;
              }
            }
            .product_text {
              padding-bottom: 10px;
              height: 30px;
              p {
                padding: 0 10px;
                box-sizing: border-box;
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                line-clamp: 1;
                -webkit-box-orient: vertical;
                color: #0f0f0f;
                font-size: 18px;
                line-height: 30px;
              }
            }
            .product_price {
              p {
                padding: 0 10px;
                box-sizing: border-box;
                color: #d30202;
                font-size: 14px;
                font-weight: 700;
              }
            }
          }
          li:nth-child(3n) {
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>
