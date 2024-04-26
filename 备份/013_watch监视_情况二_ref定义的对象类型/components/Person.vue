<template>
  <div class="person">
    <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { ref, watch } from 'vue'

  // 数据
  let person = ref({
    name: '张三',
    age: 18
  })

  // 方法
  function changeName() {
    person.value.name += '~'
  }
  function changeAge() {
    person.value.age += 1
  }
  function changePerson() {
    // person 对象的地址变了，指向了新的'李四'对象
    // { name: '李四', age: 90 } js字面量定义一个新的对象，内存分配新的地址
    person.value = { name: '李四', age: 90 }
  }

  // 监视
  // watch的第一个参数是：被监视的数据
  // watch的第二个参数是：监视的回调
  // watch的第三个参数是：配置对象（deep，immediate 等等...）

  // 情况一：监视【ref】定义的【对象类型】数据，监视的是对象的地址是否变化。
  // 当只改变 person 对象的属性的时候，不会触发watch
  // watch(person, (newValue, oldValue)=>{
  //   console.log('person 变化了', newValue,oldValue)
  // })

  // 情况二：若想监视对象内部属性的变化，需要手动开启深度监视
  watch(
    person,
    (newValue, oldValue) => {
      // 若修改的是 ref 定义的对象中的属性，newValue 和 oldValue 指向相同的内存地址
      // 若修改这个 ref 定义的对象，newValue 是指向新的内存地址，oldValue 指向旧的内存地址
      console.log('person 变化了', newValue, oldValue)
    },
    {
      deep: true,  // 开启深度监视
      // immediate: true,  // 第一次加载也会调用监视
    }
  )
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