<template>
<div>
    <div class="shop" v-show="flag">
      <div class="center">
          <div class="kong">
              <div>—————— <span class="iconfont icon-shouye7"></span> ——————</div>
          </div>
          <p>购是物车还空的</p>
          <div class="btn" @click="shop">去看看</div>
      </div>
  </div>
  <div class="qq clear" v-for="item in islist" :key="item.id">
       <div class="shopping">
        <div class="cart">
            <div class="msg">{{item.name}}</div>
            <div class="type">
                <img src="img/cfy.png" alt="">
            </div>
            <div class="price">
                <div class="jie" ref="price">{{item.price}}</div>
                <div class="jia">
                    <button class="reduce" @click="reduce">
                        <img src="img/jian.png" alt="">
                    </button>
                    <input ref="inp" disabled type="num" :value="item.num">
                    <button class="add" @click="add">
                        <img src="img/jia.png" alt="">
                    </button>
                </div>
            </div>
            <div class="img">
                <img :src="item.img" alt="">
            </div>
            <div class="check">
                <span class="iconfont" @click="is" :class="istrue?'icon-icon-test45':'icon-icon-test43'"></span>
            </div>
        </div>
        <div class="able">
            <img src="img/gan.png" alt="">
            <span>不可使用优惠券</span>
        </div>
    </div>
 <div class="fixed" v-show="!flag">
     <div class="quanxuan">
        <span class="iconfont" @click="all" :class="isall?'icon-icon-test45':'icon-icon-test43'"></span>
        <p>全选</p>
     </div>
     <div class="msg">
         <p class="price">合计：<span v-if="isall">￥{{item.price.replace("￥","")*item.num}}</span></p>
         <p class="s">不含运费，已优惠￥0.00</p>
     </div>
     <button>去结算<span v-if="isall">（1）</span></button>
 </div>
</div>
  </div>
  
</template>

<script>
import Vue from 'vue';
import { Card,Button} from 'vant';
Vue.use(Card,Button);
export default {

  mounted:function(){
    this.$store.commit("setflag",false);
    
    if(window.localStorage.username){
        if(window.localStorage.shop ==""){
            this.flag = true;
        }else{
            this.islist = JSON.parse(window.localStorage.shop)
            window.console.log(this.islist)
            this.flag = false;

        }
    }
  },
  beforeRouteLeave (to, from, next) {
    next()
    this.$store.commit("setflag",true);
  },
  methods:{
    shop(){
        this.$router.push({path:"/shoppinglist"})
    },
    is(){
        this.istrue = !this.istrue;
        if(this.istrue){
            this.isall = true;
        }else{
            this.isall = false;
        }
    },
    all(){
        this.isall = !this.isall;
        if(this.isall){
            this.istrue = true;
        }else{
            this.istrue = false;
        }
    },
    reduce(){
        if(this.$refs.inp.value <= 1){
            this.$refs.inp.value = 1
        }else{
            this.$refs.inp.value--;
        }
    },
    add(){
        this.$refs.inp.value++
    }
    
  },
  data:function () {
      return {
          showflag:true,
          flag:true,
          istrue:true,
          isall:true,
          islist:[],
      }
  }

}
</script>
<style lang="scss" scoped>
.shop{
    width:750px;
    height: 540px;
    padding: 120px;
    box-sizing: border-box;
    .center{
        width: 100%;
        height: 100%;
        text-align: center;
        .kong{
            color: rgb(230, 228, 228);
            span{
                font-size: 40px;
                color: #ccc;
            }
        }
        p{
            color: #999;
            margin-top:50px; 

        }
        .btn{
            width: 134px;
            height: 48px;
            color: #ff394e;
            border: 2px #ff394e solid;
            border-radius: 5px;
            margin:0 auto;
            margin-top:50px;
            line-height: 48px; 
        }
    }
}

.shopping{
    padding-top:20px;
    margin: 0 30px;
    width: 690px;
    height: 240px;
    border-top:1px solid #eee; 
    .cart{
        width: 100%;
        height: 162px;
        color: #333;
        font-size: 24px;
        padding-left:244px; 
        box-sizing: border-box;
        position: relative;
        .msg{
            width: 100%;
            height: 40px;
            font-size: 28px;
            color: #262d56;
            font-weight: bold;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }
        .type{
            width: 76px;
            height: 32px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .price{
            width: 100%;
            height: 56px;
            line-height: 2;
            margin-top: 40px;
            .jie{
                color: #ff394e;
                font-size: 30px;
                float: left;
            }
            .jia{
                float: right;
                display: flex;
                justify-content: space-between;
                align-items: center;
                button{
                    width: 56px;
                    height: 56px;
                    border: 0;
                    background: transparent;
                    padding: 0;
                    img{
                        width: 56px;
                        height: 56px;
                    }
                }
                input{
                    width: 120px;
                    height: 56px;
                    margin: 0 5px;
                    background: #f6f6f6;
                    border: 0;
                    border-radius: 28px;
                    line-height: 56px;
                    text-align: center;
                    font-size: 30px;
                }
            }
        }
        .img{
            position: absolute;
            top: 0px;
            left: 60px;
            img{
                width: 160px;
                height: 160px;
            }
        }
        .check{
            position: absolute;
            top:40px;
            left: -20px;
            width: 80px;
            height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
           
            .icon-icon-test45{
                color: #ff394e;
                font-size: 40px;
            }
            .icon-icon-test43{
                color: grey;
                font-size: 40px;
            }
        }
    }
    .able{
        height: 32px;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        color: #ff394e;
        font-size: 24px;
        line-height: 32px;
        margin-top: 20px;
        img{
            margin-left: 60px;
            width: 32px;
            height: 32px;
        }
    }
}
.fixed{
    width: 750px;
    height: 112px;
    position: fixed;
    left: 0;
    bottom: 0;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .quanxuan{
        width: 100px;
        height: 112px;
        text-align: center;
        box-sizing: border-box;
        padding-top:20px; 
        p{
            font-size: 28px;
            color: #686b85;
        }
        .icon-icon-test45{
            color: #ff394e;
            font-size: 40px;
        }
        .icon-icon-test43{
            color: grey;
            font-size: 40px;
        }
    }
    .msg{
        width: 370px;
        height: 100%;
        padding-right:20px; 
        text-align: right;
        color: #686b85;
        .price{
            font-size: 28px;
            span{
                font-size: 40px;
                color: #ff394e;
            }
        }
        .s{
            font-size: 24px;
        }
    }
    button{
        flex: 1;
        height: 100%;
        border: 0;
        color: #fff;
        background: linear-gradient(90deg, #ff394e 0%, #ff6666 100%);
        font-size: 36px;
    }
}
</style>
