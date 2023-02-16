import Vue from 'vue'
// 配置路由的地方
// 该文件专门用于创建整个应用的路由器  引入vue-router路由插件
import VueRouter from "vue-router";
// 引入路由配置文件
import routes from "@/router/routes";
// 应用插件
Vue.use(VueRouter);
// 引入store
import store from "@/store";

// 先把VueRouter对象的push，先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 重新push|replace方法
// 第一个参数：告诉原来push方法，你往哪里跳转（传递哪些参数）
// 第二个参数：成功回调
// 第三个参数：失败的回调
VueRouter.prototype.push = function (location,resolve,reject){
    if(resolve && reject ){
        // call|apply区别；相同点，都可以调用函数一次，都可以篡改函数的上下文一次
        // 不同的：call|apply传递参数，call传递参数用逗号隔开，apply方法执行，传递数组
        originPush.call(this,location,resolve,reject);
    }else{
        originPush.call(this,location,()=>{},()=>{});
    }
}
VueRouter.prototype.replace = function (location,resolve,reject){
    if(resolve && reject ){
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}

//配置路由
let  router = new VueRouter({
    // 配置路由
    routes,
    // 滚动行文
    scrollBehavior (to, from, savedPosition) {
        // 返回的这个y=0，代表滚动条在最上方
        return { y: 0 }
    }
})
// 全局守卫，前置守卫(在路由跳转之间进行判断
router.beforeEach(async (to,from,next)=>{
    // to:可以获取到你要跳转的哪个路由
    // from:可以获取你从哪个路由而来
    // next:放行函数   next(); 放行   next(path)放行到指令路由  next(false)
    // 用户登陆了，才会有token，未登录一定不会有token
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;
    if(token){
        // 用户已经登录了，还想去login[不能去，停留在首页
        if(to.path == '/login'){
            next('/home');
          }else{
            // 登录了，去的不是登录[home|search|detail|shopcart]
            if(name){
                next();
            }else{
                // 没有用户信息,派发action仓库存储用户信息在跳转
                try{
                    await store.dispatch('getUserInfo');
                    next();
                }catch (error ){
                    // token 过期了，清楚token
                    await store.dispatch('userLogout');
                    next('/login');
                }
            }
          }
      }else{
        // 用户未登录
        // 未登录不能去交易相关页面、个人、支付相关【pay\paySuccess】
         let toPath = to.path;
         if(toPath.indexOf('/trade') !=-1 ||toPath.indexOf('/pay') !=-1 ||toPath.indexOf('/center') !=-1){
             next('/login?redirect='+toPath);
         }else{
             // 去的不是上面这些路由
             next();
         }
      }


});


export default  router;
