<template>
  <div class="shopping">
    <div class="catch">
      <a class="btn" href="javascript:window.history.go(-1)">
        <span class="iconfont icon-icon-test59"></span>
      </a>
      <ul class="top">
        <li>
          <router-link to="/shopping/shop">购物车</router-link>
        </li>
        <li>
          <router-link to="/shopping/list">需求清单</router-link>
        </li>
      </ul>
      <div class="more">
        <span class="iconfont icon-icon-test39"></span>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "shopping",
  components: {
  },

};
</script>
<style lang="scss" scoped>
.catch{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 750px;
  height: 88px;
  .btn{
    width: 66px;
    height: 86px;
    padding-left:16px; 
    color: #999;
    display: flex;
    align-items: center;
    span{
      font-size: 60px;
    }
  }
  .more{
    width: 60px;
    height: 45px;
    color: #999;
    margin-right: 16px;
    span{
      font-size: 40px;
    }
  }
  .top{
    height: 88px;
    font-size: 36px;
    color: #000;
    font-weight: bold;
    li{
      line-height: 88px;
      float: left;
      a{
        padding: 20px 0;
      }
      a.router-link-exact-active{
        border-bottom:4px #ff6666 solid;

      }
      &:last-child{
        margin-left: 50px;
      }
    }
  }
}
</style>
