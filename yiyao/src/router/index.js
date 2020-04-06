import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Navone from "../views/home/Navone.vue";
import Get from "../views/Get.vue";
import Myself from "../views/Myself.vue";
import Shopping from "../views/Shopping.vue";
import Shop from "../views/shopping/Shop.vue";
import List from "../views/shopping/List.vue";
import Getail from "../views/get/Getail.vue";
import ShoppingList from "../views/get/List.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Find from "../views/Find.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "home/navone",
  },
  {
    path: "/home",
    name:"home",
    component: Home,
    redirect: "navone",
    children:[{
      path:"navone",
      component:Navone,
    }]
  },
  {
    path: "/get",
    name: "get",
    component: Get
  },
  {
    path: "/myself",
    name: "myself",
    component: Myself
  },
  {
    path: "/shopping",
    redirect: "shopping/shop",
  },
  {
    path: "/shopping",
    name: "shopping",
    component: Shopping,
    children:[{
      path:"shop",
      component:Shop,

    },{
      path:"list",
      component:List,
    }],
  },
  {
    path: "/about",
    name: "about",
    component: () =>
    import("../views/About.vue")
  },
  {
    path:"/navone/getail",
    name:"getail",
    component:Getail,
  },
  {
    path: "/shoppinglist",
    name:"shoppinglist",
    component: ShoppingList
  },
  {
    path: "/register",
    name:"register",
    component: Register
  },
  {
    path: "/login",
    name:"login",
    component: Login,
  },
  {
    path: "/find",
    name:"find",
    component: Find,
  }
 
];

const router = new VueRouter({
  mode: 'hash',
  routes
});

export default router;
