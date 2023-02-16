import Vue from 'vue'
import  Vuex from 'vuex';
// 使用插件
Vue.use(Vuex);
// state:仓库存储数据的地方
//  对外暴露Store类的一个实例
// const state ={
//     count:1,
// };
// mutations:修改state的唯一手段
// const mutations ={
//     ADD(state){
//         state.count++;
//     }
// };
// // actions:处理action，可以书写直接的业务逻辑，也可以处理逻辑
// const actions={
//     // 这里可以书写业务逻辑，但是不能修改state
//     add({commit}){
//         commit("ADD");
//     }
// };
// // getter:理解为计算属性，用于简化仓库数据，让组件获取仓库数据更加方便
// const getters ={};

// 引入小仓库
import home from "@/store/home";
import search from "@/store/search";
import detail from "@/store/detail";
import shopCart from "@/store/shopCart";
import user  from "@/store/user";
import trade from "@/store/trade";
export default  new Vuex.Store({
    // 实现Vuex仓库模块开发存储数据
    modules:{
        home,
        search,
        detail,
        shopCart,
        user,
        trade
    }

})
