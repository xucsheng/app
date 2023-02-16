import {reqGoodInfo,reqAddOrUpdateShopCard} from "@/api";
// 封装临时游客身份模块uuid-->生成一次随机函数
import {getUUID} from  "@/utils/uuid_token";
// home 模块的小仓库
const state ={
    goodInfo:{},
    // 游客的临时身份
    uuid_token : getUUID(),
};
const mutations ={
    GETGOODINFO(state,goodInfo){
        state.goodInfo = goodInfo;
    },
};
const  actions={
    async getGoodInfo({commit},skuId){
        let result  = await  reqGoodInfo(skuId);
        if(result.code == 200){
            commit('GETGOODINFO',result.data);
        }
    },
    // 将产品添加到购物车中修改某个产品个数
    async  addOrUpdateShopCart({commit},{skuId,skuNum}){
        // 加入购物车,将前台擦参数带个服务器
        // 服务器写入成功，返回200写入成功，代表操作成功
        // 因为服务器没有返回值，不需要三联环
        let result  = await reqAddOrUpdateShopCard(skuId,skuNum);
        if(result.code == 200){
            return 'ok';
        }else{
            // 加入购物车失败
            return  Promise.reject(new Error('false')) ;
        }
    }
};
// 计算属性
const  getters={
    // 当前计算出来的属性的属性值，至少是空对象，避免报错  简化路径导航
    categoryView(state){
        return state.goodInfo.categoryView||{};
    },
    // 简化产品信息的数据
    skuInfo(state){
        return state.goodInfo.skuInfo||{};
    },
    // 产品售卖的属性数据
    spuSaleAttrList(){
        return state.goodInfo.spuSaleAttrList ||[];
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
