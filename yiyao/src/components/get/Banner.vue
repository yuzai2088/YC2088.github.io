<template>
  <div class="tip">
    <div class="home-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="img/tip1.jpg">
        </div>
        <div class="swiper-slide">
          <img src="img/tip2.jpg">
        </div>
        <div class="swiper-slide">
          <img src="img/tip3.jpg">
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
  data:function(){
      return{
          list:[]
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

}
</script>

<style lang="scss" scoped>
  .tip{
    height: 150px;
    width: 522px;
    padding: 20px 0 0 0;
    .home-swiper{
      overflow: hidden;
      position: relative;
      --swiper-theme-color: #fff;
      img{
        width: 100%;
        height: auto;
      }
      .swiper-pagination{
        position: absolute;
      }
    }
  }
 
</style>