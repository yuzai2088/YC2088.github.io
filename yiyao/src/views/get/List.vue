<template>
  <div>
      <topsearch :info="shoppinglist" @closepop="closepop"></topsearch>
      <ul class="clear">
          <li v-for="item in shoppinglist" :key="item.id" @click="goto(item.id)">
              <div class="img">
                  <img v-lazy="item.img" alt="">
              </div>
              <div class="title">
                  <p><span><img src="img/zy.png" alt=""></span>{{item.name}}</p>
              </div>
              <div class="xy">
                  <img src="img/xy.png" alt="">
              </div>
              <div class="can">
                  <img src="img/can.png" alt="">
              </div>
              <div class="price">{{item.price}}</div>
              <div class="answer">
                  <p>65条问答</p>
                  <p>72条评论&emsp;好评率97.22%</p>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
import topsearch from "@/components/list/Top-search.vue";

export default {
    components:{
        topsearch
    },
    mounted:function(){
        this.$store.commit("setflag",false);
        if (!this.$store.state.home.goodsList.length) {
            var that = this;
            this.$axios({
                method: "get",
                url: "json/shop.json",
            }).then(function(result) {
                that.$store.state.home.goodsList = result.data;
            });
        }else{
            this.$store.state.home.goodsList = this.shoppinglist;
        }
    },
    destroyed:function(){
        this.$store.commit("setflag",true);
    },
    data:function(){
        return {
            shoppinglist:[],
        }
    },
    props:["info"],
    created:function(){
      var that = this;
      this.$axios({
        method: "get",
        url: "json/shop.json",
      }).then(function(result) {
          that.shoppinglist=result.data;
      });
    },
    methods:{
        goto:function(id){
            this.$router.push({
                name:"getail",
                params:{
                    id:id,
                }
            })
        },
      closepop:function(val){
          if(val == ""){
            this.shoppinglist = this.$store.state.home.goodsList;
          }else{
              var list = [];
               var that = this;
            clearTimeout(this.timer);
           this.timer= setTimeout(function(){
               that.shoppinglist.forEach((item) => {
                if(item.name.indexOf(val) != -1){
                  list.push(item)
                }
              });
              that.shoppinglist = list;
            },1000);
          }
      }
    }
}
</script>

<style lang="scss" scoped>
    ul{
        margin-top: 267px;
        width: 750px;
        li{
            border-bottom: 1px solid #eee;
            height: 330px;
            width: 750px;
            box-sizing: border-box;
            padding:0 0 20px 224px;
            color: #333; 
            font-size: 24px;
            position: relative;
            .img{
                width: 160px;
                height: 160px;
                position: absolute;
                left: 40px;
                top:40px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .title{
                color:#262d56;
                font-size: 28px;
                width: 100%;
                min-height: 40px;
                padding:20px 16px 0 0;
                box-sizing: border-box;
                span{
                    img{
                        margin: 6px 8px 0 0;
                        width: 54px;
                        height: 26px;
                    }
                }
            }
            .xy{
                padding-top: 12px;
                img{
                    width: 52px;
                    height: 28px;
                }
            }
            .can{
                width: 60px;
                height: 32px;
                margin: 0 10px 8px 0;
                border-radius:16px;
                margin-top: 12px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .price{
                font-size: 32px;
                color: #ff394e;
            }
            .answer{
                margin-top: 10px;
                p{
                    &:first-of-type{
                        color: #1a6abd;
                    }
                    &:nth-of-type(2){
                        color: #1a6abd;
                        color: #a0a3b3;
                    }
                }
            }
        }
    }
</style>