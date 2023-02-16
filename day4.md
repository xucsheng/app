  复习
  1）商品分类的三级列表有静态变成动态形式【获取服务器数据，解决代理跨域问题】
  2）函数防抖与节流【面试频率很高】
  3）路由的跳转：申明式导航（router-link）、编程式导航
  编程式导航解决这个问题：自定义属性
  
1）开发Search模块中的TypeNav商品分类菜单（过渡动画效果）
过渡动画：前期组件|元素务必有v-if|v-show指令才可以进行过渡动画

2)现在商品分类三级分类可以进行优化？
在App根组件当中发送请求【根组件mounted】执行一次
3）合并params与query参数

4)开发home首页中ListContainer组件与Floor组件？
https://docschina.org/
但是注意：服务器返回是数据接口，只用商品的分类菜单数据，对于ListContainer组件与Floor组件服务器没有提供的。
mock数据（模拟）：如果你想mock数据，需要用到已经插件mock.js
使用步骤：
1）在项目中创建mock文件夹
2）第二步准备JSON数据（mock文件夹中创建数据）--格式一下，别留有空格（跑不起来）
3）mock数据需要的图放置的public文件夹中
4)第4步开始mock,创建mockServe.js
5)mockserver.js文件在入口文件中引入

ListContainer组件开发重点
swiper轮播图：按照最新6，按照是swiper@5版本
cnpm install --save swiper@5
第一步：引包（js|css）
第二步：页面中结构必要有
第三步：（页面当中必要有的结构）：new swiper实例


