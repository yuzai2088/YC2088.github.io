<template>
  <div>
    <header>
      <a class="back" href="javascript:window.history.go(-1)">
        <img src="img/back.png" alt="">
      </a>
      <div class="header">找回密码</div>
    </header>
    <form class="tbody">
      <div class="item">
        <input type="text"  placeholder="请输入您的手机号/邮箱/用户名">
      </div>
      <div class="item">
        <input type="text"  placeholder="图片验证码">
        <div class="code">
            <img src="img/code.png" alt="">
        </div>
      </div>
      <input id="btn"  type="button" value="登陆" name="" >
      <div class="login">遇到问题?<span>请联系客服</span></div>
    </form>
  </div>
</template>

<script>
export default {
  mounted:function () {
    this.$store.commit("setflag",false);
    
  },
  destroyed:function () {
    this.$store.commit("setflag",true);
    
  },
  data:function () {
    return {
      
    }
  },
  methods:{
   
  }
}
</script>
<style lang="scss" scoped>
header{
  width: 750px;
  height: 90px;
  background: #f9f9f9;

  .back{
    width: 90px;
    height: 90px;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 60px;
      height: 60px;
    }
  }
  .header{
    width: 550px;
    height: 90px;
    float: left;
    font-size: 32px;
    line-height: 90px;
    text-align: center;
  }

}
p{
  height: 64px;
  width: 750px;
  color: #ff6666;
  font-size: 28px;
  background-color: #ffeded;
  text-align: center;
  line-height: 64px;
  text-align: center;
}
.tbody{
  padding: 0 40px;
  box-sizing: border-box;
  width: 750px;
  height: 812px;
  .item{
    width: 100%;
    height: 100px;
    font-size: 28px;
    color: #333;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    padding: 0 20px;
    justify-content: center;
    display: flex;
    align-items: center;
    position: relative;
    input{
      width: 100%;
      height: 40px;
      border: 0;
    }
    .code{
      position: absolute;
      right: 20px;
      color: white;
      background: #ff6666;
      width: 188px;
      height: 56px;
      border-radius:10px;
      text-align: center;
      line-height: 56px; 
      top: 10px;
      img{
          width: 200px;
          height: 80px;
      }
    }
  }
  #btn{
    width: 100%;
    height: 90px;
    background: #f66;
    color: #fff;
    font-size: 28px;
    border: 0;
    margin: 40px 0 10px;
  }
  .box{
    width: 100%;
    height:60px ;
    margin-top:20px; 
    font-size: 28px;
    line-height: 60px;
    span{
      color: #0075eb;
    }
  }
  .qita{
    color: #9b9b9b;
    font-size: 28px;
    margin-top: 100px;
  }
  ul{
    width: 100%;
    height: 100px;
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 17px;
    box-sizing: border-box;
    li{
      img{
        width: 100px;
        height: 100px;
      }
    }
  }
  .login{
    width: 100%;
    height: 80px;
    color: #333;
    line-height: 80px;
    margin-top: 10px;
    text-align: center;
    font-size: 28px;
    span{
      color: #ff7070;
    }
  }
}
</style>