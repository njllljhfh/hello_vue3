import { ref, onMounted, computed } from 'vue'


export default function () {
  // 数据
  let sum = ref(0)

  // 计算属性
  let bigSum = computed(() => {
    return sum.value * 10
  })

  // 方法
  function add(n: number) {
    sum.value += n
  }

  // 钩子
  onMounted(() => {
    let n = 100
    add(100)
  })

  // 向外部提供数据
  return { sum, add, bigSum }
}
