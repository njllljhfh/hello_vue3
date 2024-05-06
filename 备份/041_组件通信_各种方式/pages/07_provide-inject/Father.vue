<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>银子：{{ money }}万元</h4>
    <h4>车子：一辆{{car.brand}}车，价值{{car.price}}万元</h4>
    <Child/>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child from './Child.vue'
  import {ref,reactive,provide} from 'vue'

  let money = ref(100)
  let car = reactive({
    brand:'奔驰',
    price:100
  })

  // 用于 孙组件-->祖先组件 传递数据
  function updateMoney(value:number){
    money.value -= value
  }

  // 向后代提供数据
  // 如可用于 祖先组件-->孙组件 的直接通信
  // provide 参数1：数据的名称，参数2：要传递的数据
  provide('moneyContext',{money,updateMoney})
  provide('car',car)

</script>

<style scoped>
  .father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
  }
</style>