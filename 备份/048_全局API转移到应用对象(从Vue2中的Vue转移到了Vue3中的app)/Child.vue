<template>
  <div class="child">
    <h2>我是Child组件 {{ x }}</h2>
    <h3>当前求和为：{{ sum }}</h3>
    <h4 v-beauty="sum">好开心！</h4>
    <Hello/>
  </div>
</template>

<script setup lang="ts" name="Child">
  import { ref } from 'vue'
  import axios from 'axios'

  let sum = ref(0)
</script>

<style scoped>
  .child {
    background-color: skyblue;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
  }
</style>