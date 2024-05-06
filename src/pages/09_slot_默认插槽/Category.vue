<template>
  <div class="category">
    <h2>{{title}}</h2>
    <!-- 默认插槽的用法：-->
    <!-- 如果 在父组件中 子组件的开始和结束标签之间没有内容，slot标签会显示"默认内容" -->
    <!-- 如果 此处没有 slot标签，则在父组件中 子组件的开始和结束标签之的内容 不会显示在子组件中 -->
    <slot>默认内容</slot>
    <!-- 默认插槽也有名字 "default"，一般不写
    <slot name="default">默认内容</slot> -->
  </div>
</template>

<script setup lang="ts" name="Category">
  defineProps(['title'])
</script>

<style scoped>
  .category {
    background-color: skyblue;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    padding: 10px;
    width: 200px;
    height: 300px;
  }
  h2 {
    background-color: orange;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
  }
</style>