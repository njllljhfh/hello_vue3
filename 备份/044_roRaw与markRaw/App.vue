<template>
  <div class="app">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeAge">修改年龄</button>
    <hr>
    <h2>{{ car2 }}</h2>
    <button @click="changePrice">点我价格+10</button>
  </div>
</template>

<script setup lang="ts" name="App">
  import {reactive, toRaw, markRaw} from 'vue'
  import mockjs from 'mockjs'

  /* ======================================= toRaw ======================================= */
  let person = reactive({
    name:'tony',
    age:18
  })

  // 用于获取一个响应式对象的原始对象， `toRaw` 返回的对象不再是响应式的，不会触发视图更新。
  // 何时使用？ 在需要将响应式对象传递给非 `Vue` 的库或外部系统时，使用 `toRaw` 可以确保它们收到的是普通对象
  let rawPerson = toRaw(person)

  function changeAge(){
    rawPerson.age += 1
    console.log('person',person)  // 数据变了，但是页面没有更新
    console.log('rawPerson',rawPerson)  // 数据变了
  }
  // console.log('响应式数据', person)
  // console.log('原始数据', rawPerson)

  /* ======================================= markRaw ======================================= */
  // markRaw 作用：标记一个对象，使其**永远不会**变成响应式的。
  let car = markRaw({brand:'奔驰', price:100})
  let car2 = reactive(car) // car2也不是响应式的

  function changePrice(){
    car2.price += 10
    console.log('car',car)  // 数据变了，但是页面没有更新
    console.log('car2',car2)  // 数据变了，但是页面没有更新
  }

  // 例如使用`mockjs`时，为了防止误把`mockjs`变为响应式对象，可以使用 `markRaw` 去标记`mockjs`
  let mockjs2 = markRaw(mockjs)

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