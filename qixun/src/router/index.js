import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'  //shouye
import Productcenter from "../components/productcenter"  //product
import newcate from "../components/newcate"  //newcate
import cate from "../components/cate"  //cate
import Credit from "../components/credit.vue"  //credit
import contact from '@/components/contact'
import introduce from '@/components/introduce'
import ErrPage from '@/components/common/ErrPage'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: '网站首页',
      component: Index
    },
    {
      path: '/productcenter',
      name: '产品中心1',
      component: Productcenter
    },
    {
      path: '/newcate',
      name: '产品中心2',
      component: newcate
    },
    {
      path: '/cate',
      name: '产品中心3',
      component: cate
    },
    {
      path: '/credit',
      name: '诚信档案',
      component: Credit
    },
    {
      path: '/contact',
      name: '联系我们',
      component: contact
    },
    {
      path: '/introduce',
      name: '公司介绍',
      component: introduce
    },
    {
      path: '*',
      component: ErrPage
    }
  ]
})
