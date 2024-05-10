import { customRef } from 'vue'

export default function (initValue:string, delay:number) {
  /* ============================ 自定义ref ============================ */
  // 公司使用 customRef 时，一般会封装成 hooks
  // 使用 vue 提供的 customRef 定义响应式数据
  // let initValue = '你好'
  let timer: number
  // track(跟踪)，trigger(触发)
  let msg = customRef((track, trigger) => {
    return {
      // get何时被调用？ --- msg被读取时
      get() {
        track() // 告诉 vue 数据 msg 很重要，你要对 msg 进行持续关注，一旦 msg 变化就去更新
        return initValue
      },
      // set何时被调用？ --- msg被修改时
      set(value) {
        clearTimeout(timer) // 解决: 直接用setTimeout时，当输入频繁的时候会出现bug
        // timer 是一个数字，是定时器返回的定时器编号
        timer = setTimeout(() => {
          initValue = value
          trigger() // 通知 vue 一下 数据 msg 变化了
        }, delay)
      }
    }
  })

  return {msg}
}