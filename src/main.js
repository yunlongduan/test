/*
 * @Author: 段云龙
 * @Date: 2020-10-23 11:20:38
 * @LastEditors: 段云龙
 * @LastEditTime: 2020-10-23 11:24:28
 * @Description:
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
createApp(App).use(store).use(router).use(Antd).mount('#app')
