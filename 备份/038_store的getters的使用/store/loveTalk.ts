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
      talkList: [
        { id: 'twqh01', title: "今天你有点怪，哪里怪？怪好看的！" },
        { id: 'twqh02', title: "草莓，蓝莓，蔓越莓，今天想我了没？" },
        { id: 'twqh03', title: "心里给你留了一块地，我的死心塌地。" },
      ]
    }
  }
})