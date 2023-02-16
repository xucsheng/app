<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(slide,index) in skuImageList" :key="slide.id">
        <img :src="slide.imgUrl" :class="{active:currentIndex==index}" @click="changeCurrentIndex(index)">
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>

  import Swiper from 'swiper';

  export default {
    name: "ImageList",
    props:['skuImageList'],
    data(){
      return{
        currentIndex:0,
      }
    },
    methods:{
      changeCurrentIndex(index){
        // 修改响应式数据
        this.currentIndex = index;
        // 通知兄弟组件当前索引值
        this.$bus.$emit('getIndex',index);
      }
    },
   watch:{
      skuImageList(newValue,oldValue){
         // 保证banner数据有了，无法保证v-for遍历完成
         // v-for执行完成，才有结构【你现在在watch中没法保证】
         // 现在使用watch监听Banner属性的属性的变化
         // 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。它跟全局方法 Vue.nextTick 一样，不同的是回调的 this 自动绑定到调用它的实例上
         this.$nextTick(()=>{
           new Swiper (this.$refs.cur,
               {
                 // 如果需要前进后退按钮
                 navigation: {
                   nextEl: '.swiper-button-next',
                   prevEl: '.swiper-button-prev',
                 },
                 // 显示小框里面图片个数
                 slidesPerView:3,
                 // 每次切换图片大小
                 slidesGrid:1,
               }
           )}
         )
       }

     }

  }
</script>

<style lang="less" scoped>
  .swiper-container {
    height: 56px;
    width: 412px;
    box-sizing: border-box;
    padding: 0 12px;

    .swiper-slide {
      width: 56px;
      height: 56px;

      img {
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
        padding: 2px;
        width: 50px;
        height: 50px;
        display: block;

        &.active {
          border: 2px solid #f60;
          padding: 1px;
        }

      }
    }

    .swiper-button-next {
      left: auto;
      right: 0;
    }

    .swiper-button-prev {
      left: 0;
      right: auto;
    }

    .swiper-button-next,
    .swiper-button-prev {
      box-sizing: border-box;
      width: 12px;
      height: 56px;
      background: rgb(235, 235, 235);
      border: 1px solid rgb(204, 204, 204);
      top: 0;
      margin-top: 0;
      &::after {
        font-size: 12px;
      }
    }
  }
</style>
