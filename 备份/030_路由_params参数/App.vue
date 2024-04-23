<template>
  <div class="app">
    <!-- 两个注意点：-->
    <!-- 1.路由组件通常放在 pages 或 views 文件夹，一般组件通常放在 components 文件夹 -->
    <!-- 2.通过点击导航，视觉效果上“消失”了的路由组件，默认是被 卸载 掉的，需要的时候再去 挂载 -->
    <Header />
    <!-- 导航区 -->
    <div class="navigate">
      <!-- RouterLink 是组件 -->
      <!-- active-class 设置激活时的 class -->
      <!-- 路由 to 的第一种写法 -->
      <RouterLink to="/home" active-class="active">首页</RouterLink>
      <!-- 路由 to 的第二种写法（对象写法） -->
      <RouterLink :to="{ name: 'xinwen' }" active-class="active">新闻</RouterLink>
      <RouterLink :to="{ path: '/about' }" active-class="active">关于</RouterLink>
    </div>
    <!-- 展示区 -->
    <div class="main-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup name="App">
  import { RouterView, RouterLink } from 'vue-router'
  import Header from './components/Header.vue'
</script>

<style scoped>
  .navigate {
    display: flex;
    justify-content: space-around;
    margin: 0 100px;
  }

  .navigate a {
    display: block;
    text-align: center;
    width: 90px;
    height: 40px;
    line-height: 40px;
    border-radius: 10px;
    background-color: gray;
    text-decoration: none;
    color: white;
    font-size: 18px;
    letter-spacing: 5px;
  }

  .navigate a.active {
    background-color: #64697E;
    color: #ffc268;
    font-weight: 900;
    text-shadow: 0 0 1px black;
    font-family: 微软雅黑;
  }

  .main-content {
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 10px;
    width: 90%;
    height: 400px;
    border: 1px solid;
  }
</style>