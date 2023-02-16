<template>
    <div>
      <!--三级联动组件：三级联动已经注册全局组件，因此不需要引入-->
      <TypeNav/>
      <ListContainer/>
      <Recommend/>
      <Rank/>
      <Like/>
      <floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"/>
      <Brand/>

    </div>

</template>
<script>
import ListContainer  from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
import {mapState} from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Home',
  components:{
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  computed:{
   ...mapState({
     floorList:state =>state.home.floorList}
   )
  },
  methods:{

  },
  mounted() {
    // 触发action，获取floor组件数据
    this.$store.dispatch("getFloorList");
    // 获取用户信息
   // this.$store.dispatch('getUserInfo');

  }
}

</script>
<style >

</style>
