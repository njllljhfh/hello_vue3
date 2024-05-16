import { createApp } from 'vue'
import App from './App.vue'
import Hello from './Hello.vue'

// 创建应用
const app = createApp(App)

/* 
vue2中是：Vue.component
vue3中是：app.component

其他的也一样
*/

// 注册全局组件
app.component('Hello', Hello)
// ---------------------------------------------------------

// 注册全局配置（这里的 x 全局可用）,尽量不要用这个功能！！！
app.config.globalProperties.x = 99
// 解决ts找不到x，红线提示的问题
declare module 'vue' {
  interface ComponentCustomProperties {
    x: number
  }
}
// ---------------------------------------------------------

// 注册全局指令
// element 元素, {value} 配置对象（只取了配置对象中的value数据）
app.directive('beauty', (element, { value }) => {
  element.innerText += value
  element.style.color = 'green'
  element.style.backgroundColor = 'yellow'
})
// ---------------------------------------------------------

// 安装插件（参考：024_路由_基本切换效果，main.ts）
// app.use(router)
// ---------------------------------------------------------

// 挂载应用
app.mount('#app')
// ---------------------------------------------------------

// 卸载
setTimeout(() => {
  app.unmount()
}, 2000)