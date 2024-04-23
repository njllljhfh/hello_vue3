<template>
  <div class="person">
    ???
  </div>
</template>

<script lang="ts" setup name="Person">
  // @ 指向 src 目录
  import { type PersonInter, type Persons } from '@/types'

  // let person: PersonInter = { id: 'asdfa', name: '张三', age: 60 }

  // Array<PersonInter> : 泛型
  // let personList: Array<PersonInter> = [
  //   { id: 'asdfa01', name: '张三', age: 60 },
  //   { id: 'asdfa02', name: '李四', age: 60 },
  //   { id: 'asdfa03', name: '王五', age: 60 }
  // ]
  //-------------------------------
  let personList: Persons = [
    { id: 'asdfa01', name: '张三', age: 60 },
    { id: 'asdfa02', name: '李四', age: 18 },
    { id: 'asdfa03', name: '王五', age: 5 }
  ]

</script>

<style scoped>
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