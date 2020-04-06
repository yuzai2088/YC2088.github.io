module.exports = {
    publicPath:"./",
    devServer: {
        // 设置代理
        // proxy: {
        //     '/api': {
        //         // 目标 API 地址
        //         target: 'https://m.maizuo.com/',
        //         // 将主机标头的原点更改为目标URL
        //         changeOrigin: true
        //     },
        //     "/mydata":{
        //         target:"http://localhost:8081/mydata",
        //         changeOrigin:true
        //     }
        // }
    },
    css: {
        loaderOptions: {
               css: {
                       // options here will be passed to css-loader
               },
         postcss: {
                    // options here will be passed to postcss-loader
                    plugins: [require('postcss-px2rem')({
                              remUnit: 75,//设计稿的 十分之一
                              exclude: /node_modules/i
                    })],
               }
          }
      }
}