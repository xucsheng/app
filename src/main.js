import Vue from 'vue'
import App from './App.vue'
// 三级联动组件--全局组件
import TypeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel";
import Pagination from "@/components/Pagination";
import {Button,MessageBox} from 'element-ui';
// 注册全局注册
Vue.component(Button.name, Button);
// 第一个参数：全局组件名字，第二个参数：哪个组件
Vue.component(TypeNav.name,TypeNav);
// 第二个参数：全局组件名字，第二个参数：哪个组件
Vue.component(Carousel.name,Carousel);
Vue.component(Pagination.name,Pagination);
// element UI 注册组件可以挂载原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

// 引入路由配置
import router from './router'

import  store  from "@/store";

Vue.config.productionTip = false;

// 引入MockServer.js---mock数据
import "@/mock/mockServe";
// 引入swiper样式
import "swiper/css/swiper.css";

// 统计接口api文件里面全部请求函数
import * as API from '@/api';
// 引入插件
import VueLazyload from 'vue-lazyload';

import atm from '@/assets/images/1.gif';

// 使用插件
Vue.use(VueLazyload,{
  // 赖加载默认图片
  loading:atm,
});

import  myPlugins from '@/plugins/myPlugins';

Vue.use(myPlugins,{
  name:'upper'
});
// 引入表单校验插件
import "@/plugins/validate";

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  // 注册路由：底下写法kv一致省略v【router】
  // 注册路由信息：当这里书写router的时候，组件身上都拥有$route,$router属性
  router:router,
  // 注册仓库：组件实例的身上多了一个属性$store属性
  store:store,
}).$mount('#app')
