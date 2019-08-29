import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import feedback from '../components/feedback'
import about from '../components/about'
import list from '../components/list'
import item from '../components/item'

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
            path: '/feedback',
            name: 'feedback',
            component: feedback,
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/about',
            name: 'about',
            component: about,
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/list',
            name: 'list',
            component: list,
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/item',
            name: 'item',
            component: item,
            meta: {
                keepAlive: true
            }
        },
        {
            path: '*',
            component: index,
        },
    ]
})

