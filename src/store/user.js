import {reqGetCode, reqRegister, reqUserLogin, reqUserInfo, reqLogout} from '@/api'

// 登录与注册模块
const state ={
      code:'',
      token:localStorage.getItem('TOKEN'),
      userInfo:{}
};
const mutations={
    GETCODE(state,code){
        state.code = code;
    },
    USERLOGIN(state,data){
        state.token = data;
    },
    GETUSERINFO(state,data){
        state.userInfo = data;
    },
    USERLOGOUT(state){
        state.token='';
        state.userInfo={};
        localStorage.removeItem('TOKEN');
    }
};
const actions ={
    // 获取验证码
    async getCode({commit},phone){
    let  result =   await reqGetCode(phone);
       if(result.code == 200){
           commit('GETCODE',result.data);
           return 'ok';
       }else{
           return   Promise.reject(new Error('failed'))
       }
    },
    // 用户注册
    async  userRegister({commit},user){
      let result =  await  reqRegister(user);
        if(result.code == 200){
            return 'ok';
        }else{
            return   Promise.reject(new Error('failed'))
        }
    },
    // 登录业务【token】
   async userLogin({commit},data){
      let result =  await reqUserLogin(data);
       if(result.code == 200){
          commit('USERLOGIN',result.data.token)
           // 持久化token
           localStorage.setItem("TOKEN",result.data.token);
          return  'ok';
       }else{
           return   Promise.reject(new Error('failed'))
       }
    },
    // 获取用户信息
    async getUserInfo({commit}){
      let result = await reqUserInfo();
        if(result.code == 200){
            commit('GETUSERINFO',result.data);
            return 'ok';
        }else {
            return  Promise.reject(new Error('failed'));
        }
    },
    // 退出登录
    async userLogout({commit}){
        let result = await reqLogout();
        if(result.code == 200){
            commit('USERLOGOUT');
            return 'ok';
        }else {
            return  Promise.reject(new Error('failed'));
        }
    }
};
const getters={

};

export default {
    state,
    mutations,
    actions,
    getters
}
