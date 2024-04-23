<template>
  <div class="person">
    <h2>汽车信息：一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
    <button @click="changePrice">修改汽车价格</button>
    <br>
    <h2>游戏列表：</h2>
    <ul>
      <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul>
    <button @click="changeFirstGame">修改第一个游戏的名字</button>
    <br>
    <h2>测试：{{ obj.a.b.c }}</h2>
    <button @click="changeObj">测试：</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  // reactive 只能定义 对象类型的响应式数据
  import { reactive } from 'vue'

  //数据
  let car = reactive({
    brand: "奔驰",
    price: 100,
  })  // 响应式对象 Proxy(Object) {brand: '奔驰', price: 100}

  let games = reactive([
    { id: 'asd01', name: '王者荣耀' },
    { id: 'asd02', name: '原神' },
    { id: 'asd03', name: '三国志' },
  ])  // 响应式对象

  // reactive 的响应式是深层次的
  let obj = reactive({
    a:{
      b:{
        c:666
      }
    }
  })  // 响应式对象

  //方法
  function changePrice() {
    car.price += 10
  }

  function changeFirstGame() {
    games[0].name = '流星蝴蝶剑'
  }

  function changeObj() {
    obj.a.b.c = 999
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