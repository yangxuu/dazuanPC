<template>
  <div>
    <div style="height:60px;">
      <div class="container pf b0 l0 r0 page-footer">
        <div class="row">
          <div class="col-xs-12 p-l-0 p-r-0">
            <router-link to="/" class="block pc-20 fl">
              <i class="icon icon-1"></i>
              <span class="txt">首页</span>
            </router-link>
            <router-link to="/list" class="block pc-20 fl">
              <i class="icon icon-2"></i>
              <span class="txt">产品</span>
            </router-link>
            <router-link to="/feedback" class="block pc-20 fl">
              <i class="icon icon-3"></i>
              <span class="txt">咨询</span>
            </router-link>
            <router-link to="/about" class="block pc-20 fl">
              <i class="icon icon-4"></i>
              <span class="txt">企业</span>
            </router-link>
            <a :href="'tel:'+info.shop.tele" class="block pc-20 fl">
              <i class="icon icon-5"></i>
              <span class="txt">电话</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
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
<style scoped>
</style>

