<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <!-- params 参数 第一种写法 -->
        <!-- <RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`">{{ news.title }}</RouterLink> -->

        <!-- params 参数 第二种写法 -->
        <RouterLink :to="{
          // path: '/news/details', // 不能用 path
          name: 'xiangqing',  // 只能用 name
          params: {
            id: news.id,
            title: news.title,
            content: news.content
          }
        }">
          {{ news.title }}
        </RouterLink>
      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
  import { reactive } from 'vue'
  import { RouterView, RouterLink } from 'vue-router'

  const newsList = reactive([
    { id: 'asdfqwef01', title: '很好的抗癌实物', content: '西蓝花' },
    { id: 'asdfqwef02', title: '如何一夜暴富', content: '学IT' },
    { id: 'asdfqwef03', title: '震惊，万万没想到', content: '明天是周一' },
    { id: 'asdfqwef04', title: '好消息！好消息！', content: '快过年了' },
  ])
</script>

<style scoped>
  .news {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
  }

  .news ul {
    margin-top: 30px;
    /* list-style: none; */
    padding-left: 10px;
  }

  /* 设置li标签的原点样式 */
  .news li::marker {
    color: #64967E;
  }

  .news li>a {
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: #64967E;
    text-shadow: 0 0 1px rgb(0, 84, 0)
  }

  .news-content {
    width: 70%;
    height: 90%;
    border: 1px solid;
    margin-top: 20px;
    border-radius: 10px;
  }
</style>