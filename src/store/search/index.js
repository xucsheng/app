// search 模块的小仓库
import {reqGetSearchInfo} from "@/api"

const state ={
    searchList:{},
};
const mutations ={
    GETSEARCHLIST(sate,searchList){
        state.searchList =searchList
    }
};
const  actions={
    // 获取search模块数据
    async   getSearchList({commit},params ={}){
        // params 行参数：是用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        let result  =   await reqGetSearchInfo(params);
        if(result.code == 200){
            commit('GETSEARCHLIST',result.data)
        }
    }
};
// 计算属性，在项目中，为了简化数据而生。
// 简化仓库中数据而生
const  getters={
    // 当前形式参数，是当前仓库中state，并非大仓库中state
    goodsList(state){
        // 这个书写是有问题的
        // 没有网或者返回数据慢时,undefined
       return  state.searchList.goodsList || [] ;
    },
    trademarkList(state){
        return  state.searchList.trademarkList ||{};
    },
    attrsList(state){
        return  state.searchList.attrsList || {};
    }

};

export default {
    state,
    mutations,
    actions,
    getters

}
