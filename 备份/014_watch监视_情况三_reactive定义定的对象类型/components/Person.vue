<template>
  <div class="person">
    <h1>情况三：监视【reactive】定义的【对象类型】数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { reactive, watch } from 'vue'

  // 数据
  let person = reactive({
    name: '张三',
    age: 18
  })

  // 方法
  function changeName() {
    person.name += '~'
  }
  function changeAge() {
    person.age += 1
  }
  function changePerson() {
    // person 对象的地址没有变化，只是修改了相应的属性
    person = Object.assign(person, { name: '李四', age: 90 })
  }

  // 监视
  // 情况三：监视 reactive 定义的 对象类型 数据。默认是开启深度监视的，且无法被关闭。
  // 任何属性发生变化，都会触发watch
  watch(person, (newValue, oldValue)=>{
    console.log('person 变化了', newValue,oldValue)
  })
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