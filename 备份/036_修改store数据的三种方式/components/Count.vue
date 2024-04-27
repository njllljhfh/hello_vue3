<template>
  <div class="conut">
    <h2>当前求和为：{{ conutStore.sum }} </h2>
    <h3>欢迎来到：{{ conutStore.school }}，坐落于：{{ conutStore.address }}</h3>
    <!-- v-model.number 将数据尽可能的转为数字 -->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts" name="Count">
  import { ref } from 'vue';
  import { useCountStore } from '@/store/count'

  // useCountStore 类似于 hooks
  const conutStore = useCountStore()

  // 以下两种方式都可以拿到 state 中的数据
  // console.log(conutStore.$state.sum)
  // 获取 reactive 定义数据的内部的ref属性 sum 不用 .value
  console.log(conutStore.sum)

  // let sum = ref(1)
  let n = ref(1)

  function add() {
    // 第一种修改方式
    // conutStore.sum += n.value

    // 第二种修改方式
    // conutStore.$patch({
    //   sum:888,
    //   school: '啦啦啦',
    //   address: '北京'
    // })

    // 第三种修改方式，actions
    conutStore.increment(n.value)
  }
  function minus() {
    conutStore.sum -= n.value
  }
</script>

<style scoped>
  .conut {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }

  select,
  button {
    /* 上下0 左右5 */
    margin: 0 5px;
    height: 25px;
  }
</style>