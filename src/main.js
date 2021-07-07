/*
 * @Author: 24min
 * @Date: 2021-07-07 19:46:05
 * @LastEditors: 24min
 * @LastEditTime: 2021-07-07 20:36:25
 * @FilePath: \el-image\src\main.js
 * @note: If it ain't broke, don't fix it.🍤
 * @Description: to bo continued...
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')