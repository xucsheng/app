1：vue-cli 脚手架初始化项目。
node+webpack+淘宝镜像
node_modules文件夹：项目依赖文件夹

public文件夹：一般放置静态资源（图片），需要注意，放在public文件夹的静态资源，webpack进行打包的时候，
会原封不动打包到dist文件夹中。

src文件夹（程序员源代码文件夹）:
  assets文件夹：一般也是放置静态资源（一般放置多个组件公用的静态资源），需要注意，放置在asset文件夹里面静态

  components文件夹，一般放置的是非路由组件（全局组件）

  App.vue:唯一的根组件，Vue当中组件（.vue)
  main.js:程序入口文件，也是程序最新执行的文件

babel.config.js:培训文件（babel相关）

package.json文件：认为是项目的身份证，记录项目叫做什么，项目中有哪些依赖、项目怎么运行。

package-lock.json:缓存性的文件

README.md:说明文件

2.1 项目运行起来的时候，让浏览器自动打开
---package.json
"scripts": {
    "serve": "vue-cli-service serve --open",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  2.2 eslint效验功能关闭
  ---在根目录在，创建vue.conf.js文件
  比如：申报变量没有使用
  2.3 src文件夹简写，配置别名。 @：代表src文件夹，这样将来文件过多，找的时候方便
  jsconfig.json文件
  "paths": {
        "@/*": [
          "src/*"
        ]
  3：项目路由分析
  vue-router
  前端所谓路由：kv键值对。
  key:URL(地址栏中的路由）
  value:相应的路由组件
  注意：项目上中下结构
  路由组件：
  Home首页路由组件、Search搜索路由组件、login登录路由、Register组件
  非路由组件：
  Header【首页、搜索页】
  footer【在首页、搜索页】但是在登录|注册页面没有
  注意2：项目采样less样式，浏览器不识别less样式，需要通过less、less-loader[按照五版本]进行处理
  less,把less样式变成css样式，浏览器才可以识别 cnpm install --save less less-loader@5
  4.1使用组件的步骤（非路由组件）
   -创建或者定义
   -引入
   -注册
   -使用
  5)路由组件的搭建
  vue-router: cnpm install --save vue-router
  在上面分析的时候，路由组件应该有四个：Home、Search、Login、Register
  -components文件夹：经常放置非路由组件（公用全局组件）
  -pages|views文件夹经常放置路由组件
  5.1配置路由
    项目当中配置的路由一般放置在router文件夹中
  5.2总结
  路由组件与非路由组件的区别？
  1：路由组件一般放置pages|view文件夹、非路由组件一般放置components文件夹中
  2：路由组件一般需要router文件中进行注册（使用的即为组件的名字），非路由组件在使用的时候，一般都是一标签形式使用
  3：注册完路由，不管路由组件、还是非路由组件身上都有$route、$router属性
  $route：一般获取路由信息【路由、query、params等】
  $router属性：一般进行编程式导航路由跳转【push|replace】
  5.3路由的跳转
  路由的跳转有两种形式：申明式导航router-link，可以进行路由的跳转
  编程式导航push|replace,可以进行路由跳转
  编程式导航：申明式导航能做的，编程式都可以
  但是变成式导航除了可以进行路由跳转，还可以做一些其它的业务逻辑。
  6)Footer组件显示与隐藏
  显示或者隐藏组件：v-if|v-show
  Footer组件：在Home、search显示Footer组件
  Footer组件：在登录、注册是隐藏消失的
  6.1我们可以根据组件身上$route获取路由的信息，通过路由路径判断Footer显示与隐藏。
  6.2配置的路由的时候，可以给路由添加元信息[meta],路由需要配置对象，它的key不能瞎写、胡写、乱写。
  8）路由传参数
   8.1：路由跳转有几种方法？
   比如：A->B
   申明式导航：router-link(务必要有通属性）,可以实现路由的跳转
   编程式导航：利用的是组件实例的$router.push|replace方法，可以实现路由的跳转。（可以书写一些参数）
   params参数：属于路径当中一部分，需要注意，在配置路由的时候，需要占位
   query参数：不属于路径中的一部分，类似于ajax中queryString /home?k=v&kv=,不需要站位
   9)路由传参相关试题
   1：路由传递参数（对象写法）path是否可以结合params参数一起使用？
   2：如何指定params参数可传可不传？
   比如：配置路由的时候，占位了（param参数），但是路由跳转的时候就是不传递。
   http://localhost:8081/#/?k=123
   http://localhost:8081/#/search?k=123
   3：params参数可以传递也可以不传递，但是如果传递是空字符串，如何解决？
   4：路由组件能不能传递props数据？




