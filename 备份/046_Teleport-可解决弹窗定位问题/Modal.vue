<template>
  <button @click="isShow = true">展示弹窗</button>
  <teleport to="body">
    <div class="modal" v-show="isShow">
      <h2>我是弹窗的标题</h2>
      <p>我是弹窗的内容</p>
      <button @click="isShow = false">关闭弹窗</button>
    </div>
  </teleport>
</template>

<script lang="ts" setup name="Modal">
  import { ref } from 'vue'
  let isShow = ref(false)
</script>

<style scoped>
  .modal {
    width: 200px;
    height: 150px;
    background-color: skyblue;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 0 0 5px;
    text-align: center;
    /* 参考整个浏览器窗口 进行定位 */
    position:fixed; 
    left: 50%;
    margin-left: -100px;
    top: 20px;
  }
</style>