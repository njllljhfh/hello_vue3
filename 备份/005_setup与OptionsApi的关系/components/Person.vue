<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <!-- vue2 绑定事件 -->
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
    <hr>
    <h2>测试1: {{ a }}</h2>
    <h2>测试2: {{ c }}</h2>
    <button @click="b">测试</button>
  </div>
</template>

<script lang="ts">
  // 默认暴露
  export default {
    name: 'Person',  // 组件名
    beforeCreate() {
      console.log('beforeCreate')
    },
    data() {
      console.log('data')
      return {
        a: 100,
        c:this.namea  // data中可以读取setup中的数据
      }
    },
    methods: {
      b() {
        console.log('b')
      }
    },
    setup() {
      // 在生命周期中，setup比data执行的要早
      console.log("this是 ", this)  // setup中的this是undefined，Vue3中已经开始弱化this了

      // 数据
      let name = '张三'  // 注意：此时的 name 不是响应式的
      let age = 18 // 注意：此时的 age 不是响应式的
      let tel = 13888888888 // 注意：此时的 tel 不是响应式的

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

      // return { name: name, age: age }
      // 简写
      return { name, age, changeName, changeAge, showTel }

      // setup的返回值也可以是一个渲染函数
      // 注意：下面这些返回方式，会在网页上直接显示 "哈哈"，不会显示<div class="person">标签的内容
      // return function () {
      //   return '哈哈'
      // }
      // ---
      // return () => {
      //   return '哈哈'
      // }
      // ---
      // return () => '哈哈'  // 箭头函数
    }
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