<template>
  <a :href="'tel:'+info.shop.tele" class="search">
    <img src="http://files.cailiao.com/vue/lianlv/h5_1/images/tele-ico.png" />
  </a>
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
    _this.api("index/index", { shop_id: window._global.shop_id }, resp => {
      _this.render(resp.data);
    });
  }
};
</script>
<style>
</style>

