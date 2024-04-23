<template>
  <div>
    <h2 class="person">当前求和为：{{ sum }}</h2>
    <button @click="add">点我sum+1</button>
  </div>
</template>

<script>
  export default {
    /* eslint-disable */
    name: 'Person',
    // 数据
    data() {
      return {
        sum: 0
      }
    },
    //方法
    methods: {
      add() {
        this.sum += 1
      }
    },
    // --------------------------------------

    // 创建前的钩子
    beforeCreate() {
      console.log('创建前')
    },
    // 创建完毕的钩子
    created() {
      console.log('创建完毕')
    },
    // --------------------------------------

    // 挂载前的钩子
    beforeMount() {
      console.log('挂载前')
      // debugger;
    },
    // 挂载完毕
    mounted() {
      console.log('挂载完毕')
    },
    // --------------------------------------

    // 更新前钩子
    beforeUpdate() {
      console.log('更新前')
    },
    // 更新完毕钩子
    updated() {
      console.log('更新完毕')
    },
    // --------------------------------------

    // 销毁前钩子
    beforeDestroy(){
      console.log('销毁前')
    },
    // 销毁完毕钩子
    destroyed(){
      console.log('销毁完毕')
    }
  }
</script>

<style scoped>
  .person {
    background-color: skyblue;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
</style>