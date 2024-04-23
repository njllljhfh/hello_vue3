<template>
  <h2 ref="title2">你好</h2>
  <button @click="showLog">测试</button>
  <Person ref="ren" />
</template>

<script lang="ts" setup name="App">
  // 导入Person组件
  import Person from './components/Person.vue'
  import { ref } from 'vue'

  let title2 = ref()  
  let ren = ref()  // ref 用在组件的标签

  function showLog() {
    // 组件的实例对象
    console.log(ren.value)
    console.log(ren.value.a)
    console.log(ren.value.b)
    console.log(ren.value.c)  // undefined
  }
</script>
