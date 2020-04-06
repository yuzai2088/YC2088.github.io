<template>
  <div>
    <header>
      <a class="back" href="javascript:window.history.go(-1)">
        <img src="img/back.png" alt="">
      </a>
      <div class="header">免密码登录</div>
    </header>
    <p>新用户可通过快速登录注册账号</p>
    <form class="tbody">
      <div class="item">
        <input type="tel" ref="phone" autocomplete="off" maxlength="11" placeholder="请输入手机号" >
      </div>
      <div class="item">
        <input type="text" ref="random" autocomplete="off" maxlength="4" placeholder="请输入验证码" >
        <div class="code" @click="getcode" ref="rode">获取验证码</div>
      </div>
      <input id="btn" @click="btn" type="button" value="登陆" name="" >
      <div class="box">
        <span @click="login">账号密码登陆</span>
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
      user:[]
    }
  },
  methods:{
    login(){
      this.$router.push({path:"/login"})
    },
    getcode(){
      this.$refs.rode.innerHTML="";
      var sum = "";
      var dd = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
      var g = dd.length;
      for(var i = 0;i < 4;i++){
        var code = Math.round(Math.random()*g);
        if(sum.indexOf(dd) == -1){
            sum += dd[code];
        }else{
            i--;
        }
      }
      this.$refs.rode.innerHTML = sum
    },
    btn(){
      if(this.$refs.random.value&&this.$refs.phone.value){
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/
        if(myreg.test(this.$refs.phone.value)){
          if(this.$refs.random.value == this.$refs.rode.innerHTML){
            alert("验证成功初始密码为123456")
            this.user={username:this.$refs.phone.value,userpwd:"123456"};
            window.localStorage.setItem("username",JSON.stringify(this.user))
            this.$router.push({path:"/login"})
          }else{
            alert("验证码失败")
            this.getcode()
          }
        }else{
          alert("手机号格式不正确")
        }
        

      }else{
        alert("输入不能为空")
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