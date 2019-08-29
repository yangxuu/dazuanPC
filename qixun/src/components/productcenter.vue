<template>
  <div id="product">
    <!--内容-->
    <div id="product-main">
      <div class="main">
        <div class="location">
          <p>
            <router-link to="/">当前位置：</router-link>
            <router-link to="/">首页</router-link>>
            <router-link to="/productcenter">产品中心</router-link>
          </p>
        </div>
        <div class="product_list">
          <div class="p_left">
            <h3>产品分类</h3>
            <!-- 带橱窗 -->
            <ul v-show="state.status">
              <!-- <li class="oneMenu">全部商品</li> -->
              <li v-for="(one,index) in cate.cate.cate" :key="index" class="oneMenu">
                <span @click="twoMenu(one)">{{one.name}}</span>
                <ul v-if="one.flag">
                  <li v-for="(two,index) in one.children" :key="index" class="twoMenu">
                    <router-link :to="{path:'/productcenter',query:{cate_id:two.id}}">{{two.name}}</router-link>
                  </li>
                </ul>
              </li>
            </ul>
            <!-- 无橱窗 -->
            <ul v-show="!state.status">
              <li @click="allgoods" class="oneMenu">全部商品</li>
              <li
                v-for="(x,index) in shop.cate0"
                :key="index"
                :class="flag==index?'click':'default'"
                @click="style0(index,x.cate_three_id)"
                class="oneMenu"
              >{{x.category_str}}</li>
            </ul>
          </div>
          <div class="p_right">
            <div class="pr_product">
              <ul>
                <li v-for="(item,index) in info.list" :key="index">
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
            <!--分页-->
            <div class="page">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="info.pageInfo.total"
                :current-page="info.pageInfo.page"
                :page-size="8"
                @current-change="handleCurrentChange"
              ></el-pagination>
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
      if (value.length > 25) {
        return value.slice(0, 25) + "...";
      }
      return value;
    }
  },
  data() {
    return {
      info: {
        list: [],
        pageInfo: {
          page: 1
        }
      },
      cate: {
        cate: []
      },
      shop: {}, //一级分类
      flag: 0,
      // 控制橱窗
      state: {
        status: ""
      }
    };
  },
  created() {
    let _this = this;
    // 分类商品
    _this.api(
      "shop_item/lists",
      {
        user_id: window._global.user_id,
        cate_id: _this.$route.query.cate_id,
        pageParams: { page: _this.info.pageInfo.page, perPage: 8 }
      },
      resp => {
        _this.render(resp.data);
      }
    );
    // 普通分类
    _this.api("shop/cate", { user_id: window._global.user_id }, res => {
      Vue.set(this.shop, "cate0", res.data.cate);
    });
    // 判断state
    _this.api(
      "shop/get_cate_status",
      {
        user_id: window._global.user_id
      },
      res => {
        Vue.set(this.state, "status", res.data.status);
      }
    );
    // 全部分类
    _this.api("shop/cate_all", { user_id: window._global.user_id }, res => {
      Vue.set(this.cate, "cate", res.data);
    });
  },

  watch: {
    $route(to, from) {
      let _this = this;
      _this.info.pageInfo.page = 1;
      _this.$store.commit("loading_show");
      _this.api(
        "shop/item_list",
        {
          user_id: window._global.user_id,
          cate_id: _this.$route.query.cate_id,
          pageParams: { page: _this.info.pageInfo.page, perPage: 8 }
        },
        resp => {
          _this.render(resp.data);
          _this.$store.commit("loading_hide");
        }
      );
    }
  },
  methods: {
    // 普通分类
    style0(index, id) {
      let _this = this;
      _this.flag = index;
      _this.$router.push({
        path: "/cate",
        query: { cate_id: id }
      });
    },
    twoMenu(one) {
      one.flag = !one.flag;
    },
    allgoods() {
      let _this = this;
      // 分类商品
      _this.api(
        "shop_item/lists",
        {
          user_id: window._global.user_id,
          pageParams: { page: _this.info.pageInfo.page, perPage: 8 }
        },
        resp => {
          _this.render(resp.data);
        }
      );
    },

    handleCurrentChange(val) {
      let _this = this;
      if (!this.state.status) {
        _this.api(
          "shop_item/lists",
          {
            user_id: window._global.user_id,
            cate_id: _this.$route.query.cate_id,
            pageParams: {
              page: val,
              perPage: 8
            }
          },
          res => {
            _this.render(res.data);
          }
        );
      } else {
        _this.api(
          "shop/item_list",
          {
            user_id: window._global.user_id,
            cate_id: _this.$route.query.new_cate_id,
            pageParams: {
              page: val,
              perPage: 8
            }
          },
          res => {
            _this.render(res.data);
          }
        );
      }
    }
  }
};
</script>

<style lang="scss">
#product {
  #product-main {
    overflow: hidden;
    .main {
      width: 1200px;
      margin: 0 auto;
      //当前位置
      .location {
        width: 100%;
        display: inline-block;
        padding: 30px 0 20px 0;
        border-bottom: 1px #eaeaea solid;
        p {
          font-size: 16px;
          color: #404040;
          a {
            font-size: 16px;
            color: #404040;
          }
        }
      }
      //内容
      .product_list {
        width: 100%;
        margin-top: 40px;
        .p_left {
          width: 170px;
          float: left;
          margin-right: 60px;
          border: solid 1px #dcdcdc;
          box-sizing: border-box;
          h3 {
            background: #2468b6;
            width: 100%;
            height: 50px;
            line-height: 50px;
            text-align: center;
            font-size: 18px;
            color: #fff;
          }
          ul {
            .oneMenu {
              padding: 15px 0;
              cursor: pointer;
              border-bottom: 1px #dcdcdc solid;
              span {
                cursor: pointer;
                color: #2c80d1;
                font-size: 16px;
              }
            }
            .click {
              color: #2c80d1;
            }
            .oneMenu:last-child {
              border-bottom: none;
            }
            li {
              width: 100%;
              text-align: center;
            }
            .twoMenu {
              a {
                color: #282828;
                font-size: 12px;
                padding: 15px 0 0 0;
                display: inline-block;
              }
            }
            .threeMenu {
              a {
                color: #4a9eff;
                font-size: 12px;
                padding: 15px 0 0 0;
              }
            }
          }
        }
        .p_right {
          width: 970px;
          float: left;
          padding-bottom: 50px;
          .pr_product {
            width: 100%;
            display: inline-block;
            ul {
              width: 100%;
              display: inline-block;
              li {
                width: 225px;
                height: 370px;
                background-color: #ffffff;
                box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.08);
                border: solid 1px #dcdcdc;
                float: left;
                margin-right: 20px;
                margin-bottom: 25px;
                .newHot_img {
                  width: 100%;
                  height: 250px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
                .newHot_text {
                  height: 65px;
                  border-bottom: 1px #e6e6e6 solid;
                  p {
                    padding: 0 10px;
                    box-sizing: border-box;
                    text-overflow: -o-ellipsis-lastline;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    line-clamp: 2;
                    -webkit-box-orient: vertical;
                    color: #0f0f0f;
                    font-size: 12px;
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
                    font-size: 14px;
                    font-weight: 700;
                    float: left;
                  }
                  span {
                    color: #a3a3a3;
                    font-size: 12px;
                    font-weight: 700;
                    float: right;
                  }
                }
              }
              li:nth-child(4n) {
                margin-right: 0;
              }
            }
          }
          .page {
            width: 100%;
            display: inline-block;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>

