<template>
  <div class="shop">
      <div class="center">
          <div class="kong">
              —————— <span class="iconfont icon-shouye20"></span> ——————
          </div>
          <p>清单还是空的</p>
          <div class="btn">去看看</div>
      </div>
  </div>
</template>

<script>
export default {
    mounted:function(){
    this.$store.commit("setflag",false);

  },
  beforeRouteLeave (to, from, next) {
    next();
    this.$store.commit("setflag",true);
  },
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
</style>