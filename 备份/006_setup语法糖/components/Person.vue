<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>地址：{{ address }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<!-- <script lang="ts">
  // 默认暴露
  export default {
    name: 'Person',  // 组件名
    beforeCreate() {
      // 在生命周期中，setup 比 beforeCreate 执行的要早
      console.log('beforeCreate')
    }
  }
</script> -->

<!-- setup 语法糖 -->
<script lang="ts" setup name="Person123">
  console.log("this是 ", this)  // setup中的this是undefined，Vue3中已经开始弱化this了

  // 数据
  let name = '张三'  // 注意：此时的 name 不是响应式的
  let age = 18 // 注意：此时的 age 不是响应式的
  let tel = 13888888888 // 注意：此时的 tel 不是响应式的
  let address = '东方明珠总统套房'

  // let x = a  // Uncaught ReferenceError: a is not defined
  // let x = this.a  //  TypeError: Cannot read properties of undefined (reading 'a')

  // 方法
  function changeName() {
    name = 'zhang-san'  // 注意：这样修改name，页面是没有变化的
    console.log(name)  // name确实改了，但name不是响应式的
  }
  function changeAge() {
    age += 1  // 注意：这样修改age，页面是没有变化的
    console.log(age)  // age确实改了，但name不是响应式的
  }
  function showTel() {
    alert(tel)
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
</style>