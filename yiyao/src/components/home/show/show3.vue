<template>
  <div class="dd">
    <ul>
        <li v-for="(item,index) in list" :key="index" @click="get(item.id)">
            <div class="img-box">
                <img :src="item.productImg" alt="">
            </div>
            <p class="pro">{{item.productName}}</p>
            <p class="price">￥{{item.sellPrice}}</p>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
     created:function(){
        var that = this;
        this.$axios({
            method: "post",
            url: "http://gateway.fangkuaiyi.com/mobile/home/getTailData?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1578362408768&signature=****&siteid=9&deviceCode=9bbf0EBA-BBbe-4076-99C7-bbBb0fE00cCd&locatecityname=%E6%AD%A6%E6%B1%89&locateprovinceid=18",
            }).then(function(result) {
                that.list = result.data.data.goodTopic[2].goodProducts;
            });
    },
    data:function(){
        return {
            list:[],
        }
    },
    methods: {
      get(id){
        window.console.log(id);
      }
    },
}
</script>

<style lang="scss" scoped>
.dd{
    overflow-y: hidden;
    overflow-x: auto;
    ul{
        height: 342px;
        width: 2600px;
        li{
            width: 236px;
            height: 340px;
            padding: 0 10px;
            float: left;
            .img-box{
                width: 216px;
                height: 200px;
                padding: 20px 0;
                box-sizing: border-box;
                text-align: center;
                img{
                    width: 160px;
                    height: 100%;
                }
            }
            .pro{
                width: 100%;
                height: 74px;
                font-size: 26px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
            }
            .price{
                color: #f35448;
                padding-top: 10px;
                font-size: 30px;
            }
        }
    }
}
</style>