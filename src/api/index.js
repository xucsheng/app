// 当前这个模块：API进行统一管理
import requests from "@/api/ajax";

import mockRequests from "@/api/mockAjax";
// 三级联动接口
// /api/product/getBaseCategoryList get 无参数
// 发送函数:axios发送请求返回是promise对象
export const reqCategoryList=()=> requests({url:'/product/getBaseCategoryList',method:'get'});

// 获取banner（home首页轮播图接口)
export const reqGetBannerList=()=>mockRequests({url:'/banner',method:'get'})

// 获取floor组件的数据
export const reqFloorList=() => mockRequests({url:'/floor',method:'get'});

// 获取搜索模块中数据 地址: /api/list 请求post ，请求带参数
// {
//     "category3Id": "61",
//     "categoryName": "手机",
//     "keyword": "小米",
//     "order": "1:desc",
//     "pageNo": 1,
//     "pageSize": 10,
//     "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
//     "trademark": "4:小米"
// }
// 当前这个函数是否需要接受外部传递参数
export  const reqGetSearchInfo=(params)=>requests({url:'/list',method:'post',data:params});

// 获取产品详情的接口 /api/item/{ skuId }
export  const reqGoodInfo=(skuId)=>requests({url:`/item/${skuId}`,method:'get'});

// 将产品添加到购物车中（获取更新某一个产品的个数
// /api/cart/addToCart/{ skuId }/{ skuNum }
export  const  reqAddOrUpdateShopCard=(skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'});

// 获取购物车商品
// url /cart/cartList
export  const  reqCartList=()=>requests({url:'/cart/cartList',method:'get'});

// 删除购物车
// /cart/deleteCart/{skuId}
export const  reqDeleteCartById=(skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'});

// 切换商品的选中方式
// /cart/checkCart/{skuID}/{isChecked}
export const reqUpdateCheckedById=(skuId,isChecked) =>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'});

// 获取验证码 /user/passport/sendCode/phone
export const reqGetCode=(phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'});

// 注册 /user/passport/register
export  const  reqRegister=(data) =>requests({url:'/user/passport/register',data,method:'post'});

// 登录 /user/passport/login
export  const reqUserLogin=(data)=>requests({url:'/user/passport/login',data,method:'post'});

// 自动登录 /user/passport/auth/getUserInfo
export  const reqUserInfo=()=>requests({url:'/user/passport/auth/getUserInfo',method:'get'});

// 退出登录 /user/passport/logout
export  const  reqLogout=()=>requests({url:'/user/passport/logout',method:'get'});

// 获取用户收件地址信息  /user/userAddress/auth/findUserAddressList
export  const  reqAddressInfo=()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'})

// 获取订单交易页面 /order/auth/trade
export  const  reqOrderInfo=()=>requests({url:'/order/auth/trade',method:'get'})

// 提交订单 /order/auth/submitOrder?tradeNo={tradeNo}
export  const  reqSubmitOrder=(tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'});

// 获取订单信息 /payment/weixin/createNative/{orderId}
export  const reqPayInfo=(orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'});

// 查询订单支付状态 /payment/weixin/queryPayStatus/{orderId}
export const reqPayStatus=(orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'});

// 获取我的订单列表 /order/auth/{page}/{limit}
export const reqMyOrderList =(page,limit)=>requests({url:`/order/auth/${page}/${limit}`,method:'get'});
