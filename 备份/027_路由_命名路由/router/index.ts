// 创建一个路由器，并暴露出去

// 引入 createRouter
import { createRouter, createWebHistory } from 'vue-router'
// 引入组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'

// 创建路由器
const router = createRouter({
  history: createWebHistory(),  // 路由器的工作模式（稍后讲解）
  routes: [  // 各个路由规则
    {
      name:'zhuye',
      path: '/home',
      component: Home
    },
    {
      name:'xinwen',
      path: '/news',
      component: News
    },
    {
      name:'guanyu',
      path: '/about',
      component: About
    },
  ]
})

// 暴露出去 router
export default router