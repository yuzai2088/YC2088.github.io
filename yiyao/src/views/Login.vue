<template>
  <div>
    <header>
      <a class="back" href="javascript:window.history.go(-1)">
        <img src="img/back.png" alt="">
      </a>
      <div class="header">账户密码登陆</div>
    </header>
    <p>新用户可通过快速登录注册账号</p>
    <form class="tbody">
      <div class="item">
        <input ref="inp" type="text" placeholder="请输入用户名/手机号" >
      </div>
      <div class="item">
        <input ref="pwd" type="password"  placeholder="请输入密码" >
      </div>
      <input @click="btn" id="btn" type="button" value="登陆" name="" >
      <div class="box">
        <span @click="register">免密码登录</span>
        <span class="lo" @click="find">忘记密码?</span>
      </div>
      <div class="qita">
        ————————&emsp;&emsp;用其他方式登录&emsp;&emsp;————————
      </div>
      <ul>
        <li><img src="img/m1.png" alt=""></li>
        <li><img src="img/m2.png" alt=""></li>
        <li><img src="img/m3.png" alt=""></li>
        <li><img src="img/m4.png" alt=""></li>
        <li><img src="img/m5.png" alt=""></li>
      </ul>
      <div class="login">登陆代表您已同意<b>1药网<span>《服务协议》</span>和<span>《隐私协议》</span></b></div>
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
   register(){
     this.$router.push({path:"/register"})
   },
   find(){
     this.$router.push({path:"/find"})

   },
   btn(){
     var user = JSON.parse(window.localStorage.getItem("username"));
     if(this.$refs.inp.value == user.username && this.$refs.pwd.value == user.userpwd){
       alert("登陆成功")
       this.$router.push({path:"/shoppinglist"})

     }else{
       alert("用户名或者密码不符")
     }
   }
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
    }
  }
  #btn{
    width: 100%;
    height: 90px;
    background: #f66;
    color: #fff;
    font-size: 28px;
    border: 0;
    margin: 40px 0 20px;
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
    .lo{
      float: right;
      color: #666;
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
    color: #9b9b9b;
    line-height: 80px;
    margin-top: 40px;
    span{
      color: #ff7070;
    }
  }
}
</style>