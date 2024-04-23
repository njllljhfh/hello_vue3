<template>
  <div class="person">
    <h2>汽车信息：一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
    <button @click="changePrice">修改汽车价格</button>
    <button @click="changeBrand">修改汽车品牌</button>
    <button @click="changeCar">修改汽车</button>
    <hr>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">点我sum+1</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  // ref 可以定义：基本类型、对象类型的响应式数据
  import { ref, reactive } from 'vue'

  //数据
  let car = reactive({ brand: "奔驰", price: 100 })  // 响应式对象 

  // ref 的内部也是用 reactive 来将对象类型变成响应式的
  let sum = ref(0)
  // -------------------------------------------------

  //方法
  function changePrice() {
    car.price += 10
  }
  function changeBrand() {
    car.brand = '宝马'
  }
  function changeCar() {
    // reactivate 重新分配一个对象，会失去响应式（可以使用 Object.assign 去整体替换）
    // car = { brand: "奥拓", price: 1, }  // 这么写，页面不更新
    // car = reactive({ brand: "奥拓", price: 1, })  // 这么写，页面不更新
    Object.assign(car, { brand: "奥拓", price: 1 })
    // ----------

    // ref 定义的对象类型的响应式数据，可以通过给.value 赋值新的对象来修改
    // car.value =  { brand: "奥拓", price: 1 }
  }
  function changeSum() {
    sum.value += 1
  }
  // -------------------------------------------------


  // 使用原则：
  // 1.若需要一个基本类型的响应式数据，必须使用ref
  // 2.若需要一个响应式对象，层级不深，ref，reactive 都可以
  // 3.若需要一个响应式对象，且层级较深，推荐使用 reactive
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