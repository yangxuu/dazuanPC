import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import allpro from '../components/allpro'
import news from '../components/news'
import newdetail from '../components/newdetail'
import contact from '../components/contact'
import search from '../components/search'

Vue.use(Router)

export default new Router({
    mode:"history",
    routes: [
        {
            path: '/',
            name: 'index',
            component: index,
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/allpro',
            name: '全部商品',
            component: allpro,
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/news',
            name: '新闻资讯',
            component: news,
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/newdetail',
            name: '新闻详情',
            component:newdetail,
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/contact',
            name: '联系我们',
            component: contact,
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/search',
            name: '搜索',
            component:search,
            meta: {
                keepAlive: true
            }
        },
      
    ]
})

