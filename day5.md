  复习
  1）完成商品分类的三级列表路由跳转（合并参数）
  2）完成search模块对tyNav使用
  3）对于typeNav请求次数也进行优化
  4）swiper插件
  swiper插件：经常制作轮播图（移动端|pc端也可以使用）
  // 使用步骤：
  第一步：引包（swiper.js|swiper.css）
  第二步：页面中结构必要有
  第三步：初始swiper实例，给轮播图添加动态效果（页面当中必要有的结构）：new swiper实例
  5）mock数据，通过mockjs实现的
  
1）最完美解决轮播图方案
watch + nextTick:数据监听；监听已有数据的变化
$nextTick:将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。
$nextTick:可以保证页面中的结构一定是有点，经常和很多插件一起使用【都需要DOM存在了】

2）开发floor组件
数据格式和服务器格式一致
2.1：getFloorList这个action在哪里触发，是需要在Home路由组件中发送的，不能在floor组件内部发送action
因为我们需要v-for组件遍历
2.2 v-for 也可以在自定义标签中使用

2.3:组件通讯的方法有哪些？
props:用于父子组件通讯
自定义事件：$on @emit 可以实现子给父通讯
全局事件总线：$bus 全局
pubsub-js：vue 全能
插槽
vuex
3)把首页当中的轮播图拆分一个公用的全局组件

4）search模块开发？
1：先静态页面+静态组件拆分出来
2：发请求（API)
3):vuex(三连环)
4）组件获取仓库数据，动态展示数据


