<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">
        {{ talk.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="App">
  import { useTalkStore } from '@/store/loveTalk'
  import { storeToRefs } from 'pinia'

  const talkStore = useTalkStore()
  const { talkList } = storeToRefs(talkStore)

  // 订阅
  talkStore.$subscribe((mutate, state) => {
    // mutate 本次修改的信息
    // state 修改后的数据
    console.log('talkStore里面保存的数据发生了变化', mutate, state)

    //浏览器的 localStorage 里面存的都是字符串，如果传递的数据不是字符串，底层会调用toString
    // localStorage.setItem('talkList', state.talkList)
    localStorage.setItem('talkList', JSON.stringify(state.talkList)) // 向 localStorage 中保存数据 key, value
  })

  function getLoveTalk() {
    talkStore.getATalk()
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