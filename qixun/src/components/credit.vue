<template>
  <div id="credit">
    <!--内容块-->
    <div id="credit-main">
      <div class="credit">
        <!--左边-->
        <div class="credit_left">
          <div class="credit_top">
            <i></i>
            <span>热门产品</span>
          </div>
          <div class="credit_bottom">
            <ul>
              <li v-for="(item,index) in hot.item_list" :key="index">
                <div class="b_img">
                  <a :href="'http://www.cailiao.com/supply/'+item.id+'.html'">
                    <img :src="item.image" />
                  </a>
                </div>
                <div class="b_text">
                  <a :href="'http://www.cailiao.com/supply/'+item.id+'.html'">{{item.name | ellipsis}}</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!--右边-->
        <div class="credit_right">
          <!--诚信档案-->
          <div class="cre_dit">
            <div class="credit_title">
              <i></i>
              <span>诚信档案</span>
            </div>
            <div class="cre_content">
              <div class="crec_left">
                <h4>{{info.shop.enterprise_name}}</h4>
                <router-link to="/introduce">查看更多信息>></router-link>
              </div>
              <div class="crec_right">
                <img src="http://files.cailiao.com/vue/cailiao/pc_22/images/update.png" />
                <p>已通过工商总局 企业网上信息核对</p>
              </div>
            </div>
          </div>
          <!--工商注册信息-->
          <div class="register">
            <div class="register_title">
              <i></i>
              <span>工商注册信息</span>
            </div>
            <div class="register_content">
              <h3>以下内容已通过第三方天眼查权威认证</h3>
              <ul>
                <li>
                  <p>法人代表：{{info.shop.legal_person}}</p>
                  <p>公司类型：{{info.shop.enterprise_type}}</p>
                </li>
                <li>
                  <p>统一社会信用代码：{{info.shop.business_license_id}}</p>
                  <p>成立日期：{{info.shop.time}}</p>
                  
                </li>
                <li>
                  <p>经营状态：在业</p>
                  <p>登记机关：{{info.shop.check_address}}</p>
                  <p>
                    经营范围：{{info.shop.business_scope}}
                  </p>
                </li>
                <li>
                  <p>注册资本：{{info.shop.register_capital}}</p>
                  <p>注册地址：{{info.shop.register_address}}</p>
                </li>
              </ul>
            </div>
          </div>

          <!--推荐产品-->
          <div class="recom_product">
            <div class="recom_title">
              <i></i>
              <span>买家还在看</span>
            </div>
            <div class="recom_content">
              <ul>
                <li v-for="(item,index) in re.re_list" :key="index">
                  <div class="b_img">
                    <a :href="'http://www.cailiao.com/supply/'+item.id+'.html'">
                      <img :src="item.image" />
                    </a>
                  </div>
                  <div class="b_text">
                    <a :href="'http://www.cailiao.com/supply/'+item.id+'.html'">{{item.name | ellipsis}}</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 28) {
        return value.slice(0, 28) + "...";
      }
      return value;
    }
  },
  data() {
    return {
      // 店铺信息
      info: {
        shop: {}
      },
      // 热卖
      hot: {
        item_list: [],
        page: 1
      },
      re:{
        re_list:[],
        re_page:{}
      }
    };
  },
  created() {
    let _this = this;
    // 店铺信息
    _this.api("shop/info", { user_id: window._global.user_id }, res => {
      _this.render(res.data);
    });
    // 热卖商品
    _this.api(
      "index/update_list",
      { user_id: window._global.user_id, page: 1, perpage: 3 },
      res => {
        Vue.set(this.hot, "item_list", res.data.item_list);
        Vue.set(this.hot, "page", res.data.page);
      }
    );
    // 推荐商品
      _this.api(
      "index/re_list",
      { user_id: window._global.user_id, page: 1, perPage: 8 },
      res => {
          Vue.set(this.re, "re_list", res.data.re_list);
        Vue.set(this.re, "re_page", res.data.re_page);
      }
    );
  },
  methods: {}
};
</script>

<style lang="scss">
#credit {
  #credit-main {
    overflow: hidden;
    .credit {
      width: 1200px;
      margin: 0 auto;
      padding-top: 55px;
      /*左边*/
      .credit_left {
        width: 190px;
        float: left;
        .credit_top {
          padding-bottom: 15px;
          border-bottom: 1px #eaeaea solid;
          i {
            width: 8px;
            height: 18px;
            background-color: #2468b6;
            display: inline-block;
            position: relative;
            top: 3px;
          }
          span {
            color: #2468b6;
            font-size: 16px;
            font-weight: 600;
            margin-left: 5px;
          }
        }
        .credit_bottom {
          margin-top: 23px;
          ul {
            li {
              margin-bottom: 35px;
              .b_img {
                width: 190px;
                height: 178px;
                background-color: #ffffff;
                box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.08);
                border: solid 1px #dcdcdc;
                a {
                  width: 100%;
                  display: inline-block;
                  text-align: center;
                  height: 100%;
                  opacity: 1;
                  overflow: hidden;
                  img {
                    max-width: 100%;
                    max-height: 100%;
                    transition: all 0.3s;
                  }
                  img:hover {
                    transform: scale(1.2);
                  }
                }
              }
              .b_text {
                margin-top: 15px;
                a {
                  color: #5a5a5a;
                  font-size: 14px;
                  line-height: 18px;
                  text-overflow: -o-ellipsis-lastline;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  line-clamp: 2;
                  -webkit-box-orient: vertical;
                  opacity: 1;
                }
              }
            }
          }
        }
      }
      /*右边*/
      .credit_right {
        float: left;
        margin-left: 85px;
        width: 925px;
        margin-bottom: 80px;
        /*诚信档案*/
        .cre_dit {
          width: 100%;
          display: inline-block;
          .credit_title {
            padding: 0 10px 15px 10px;
            border-bottom: 1px #eaeaea solid;
            i {
              width: 8px;
              height: 18px;
              background-color: #2468b6;
              display: inline-block;
              position: relative;
              top: 3px;
            }
            span {
              color: #2468b6;
              font-size: 16px;
              font-weight: 600;
              margin-left: 5px;
            }
          }
          .cre_content {
            padding-top: 20px;
            .crec_left {
              float: left;
              h4 {
                color: #3b3b3b;
                font-size: 14px;
                margin-bottom: 35px;
              }
              a {
                width: 100%;
                display: inline-block;
                color: #3b3b3b;
                font-size: 14px;
                font-weight: 700;
              }
            }
            .crec_right {
              float: right;
              img {
                width: 270px;
                height: 132px;
              }
              p {
                text-align: center;
                color: #768ed2;
                font-weight: 700;
                font-size: 16px;
              }
            }
          }
        }
        /*工商注册信息*/
        .register {
          width: 100%;
          display: inline-block;
          .register_title {
            padding: 0 10px 15px 10px;
            border-bottom: 1px #eaeaea solid;
            i {
              width: 8px;
              height: 18px;
              background-color: #2468b6;
              display: inline-block;
              position: relative;
              top: 3px;
            }
            span {
              color: #2468b6;
              font-size: 16px;
              font-weight: 600;
              margin-left: 5px;
            }
          }
          .register_content {
            padding-top: 20px;
            h3 {
              color: #3b3b3b;
              font-size: 14px;
              margin-bottom: 20px;
            }
            ul {
              display: flex;
              justify-content: space-between;
              flex-wrap: wrap;
              li {
                width: 46%;
                margin-bottom: 35px;
                p {
                  color: #3b3b3b;
                  font-size: 14px;
                  margin-bottom: 15px;
                }
              }
            }
          }
        }

        /*推荐产品*/
        .recom_product {
          width: 100%;
          display: inline-block;
          .recom_title {
            padding: 0 10px 15px 10px;
            border-bottom: 1px #eaeaea solid;
            i {
              width: 8px;
              height: 18px;
              background-color: #2468b6;
              display: inline-block;
              position: relative;
              top: 3px;
            }
            span {
              color: #2468b6;
              font-size: 16px;
              font-weight: 600;
              margin-left: 5px;
            }
          }
          .recom_content {
            padding-top: 20px;
            ul {
              li {
                margin-bottom: 35px;
                width: 215px;
                float: left;
                margin-right: 20px;
                .b_img {
                  width: 215px;
                  height: 178px;
                  background-color: #ffffff;
                  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.08);
                  border: solid 1px #dcdcdc;
                  a {
                    width: 100%;
                    display: inline-block;
                    text-align: center;
                    height: 100%;
                    opacity: 1;
                    overflow: hidden;
                    img {
                      max-width: 100%;
                      max-height: 100%;
                      transition: all.3s;
                    }
                    img:hover{
                        transform: scale(1.2)
                    }
                  }
                }
                .b_text {
                  margin-top: 15px;
                  a {
                    color: #5a5a5a;
                    font-size: 14px;
                    line-height: 18px;
                    text-overflow: -o-ellipsis-lastline;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    line-clamp: 2;
                    -webkit-box-orient: vertical;
                    opacity: 1;
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
    }
  }
}
</style>

