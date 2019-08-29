<template>
  <div class="box">
    <a  :href="shop.mobile" class="imgbg block">
      <img src="../../assets/images/yx_21.png" alt>
    </a>
    <a href="http://www.m.cailiao.com" @click="fresh" class="imgbox">
      <img src="../../assets/images/yx_20.png" alt>
    </a>
    <div class="imgbox" @click="totop" v-show="flag">
      <img src="../../assets/images/yx_19.png" alt>
    </div>
  </div>
</template>
<script>
import Vue from "vue"
export default {
  data() {
    return {
      flag: false,
      shop:{
        mobile:""
      }

    };
  },
  created(){
    let _this=this;
     // 店铺信息
    _this.api("shop/info", { user_id:window._global.user_id }, res => {
      Vue.set(this.shop,"mobile","tel:"+res.data.shop.mobile)
    });
  },
  mounted() {
    window.addEventListener("scroll", () => {
      var st = document.body.scrollTop || document.documentElement.scrollTop;
      this.flag = st > 100;
    });
  },
  methods: {
    totop() {
      window.scrollTo(0, 0);
    },
    fresh() {
      this.$router.push({path:'/'});
    },
    refresh(){
        location.reload()
    }
  }
}
</script>
<style scoped>
.box {
  width: 40px;
  position: fixed;
  right: 10px;
  bottom: 90px;
  z-index: 99999;
}
.box .imgbg {
  width: 38px;
  height: 38px;
  background: #fe9d00;
    border-radius: 3px;
}
.imgbg img{
  width: 27px;
  height: 27px;
  margin-left: 6px;
  margin-top: 5px;
}
.box .imgbox {
  display: block;
  width: 38px;
  height: 38px;
  background:rgba(233, 233, 233, 0.7);
  margin-top: 20px;
  line-height: 38px;
  border-radius: 3px;
}
.imgbox img {
  width: 27px;
  height: 27px;
   margin-left: 6px;
}
</style>
