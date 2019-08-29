<template>
  <div>
    <div class="foot">
      <div class="safe auto">
        <div class="col">
          <img class="place" src="http://files.cailiao.com/vue/lianlv/pc_2/images/place.png" alt />
          <span>地址：{{info.shop.address}}</span>
        </div>
        <div class="col">
          <img class="phone" src="http://files.cailiao.com/vue/lianlv/pc_2/images/phone.png" alt />
          <span>联系电话：{{info.shop.phone}}</span>
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
    // 请求后台资源并放到list中
    let _this = this;
    _this.api("index/index", { shop_id: window._global.shop_id }, resp => {
      _this.render(resp.data);
    });
  }
};
</script>
<style scoped>
.foot {
  height: 55px;
  width: 100%;
  background-color: #515151;
}
.safe {
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #bebebe;
}
.col {
  margin: 0 17.5px;
}
.wx {
  width: 25px;
  height: 20px;
}
.place {
  width: 22px;
  height: 22px;
}
.phone {
  width: 23px;
  height: 23px;
}
</style>

