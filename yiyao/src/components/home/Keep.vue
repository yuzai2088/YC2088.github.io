<template>
<!-- 健康优享 -->
  <div class="keep">
      <header>
          <div class="health">
              <img src="img/keep.png" alt="">
          </div>
          <div class="p">
              <span>距时间仅剩<i>|</i></span>
              <!-- <time>02 : 13 : 45</time> -->
              <time><van-count-down :time="time" /></time>
         </div>
         <div class="more">
             <span>更多</span>
             <span class="iconfont icon-icon-test61"></span>
         </div>
      </header>
      <div class="tbody">
          <ul>
              <li v-for="item in list" :key="item.id" @click="goto(item.id)">
                  <img :src="item.mainimg3" :alt="item.promotionalCopy">
                  <p class="item">{{item.flashSaleProductName}}</p>
                  <p class="price">￥{{item.promotionPrice}}</p>
              </li>
          </ul>
      </div>
      <footer>
          <img src="img/health.jpg" alt="">
      </footer>
  </div>
</template>

<script>
import { CountDown } from 'vant';
export default {
    components:{
        "van-count-down": CountDown
    },
    inject:["reload"],
    created:function(){
        var that = this;
        this.$axios({
            method: "post",
            url: "http://gateway.fangkuaiyi.com/mobile/home/getTailData?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1578362408768&signature=****&siteid=9&deviceCode=9bbf0EBA-BBbe-4076-99C7-bbBb0fE00cCd&locatecityname=%E6%AD%A6%E6%B1%89&locateprovinceid=18",
            }).then(function(result) {
                that.list = result.data.data.grabTogether.mobileFlashSaleNewItems;
                that.timer = result.data.data.grabTogether;
            });
        // 在created()方法中，后台数据获取成功之后的回调中，调用_initScroll（）；
    },
    mounted:function(){
        this.reload();
    },
    data:function(){
        return {
            list:null,
            timer:null,
            time: 30 * 60 * 60 * 1000
        }
    },
    methods: {
        goto(id){
            window.console.log(id);
            this.$router.push({path:`/shoppinglist`})

        }
    },

}
</script>

<style lang="scss" scoped>
    header{
        width: 750px;
        height: 100px;
        border-bottom:1px solid #eee; 
        .health{
            width:170px; 
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            float: left;
            img{
                width: auto;
                height: 42px;
            }
        }
        .p{
            width: 404px;
            height: 100%;
            float: left;
            color: #929292;
            display: flex;
            align-items: center;
            span{
                width: 176px;
                i{
                    padding: 0 20px;
                    font-style: none;
                }
            }
            .van-count-down{
                font-size: 25px;
                color: #f56a60;
            }
        }
        .more{
            width: 159px;
            height: 100%;
            float: right;
            color: #929292;
            display: flex;
            align-items: center;
            justify-content:flex-end;
            .icon-icon-test61{
                font-size: 40px;
                margin-right: 10px;
            }

        }
    }
    .tbody{
        min-width: 100%;
        height: 342px;
        padding-bottom: 20px;
        box-sizing: border-box;
        overflow-y: hidden;
        overflow-x: auto;
        // display: flex;
        ul{
            height: 342px;
            width: 2600px;
            li{
                width: 200px;
                height: 322px;
                color: #333;
                margin-right:20px; 
                float: left;
                padding-left:10px;
                box-sizing: border-box;
                img{
                    width: 160px;
                    height: 160px;
                    margin: 20px 10px;
                }
                .item{
                    font-size: 26px;
                    color: #333;
                    width: 200px;
                    height: 72px;
                    padding: 0 10px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                }
                .price{
                    padding: 10px 10px 0;
                    color: #f35448;
                    font-size: 30px;
                }
            }
            li:first-of-type{
                margin: 0 20px;
            }
        }
    }
    footer{
        width: 750px;
        height: 260px;
        background: #f7f7f7;
        padding: 20px 0;
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>