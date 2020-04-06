

//  Vue Cli 脚手架的配置文件  

module.exports = {
    publicPath:"",  // 打包 dist 需要设置 基路径 公共路径
    devServer:{
        host:"localhost",
        port:8080,
        open:true,  // 自动打开浏览器
        inline:true,
        proxy:{    // 反向代理
            "/gateway": {
                target:"https://m.maizuo.com",
                changeOrigin: true,
            },
            "/vue": {
                target:"http://localhost:1910",
                changeOrigin: true,
            },
        }
    }
    // resolve:{
    //     alias:{   // 别名 

    //     }
    // }
}