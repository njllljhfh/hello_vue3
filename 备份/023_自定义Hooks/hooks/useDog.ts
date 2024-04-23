import { reactive, onMounted } from 'vue'
import axios from 'axios'

// 注意：自定义的 hooks 是以 use开头命名的 ts 或 js 文件

// 默认暴露 export default 后面直接跟值
export default function () {
  // 数据
  let dogList = reactive([
    'https://images.dog.ceo/breeds/pembroke/n02113023_7275.jpg',
  ])

  // 方法
  async function getDog() {
    try {
      let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
      // console.log(result.data.message)
      dogList.push(result.data.message)
    } catch (error) {
      // console.log(error)
      alert(error)
    }
  }

  // 钩子
  onMounted(() => {
    // 挂载完毕，就获取一只狗
    getDog()
  })

  // 向外部提供数据
  return { dogList, getDog }  // 这里返回的是对象的简写形式
}
