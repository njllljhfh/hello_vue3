import { defineStore } from 'pinia'

// 参数1：id，参数2：配置
// 这里用的是分别暴露，也可以用其他暴露方式
export const useCountStore = defineStore('count', {
  // actions里面放的是一个一个方法，用于响应组件中的“动作”
  actions: {
    // actions，可以用于通用逻辑的复用
    increment(value: number) {
      // console.log('this=',this)
      if (this.sum < 10) {
        // 修改数据（this是当前的store）
        this.sum += value
      }
    }
  },
  // 真正存储数据的地方
  state() {
    return {
      sum: 6,
      school: 'asdfasdf',
      address: '帝都'
    }
  }
})