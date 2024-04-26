<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkStore.talkList" :key="talk.id">
        {{ talk.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="App">
  import { reactive } from 'vue';
  import axios from 'axios';
  // nanoid 用的是分别暴露，要用 {} 来引入
  import { nanoid } from 'nanoid';
  import { useTalkStore } from '@/store/loveTalk'

  const talkStore = useTalkStore()

  async function getLoveTalk() {
    // 发请求
    // let result = await axios.get('https://api.uomg.com/api/rand.qinghua?format-json')
    // console.log(result)
    //-----------
    // 这种写法是：连续解构赋值 + 重命名
    // let { data: { content:title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format-json')
    // let obj = { id: nanoid(), title}
    //-----------
    let { data: { content } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format-json')
    // 把请求回来的字符串包装成字符串
    let obj = { id: nanoid(), title: content }
    // 头插
    talkStore.talkList.unshift(obj)
  }
</script>

<style scoped>
  .talk {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
</style>