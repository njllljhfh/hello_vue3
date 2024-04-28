<template>
  <div class="person">
    <ul>
      <!-- 如果 list 是空的，则界面上看不到下面的列表，界面也是空的 -->
      <li v-for="p in list" :key="p.id">
        {{ p.name }} -- {{ p.age }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="Person">
  // defineProps 属于宏函数，可以不用引入(vue3中，define开头的一般都不用引入)
  import { defineProps, withDefaults } from 'vue';
  import { type Persons } from '@/types'
  
  // 只接收 list
  // defineProps(['list'])

  // 接收list + 限制类型
  // <> 表示泛型
  // defineProps<{list:Persons}>()

  // 接收list + 限制类型 + 限制必要性
  // 这里的'?' 在 ts 中 表示 list 这个变量可传可不传
  // defineProps<{ list?: Persons }>()

  // 接收list + 限制类型 + 限制必要性 + 指定默认值
  // 当 list 没有传递时，显示自定义的默认数据
  withDefaults(defineProps<{ list?: Persons }>(),
    {
      // list:[{id:'aaa01',name:'康师傅·王麻子·特仑苏',age:19}]  // 不能直接写数组，要用函数
      list: () => [{ id: 'aaa01', name: '康师傅·王麻子·特仑苏', age: 19 }]
    }
  )

  // 接收 list, 同时将props保存起来
  // let x = defineProps(['list'])
  // console.log(x)
</script>

<style scoped>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }

  button {
    margin: 0 5px;
  }

  li {
    font-size: 20px;
  }
</style>