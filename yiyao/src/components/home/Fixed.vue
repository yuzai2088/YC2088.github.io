<template>
  <div>
      <!-- 固定定位 -->
      <div class="top">
        <img src="img/fixed.png" alt="">
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .top{
    width: 100px;
    height: 110px;
    position: fixed;
    bottom: 140px;
    right: 40px;
    z-index: 30;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>