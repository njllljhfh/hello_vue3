<template>
  <div class="person">
    <!-- :value 单向绑定 -->
    <!-- v-model 双向绑定 -->
    姓：<input type="text" v-model="firstName"><br>
    名：<input type="text" v-model="lastName"><br>
    <button @click="changeFullName">将全名改为li-si</button><br>
    全名：<span>{{ fullName }}</span><br>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { ref, computed } from 'vue'

  // 数据
  let firstName = ref('张')
  let lastName = ref('三')

  // 方法没有缓存
  // function fullName2() {
  //   console.log(2)
  //   return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
  // }

  // 计算属性(有缓存)，当数据发生变化时，就会重新计算
  // 这么定义的 fullName 是一个计算属性，且是只读的
  // let fullName = computed(() => {
  //   console.log(1)
  //   return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
  // })

  // 这么定义的 fullName 是一个计算属性，可读可写
  // 计算属性：返回的也是一个 ref 定义的响应式数据
  let fullName = computed({
    get() {
      return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
    },
    set(val) {
      const [str1, str2] = val.split('-')
      firstName.value = str1
      lastName.value = str2
    }
  })

  function changeFullName() {
    fullName.value = 'li-si'
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