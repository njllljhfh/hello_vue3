<template>
  <ul class="news-list">
    <!-- <li>编号: {{ route.query.id }}</li> -->
    <!-- <li>标题: {{ route.query.title }}</li> -->
    <!-- <li>内容: {{ route.query.content }}</li> -->
    <li>编号: {{ query.id }}</li>
    <li>标题: {{ query.title }}</li>
    <li>内容: {{ query.content }}</li>
  </ul>
</template>

<script setup lang="ts" name="Detail">
  // useRoute 是一个 hooks
  import { useRoute } from 'vue-router'
  import { toRefs } from 'vue'

  let route = useRoute()
  // console.log('@', route)

  // 解构 route 获取 query，记得一定要加 toRefs，否则 query 会失去响应式（参考：/备份/011_toRefs与toRef）
  let { query } = toRefs(route)

</script>

<style scoped>
  .news-list {
    list-style: none;
    padding-left: 20px;
  }

  .news-list>li {
    line-height: 30px;
  }
</style>