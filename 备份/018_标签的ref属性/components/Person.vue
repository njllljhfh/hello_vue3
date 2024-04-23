<template>
  <div class="person">
    <h1>中国</h1>
    <h2 ref="title2">北京</h2>
    <h3>尚硅谷</h3>
    <button @click="showLog">点我输出h2这个元素</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { ref, defineExpose } from 'vue'

  // 创建一个title2，用于存储ref标记的内容
  let title2 = ref()  // ref 用在普通的html标签

  let a = ref(0)
  let b = ref(1)
  let c = ref(2)

  function showLog() {
    // 打印 title2 标记的标签(dom元素)
    console.log(title2.value)
  }

  // 暴露属性，如果不暴露，则外部无法访问相关数据（会显示，undefined）
  defineExpose({ a, b })
</script>

<style scoped>
  /* scoped 局部样式，只用于当前的 .vue 文件*/
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }

  button {
    margin: 0 5px;
  }

  li {
    font-size: 20px;
  }
</style>