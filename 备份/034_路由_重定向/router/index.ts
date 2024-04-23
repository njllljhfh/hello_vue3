// 创建一个路由器，并暴露出去

// 引入 createRouter
import { createRouter, createWebHistory } from 'vue-router'
// 引入组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'

// 创建路由器
const router = createRouter({
  history: createWebHistory(),  // 路由器的工作模式（稍后讲解）
  routes: [  // 各个路由规则
    {
      name: 'zhuye',
      path: '/home',
      component: Home
    },
    {
      name: 'xinwen',
      path: '/news',
      component: News,
      children: [
        {
          // 组件 RouterLink 处用 params 传递参数
          // name: 'xiangqing',
          // path: 'detail/:id/:title/:content?',  // params 参数
          // component: Detail,
          // props 第一种写法：将路由收到的所有 params 参数作为 props 传给路由组件
          // 相当于 <Detail id=?? title=?? content=??/>
          // props: true,
          //-------------------------------------

          // 组件 RouterLink 处用 query 传递参数
          name: 'xiangqing',
          path: 'detail', 
          component: Detail,
          // props 第二种写法：函数写法，可以自己决定将什么作为 props传给路由组件
          props(route){
            // route 是完整的 路由 数据，route.query 是从 RouterLink 中的 :to 定义的参数的 query 参数获取的 
            // console.log('qwe=', route)
            return route.query
          }
          //-------------------------------------
          
          // name: 'xiangqing',
          // path: 'detail', 
          // component: Detail,
          // props 第三种写法（用的非常少）：对象写法，可以自己决定将什么作为 props传给路由组件
          // 相当于 <Detail a=100 b=200 c=300/>
          // props:{
          //   a: 100,
          //   b: 200,
          //   c: 300
          // }
        },
      ]
    },
    {
      name: 'guanyu',
      path: '/about',
      component: About
    },
    {
      path:'/',
      redirect: '/home'  // 重定向
    }
  ]
})

// 暴露出去 router
export default router