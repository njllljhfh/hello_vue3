<template>
  <div class="person">
    <h2>当前水温：{{ temp }} ℃</h2>
    <h2>当前水位：{{ height }} cm</h2>
    <button @click="changeSum">水温+10</button>
    <button @click="changeHeight">水位+10</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { ref, watch, watchEffect } from 'vue'

  // 数据
  let temp = ref(0)
  let height = ref(0)

  // 方法
  function changeSum() {
    temp.value += 10
  }
  function changeHeight() {
    height.value += 10
  }

  // 监视 -- watch实现
  // watch([temp, height], (value) => {
  //   // 从value中获取最新的水温（newTemp）、最新的水位（newHeight）
  //   let [newTemp, newHeight] = value
  //   if (newTemp >= 60 || newHeight >= 80) {
  //     console.log('给服务器发请求')
  //   }
  // })

  // 监视 -- watchEffect实现
  watchEffect(() => {
    // console.log('temp = ', temp.value)
    // console.log('height = ', height.value)
    // if (temp.value >= 60 || height.value >= 80) {
    //   console.log('给服务器发请求--', Date.now())
    // }
    if (temp.value >= 60 ) {
      console.log('给服务器发请求-temp-', Date.now())
    }
    if (height.value >= 80) {
      console.log('给服务器发请求-height-', Date.now())
    }
  })

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