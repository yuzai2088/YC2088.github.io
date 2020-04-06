<template>
<!-- 搜索框组件 -->
  <div class="search">
      <div class="img">
          <img src="img/logo.png" alt="">
      </div>
      <div class="map">湖北</div>
      <div class="color">
        <div class="search_box" @click="search">
            <span class="iconfont icon-icon-test12"></span>
            <div class="inp">输入商品名称</div>
        </div>
      </div>
      <div class="right">
          <img src="img/yao.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
    name:"search",
    props:{

    },
    methods:{
        search(){
            this.$router.push({path:"/shoppinglist"})
        }

    }
}
</script>

<style lang="scss" scoped>
    .search{
        width: 750px;
        height: 90px;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10;
        // background: #fff;
        transition: 1s;
        display: flex;
        align-items: center;
        justify-content:space-between;
        .img{
            width: 90px;
            height: 48px;
            position: relative;
            img{
                width: 48px;
                height: 48px;
                position: absolute;
                right: 6px;
            }
        }
        .map{
            width: 90px;
            height: 56px;
            line-height: 56px;
            color: #333;
            font-size: 28px;
        }
        .color{
            background: #fff;
            border-radius:20px; 
            .search_box{
                width: 440px;
                height: 56px;
                padding: 0 20px;
                background: hsla(0,0%,92%,.48);
                color: #898989;
                display: flex;
                align-items: center;
                border-radius:20px; 
                span{
                    font-size: 44px;
                    margin-right:6px; 
                }
                .inp{
                    flex: 1;
                }
            }
        }
        .right{
            width: 112px;
            height: 56px;
            img{
                width: 86px;
                height: 40px;
                margin-left:10px; 
                margin-top:8px; 
            }
        }
    }
</style>