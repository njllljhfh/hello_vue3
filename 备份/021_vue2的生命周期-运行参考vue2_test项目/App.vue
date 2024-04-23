<template>
  <!-- v-if 会删除 Person 标签在heml中对应的元素 -->
  <Person v-if="isShow" />
  <!-- v-show 不会删除 Person 标签在heml中对应的元素，只是隐藏了 -->
  <!-- <Person v-show="isShow" /> -->
</template>

<script>
  import Person from "./components/Person.vue"
  export default {
    /* eslint-disable */
    name: 'App',
    components: { Person },
    data() {
      return {
        isShow: true,
      }
    }
  }
</script>
