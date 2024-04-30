<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>{{ username }}</h4>
    <h4>{{ password }}</h4>
    <!-- ================================================================ -->

    <!-- v-model用在html标签上 -->
    <!-- <input type="text" v-model="username"> -->
    <!-- ----------------------------------- -->
    <!-- v-model 的底层原理，是一个动态的value值 配合 input 事件 -->
    <!-- $event.target  $event是事件对象， .target是触发该事件的对象 -->
    <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->
    <!-- ================================================================ -->

    <!-- v-model用在组件标签上 -->
    <!-- <AtguiguInput v-model="username"/> -->
    <!-- ----------------------------------- -->
    <!-- ********* <AtguiguInput v-model="username"/> 的本质 ********* -->
    <!-- :modelValue="username"  实现数据到页面 -->
    <!-- @update:modelValue="username = $event"  实现页面上的数据变化，到变量username -->
    <!-- update:modelValue 就是一个事件的名称，只不过名字里面有":"而已 -->
    <!-- 
      $event 到底是啥？是时候能 .target  
      对于原生事件，$event 就是事件对象 ==> 能 .target
      对于自定义事件，$event 就是触发事件时，所传递的数据  ==> 不能 .target
    -->
    <!-- 这里的 $event 是 自定义组件内部的事件传递过来的 数据 -->
    <!-- vue3 的写法 -->
    <!-- <AtguiguInput 
      :modelValue="username" 
      @update:modelValue="username = $event"
    /> -->
    <!-- vue2 的写法，此处只是记录笔记，不用这种写法 -->
    <!-- <AtguiguInput 
      :value="username" 
      @input="username = $event"
    /> -->
    <!-- ================================================================ -->

    <!-- 修改 modelValue，自定义属性名称（如下面的 ming，mima） -->
    <!-- AtguiguInput 组件内部要用 'update:ming' 来定义事件名 -->
    <AtguiguInput v-model:ming="username" v-model:mima="password" />
  </div>
</template>

<script setup lang="ts" name="Father">
  import { ref } from "vue";
  import AtguiguInput from './AtguiguInput.vue'
  // 数据
  let username = ref('zhansgan')
  let password = ref('123456')
</script>

<style scoped>
  .father {
    padding: 20px;
    background-color: rgb(165, 164, 164);
    border-radius: 10px;
  }
</style>
