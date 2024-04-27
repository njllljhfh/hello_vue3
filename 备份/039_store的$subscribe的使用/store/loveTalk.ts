import { defineStore } from 'pinia'
import axios from 'axios'
import { nanoid } from 'nanoid'

// 参数1：id，参数2：配置
// 这里用的是分别暴露，也可以用其他暴露方式
export const useTalkStore = defineStore('talk', {
  // 真正存储数据的地方
  actions: {
    async getATalk() {
      // 发请求
      let { data: { content } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format-json')
      // 把请求回来的字符串包装成字符串
      let obj = { id: nanoid(), title: content }
      // 头插
      this.talkList.unshift(obj)
    }
  },
  state() {
    return {
      //  as string：这是 TypeScript 的语法，将获取到的值强制转换为字符串类型。
      //             这是因为 TypeScript 默认情况下可能不知道 getItem() 返回的值的类型，
      //             因此我们需要明确告诉它我们期望的类型。
      talkList: JSON.parse(localStorage.getItem('talkList') as string) || []
    }
  }
})