<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <!-- vue2 绑定事件 -->
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
    <button @click="sendAlgo1Request">发送 algorithm1</button>
    <button @click="sendMyTestRequest">发送 myTest</button>
  </div>
</template>

<script lang="ts">
  import axios from 'axios'
  //默认暴露
  export default {
    name: 'Person',  // 组件名
    data() {
      return {
        name: '张三',
        age: 18,
        tel: '1388888888888',
      }
    },
    methods: {
      async sendAlgo1Request() {
        try {
          const jsonData = {
            option: 1,
            positions: [],
            persons: []
            // 在这里添加更多的键值对
          };
          const response = await axios.post('http://127.0.0.1:8090/api/task/algorithm1', jsonData);
          console.log('成功发送POST请求:', response.data);
          // 在这里处理请求成功的逻辑
        } catch (error) {
          console.error('发送POST请求失败:', error);
          // 在这里处理请求失败的逻辑
        }
      },
      async sendMyTestRequest() {
        try {
          const jsonData = {
            a: 1,
            b: 0.1,
          };
          const response = await axios.get('http://127.0.0.1:8090/api/task/myTest', { params: jsonData });
          console.log('成功发送GET请求:', response.data);
          // 在这里处理请求成功的逻辑
        } catch (error) {
          console.error('发送GET请求失败:', error);
          // 在这里处理请求失败的逻辑
        }
      },
      changeName() {
        this.name = 'zhang-san'
      },
      changeAge() {
        this.age += 1
      },
      showTel() {
        alert(this.tel)
      }
    }
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
</style>