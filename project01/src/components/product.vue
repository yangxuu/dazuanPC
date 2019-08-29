<template>
  <div id="bd">
    <div class="layout">
      <div class="main-wrap">
        <div class="product-title-box box">
          <p class="title">产品中心</p>
          <p class="desc">用心，做好料.</p>
        </div>
        <div class="crumbs-box box">
          <div class="w1200 m-t-40 m-b-30">
            <router-link to="/">首页&nbsp;&gt;</router-link>
            <router-link to="/product">产品中心</router-link>
          </div>
        </div>
        <div class="box no-mb">
          <div class="sort-box w1200 clearfix">
            <span class="title">排序：</span>
            <!--<a  class="item" :class="flag1==false?'ac':'default'"  v-on:click="order_set('price',flag1)">价格</a>-->
            <a  class="item" :class="flag2==false?'ac':'default'" v-on:click="order_set('update_time',flag2)">时间</a>
          </div>
        </div>
        <div class="item-list-box box">
          <div class="w1200">
            <ul class="clearfix">
              <li v-for="(item,key) in info.list" :key="key">
                <router-link :to="{path:'/detail',query:{id:item.id}}">
                  <div class="img">
                    <span>
                      <img :src="item.img" width="260" height="260">
                    </span>
                  </div>
                  <div class="price">￥{{item.price||'面议'}}</div>
                  <div class="title">
                    <span>{{item.title}}</span>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <!-- 分页 -->
        <div class="block w1200">
          <div class="margin">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="info.pageInfo.page"
              :page-size="12"
              small
              background
              layout="prev, pager, next, jumper"
              :total="info.pageInfo.total"
            ></el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import Vue from 'vue'
    export default {

        data() {
            return {
                info: {
                    list: [],
                    pageInfo:{

                    }
                },
                page : 1,
                order : [],
                order_by : "asc",
                flag1 : false,
                flag2 : false,
            }
        },
        created() {
            let _this = this
            _this.api('shop_item/lists', {shop_id:window._global.shop_id, pageParams: {page: _this.page,perPage:12}}, (resp) => {
                _this.render(resp.data)

            })
        },
        methods: {
            handleSizeChange(val) {

            },
            handleCurrentChange(val) {
                let _this = this
                _this.api('shop_item/lists', {shop_id:window._global.shop_id, pageParams: {page: val,perPage:12,order:_this.order,order_by:_this.order_by}}, (resp) => {
                    _this.render(resp.data)
                })

            },
            order_set(event,flag) {
                let _this = this;
                // console.log(flag)
                if(event=="price"){
                    Vue.set(this,'flag1' ,!flag );
                }
                if(event=="update_time"){
                    Vue.set(this,'flag2' ,!flag );
                }
                 if(flag==false){
                     Vue.set(this, 'order_by', "asc");
                 }else {
                     Vue.set(this, 'order_by', "desc");
                 }
                  Vue.set(this, 'order', event);
                  _this.api('shop_item/lists', {shop_id:window._global.shop_id, pageParams: {page: _this.page,perPage:12,order:_this.order,order_by:_this.order_by}}, (resp) => {
                      _this.render(resp.data)
                  })

            }
        },

    };

</script>
<style scoped>
.w1200 {
  width: 1200px;
  margin: 0 auto;
}
.margin {
  width: 400px;
  margin: 50px auto;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
.down-box {
  display: inline-block;
  width: 160px;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
  margin: 10px 20px;
}
.el-dropdown-link {
  color: white;
  font-size: 15px;
  background: #0e0e0e;
  border-radius: 5px;
  display: inline-block;
  width: 100px;
  height: 30px;
  line-height: 30px;
}
</style>
