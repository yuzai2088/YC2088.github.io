import axios from "axios";
import {Toast} from "vant";
import router from "../router"

let token = "";
// const baseURL = 'http://localhost:1910/'
const baseURL = 'http://120.27.10.132:1910/'
// axios.defaults.baseURL = baseURL ;     // 应用接口的基路径 (反向代理排斥)
axios.defaults.headers.common['token'] = token;   // req.headers.token 
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

function loading(){
    Toast.clear();
    // 自定义加载图标
    Toast.loading({
        message: '加载中...',
        forbidClick: true,
        loadingType: 'spinner'
    });
}

function success(msg){
    Toast.clear();
    Toast.success({
        message: msg,
        duration:400
    });
}

function fail(msg){
    Toast.clear();
    Toast.fail({
        message:msg,
        duration:400
    });
}

// axios  拦截器  Interceptors
// request 请求发送之前的拦截器
axios.interceptors.request.use(function (config) {

    
    token = sessionStorage.token ? sessionStorage.token : token;
    config.headers['token'] = token;

    // 配置动画
    loading();
    return config;
  }, function (error) {
    // 请求失败错误提示 
    fail('请求失败-网络异常')
    return Promise.reject(error);
});

// response 响应 完成 的拦截器
axios.interceptors.response.use(function (response) {

    console.log(response)


    if(response.data.code=="3000"){
        router.push({name:'mine',query:{active:'mine'}})
    }
    // type  不存在    success
    // type = 0  fail
    // type = 1  success 
    if(!!response.data.type){
        success(response.data.msg);
    }else{
        if(response.data.type==0){
            fail(response.data.msg)
        }else{
            success(response.data.msg)
        }
    }
    

    // 成功的响应
    return response;
  }, function (error) {

    fail('响应失败-服务器异常')
    // 失败的响应 
    return Promise.reject(error);
});

export {axios,baseURL}