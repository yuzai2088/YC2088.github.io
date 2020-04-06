<template>
<!-- 轮播图组件 -->
  <div class="tips">
    <div class="home-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img src="img/a1.jpg">
        </div>
        <div class="swiper-slide">
            <img src="img/a2.jpg">
        </div>
        <div class="swiper-slide">
            <img src="img/a3.jpg">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css"; //需要去node_modules中找到
export default {
    name:"tips",
    data:function(){
        return{
            list:null
        }
    },
    mounted: function() {
    new Swiper(".home-swiper", {
      pagination: {
        el: ".swiper-pagination",
      },
      observer:true,//修改swiper自己或子元素时，自动初始化swiper
      observeParents:true,//修改swiper的父元素时，自动初始化swiper
      autoplay: true, //可选选项，自动滑动
    });
  },
  methods:{
      get:function(id){
          window.console.log(id)
      }
  }
}
</script>

<style lang="scss" scoped>
  .tips{
      width: 750px;
      height: 330px;
      .home-swiper{
          overflow: hidden;
          position: relative;
          --swiper-theme-color: #fff;
          img{
              width: 100%;
              height: 100%;
          }
          .swiper-pagination{
              position: absolute;
          }
      }
  }
</style>