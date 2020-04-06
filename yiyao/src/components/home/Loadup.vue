<template>
<!-- 立刻下载组件 -->
  <div class="load">
      <div class="img">
        <img src="img/item.png" alt="111" class="download-logo">
      </div>
      <p class="down">使用APP享受更多优惠</p>
      <a href="" class="btn">立即下载</a>
  </div>
</template>

<script>
export default {
  name: "load",
  props: {
  }
}
</script>

<style lang="scss" scoped>
  .load{
    padding: 0 20px 0 40px;
    box-sizing: border-box;
    width: 750px;
    background: #f4f4f4;
    height: 124px;
    display: flex;
    align-items: center;
    .img{
      width: 88px;
      height: 88px;
      margin-right:20px; 
      img{
        width: 100%;
        height: 100%;
      }
    }
    .down{
      font-size: 28px;
      color: #262d56;
      flex: 1;
    }
    .btn{
      width: 196px;
      height: 60px;
      margin-left: 20px;
      background: linear-gradient(132deg,#5577fb,#738efc);
      border-radius:30px;
      color: #fff; 
      text-align: center;
      line-height:70px ;
      font-weight: 600;
      font-size: 26px;
    }
  }
</style>