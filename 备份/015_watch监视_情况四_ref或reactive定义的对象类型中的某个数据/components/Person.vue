<template>
  <div class="person">
    <h1>情况四：监视 【ref】或【reactive】定义的【对象类型】数据中的 某个属性</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改第一台车</button>
    <button @click="changeC2">修改第二台车</button>
    <button @click="changeCar">修改整个车</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { reactive, watch } from 'vue'

  // 数据
  let person = reactive({
    name: '张三',
    age: 18,
    car: {
      c1: '奔驰',
      c2: '宝马',
    }
  })

  // 方法
  function changeName() {
    person.name += '~'
  }
  function changeAge() {
    person.age += 1
  }
  function changeC1() {
    person.car.c1 = '奥迪'
  }
  function changeC2() {
    person.car.c2 = '大众'
  }
  function changeCar() {
    // person 对象不能直接修改，但是 person 的属性可以直接改，修改后 person.car 指向新的内存地址
    person.car = { c1: '雅迪', c2: '爱玛' }
  }

  // 监视-情况四：监视 ref 或 reactive 定义的 对象类型 数据中的某个属性
  // 1.若该属性不是 对象类型，需要写成函数形式
  // watch(() => person.name, (newValue, oldValue) => {
  //   console.log('person.name变化了', newValue, oldValue)
  // })

  // 2.[重点]：若该属性是 对象类型，可以直接写，也可以写函数，更推荐写函数
  // { deep: true } 使得 car 的属性变化也能见听到，不加则只能监听到 car 的内存地址变化
  watch(
    () => person.car,
    (newValue, oldValue) => {
      console.log('person.car变化了', newValue, oldValue)
    },
    {
      deep: true
    }
  )

  // 结论：监视的是对象的属性，无论该属性是 基本类型 还是 对象类型，那么最好写函数式。
  // 注意点：若该属性是对象类型，则默认监视的是地址的变化，若要关注该对象的内部数据，需要手动开启深度监视。
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