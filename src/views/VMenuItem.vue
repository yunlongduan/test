<!--
 * @Author: 段云龙
 * @Date: 2020-10-23 11:26:39
 * @LastEditors: 段云龙
 * @LastEditTime: 2020-10-23 11:46:04
 * @Description:
-->
<template>
  <a-sub-menu v-if="item.children && item.children.length > 0" :key="item.path">
    <template #title>
      <span>
        <AppstoreOutlined />
        <span>{{ item.name }}</span>
      </span>
    </template>
    <v-menu-item
      v-for="child in item.children"
      :key="child.path"
      :item="child"
    >
    </v-menu-item>
  </a-sub-menu>
  <a-menu-item v-else :key="item.path">
    <span>{{ item.name }}</span>
  </a-menu-item>
</template>
<script>
import {
  AppstoreOutlined
} from '@ant-design/icons-vue'
export default {
  name: 'VMenuItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup (props) {
    console.log(props.item)
  },
  components: {
    AppstoreOutlined
  }
}
</script>
