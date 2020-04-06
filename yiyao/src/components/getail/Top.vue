<template>
  <div>
      <div class="srcoll">
          <a href="javascript:window.history.go(-1)" class="back">
              <img src="img/back.png" alt="">
          </a>
          <ul>
              <li v-for="item in list" :key="item.id" @click="get(item.id)" :class="item.id == getid ? 'active':''">{{item.goodname}}</li>
          </ul>
          <div class="el">
              <img src="img/more.png" alt="">
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data:function(){
        return {
            getid:1,
            list:[{goodname:"商品",id:1},{goodname:"评价",id:2},{goodname:"详情",id:3}]
        }
    },
    methods:{
        get(id){
            this.getid = id;
        }
    }
}
</script>

<style lang="scss" scoped>
    .srcoll{
        width: 750px;
        height: 90px;
        color: #333;
        font-size: 26px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        left: 0;
        top:0;
        z-index: 30;
        background: #fff;
        a{
            margin-left: 20px;
             img{
                width: 64px;
                height: 64px;
            }
        }
        .el{
            margin-right: 20px;
            img{
                 width: 64px;
                height: 64px;
            }
        }
        ul{
            display: flex;
            justify-content: center;
            align-items: center;
            li{
                height: 80px;
                margin-left: 48px;
                font-size: 26px;
                color: #262d56;
                line-height: 90px;
                box-sizing: border-box;
                &:first-of-type{
                    margin-left: 0;
                }
            }
            .active{
                color: #5577fb;
                border-bottom: 4px #5577fb solid;
            }
        }
    }
    
</style>