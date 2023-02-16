<template>
   <div>
     <a :title="title">
       <!-- 下面的v-bind不能简写@替换-->
     <el-button v-bind="$attrs" v-on="$listeners"></el-button>
     </a>
   </div>
</template>
<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'',
    props:['title'],
    mounted() {
      // $attrs属性组件的一个属性，可以获取父组件传递过来的props参数
      // 对于子组件props介绍到，但是需要注意，如果子组件通过props接的属性，attrs是获取不到了
      console.log(this.$attrs);
      // $listeners ,组件实例自身的一个属性，它可以获取父组件传递自定义事件
      console.log(this.$listeners);
    }
  }
</script>
<style>

</style>
