
import Vue from "vue"
import VueRouter from "vue-router"

// 0. 模块化编程 
Vue.use(VueRouter);
 
// 1. 定义路由选项
// import  Home from "@/views/Home.vue";
import Guide from "@/views/Guide.vue"

// 2. 定义路由组件的映射关系

const routes = [
    {
        path:"/",
        redirect:{name:'guide'}
    },
    {
        path:"/guide",
        name:"guide",
        component:Guide
    },
    {
        path:"/main",
        name:"main",
        component:()=>import("@/views/Main.vue"),
        children:[
            {
                path:"",
                redirect:{name:'movie'}
            },
            {
                path:"movie",
                name:'movie',
                component:()=>import("@/views/Movie.vue"),
            },
            {
                path:"cinema",
                name:'cinema',
                component:()=>import("@/views/Cinema.vue"),
            },
            {
                path:"good",
                name:'good',
                component:()=>import("@/views/Good.vue"),
            },
            {
                path:"mine",
                name:'mine',
                component:()=>import("@/views/Mine.vue"),
            },
            {
                path:"*",
                redirect:{name:'movie'}
            }
        ]
    },
    {
        path:"/login",
        name:"login",
        component:()=>import("@/views/Login.vue"),
    },
    {
        path:"/login2",
        name:"login2",
        component:()=>import("@/views/Login2.vue"),
    },
    {
        path:"/register",
        name:"register",
        component:()=>import("@/views/Register.vue"),
    },
    {
        path:"/changpwd",
        name:"changpwd",
        component:()=>import("@/views/Changpwd.vue"),
    },
    {
        path:"/pepinfo",
        name:"pepinfo",
        component:()=>import("@/views/Pepinfo.vue"),
    },
    {
        path:"/set",
        name:"set",
        component:()=>import("@/views/Set.vue"),
    },
    {   
        path:"/search/:keyword?",
        name:"search",
        component:()=>import("@/views/Search.vue"),
    },
    {
        path:"/city",
        name:'city',
        component:()=>import("@/views/City.vue"),
    },
    {
        path:"/shopcar",
        name:'shopcar',
        component:()=>import("@/views/Shopcar.vue"),
    },
    {
        path:"/detail",
        name:'detail',
        component:()=>import("@/views/Detail.vue"),
    },
    {
        path:"/detail2",
        name:'detail2',
        component:()=>import("@/views/Detail2.vue"),
    },
    {
        path:"/comment",
        name:'comment',
        component:()=>import("@/views/Comment.vue"),
    },
    {
        path:"/comment2",
        name:'comment2',
        component:()=>import("@/views/Comment2.vue"),
    },
    {
        path:"*",
        redirect:{name:"guide"}
    }
]

// 3. 创建 路由对象 
const router = new VueRouter({
    routes
})

// 4. 暴露并且挂载
export default router;