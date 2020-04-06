<template>
  <div>
      <div class="pro">
          <p>
              <span class="iconfont icon-icon-test43"></span>
              <time>满69包邮</time>
          </p>
          <p>
              <span class="iconfont icon-icon-test43"></span>
              <time>正品保证</time>
          </p>
          <p>
              <span class="iconfont icon-icon-test43"></span>
              <time>正品保险</time>
          </p>
          <img src="img/more.png" alt="">
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .pro{
        width: 750px;
        height: 80px;
        padding: 24px 30px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 24px;
        background: #f6f6f6;
        p{
            display: flex;
            align-items: center;
            line-height: 32px;
            color: #262D56;
            span{
                color: rgb(129, 145, 238);
                margin-right: 8px;
                font-size: 30px;
            }
        }
        img{
            width: 56px;
            height: 56px;
        }
    }
</style>