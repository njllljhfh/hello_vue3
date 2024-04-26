import { defineStore } from 'pinia'

// 参数1：id，参数2：配置
// 这里用的是分别暴露，也可以用其他暴露方式
export const useTalkStore = defineStore('talk', {
  // 真正存储数据的地方
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