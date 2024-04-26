import { defineStore } from 'pinia'

// 参数1：id，参数2：配置
// 这里用的是分别暴露，也可以用其他暴露方式
export const useCountStore = defineStore('count', {
  // 真正存储数据的地方
  state() {
    return {
      sum: 6
    }
  }
})