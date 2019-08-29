import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import about from '@/components/about'
import shuoming from '@/components/shuoming'
import lianxi from '@/components/lianxi'
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
        path: '/about',
        name: 'about',
        component: about
      },
      {
        path: '/shuoming',
        name: 'shuoming',
        component: shuoming
      },
      {
        path: '/lianxi',
        name: 'lianxi',
        component: lianxi
      },
      {
        path: '*',
        component: ErrPage
      }
    ]
})
