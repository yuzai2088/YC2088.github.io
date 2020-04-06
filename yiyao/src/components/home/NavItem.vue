<template>
  <div class="item">
    <div class="goods-top">
        <span>
            <img src="img/zan.png" alt="">
        </span>
        <p>精选专题</p>
    </div>
    <div class="goods-list clear" v-for="(item,index) in lists" :key="index">
        <div class="img">
            <img :src="lists[index].picUrl">
        </div>
        <ul v-if="index == 0">
            <datagridshow1></datagridshow1>
        </ul>
        <ul v-else-if="index == 1">
            <datagridshow2></datagridshow2>
        </ul>
        <ul v-else-if="index == 2">
            <datagridshow3></datagridshow3>
        </ul>
        <ul v-else-if="index == 3">
            <datagridshow4></datagridshow4>
        </ul>
        <ul v-else-if="index == 4">
            <datagridshow5></datagridshow5>
        </ul>
        <ul v-else-if="index == 5">
            <datagridshow6></datagridshow6>
        </ul>
        <ul v-else-if="index == 6">
            <datagridshow7></datagridshow7>
        </ul>
        <ul v-else-if="index == 7">
            <datagridshow8></datagridshow8>
        </ul>
        <ul v-else>
            <datagridshow9></datagridshow9>
        </ul>
    </div>
  </div>
</template>

<script>
import datagridshow1 from "@/components/home/show/show1.vue";
import datagridshow2 from "@/components/home/show/show2.vue";
import datagridshow3 from "@/components/home/show/show3.vue";
import datagridshow4 from "@/components/home/show/show4.vue";
import datagridshow5 from "@/components/home/show/show5.vue";
import datagridshow6 from "@/components/home/show/show6.vue";
import datagridshow7 from "@/components/home/show/show7.vue";
import datagridshow8 from "@/components/home/show/show8.vue";
import datagridshow9 from "@/components/home/show/show9.vue";

export default {
    components: {
        datagridshow1,datagridshow2,datagridshow3,datagridshow4,datagridshow5,datagridshow6,datagridshow7,datagridshow8,datagridshow9
    },
    created:function(){
        var that = this;
        this.$axios({
            method: "post",
            url: "http://gateway.fangkuaiyi.com/mobile/home/getTailData?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1578362408768&signature=****&siteid=9&deviceCode=9bbf0EBA-BBbe-4076-99C7-bbBb0fE00cCd&locatecityname=%E6%AD%A6%E6%B1%89&locateprovinceid=18",
            }).then(function(result) {
                that.lists = result.data.data.goodTopic;
            });
        // 在created()方法中，后台数据获取成功之后的回调中，调用_initScroll（）；
    },
    data:function(){
        return {
            lists:[],
        }
    },
    methods: {
      
    },
}
</script>

<style lang="scss" scoped>
    .goods-top{
        width:750px;
        height:90px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span{
            display: block;
            width: 70px;
            height: 90px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 10px;
            img{
                width: 36px;
                height: 36px;
            }
        }
        p{
            color: #4a4a4a;
            font-size: 30px;
            flex: 1;
        }
    }
    .goods-list{
        padding: 20px 20px 0;
        width: 750px;
        box-sizing: border-box;
        .img{
            width: 100%;
            height: 470px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        ul{
             overflow-y: auto;
            height: 342px;
            overflow-x:auto ;
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