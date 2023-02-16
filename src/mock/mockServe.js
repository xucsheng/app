// 先引入mockjs模块
import Mock from 'mockjs';
// 把json数据格式导入进来[JSON数据格式根本没有对外暴露，但是可以引入】
// webpack默认对外暴露，图片、JSON数据格式
import banner from "./banner.json";
import  floor from './floor.json'
// mock数据:第一个参数请求地址，第二个参书，请求数据
Mock.mock("/mock/banner",{code:200,data:banner});// 模拟首页的轮播图片的数据
Mock.mock("/mock/floor",{code:200,data:floor});

