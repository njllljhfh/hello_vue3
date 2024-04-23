<template>
  <div class="person">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}, {{ nl }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { reactive, toRefs, toRef } from 'vue'

  // 数据
  let person = reactive({
    name: '张三',
    age: 18
  })

  // 解构赋值，此时 name ，age 都是非响应式的
  // let { name, age } = person

  // 此时，name，age 为 ref 定义的响应式数据，并且数据是跟 person 关联的
  let { name, age } = toRefs(person)

  // toRef 将指定对象中的 指定字段 结构 为 ref 定义的响应式数据，并且数据是跟 person 关联的
  let nl = toRef(person, 'age')

  // 方法
  function changeName() {
    name.value += '~'
    console.log(name.value, person.name)
  }
  function changeAge() {
    age.value += 1
    console.log(age.value, person.age, nl.value)
  }
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