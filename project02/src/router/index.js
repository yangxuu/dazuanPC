import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import product from '@/components/product'
import introduce from '@/components/introduce'
import news from '@/components/news'
import detail from '@/components/detail'
import newsdetail from '@/components/newsdetail'
import ErrPage from '@/components/common/ErrPage'

Vue.use(Router)

export default new Router({
    mode:"history",
    routes: [
      {
        path: '/',
        name: 'index',
        component: index
      },
      {
        path: '/product',
        name: 'product',
        component: product
      },
      {
        path: '/introduce',
        name: 'introduce',
        component: introduce
      },
      {
        path: '/news',
        name: 'news',
        component: news
      },
      {
        path: '/newsdetail',
        name: 'newsdetail',
        component: newsdetail
      },
      {
        path: '/detail',
        name: 'detail',
        component: detail
      },
      {
        path: '*',
        component: ErrPage
      }
    ]
})
