<template>
  <div class="app">
    <h2>{{ msg }}</h2>
    <!-- v-model 双向绑定 -->
    <input type="text" v-model="msg">
  </div>
</template>

<script setup lang="ts" name="App">
  import { ref, customRef } from 'vue'
  import useMsgRef from './useMsgRef'
  // 使用 vue 提供的默认 ref 定义的响应式数据，数据一变化，页面就更新
  // let msg =ref('你好')

  /* ============================ 自定义ref ============================ */
  // 公司使用 customRef 时，一般会封装成 hooks
  // 使用 useMsgRef 来定义一个响应式数据且有延迟效果
  let { msg } = useMsgRef('你好', 1000)
</script>

<style>
  .app {
    background-color: #dddddd;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    padding: 10px;
  }

  button {
    /* 上下是0，左右是5px */
    margin: 0 5px;
  }
</style>