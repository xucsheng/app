<template>
  <div class="swiper-container"  ref="cur">
    <!--轮播图的地方-->
    <div class="swiper-wrapper" >
      <div class="swiper-slide"  v-for="(carousel,index) in list" :key="carousel.id">
        <img :src="carousel.imgUrl">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
<script>
// 引入轮播图
import Swiper from "swiper";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Carousel',
  props:['list'],
  watch:{
    // 监听 bannerList数据的变化，因为这条数据发生过变化--空数组变成数组里面4个元素
      list:{
      immediate:true,
      handler(){
        // 保证banner数据有了，无法保证v-for遍历完成
        // v-for执行完成，才有结构【你现在在watch中没法保证】
        // 现在使用watch监听Banner属性的属性的变化
        // 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。它跟全局方法 Vue.nextTick 一样，不同的是回调的 this 自动绑定到调用它的实例上
        this.$nextTick(()=>{
          new Swiper (this.$refs.cur,
              {
                loop: true, // 循环模式选项
                // 如果需要分页器
                pagination: {
                  el: '.swiper-pagination',
                  // 点击小球时候可以选择切换图片
                  clickable:true,
                },
                // 如果需要前进后退按钮
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
              }
          )}
        )
      }
    }
  }
}

</script>
<style>

</style>
