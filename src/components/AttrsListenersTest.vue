<template>
  <div>
     <h2>自定义带Hover提示的按钮</h2>
    <!--当用户在适用我们封装的按钮的时候，需要向HintButton组件传递参数-->
    <HintButton type="success" icon="el-icon-delete" size="mini" title="提示按钮" @click="handler"></HintButton>
  </div>
</template>
<script type="text/ecmascript-6">
import HintButton from "@/components/HintButton";
export default {
  name:'AttrsListenersTest',
  components:{HintButton},
  methods:{
    handler(){
      alert(6666);
    }
  }
}

</script>
