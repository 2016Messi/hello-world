const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/tyzpwb/stuchooseexam/getPositionInfo.htm': {
        target: 'http://42.101.89.194:9010/',  // 需要跨域的目标url
        ws: true,
        changeOrigin: true,
        // pathRewrite: {
        //   '^/api': '',  // 将请求的路径重写为 /api 后为空
        // },
      },
    },
  },  
})

// module.exports = {

// };