const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  productionSourceMap:false,
  transpileDependencies: true,
  // eslint 校验取消
  lintOnSave: false,
  // 配置代理跨域
  devServer:{
    proxy:{
      "/api":{
        target:"http://gmall-h5-api.atguigu.cn",
        // pathRewrite: { '^/api': '' },
      }
    }
  }
})
