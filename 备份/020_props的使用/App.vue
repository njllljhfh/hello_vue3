<template>
  <!-- 务必看懂下面一行代码 -->
  <!-- <h2 a="1+1" :b="1+1" c="x" :d="x" ref="qwe">测试</h2> -->

  <!-- :list，加冒号表示等号右边是一个 表达式，否则只是字符串 "personList"-->
  <!-- ref除外，ref是特例 -->
  <Person a="哈哈" :list="personList"/>
</template>

<script lang="ts" setup name="App">
  // 导入Person组件
  import Person from './components/Person.vue'
  import { reactive } from 'vue'
  import { type Persons } from '@/types'

  let x = 9

  // reactive 推荐用 泛型 的写法
  let personList = reactive<Persons>([
    { id: 'asdfa01', name: '张三', age: 18 },
    { id: 'asdfa02', name: '李四', age: 20 },
    { id: 'asdfa03', name: '王五', age: 22 }
  ])

  console.log(personList)

</script>
