<template>
<!-- 轮播图组件 -->
  <div class="tips">
    <div class="home-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in list" :key="index">
            <img :src="item.pic||item.xpic" @click="get(item.content)">
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
    created:function(){
        var that = this;
        this.$axios({
        method: "post",
        url: "http://gateway.fangkuaiyi.com/mobile/home/getHeadData?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1578283527970&signature=****&siteid=9&deviceCode=9bbf0EBA-BBbe-4076-99C7-bbBb0fE00cCd&locatecityname=%E6%AD%A6%E6%B1%89&locateprovinceid=18",
        }).then(function(result) {
            that.list=result.data.data.banner;
        });
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
      height: 298px;
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