<template>
  <div>
      <div class="top">
        <van-swipe @change="onChange" :width="750" :height="240">
            <van-swipe-item :width="750" :height="240">
              <img :src="info[0].img" alt="">
            </van-swipe-item>
            <van-swipe-item :width="750" :height="240">
              <img :src="info[0].img" alt="">
            </van-swipe-item>
            <van-swipe-item :width="750" :height="240">
              <img :src="info[0].img" alt="">
            </van-swipe-item>
            <van-swipe-item :width="750" :height="240">
              <img :src="info[0].img" alt="">
            </van-swipe-item>
            <div class="custom-indicator" slot="indicator">
                {{ current + 1 }}/4
            </div>
        </van-swipe>
      </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
export default {
  data() {
    return {
      current: 0,
    }  
  },
  props:["width","height","info"],

  methods: {
    onChange(index) {
      this.current = index;
    }
  }

}
</script>
<style lang="scss" scoped>
    .top{
      width: 750px;
      height: 480px;
      overflow: hidden;
      .van-swipe-item{
        float: left;
        position: relative;
        img{
          width: 480px;
          height: 480px;
          margin-left: 135px;
        }
      }
      .custom-indicator{
        position: absolute;
        right: 40px;
        bottom: 50px;
        z-index: 3;
        padding: 0 16px;
        background: #a8abbb;
        color: #fff;
        border-radius:10px; 
      }
    }
</style>