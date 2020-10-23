<!--
 * @Author: 段云龙
 * @Date: 2020-10-23 11:25:23
 * @LastEditors: 段云龙
 * @LastEditTime: 2020-10-23 11:47:29
 * @Description:
-->
<template>
  <a-menu
    style="width: 200px"
    class="menu-side"
    :selectedKeys="activeMenu"
    mode="inline"
  >
    <v-menu-item
      v-for="route in menuData"
      :key="route.path"
      :item="route"
    ></v-menu-item>
  </a-menu>
</template>
<script>
import { defineAsyncComponent, ref } from 'vue'
export default {
  setup () {
    const activeMenu = ref(['/home1'])
    const menuData = ref([])
    menuData.value = [{
      path: 'test',
      name: '测试',
      children: [{
        path: '/home',
        name: '首页'
      }, {
        path: '/home1',
        name: '首页1'
      }]
    }]
    return { activeMenu, menuData }
  },
  components: {
    VMenuItem: defineAsyncComponent(() => import('./VMenuItem'))
  }
}
</script>
