<template>
  <!-- toTop -->
  <div class="totop">
    <div class="down" @mouseover="move" @mouseout="leave">
      <div class="t-0"></div>
      <div class="t-1" v-show="flag1">手机号码：{{info.shop.phone}}</div>
    </div>
    <div class="up" v-show="flag2" @click="totop" @mouseover="over" @mouseout="out">
      <div class="t-0" v-show="flag"></div>
      <div class="t-1" v-show="!flag">返回顶部</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: {
          shop:{}
      },
      flag: true,
      flag1: false,
      flag2: false
    };
  },
  created() {
    let _this = this;
    //店铺信息
    _this.api("index/index", { user_id: window._global.user_id }, res => {
      _this.render(res.data);
    });
  },
  mounted() {
    window.addEventListener("scroll", () => {
      var st = document.body.scrollTop || document.documentElement.scrollTop;
      this.flag2 = st > 400;
    });
  },
  methods: {
    totop() {
      window.scrollTo(0, 0);
    },
    over() {
      this.flag = !this.flag;
    },
    out() {
      this.flag = !this.flag;
    },
    move() {
      this.flag1 = true;
    },
    leave() {
      this.flag1 = false;
    }
  }
};
</script>
<style scoped>
.totop {
  width: 42px;
  position: fixed;
  right: 10px;
  bottom: 100px;
  cursor: pointer;
  z-index: 999;
}
.totop .up {
  width: 41px;
  height: 41px;
}
.up .t-0 {
  width: 41px;
  height: 41px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_13/images/t-1.png);
}
.up .t-1 {
  width: 41px;
  height: 41px;
  padding: 0 5px;
  background-color: #29baf2;
  color: #fff;
}
.totop .down {
  width: 41px;
  height: 41px;
  margin-top: 5px;
  position: relative;
}
.down .t-0 {
  width: 41px;
  height: 41px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_13/images/t-2.png);
}
.down .t-1 {
  width: 100px;
  height: 41px;
  color: #fff;
  background: #29baf2;
  position: absolute;
  top: 0;
  left: -100px;
  transition: all 0.5s;
  border-radius: 5px;
  padding: 0 5px;
}
</style>

