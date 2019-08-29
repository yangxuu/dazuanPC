<template>
  <div id="CommonHeader">
    <!--顶部-->
    <div id="top-wrapper">
      <div class="top">
        <div class="top_login">
          <span>Hi，欢迎来材料网~</span>
          <a href="http://my.cailiao.com/member/login/index.html" class="login">【请登录】</a>
          <a href="http://my.cailiao.com/member/login/register.html" class="register">【免费注册】</a>
        </div>
        <div class="top_right">
          <div class="linkIndex">
            <ul>
              <li>
                <a href="http://www.114my.cn/">
                  <i class="oHome"></i>
                  <span>企讯网首页</span>
                </a>
              </li>
              <li>
                <a href="http://my.cailiao.com/member/login/index.html">
                  <i class="vip"></i>
                  <span>会员中心</span>
                </a>
              </li>
              <li>
                <a href="http://www.cailiao.com/about/help">
                  <span>帮助中心</span>
                </a>
              </li>
              <li>
                <a href="http://www.cailiao.com/about/product">
                  <span>黄金广告位</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="border"></div>

          <!--网站导航-->
          <div class="siteNav" @mouseleave="pullShow = false">
            <div class="siteNavText" @mouseenter="pullShow = true">
              <a href="javascript:;">
                <i class="navIcon"></i>
                <span>网站导航</span>
                <i class="down"></i>
              </a>
            </div>
            <div class="pull_down" v-if="pullShow">
              <a href="http://www.cailiao.com/tradeinfo/">供应库</a>
              <a href="http://www.cailiao.com/seller/">求购中心</a>
              <a href="http://www.cailiao.com/productshow/">产品</a>
              <a href="http://www.cailiao.com/corporation/">黄页</a>
              <a href="http://www.cailiao.com/info/">资讯</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--头部内容-->
    <div id="header-wrapper">
      <div class="header">
        <!-- 默认企讯网logo -->
        <div class="logo" v-show="info.shop.logo_supply==''?true:false">
          <a href="http://www.cailiao.com/">
            <img src="http://files.cailiao.com/cdn/static/pc/images/qx_cl_logo.png" alt />
          </a>
        </div>
        <!-- 用户上传了logo -->
        <div class="logo" v-show="info.shop.logo_supply==''?false:true">
          <!-- 用户有店铺地址 -->
          <a v-show="info.shop.user_url==''?false:true" :href="info.shop.user_url">
            <img :src="info.shop.logo_supply" alt />
          </a>
          <!-- 无地址跳本站首页 -->
          <router-link v-show="info.shop.user_url==''?true:false" to="/">
            <img :src="info.shop.logo_supply" alt />
          </router-link>
        </div>

        <div class="company">
          <h3>{{info.shop.enterprise_name}}</h3>
          <div class="huiyuan">
            <ul>
              <li>
                <i class="yun"></i>
                <span>
                  AI云网通 第
                  <small>1</small>年
                </span>
              </li>
              <li>
                <i class="v"></i>
                <span>实力认证</span>
              </li>
              <li>
                <i class="qi"></i>
                <span>认证企业</span>
              </li>
              <li>
                <i class="qrcode"></i>
                <span>移动店铺</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="searchInput">
          <div class="se_in">
            <el-input type="text" v-model="searchValue" placeholder="输入关键词"></el-input>
            <div class="select_down" @mouseleave="AccessLeave()">
              <a href="javascript:;" @mouseenter="AccessSeenter()">
                <span ref="innerhtml">供应</span>
                <i class="down"></i>
              </a>
              <div class="select_down_c" v-if="Access">
                <dl>
                  <dd @click="selected('供应','supply')">
                    <a href="#">供应</a>
                  </dd>
                  <dd @click="selected('求购','purchase')">
                    <a href="#">求购</a>
                  </dd>
                  <dd @click="selected('公司','company')">
                    <a href="#">公司</a>
                  </dd>
                  <dd @click="selected('资讯','news')">
                    <a href="#">资讯</a>
                  </dd>
                </dl>
              </div>
            </div>
            <div class="keywords">
              <a href="http://gongchengjixiejianzhujixie.cailiao.com/" class="active">工程机械</a>
              <a href="http://huanbao.cailiao.com/" class="active">环保</a>
              <a href="http://wujin.cailiao.com/">五金</a>
              <a href="http://huagong.cailiao.com/">化工</a>
              <a href="http://anquan.cailiao.com/">安全</a>
            </div>
          </div>
          <div class="se_in_btn" @click="search">
            <span>搜索</span>
          </div>
          <div class="issue">
	          <a href="http://my.cailiao.com/member/login/index.html">发布供应</a>
	        </div>
        </div>
      </div>
    </div>

    <!--公司内容-->
    <div id="company-wrapper">
      <div class="company">
        <div class="companyName">
          <h3>{{info.shop.enterprise_name}}</h3>
          <p>To provide you with the best quality goods and services</p>
        </div>
        <div class="companyTel">
          <div class="TelIcon">
            <i></i>
          </div>
          <div class="TelText">
            <p class="p1">联系电话：</p>
            <p class="p2">{{info.shop.mobile}}</p>
          </div>
        </div>
        <div class="qrcode" @click="clickShowLeave()">
          <a href="javascript:;">
            <img src="http://files.cailiao.com/vue/cailiao/pc_22/images/qrcode.png" />
          </a>
        </div>
        <div class="zhanxian">
          <ul>
            <li>
              <i class="icon01"></i>
              <p class="iconColor1">如实描述</p>
            </li>
            <li>
              <i class="icon02"></i>
              <p class="iconColor2">用心服务</p>
            </li>
            <li>
              <i class="icon03"></i>
              <p class="iconColor3">品质保障</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!--导航-->
    <div id="nav-wrapper">
      <div class="nav">
        <ul id="menu">
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <!-- 开启了橱窗 -->
          <router-link to="/newcate" v-show="state.status">
            <li
              class="firstLevel"
              @click="style(index)"
              :class="flag==index?'activeli':'default'"
              v-for="(firstList,index) in cate.cate.cate"
              :key="index"
            >
              <span>{{firstList.name}}</span>
              <ul v-if="firstList.children.length>0" id="two">
                <li
                  class="secondLevel"
                  v-for="(secondList,index) in firstList.children"
                  :key="index"
                >
                  <router-link
                    :to="{path:'/newcate',query:{new_cate_id:secondList.id}}"
                  >{{secondList.name}}</router-link>
                </li>
              </ul>
            </li>
          </router-link>
          <!-- 未开启橱窗 -->
          <li v-show="!state.status" @click="toproduct">
            <router-link to="/productcenter">产品中心</router-link>
          </li>
          <li>
            <router-link to="/contact">联系我们</router-link>
          </li>
          <li>
            <router-link to="/introduce">公司介绍</router-link>
          </li>
          <li>
            <router-link to="/credit">诚信档案</router-link>
          </li>
        </ul>
      </div>
    </div>

    <!--在线留言-->
    <el-dialog
      :title="companyName.companyName"
      v-if="ShowLeave"
      :visible.sync="ShowLeave"
      custom-class="leave"
      :close-on-click-modal="false"
      width="620px"
    >
      <Leave></Leave>
    </el-dialog>
  </div>
</template>

<script>
import Vue from "vue";
import Leave from "../common/leave";
export default {
  components: { Leave },
  data() {
    return {
      pullShow: false, //网站导航
      searchValue: "", //input输入框
      Access: false, //搜索框左侧
      companyName: {companyName:''},//留言公司名称
      ShowLeave: false,//是否显示留言蒙层
      flag: -1, //分类背景色
      // 店铺信息
      info: {
        shop: {}
      },
      // 分类字段
      cate: {
        cate: []
      },
      // 搜索类型
      type: "",
      // 控制橱窗
      state: {
        status: ""
      }
    };
  },
  created() {
    let _this = this;
    // 店铺信息
    _this.api("index/index", { user_id: window._global.user_id }, res => {
      _this.render(res.data);
      Vue.set(this.companyName, "companyName", res.data.shop.enterprise_name);
    });
    // 全部分类
    _this.api(
      "shop/cate_all",
      { user_id: window._global.user_id, limit: 5 },
      res => {
        Vue.set(this.cate, "cate", res.data);
      }
    );
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
  },
  methods: {
    //移入
    AccessSeenter() {
      this.Access = true;
    },
    //移出
    AccessLeave() {
      this.Access = false;
    },
    clickShowLeave() {
      this.ShowLeave = true;
    },
    // 点击分类
    style(index) {
      this.flag = index;
    },
    // 去产品中心
    toproduct() {
      let _this = this;
      _this.flag = true;
      _this.$router.push({
        path: "/productcenter"
      });
    },
    // 搜索
    search() {
      window.location.href =
        "http://www.cailiao.com/frontend/Search/index?keyword=" +
        this.searchValue +
        "&search_type=" +
        this.type;
    },
    // 选择搜索类型
    selected(value, type) {
      this.$refs.innerhtml.innerHTML = value;
      this.type = type;
    }
  }
};
</script>

<style lang="scss">
#CommonHeader {
  /*顶部*/
  #top-wrapper {
    height: 30px;
    background: #333;
    .top {
      width: 1200px;
      margin: 0 auto;
      .top_login {
        float: left;
        height: 30px;
        line-height: 30px;
        span {
          color: #fff;
          font-size: 12px;
          float: left;
        }
        a {
          float: left;
        }
        .login {
          color: #47c2fb;
          font-size: 12px;
        }
        .register {
          color: #ff5f00;
          font-size: 12px;
        }
      }
      .top_right {
        float: right;
        height: 30px;
        line-height: 30px;
        .linkIndex {
          float: left;
          height: 30px;
          padding: 0 20px;
          box-sizing: border-box;
          ul {
            display: inline-block;
            li {
              float: left;
              margin-right: 18px;
              a {
                font-size: 12px;
                color: #fff;
                .oHome {
                  width: 13px;
                  height: 13px;
                  background: url("http://files.cailiao.com/vue/cailiao/pc_22/images/qx-index.png")
                    no-repeat;
                  display: inline-block;
                  position: relative;
                  top: 1px;
                }
                .vip {
                  width: 12px;
                  height: 12px;
                  background: url("http://files.cailiao.com/vue/cailiao/pc_22/images/h-1.png")
                    no-repeat;
                  position: relative;
                  display: inline-block;
                  top: 1px;
                }
              }
              a:hover {
                span {
                  color: #47c2fb;
                }
              }
            }
          }
        }
        .border {
          float: left;
          width: 1px;
          height: 14px;
          background: #999;
          margin-top: 8px;
        }
        .siteNav {
          float: left;
          margin-left: 30px;
          margin-right: 30px;
          .siteNavText {
            position: relative;
            z-index: 2;
            a {
              .navIcon {
                width: 12px;
                height: 10px;
                background: url("http://files.cailiao.com/vue/cailiao/pc_22/images/h-2.png")
                  no-repeat;
                position: relative;
                display: inline-block;
                top: 1px;
              }
              span {
                font-size: 12px;
                color: #fff;
              }
              .down {
                width: 6px;
                height: 4px;
                background: url("http://files.cailiao.com/vue/cailiao/pc_22/images/h-3.png")
                  no-repeat;
                display: inline-block;
                position: relative;
                top: -1px;
              }
            }
            a:hover {
              span {
                color: #47c2fb;
              }
            }
          }

          .pull_down {
            background: #fff;
            position: absolute;
            padding: 0 10px;
            box-sizing: border-box;
            width: 210px;
            height: 40px;
            line-height: 40px;
            margin-left: -100px;
            border: 1px solid #e9e9e9;
            margin-top: -1px;
            z-index: 1;
            a {
              color: #999;
              font-size: 12px;
            }
            a:hover {
              color: #47c2fb;
            }
          }
        }
      }
    }
  }

  /*头部logo那一块*/
  #header-wrapper {
    height: 94px;
    background: #fff;
    border-bottom: 1px solid #ff6c00;
    .header {
      width: 1200px;
      margin: 0 auto;
      //logo
      .logo {
        float: left;
        margin-top: 23.5px;
        border-right: 1px solid #e3e3e3;
        padding-right: 24px;
        a {
          width: auto;
          height: 47px;
          display: inline-block;
          position: relative;
          img {
            width: auto;
            height: 100%;
            max-width: 251px;
          }
        }
      }
      //公司名称
      .company {
        float: left;
        padding: 0 25px;
        margin-top: 23px;
        margin-left: 5px;
        h3 {
          font-size: 15px;
          color: #1b1b1b;
          font-weight: bold;
          margin: 0 0 10px 0;
        }
        .huiyuan {
          float: left;
          ul {
            li {
              float: left;
              margin-right: 23px;
              .yun {
                width: 16px;
                height: 19px;
                background: url("http://files.cailiao.com/vue/cailiao/pc_22/images/qx-ico1.png")
                  no-repeat;
                background-size: 16px 19px;
                display: inline-block;
                position: relative;
              }
              .v {
                width: 16px;
                height: 19px;
                background: url("http://files.cailiao.com/vue/cailiao/pc_22/images/qx-ico2.png")
                  no-repeat;
                background-size: 16px 19px;
                display: inline-block;
                position: relative;
              }
              .qi {
                width: 16px;
                height: 19px;
                background: url("http://files.cailiao.com/vue/cailiao/pc_22/images/qx-ico3.png")
                  no-repeat;
                background-size: 16px 19px;
                display: inline-block;
                position: relative;
              }
              .qrcode {
                width: 15px;
                height: 15px;
                background: url("http://files.cailiao.com/vue/cailiao/pc_22/images/qx-ico4.png")
                  no-repeat;
                background-size: 15px 15px;
                display: inline-block;
                position: relative;
                top: 2px;
              }
              i {
                float: left;
                margin-right: 5px;
              }
              span {
                color: #343434;
                font-size: 12px;
              }
            }
          }
        }
      }
      //input框
      .searchInput {
        float: right;
        margin-top: 23px;
        margin-left: 15px;
        .se_in {
          width: 295px;
          height: 43px;
          border: 1px #0167bc solid;
          background: #fff;
          position: relative;
          padding: 5px 0;
          box-sizing: border-box;
          float: left;
          .el-input {
            padding-left: 58px;
            width: 230px;
            height: 30px;

            .el-input__inner {
              border: none;
              background: transparent;
              height: 30px;
              border-left: 1px solid #e3e3e3;
            }
          }
          .select_down {
            box-sizing: border-box;
            // padding: 3px 5px 3px 15px;
            position: absolute;
            left: 0;
            top: 0;
            width: 58px;
            height: 42px;
            line-height: 39px;
            a {
              padding-left: 16px;
              span {
                font-size: 13px;
                color: #666;
                margin-right: 5px;
              }
              .down {
                width: 6px;
                height: 4px;
                background: url("http://files.cailiao.com/vue/cailiao/pc_22/images/h-3.png")
                  no-repeat;
                display: inline-block;
                position: relative;
                top: -1px;
              }
            }
          }
          //供应下拉内容
          .select_down_c {
            width: 58px;
            position: absolute;
            top: 41px;
            background: #fff;
            border: 1px solid #0167bc;
            left: -1px;
            box-sizing: border-box;
            z-index: 2;
            border-top: none;
            dl {
              margin: 0;
              dd {
                margin: 0;
                text-align: center;
                height: 30px;
                line-height: 30px;
                a {
                  padding-left: 0;
                  color: #666;
                  font-size: 12px;
                }
                a:hover {
                  color: #47c2fb;
                }
              }
            }
          }
          .keywords {
            margin-top: 10px;
            a {
              font-size: 12px;
              padding: 0 8px;
              color: #cbcbcb;
            }
            .active {
              color: #ff702a;
            }
          }
        }
        .se_in_btn {
          float: left;
          width: 67px;
          height: 43px;
          background: #0167bc;
          text-align: center;
        }
        .se_in_btn span {
          display: inline-block;
          text-align: center;
          line-height: 43px;
          font-size: 15px;
          color: #fff;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
      }

      //发布供应
      .issue {
        float: right;
        width: 76px;
        height: 43px;
        border: 1px #e5e5e5 solid;
        background: #ffffff;
        text-align: center;
        line-height: 43px;
        margin-left: 10px;
        box-sizing: border-box;
        a {
          width: 100%;
          height: 100%;
          display: inline-block;
          color: #666666;
          font-size: 15px;
        }
      }
    }
  }

  /*公司内容*/
  #company-wrapper {
    width: 100%;
    height: 146px;
    background: url("http://files.cailiao.com/vue/cailiao/pc_22/images/qx-ban.png")
      no-repeat;
    background-size: 100% 100%;
    .company {
      width: 1200px;
      margin: 0 auto;
      .companyName {
        float: left;
        margin-top: 43px;
        h3 {
          color: #222222;
          font-size: 24px;
          font-weight: 500;
        }
        p {
          color: #ff702a;
          font-size: 13px;
          margin-top: 5px;
        }
      }
      .companyTel {
        float: left;
        margin-left: 145px;
        margin-top: 45px;
        .TelIcon {
          float: left;
          i {
            width: 50px;
            height: 50px;
            background: url("http://files.cailiao.com/vue/cailiao/pc_22/images/tel.gif")
              no-repeat;
            display: inline-block;
          }
        }
        .TelText {
          float: left;
          margin-left: 10px;
          .p1 {
            font-size: 20px;
            color: #1b1b1b;
            font-weight: bold;
          }
          .p2 {
            font-size: 24px;
            color: #d81e06;
            font-weight: bold;
          }
        }
      }
      .qrcode {
        float: left;
        margin-left: 35px;
        margin-top: 30px;
      }
      .zhanxian {
        float: right;
        margin-left: 10px;
        margin-top: 35px;
        ul {
          display: inline-block;
          li {
            float: left;
            height: 80px;
            margin: 0 20px;
            i {
              width: 50px;
              height: 50px;
            }
            p {
              font-size: 12px;
              margin-top: 8px;
            }
            .icon01 {
              background: url("http://files.cailiao.com/vue/cailiao/pc_22/images/qx-ico5.png")
                no-repeat;
              display: inline-block;
              background-size: 100%;
            }
            .iconColor1 {
              color: #d41817;
            }
            .icon02 {
              background: url("http://files.cailiao.com/vue/cailiao/pc_22/images/qx-ico6.png")
                no-repeat;
              display: inline-block;
              background-size: 100%;
            }
            .iconColor2 {
              color: #4f30dc;
            }
            .icon03 {
              background: url("http://files.cailiao.com/vue/cailiao/pc_22/images/qx-ico7.png")
                no-repeat;
              display: inline-block;
              background-size: 100%;
            }
            .iconColor3 {
              color: #ff702a;
            }
          }
        }
      }
    }
  }

  /*导航*/
  #nav-wrapper {
    height: 42px;
    background-color: #2468b6;
    width: 100%;
    .nav {
      width: 1200px;
      margin: 0 auto;
      height: 42px;
      line-height: 42px;
      #menu {
        display: flex;
        position: relative;
        #two {
          position: absolute;
          width: 100%;
          background: #2c80d1;
          .secondLevel {
            width: 100%;
            height: 40px;
            line-height: 40px;
            box-sizing: border-box;
            #three {
              position: absolute;
              left: 120px;
              top: 0;
              background: #1873cc;
              width: 120px;
              text-align: center;
              li {
                width: 100%;
                display: inline-block;
                height: 40px;
                line-height: 40px;
                a {
                  display: block;
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }
      }
      .firstLevel {
        position: relative;
        min-width: 120px;
        cursor: pointer;
      }
      .secondLevel {
        display: none;
      }
      .secondLevel a {
        font-size: 14px;
      }
      .firstLevel:hover .secondLevel {
        display: block;
      }
      .thirdLevel {
        display: none;
      }
      .thirdLevel a {
        font-size: 14px;
      }
      .secondLevel:hover .thirdLevel {
        display: block;
      }
      ul {
        li {
          float: left;
          text-align: center;
          width: 120px;
          a {
            display: block;
            width: 100%;
            color: #ffffff;
            font-size: 16px;
          }
          span {
            display: block;
            width: 100%;
            color: #ffffff;
            font-size: 16px;
          }
          .router-link-exact-active {
            background: #2c80d1;
          }
          .two {
            position: absolute;
          }
        }
        .activeli {
          background: #2c80d1;
        }

        li:hover {
          background: #2c80d1;
        }
      }
    }
  }

  //在线留言
  .leave {
    width: 626px;
    height: 575px;
    .el-dialog__header {
      padding: 0 15px;
      height: 60px;
      line-height: 60px;
      border-bottom: 1px #e6e6e6 solid;
      .el-dialog__title {
        font-size: 18px;
        color: #575757;
      }
      .el-dialog__headerbtn {
        i {
          font-size: 25px;
        }
      }
    }
    .el-dialog__body {
      padding: 0;
    }
  }
}
</style>

