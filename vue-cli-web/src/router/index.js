import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'  //shouye
import Product from "../components/product.vue"  //product
import Credit from "../components/credit.vue"  //credit

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/credit',
      name: 'credit',
      component: Credit
    },
  ]
})
