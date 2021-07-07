/*
 * @Author: 24min
 * @Date: 2021-07-07 19:46:05
 * @LastEditors: 24min
 * @LastEditTime: 2021-07-07 20:47:00
 * @FilePath: \el-image\src\router\index.js
 * @note: If it ain't broke, don't fix it.🍤
 * @Description: to bo continued...
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () =>
        import ( /* webpackChunkName: "about" */ '../views/Home.vue')
}, ]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router