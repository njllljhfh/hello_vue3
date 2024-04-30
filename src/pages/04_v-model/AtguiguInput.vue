<template>
  <input 
    type="text" 
    :value="ming"
    @input="emit('update:ming',(<HTMLInputElement>$event.target).value)"
  >
  <br>
  <input 
    type="text" 
    :value="mima"
    @input="emit('update:mima',(<HTMLInputElement>$event.target).value)"
  >
</template>

<script setup lang="ts" name="AtguiguInput">
  defineProps(['ming','mima'])
  // update:ming 中的 update: 是固定写法
  const emit = defineEmits(['update:ming','update:mima'])
</script>

<!-- ================================================================ -->
<!-- 讲解自定义ui组件的细节时，用的代码 -->
<!-- 对应 Father.vue中的 <AtguiguInput v-model="username"/> -->
<!-- <template>
  <input type="text" 
  :value="modelValue" 
  @input="emit('update:modelValue', (<HTMLInputElement>$event.target).value)">
</template>

<script setup lang="ts" name="AtguiguInput">
  defineProps(['modelValue'])
  const emit = defineEmits(['update:modelValue'])
</script> -->
<!-- ================================================================ -->


<style scoped>
  input {
    border: 2px solid black;
    background-image: linear-gradient(45deg, red, yellow, green);
    height: 30px;
    font-size: 20px;
    color: white;
  }
</style>