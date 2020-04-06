<template>
    <div class="cat">
        <div v-for="item in list" :key="item.id">
        <loadup ref="load"></loadup>
        <div class="let">
            <getailtop  ref="loadups"></getailtop>
        </div>
        <getailimage :info="list"></getailimage>
        <getailban></getailban>
        <div class="price"><span>{{item.price}}</span></div>
        <div class="title clear"><time><img src="img/zy.png" alt=""></time><p>{{item.name}}</p></div>
        <div class="msg">【有货，购买咨询药师】{{item.msgcount}}</div>
        <div class="pro_note">本商品由1药网自营提供现货。</div>
        <div class="font">
            <p>{{item.ismsg.replace("进口药品注册证","")}}</p>
            <p>查询食药批准文号<img src="img/right.png" alt=""></p>
        </div>
        <div class="hr"></div>
        <div class="new">
            <div class="tel">新人礼</div>
            <p>
                <span>满45.1元减45</span><span>满99元减8</span><span>满199元减10</span><span>满399元减20</span><span>满799元减50</span>
            </p>
            <div class="li">领取<img src="img/right.png" alt=""></div>
        </div>
        <div class="hr"></div>
        <div class="show">
            <div class="titl">说明书</div>
            <ul>
                <li>
                    <p><img src="img/b1.png" alt=""></p>
                    <p>有效期</p>
                    <p>36个月</p>
                </li>
                <li>
                    <p><img src="img/b2.png" alt=""></p>
                    <p>规格</p>
                    <p>{{item.methods}}</p>
                </li>
                <li>
                    <p><img src="img/b3.png" alt=""></p>
                    <p>用法用量</p>
                    <p>{{item.font}}</p>
                </li>
            </ul>
            <div class="more">
                <img src="img/more.png" alt="">
            </div>
            </div>
            <div class="hr"></div>
            <div class="select">
                <p><time>已选</time><span>规格：{{item.methods}}</span></p>
                <div class="more"><img src="img/more.png" alt=""></div>
            </div>
            <div class="hr"></div>
            <div class="select go">
                <p><time>已选</time><span>湖北</span><span>预计1月11日(周六)送达</span></p>
                <div class="more"><img src="img/more.png" alt=""></div>
            </div>
            <div class="hr"></div>
            <ul class="footer">
                <li>
                    <span class="iconfont icon-icon-test54"></span>
                    <p>收藏</p>
                </li>
                <li>
                    <span class="iconfont icon-shouye10"></span>
                    <p @click="gotoshop">购药清单</p>
                </li>
                <li @click="addshop(item)">加入购物车</li>
            </ul>
        </div>
    </div>
</template>

<script>
import loadup from "@/components/home/Loadup.vue";
import getailtop from "@/components/getail/Top.vue";
import getailimage from "@/components/getail/Tip.vue";
import getailban from "@/components/getail/Ban.vue";

export default {
    components:{
        loadup,getailtop,getailimage,getailban
    },
    created(){
        var id =this.$route.params.id;
        if(id){
            window.console.log(id);
            var that = this;
            this.$axios({
                method: "get",
                url: "json/shop.json",
            }).then(function(result) {
                var list=result.data;
                var de = list.filter(item => {
                    return item.id == id
                });
                that.list = de;

            });

        }else{
            this.$router.push({path:`/shoppinglist`})
        }

    },
    mounted(){
        this.$store.commit("setflag",false);
        var height_load = this.$refs.load.$el.offsetHeight;
        var that = this;
        this.$nextTick(() => {
            document.onscroll = function(){
                var scrollTop = document.documentElement.scrollTop;
                if(scrollTop >= height_load){
                    that.$refs.loadups.$el.style.position = "fixed";
                    that.$refs.loadups.$el.style.top = "0";
                }else{
                    that.$refs.loadups.$el.style.position = "absolute";
                }
            }
      });
        
    },
    destroyed(){
        this.$store.commit("setflag",true);
    },
    methods: {
     addshop(item){
         if(window.localStorage.username){
             var index = this.shop.indexOf(item)
             if(this.shop.indexOf(item) == -1){
                item.num = 1
                this.shop.push(item)
                alert("添加成功")
                window.localStorage.setItem("shop",JSON.stringify(this.shop))
             }
             else{
                this.shop[index].num++;
                alert("添加成功")
                window.localStorage.setItem("shop",JSON.stringify(this.shop))
             }
             
         }else{
            this.$router.push({path:"/login"})
        }
     },
     gotoshop(){
         this.$router.push({path:"/shopping"})
     }
    },
    data:function(){
        return {
            list:[],
            shop:[],
        }
    }
}
</script>

<style lang="scss" scoped>
    .price{
        width: 750px;
        height: 120px;
        padding: 20px 0 0 20px;
        box-sizing: border-box;
        font-size: 28px;
        color: #ff394e;
        line-height: 120px;
        span{
            font-size: 48px;
            line-height: 100px;
            font-weight: bold;
        }
    }
    .title{
        width: 750px;
        height: 106px;
        color: #262d56;
        padding: 0 20px 10px;
        box-sizing: border-box;
        font-size: 36px;
        font-weight: bold;
        time{
            display: block;
            width: 68px;
            height: 32px;
            margin-right:6px; 
            float: left;
            margin-top: 10px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        p{
            float: left;
            font-size: 36px;
            color: #262d56;
        }
        span{
            color: #ff394e;
            font-size: 36px;
        }
    }
    .msg{
        width: 750px;
        height: 94px;
        padding: 0 20px 20px;
        color: #686b85;
        border-bottom:2px solid #f9f9f9; 
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
    }
    .pro_note{
        width: 750px;
        height: 60px;
        padding: 24px 20px 0;
        color: #a0a3b3;
    }
    .font{
        width: 750px;
        height: 82px;
        padding: 24px 20px 34px;
        color: #a0a3b3;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        p{
            line-height: 24px;
            img{
                width: 24px;
                height: 24px;
                margin-left: 8px;
            }
        }
    }
    .hr{
        width:750px ;
        height: 20px;
        background: #f9f9f9;
    }
    .new{
        width: 750px;
        height: 112px;
        padding: 44px 20px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #a0a3b3;
        line-height: 24px;
        .tel{
            width: 100px;
            height: 100%;
        }
        .li{
            width: 104px;
            height: 100%;
            img{
                width: 24px;
                height: 24px;
                margin-left: 8px;
            }
        }
        p{
            flex: 1;
            color: #ff394e;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;        
            span{
                margin-left: 16px;
                &:last-child{
                    margin-left:0; 
                }
            }
        }
    }
    .show{
        width: 750px;
        height: 206px;
        padding: 48px 0 48px 0;
        color: #a0a3b3;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        .titl{
            width: 112px;
            height: 100%;
            text-align: center;
            line-height: 110px;
        }
        .more{
            width: 76px;
            height: 100%;
            img{
                width: 56px;
                height: 56px;
                margin-top: 27px;
            }
        }
        ul{
            flex: 1;
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            li{
                width: 34%;
                height: 100%;
                p{
                    width: 186px;
                    height: 32px;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;  
                    img{
                        width: 28px;
                        height: 28px;
                        margin-bottom: 20px;
                    }
                    &:nth-of-type(2){
                        color: #262d56;
                        margin-bottom: 6px;
                    }
                    &:nth-of-type{
                        color:#a0a3b3;
                    }
                }
            }
        }
    }
    .select{
        width: 750px;
        height: 112px;
        padding: 40px 0 40px 20px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
            flex: 1;
            color: #a0a3b3;
            position: relative;
            span{
                color: #262d56;
                float: left;
                font-weight: bold;
                &:nth-of-type(2){
                    position: absolute;
                    left: 80px;
                    top: 35px;
                    color: #a0a3b3;
                }
            }
            time{
                width: 80px;
                height: 24px;
                display: block;
                float: left;
            }
        }
        .more{
            width: 76px;
            height: 100%;
            img{
                width: 56px;
                height: 56px;
                margin-top: -13px;
            }
        }
    }
    .go{
        height: 152px;
        align-items: flex-start;
    }
    .cat{
        margin-bottom:110px; 
    }
    .footer{
        background: #fff;
        width: 750px;
        height: 110px;
        position: fixed;
        left: 0;
        bottom: 0;
        padding-left:10px; 
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        color: #969aae;
        li{
            width: 34%;
            height: 100%;
            text-align: center;
            &:last-of-type{
                text-align: center;
                color: #fff;
                font-size: 28px;
                line-height: 110px;
                background:#ff3d52;
                background:-webkit-linear-gradient(left,#ff3d52,#fe788f);
                background:-o-linear-gradient(right,#ff3d52,#fe788f);
                background:-moz-linear-gradient(right,#ff3d52,#fe788f);
                background:linear-gradient(to right,#ff3d52,#fe788f);
            }
            span{
                display: block;
                margin: 0 auto;
                margin-top: 10px;
                font-size: 50px;
            }
        }
    }
    .let{
        position: relative;
        background: #fff;
        width: 750px;
        height: 90px;
        z-index: 30;
    }
</style>