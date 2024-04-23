// 创建一个路由器，并暴露出去

// 引入 createRouter
import { createRouter, createWebHistory } from 'vue-router'
// 引入组件
import Home from '@/components/Home.vue'
import News from '@/components/News.vue'
import About from '@/components/About.vue'

// 创建路由器
const router = createRouter({
  history: createWebHistory(),  // 路由器的工作模式（稍后讲解）
  routes: [  // 各个路由规则
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/news',
      component: News,
    },
    {
      path: '/about',
      component: About,
    },
  ]
})

// 暴露出去 router
export default router