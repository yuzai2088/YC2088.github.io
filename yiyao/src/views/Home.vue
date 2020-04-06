<template>
  <div class="home">
    <loadup ref="loadFrom"></loadup>
    <div class="banner">
      <tips ref="tipFrom"></tips>
      <search ref="searchFrom"></search>
    </div>
    <!-- 导航内容 -->
    <router-link to="/home/navone"></router-link>
    <router-view/>
    <keep></keep>
    <div class="clear" @click="goto">
      <nav-item></nav-item>
    </div>
    <footer>
       <p>广东壹号大药房连锁有限公司 020-31067218</p>
       <p>地址:广东省广州市越秀区共和西路1号2层</p>
     </footer>
    <fix></fix>
  </div>
</template>

<script>
import loadup from "@/components/home/Loadup.vue";
import tips from "@/components/home/Bannertip.vue";
import search from "@/components/home/Search.vue";
import keep from "@/components/home/Keep.vue";
import navItem from "@/components/home/NavItem.vue";
import fix from "@/components/home/Fixed.vue";

export default {
  name: "home",
  components: {
    loadup,tips,search,keep,navItem,fix
  },
  mounted:function(){
    var height_load = this.$refs.loadFrom.$el.offsetHeight;
    var that = this;
     this.$nextTick(() => {
      document.onscroll = function(){
        var scrollTop = document.documentElement.scrollTop;
          if(scrollTop >= height_load){
            that.$refs.loadFrom.$el.style.display = "none";
          }else{
            that.$refs.loadFrom.$el.style.display = "flex";
          }
        }
        var height_search = this.$refs.searchFrom.$el.offsetHeight;
        var height_tips = this.$refs.tipFrom.$el.offsetHeight;
        document.onscroll = function(){
          var scrollTop = document.documentElement.scrollTop;
          if(scrollTop >= height_search && scrollTop <= height_tips){
            that.$refs.searchFrom.$el.style.position = "fixed";
            that.$refs.searchFrom.$el.children[1].style.color = "#fff";
            that.$refs.searchFrom.$el.style.background = "none";
            that.$refs.searchFrom.$el.children[3].innerHTML = "<img style='width:0.86rem;height:0.40rem;margin-left:0.10rem;margin-top:0.08rem' src='img/yao1.png'>";
          }else if(scrollTop >= height_tips){
            that.$refs.searchFrom.$el.style.background = "#fff";
            that.$refs.searchFrom.$el.children[1].style.color = "#999";
            that.$refs.searchFrom.$el.children[3].innerHTML = "<img style='width:0.86rem;height:0.40rem;margin-left:0.10rem;margin-top:0.08rem' src='img/yao.png'>";
          }else{
            that.$refs.searchFrom.$el.style.position = "absolute";
            that.$refs.searchFrom.$el.children[1].style.color = "#fff";
            that.$refs.searchFrom.$el.style.background = "none";
            that.$refs.searchFrom.$el.children[3].innerHTML = "<img style='width:0.86rem;height:0.40rem;margin-left:0.10rem;margin-top:0.08rem' src='img/yao1.png'>";
          }
        }
      });
   
  },
  methods:{
    goto(){
      this.$router.push({path:`/shoppinglist`})
    }
  },
}

</script>

<style lang="scss" scoped>
  .home{
    margin-bottom:110px; 
     footer{
      width: 750px;
      height: 176px;
      padding: 40px 30px;
      box-sizing: border-box;
      font-size:24px;
      color: #919191;
      text-align: center;
      p{
        width: 100%;
        height: 50%;
      }
    }
  }
  .banner{
    width: 750px;
    height: 300px;
    position: relative;
  }

</style>
