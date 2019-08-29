<template>
  <div id="leave">
    <div class="leave_top">
      <div class="leave_news">
        <div class="leaveT_right">
          <ul>
            <div class="liaotian_left">
              <li>
                <div class="via">
                  <div class="leaveT_left">
                    <img :src="info.shop.logo" />
                  </div>
                  <div class="leaveT_name">
                    <h4>
                      {{info.shop.link_manage}}
                      <span>{{hour}}:{{min}}:{{seconds}}</span>
                    </h4>
                    <div class="leaveT_text">
                      <i class="arrows"></i>
                      <p>您好，欢迎光临{{info.shop.enterprise_name}}，请发送您要的咨询的内容。</p>
                    </div>
                  </div>
                </div>
              </li>
            </div>
            <div class="liaotian_right">
              <li v-for="(item,index) in message_array" :key="index">
                <div class="via">
                  <div class="leaveT_name">
                    <h4>
                      我
                      <span>{{hour}}:{{min}}:{{seconds}}</span>
                    </h4>
                    <div class="leaveT_text_right">
                      <i class="arrows"></i>
                      <p>{{item}}</p>
                      <div class="leaveT_left">
                        <img src="http://files.cailiao.com/vue/cailiao/pc_22/images/user.jpg" />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>

    <div class="leave_bottom">
      <div class="leave_textarea">
        <el-input
          type="textarea"
          :rows="3"
          maxlength="1000"
          placeholder="点击输入您要采购的产品及其他要求"
          v-model="textarea"
        ></el-input>
      </div>
      <div class="leave_submit">
        <el-input ref="bordername" @focus="style1" v-model="contact" placeholder="联系人"></el-input>
        <el-input ref="bordertel" @focus="style" v-model="tel" maxlength="11" placeholder="电话/微信"></el-input>
        <el-button class="send" @click="dealMessage()">发送</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 店铺信息
      info: {
        shop: {}
      },
      textarea: "",
      contact: "",
      tel: "",
      message_array: [],
      hour: "",
      min: "",
      seconds: ""
    };
  },
  created() {
    let _this = this;
    // 店铺信息
    _this.api("index/index", { user_id: window._global.user_id }, res => {
      _this.render(res.data);
    });
  },
  methods: {
    dealMessage() {
      if (this.tel && this.textarea && this.contact) {
        if (/^1\d{10}$/.test(this.tel)) {
          this.message_array.push(this.textarea);
          let _this = this;
          // 店铺信息
          _this.api(
            "shop_item/consult",
            {
              user_id: window._global.user_id,
              name: _this.contact,
              tel: _this.tel,
              content: _this.textarea,
              goods_id: 0,
              type:1
            },
            res => {
              this.textarea = "";
              this.contact = "";
              this.tel = "";
            }
          );
        } else {
          this.$refs.bordertel.$refs.input.style.border = "1px solid red";
        }
      }
      if (!this.contact) {
        this.$refs.bordername.$refs.input.style.border = "1px solid red";
      }
      if (!this.tel) {
        this.$refs.bordertel.$refs.input.style.border = "1px solid red";
      }
    },
    style() {
      this.$refs.bordertel.$refs.input.style.border = "1px solid #C0C4CC";
    },
    style1() {
      this.$refs.bordername.$refs.input.style.border = "1px solid #C0C4CC";
    }
  },
  mounted() {
    var myDate = new Date(); //实例一个时间对象
    this.hour = myDate.getHours(); //获取系统时，
    this.min = myDate.getMinutes(); //分
    this.seconds = myDate.getSeconds(); //秒
  }
};
</script>

<style lang="scss">
#leave {
  .leave_top {
    background: #f2f2f2;
    .leave_news {
      height: 340px;
      overflow-y: auto;
      display: flex;
      padding: 15px 20px;
      box-sizing: border-box;
      .leaveT_left {
        float: left;
        width: 35px;
        height: 35px;
        background: #fff;
        border-radius: 50%;
        text-align: center;
        line-height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        overflow: hidden;
        img {
          max-width: 100%;
          max-height: 100%;
          box-sizing: border-box;
        }
      }
      .leaveT_right {
        float: left;
        width: 100%;

        ul {
          width: 100%;
          display: inline-block;
          .liaotian_left {
            li {
              margin-bottom: 15px;
              .via {
                display: inline-block;
                width: 100%;
              }
              .leaveT_name {
                margin-bottom: 5px;
                float: left;
                h4 {
                  font-size: 14px;
                  color: #2d2d2d;
                  font-weight: 500;
                  text-align: left;
                  span {
                    font-size: 12px;
                    color: #999999;
                    margin-left: 5px;
                  }
                }
              }
              .leaveT_text {
                background: #fff;
                border: 1px #ededed solid;
                padding: 10px;
                box-sizing: border-box;
                max-width: 400px;
                position: relative;
                border-radius: 3px;
                p {
                  font-size: 14px;
                  color: #333333;
                  line-height: 24px;
                }
                i {
                  width: 0px;
                  height: 0px;
                  border-top: 10px solid rgba(0, 0, 0, 0);
                  border-right: 10px solid rgba(0, 0, 0, 0);
                  border-bottom: 10px solid #fff;
                  border-left: 10px solid rgba(0, 0, 0, 0);
                  position: absolute;
                  left: -20px;
                  transform: rotate(270deg);
                }
              }
            }
          }
          .liaotian_right {
            // text-align: right;
            float: right;
            li {
              margin-bottom: 15px;
              .via {
                display: inline-block;
                width: 100%;
                position: relative;
              }
              .leaveT_name {
                margin-bottom: 5px;
                float: right;
                h4 {
                  font-size: 14px;
                  color: #2d2d2d;
                  font-weight: 500;
                  text-align: right;
                  span {
                    font-size: 12px;
                    color: #999999;
                    margin-left: 5px;
                  }
                }
              }
              .leaveT_text_right {
                background: #9eea6a;
                border: 1px #ededed solid;
                padding: 10px;
                box-sizing: border-box;
                max-width: 400px;
                position: relative;
                border-radius: 3px;
                margin-top: 10px;
                margin-right: 40px;
                p {
                  font-size: 14px;
                  color: #333333;
                  line-height: 24px;
                }
                i {
                  width: 0px;
                  height: 0px;
                  border-top: 10px solid rgba(0, 0, 0, 0);
                  border-right: 10px solid rgba(0, 0, 0, 0);
                  border-bottom: 10px solid #9eea6a;
                  border-left: 10px solid rgba(0, 0, 0, 0);
                  position: absolute;
                  right: -20px;
                  transform: rotate(90deg);
                }
                .leaveT_left {
                  position: absolute;
                  right: -55px;
                  top: 4px;
                  background: transparent;
                }
              }
            }
          }
        }
      }
    }
  }
  .leave_bottom {
    background: #fff;
    .leave_textarea {
      height: 110px;
      padding: 10px 0;
      .el-textarea {
        height: 100px;
        textarea {
          height: 100px;
          border: none;
          resize: none;
          box-sizing: border-box;
        }
      }
    }
    .leave_submit {
      padding: 0 15px;
      box-sizing: border-box;
      .el-input {
        width: 220px;
        float: left;
        margin-right: 15px;
        height: 32px;
        input {
          height: 32px;
        }
      }
      .send {
        width: 118px;
        height: 32px;
        background: #ff6600;
        border: none;
        padding: 0;
        span {
          font-size: 14px;
          color: #fff;
        }
      }
    }
  }
}
</style>