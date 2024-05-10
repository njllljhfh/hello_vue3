<template>
  <div class="app">
    <h2>求和为：{{ sum }}</h2>
    <h2>名字为：{{ person.name }}</h2>
    <h2>年龄为：{{ person.age }}</h2>
    <h2>汽车为：{{ car }}</h2>
    <button @click="changeSum">sum+1</button>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
    <span>|</span>
    <button @click="changeBrand">修改品牌</button>
    <button @click="changeColor">修改颜色</button>
    <button @click="changeEngine">修改发动机</button>
    <button @click="changeCar">修改整个车</button>
    <button @click="changeB">修改 B</button>
  </div>
</template>

<script setup lang="ts" name="App">
  import { ref, reactive, shallowRef, shallowReactive } from 'vue'

  let sum = shallowRef(0)

  // shallowRef 只处理第一层数据的响应式
  let person = shallowRef({
    name: '张三',
    age: 18
  })

  // shallowReactive 只处理第一层数据的响应式()
  // brand，options 是第一层，可以改变整个 options 对象，但不能单独改对象中的某个属性
  // options中的color，engine是第二层
  // 经过测试，当先垫修改颜色，再点修改品牌，界面上的车的颜色也会变化，原因不详
  let car = shallowReactive({
    brand: '奔驰',
    options: {
      color: '红色',
      engine: 'V8',
      other:{b:10}
    }
  })

  function changeSum() {
    sum.value += 1
  }
  function changeName() {
    person.value.name = '李四'
  }
  function changeAge() {
    person.value.age += 1
  }
  function changePerson() {
    // person.value 是第一层数据
    person.value = { name: 'tony', age: 100 }
  }

  function changeBrand() {
    car.brand = '宝马'
  }
  function changeColor() {
    car.options.color = '紫色'
  }
  function changeEngine() {
    car.options.engine = 'V12'
  }
  function changeB(){
    car.options.other.b = 666
  }
  function changeCar() {
    Object.assign(car, {
      brand: '五菱',
      options: {
        color: '黑色',
        engine: 'V100',
        other: { a: 1 }
      }
    })
  }

  /*   
  总结：
  通过使用shallowref 和 shallowReactive() 来绕开深度响应。
  浅层式 `API` 创建的状态只在其顶层是响应式的，对所有深层的对象不会做任何处理，
  避免了对每一个内部属性做响应式所带来的性能成本，这使得属性的访问变得更快，可提升性能。 
  */
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