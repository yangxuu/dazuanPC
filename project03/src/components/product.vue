<template>
  <div>
    <div class="container safe auto">
      <div class="fenlei-box">
        <span v-for="(item,index) in cate.cate" :key="index" class="padding">
          <button
            @click="style(index,item.id)"
            :class="flag==index?'active-btn':'default'"
            class="fenlei-btn"
          >{{item.name}}</button>
        </span>
      </div>
      <!-- 商品 -->
      <div class="goods-box">
        <router-link
          class="goods-item"
          :to="{path:'/detail',query:{id:item.id}}"
          v-for="(item,index) in info.list"
          :key="index"
        >
          <div class="item-img">
            <img :src="item.img" alt />
          </div>
          <div class="item-brands">
            <div class="item-name">{{item.title}}</div>
            <div class="item-price">￥{{item.price}}</div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="safe auto">
      <div class="page">
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
</template>
<script>
import Vue from "vue";
export default {
  data() {
    return {
      flag: 0, // 点击分类
      // 商品
      info: {
        list: [],
        pageInfo: {}
      },
      // 产品分类
      cate: {
        cate: []
      },
      page: 1,
      flag1: false,
      flag2: false
    };
  },
  created() {
    let _this = this;
    // 产品分类
    _this.api(
      "shop/cate",
      {
        shop_id: window._global.shop_id,
        limit: 3
      },
      resp => {
        Vue.set(this.cate, "cate", resp.data.cate);
      }
    );
    // 默认商品
    _this.api(
      "shop/item_list",
      {
        shop_id: window._global.shop_id,
        pageParams: { page: _this.info.pageInfo.page, perPage: 12 }
      },
      resp => {
        _this.render(resp.data);
      }
    );
  },
  // watch: {
  //   $route(to, from) {
  //     let _this = this;
  //     _this.info.pageInfo.page = 1;
  //     _this.api(
  //       "shop/item_list",
  //       {
  //         shop_id: window._global.shop_id,
  //         cate_id: _this.$route.query.cate_id,
  //         pageParams: { page: _this.info.pageInfo.page, perPage: 12 }
  //       },
  //       resp => {
  //         _this.render(resp.data);
  //       //  location.reload()
  //       }
  //     );
  //   }
  // },
  methods: {
    // 点击分类
    style(index, id) {
      this.flag = index;
      let _this = this;
      // 分类商品
      _this.$store.commit("loading_show");
      _this.api(
        "shop/item_list",
        {
          shop_id: window._global.shop_id,
          cate_id: id,
          pageParams: { page: _this.page, perPage: 12 }
        },
        resp => {
          _this.render(resp.data);
          _this.$store.commit("loading_hide");
        }
      );
    },

    handleSizeChange(val) {},
    handleCurrentChange(val) {
      let _this = this;
      _this.api(
        "shop/item_list",
        {
          shop_id: window._global.shop_id,
          pageParams: {
            page: val,
            perPage: 12
          }
        },
        resp => {
          _this.render(resp.data);
        }
      );
    }
  }
};
</script>

<style scoped>
/* 分类 */
.fenlei-box {
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
.fenlei-btn {
  color: #7f7f7f;
  font-size: 16px;
  background: #fff;
  border: none;
  outline: 0;
  cursor: pointer;
  height: 28px;
  padding: 0 10px;
  background: #fff;
  border-radius: 2px;
  margin: 0 10px;
}
/* .padding {
  display: block;
  height: 10px;
  border-right: 1px solid #979797;
} */
.fenlei-btn:hover {
  color: #ffffff;
  background: rgba(116, 116, 116, 1);
}
.active-btn {
  color: #ffffff;
  background: rgba(116, 116, 116, 1);
}

/* 商品 */
.goods-box {
  overflow: hidden;
}
.goods-item {
  display: block;
  width: 275px;
  overflow: hidden;
  float: left;
  opacity: 1;
  margin: 20px 12.5px;
}
.item-img {
  width: 100%;
  height: 246px;
  overflow: hidden;
}
.item-img img {
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in;
}
.item-img:hover img {
  transform: scale(1.2);
}
.item-brands {
  width: 100%;
  background: #fff;
  padding: 10px;
  color: #575757;
  height: 67px;
  font-size: 16px;
}
.item-name {
  height: 25px;
  text-align: center;
  line-height: 25px;
  padding: 0 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.item-price {
  height: 25px;
  text-align: center;
  line-height: 25px;
}
.goods-item:hover .item-brands {
  background: #434343;
  color: #fff;
  border: none;
}
/* 分页 */
.page {
  width: 300px;
  margin: 100px auto;
}
</style>