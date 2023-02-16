// vue插件一定暴露一个对象
let myPlugins ={};

myPlugins.install = function (vue,options){
    // Vue.prototype.$bus
    vue.directive(options.name,(element,params)=>{
        element.innerHTML = params.value.toUpperCase();
        console.log(params);
    })
};
export  default  myPlugins;
