/*
 * @Author: 段云龙
 * @Date: 2020-10-23 11:20:38
 * @LastEditors: 段云龙
 * @LastEditTime: 2020-10-23 11:25:38
 * @Description:
 */
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Menu.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
