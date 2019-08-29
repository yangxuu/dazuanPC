<template>
  <div>
    <div id="bd">
      <div class="layout">
        <div class="main-wrap">
          <div class="index-banner-box box">
            <div class="banner-bg">
              <div class="content-box w1200">
                <p class="title">我们的简介(Our Profile)</p>
                <p class="desc" v-html="info.shop.basic_info"></p>
              </div>
            </div>
          </div>
          <div class="box tc p-t-30 p-b-30">
            <p class="f-black fs-24">我们的优势</p>
            <p class="f-grey fs-16 m-t-10">（作为一个企业，自身的优点是我们很重视的元素）</p>
          </div>
          <div class="index-superiority-box box">
            <div class="w1200 oh">
              <ul class="clearfix">
                <li>
                  <div class="title">
                    <img src="http://files.cailiao.com/vue/lianlv/pc_1/images/index-ico-1.png">
                    <span class>优质制造</span>
                  </div>
                  <div class="line"></div>
                  <div class="brief">每一道精心的制作过程，只为带给您优质的体验。不收不良品不做不良品，不出不良品。</div>
                </li>
                <li>
                  <div class="title">
                    <img src="http://files.cailiao.com/vue/lianlv/pc_1/images/index-ico-2.png">
                    <span class>品质保证</span>
                  </div>
                  <div class="line"></div>
                  <div class="brief">供应优质产品，保证产品质量，反对不合格产品优质精神，全员参与；持续改进，持之以恒。</div>
                </li>
                <li>
                  <div class="title">
                    <img src="http://files.cailiao.com/vue/lianlv/pc_1/images/index-ico-3.png">
                    <span class>品质服务</span>
                  </div>
                  <div class="line"></div>
                  <div class="brief">坚持“客户最大”的准则提供贴心服务品质第一，顾客满意，质量是企业的生命之源。</div>
                </li>
                <li>
                  <div class="title">
                    <img src="http://files.cailiao.com/vue/lianlv/pc_1/images/index-ico-4.png">
                    <span class>优质售后</span>
                  </div>
                  <div class="line"></div>
                  <div class="brief">贴心的售后服务，为您一一解答疑难杂惑买品牌，放心；用品牌，舒心——品牌售后网，为您护航！</div>
                </li>
              </ul>
            </div>
          </div>
          <div class="box tc p-t-30 p-b-30">
            <p class="f-black fs-24">商品展示</p>
          </div>
          <div class="index-item-list-box box">
            <div class="w1200">
              <ul class="clearfix">
                <li v-for="(item,key) in info.item_list" :key="key">
                  <router-link :to="{path:'/detail',query:{id:item.id}}" class="item style1 block">
                  <div class="img">
                    <img :src="item.img" width="100%" alt="" >
                  </div>
                  <div class="price">￥{{item.price}}</div>
                  <div class="title">
                    <a href>{{item.title}}</a>
                  </div>
                  </router-link>
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
export default {
  name: "index",
  data() {
    return {
        info: {
            shop: {},
            ad_list: [],
            item_list: [],
        },
    }
  },
  created(){
      let _this = this
      _this.api('index/index', {shop_id:window._global.shop_id}, resp=> {
          _this.render(resp.data)
      });
  }
};
</script>
<style scoped>
  .index-item-list-box li{
    height: 363px;
  }
  .index-item-list-box li .img{
    overflow: hidden;
  }
  .index-item-list-box li .img img{
    width: 100%;
    height: 100%;
  }
  .index-item-list-box li .title{
    width: 100%;
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
