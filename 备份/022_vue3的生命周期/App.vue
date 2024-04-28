<template>
  <!-- v-if 会删除 Person 标签在html中对应的元素 -->
  <Person v-if="isShow" />
  <!-- v-show 不会删除 Person 标签在html中对应的元素，只是隐藏了 -->
  <!-- <Person v-show="isShow" /> -->
</template>

<script lang="ts" setup name="App">
  // 导入Person组件
  import Person from './components/Person.vue'
  import { ref, onMounted } from 'vue'
  let isShow = ref(true)

  // App是根组件，最后挂载，先挂载子组件
  // 挂载完毕
  onMounted(() => {
    console.log('父---挂载完毕')
  })
</script>
