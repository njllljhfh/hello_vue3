<template>
  <div class="outer">
    <h2>我是App组件</h2>
    <img src="http://www.atguigu.com/images/index_new/logo.png" alt="">
    <br>
    <Modal/>
  </div>
</template>

<script lang="ts" setup name="App">
  import Modal from "./Modal.vue"

</script>

<style scoped>
  .outer {
    background-color: #ddd;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 0 0 10px;
    width: 400px;
    height: 400px;
    /* 滤镜， saturate 饱和度，saturate(0)会将图像变为黑白图*/
    /* saturate 参数会影响 position:fixed; 使其无法以整个页面窗口来定位，而是变成了以父级标签的窗口来定位*/
    filter: saturate(0);
  }

  img {
    width: 270px;
  }
</style>