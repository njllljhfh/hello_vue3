<template>
  <div class="conut">
    <h2>当前求和为：{{ sum }} </h2>
    <h3>欢迎来到：{{ school }}，坐落于：{{ address }}</h3>
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
  import { ref, toRefs } from 'vue';
  import { useCountStore } from '@/store/count'
  import { storeToRefs } from 'pinia';

  // useCountStore 类似于 hooks
  const conutStore = useCountStore()
  const { sum, school, address } = toRefs(conutStore)

  // toRefs会把所有数据都用ref包裹
  // console.log(toRefs(conutStore))

  // storeToRefs 只会关注store中的数据，不会对方法进行ref包裹
  console.log(storeToRefs(conutStore))

  // let sum = ref(1)
  let n = ref(1)

  function add() {
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