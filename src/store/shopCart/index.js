import {reqCartList, reqDeleteCartById,reqUpdateCheckedById} from "@/api";

const state ={
    cartList:[],
};
const mutations={
    GETCARLIST(state,cartList){
        state.cartList = cartList;
    },

};
const actions={
// 获取购物车列表信息
    async  getCartList({commit}){
        let result =  await reqCartList();
        // 测试是否可以获取个人购物车的数据
        if(result.code == 200 ){
            commit('GETCARLIST',result.data);
        }
    },
    // 删除购物车
   async  deleteCartListBySkuId({commit},skuId){
      let result =   await reqDeleteCartById(skuId);
      if(result.code == 200){
          return 'ok'
      }else{
          return  Promise.reject(new Error('failed') )
      }
    },
    // 修改购物车选中情况
     async   updateCheckedById({commit},{skuId,isChecked}){
       let result =  await reqUpdateCheckedById(skuId,isChecked);
         if(result.code == 200){
             return 'ok'
         }else{
             return  Promise.reject(new Error('failed') )
         }
    },
    // 删除选中的产品
    deleteAllCheckedCart({dispatch,getters}){
        let PromiseAll =[];
        // context:小仓库，commit：提交mutation修改state getter【计算属性】
        getters.cartList.cartInfoList.forEach(item=>{
            let promise = item.isChecked == 1 ? dispatch('deleteCartListBySkuId',item.skuId):'';
            // 将每一次promise添加到数据组中
             PromiseAll.push(promise);
        })
        // 只要全部都成功，返回结果为成功
        return  Promise.all(PromiseAll);
    },
    // 修改全部产品状态
     updateAllCartIsChecked({dispatch,state},isChecked){
         let PromiseAll =[];
           state.cartList[0].cartInfoList.forEach(item=>{
           let promise =  dispatch('updateCheckedById',{skuId:item.skuId,isChecked});
              PromiseAll.push(promise);
        })
         // 只要全部都成功，返回结果为成功
         return  Promise.all(PromiseAll);
     }
};
const getters={
    cartList(state){
        return state.cartList[0]||{};
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}

