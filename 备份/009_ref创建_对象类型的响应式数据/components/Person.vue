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
  </div>
</template>

<script lang="ts" setup name="Person">
  // ref 可以定义：基本类型、对象类型的响应式数据
  import { ref, reactive } from 'vue'

  //数据
  let car = ref({
    brand: "奔驰",
    price: 100,
  })  // 响应式对象 

  // ref 的内部也是用 reactive 来将对象类型变成响应式的
  let games = ref([
    { id: 'asd01', name: '王者荣耀' },
    { id: 'asd02', name: '原神' },
    { id: 'asd03', name: '三国志' },
  ])  // 响应式对象

  let obj = reactive({x:999})

  console.log(car)
  console.log(obj)


  //方法
  function changePrice() {
    car.value.price += 10
  }

  function changeFirstGame() {
    games.value[0].name = '流星蝴蝶剑'
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