import Vue from 'vue'
import App from './App.vue'
import router from './router'   // 路由
import store from './store'     //  vuex  
import './registerServiceWorker'


console.log("主入口文件 -- entry -- webpack- 模块化打包");

// 引入全局的样式 
import "@/styles/index.scss";

Vue.config.productionTip = false

// 引入 Vant
import Vant from "vant"
Vue.use(Vant); // 全局声明注册 

import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import Head from "@/components/Head.vue"
Vue.component("Head",Head);   // 全局注册 


import VueResource from "vue-resource";
Vue.use(VueResource);  // 全局注册声明   this.$http  Vue.http


import {axios} from "@/utils";
Vue.prototype.$axios = axios;      // this.$axios  挂载 Vue 的原型对象 


import Carousel from "@/components/Carousel.vue"
Vue.component("Carousel",Carousel);

import CarouselItem from "@/components/CarouselItem.vue"
Vue.component("Carousel-item",CarouselItem);

// 根实例  

new Vue({
  router,  // this.$router 
  store,
  render: h => h(App) // 渲染函数   App 当做根组件 渲染 id = app 里面
}).$mount('#app')

// function render(h){
//   return h(App)
// }