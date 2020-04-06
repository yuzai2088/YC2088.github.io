<template>
  <div id="app" >
    <meta name="referrer" content="no-referrer">
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
    <div id="nav" v-show="this.$store.state.flag">
      <router-link to="/home/navone">
        <span class="iconfont icon-shouye1"></span>
        <span>首页</span>
      </router-link>
      <router-link to="/get">
        <span class="iconfont icon-shouye29"></span>
        <span>找药</span>
      </router-link>
      <router-link to="/about">
        <img src="img/maiyao.png">
      </router-link>
      <router-link to="/shopping">
        <span class="iconfont icon-shouye10"></span>
        <span>购物车</span>
      </router-link>
      <router-link to="/myself">
        <span class="iconfont icon-shouye4"></span>
        <span>我的</span>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  provide(){
    return {
      reload:this.reload
    }
  },
  data(){
    return{
      isRouterAlive: true,
      docmHeight: document.documentElement.clientHeight ||document.body.clientHeight,
      showHeight: document.documentElement.clientHeight ||document.body.clientHeight,
      hideshow:true //显示或者隐藏footer
    }
  },
  methods: {
   reload () {
     this.isRouterAlive = false
     this.$nextTick(() => (this.isRouterAlive = true))
   }   
 },
 watch: {
    //监听显示高度
   showHeight:function() {
     if(this.docmHeight > this.showHeight){
      //隐藏
       this.hideshow=false
     }else{
      //显示
       this.hideshow=true
     }
   }
 },
mounted() {
   //监听事件
   window.onresize = ()=>{
     return(()=>{
       this.showHeight = document.documentElement.clientHeight || document.body.clientHeight;
   })()
   }
  
 },
}
</script>

<style lang="scss">
*{
	/*页面点击链接时，会出现高亮框，用此代码解决*/
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
/*在谷歌里面小于12号的字，都会显示12号字，此代码解决此问题*/
-webkit-text-size-adjust: none;
/*禁用手机浏览器的用户选择复制文本的功能*/
// -webkit-user-select: none;
// -webkit-box-sizing:border-box;
box-sizing:border-box;}
body,html,div,h1,h2,h3,h4,h5,h6,ul,ol,dl,dt,dd,li,p{margin:0;padding:0;}
a{text-decoration: none;color: #333;}
.clear:after{content:"";display:block;clear:both;overflow:hidden;height:0;visibility:hidden;}
.clear{zoom: 1;}
input:focus{outline:none;}
input::-webkit-input-placeholder { color:grey;font-size: 0.26rem;}
ul,ol{list-style: none;}
img{vertical-align: top;border: 0;}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  width: 750px;
  height: 109px;
  background: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #d8d8d8;
  z-index: 20;
}
#nav a {
  width: 150px;
  position: relative;
  span{
    display: block;
    text-align: center
  }
  .iconfont{
    font-size: 48px;
  }
  img{
    position: absolute;
    widows: auto;
    height: 130px;
    width: auto;
    left: 50%;
    transform: translate(-50%);
    bottom: 0;
  }
}
#nav a:nth-of-type(3){
  height: 100%;
}
#nav a.router-link-exact-active{
  color: #ff6666
}
</style>
