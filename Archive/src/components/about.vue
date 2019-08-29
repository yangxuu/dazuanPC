<template>
  <div>
    <div class="pos-fix-box">
      <div class="page-title-box b-b-1">
        <tele/>
        <div class="text">{{info.shop.name}}</div>
      </div>
    </div>
    <div class="container">
      <div class="row bg-white m-b-10">
        <div class="col-xs-12">
          <div class="index-header-box m-t-5">
            <span class="box">
              <p class="name">公司介绍</p>
              <p class="text">Introduce</p>
            </span>
          </div>
        </div>
        <div class="col-xs-12 pd10 f-grey lh-18">
          <span v-html="info.shop.content"></span>
        </div>
      </div>
      <div class="row bg-white m-b-10">
        <div class="col-xs-12">
          <div class="index-header-box m-t-3">
            <span class="box">
              <p class="name">企业信息</p>
              <p class="text">Information</p>
            </span>
          </div>
        </div>
        <div class="table">
          <tr v-for="(item,key) in info.shop.business_registration" :key="key">
            <td class="title">{{key}}</td>
            <td class="des">{{item}}</td>
          </tr>
        </div>
      </div>
      <div class="row bg-white">
        <div class="col-xs-12">
          <div class="index-header-box m-t-3">
            <span class="box">
              <p class="name">企业风采</p>
            </span>
          </div>
        </div>
        <div class="col-xs-12 pd10">
          <img src="http://files.cailiao.com/vue/lianlv/h5_1/images/asset6.jpg" class="m-t-3" width="100%">
          <img src="http://files.cailiao.com/vue/lianlv/h5_1/images/asset5.jpg" class="m-t-3" width="100%">
          <img src="http://files.cailiao.com/vue/lianlv/h5_1/images/asset4.jpg" class="m-t-3" width="100%">
        </div>
      </div>
      <copyright/>
    </div>
  </div>
</template>

<script>
import tele from "./common/tele";
import copyright from "./common/copyright";
export default {
  components: { tele, copyright },
  data() {
    return {
      info: {
        shop: {
          business_registration: {}
        }
      }
    };
  },
  created() {
    let _this = this;
    _this.api("shop/info", { shop_id: window._global.shop_id }, res => {
      _this.render(res.data);
    });
  }
}
</script>
<style scoped>
</style>
