<template>
  <div class="myself">
    <div class="user-top">
      <div class="city">
        <span class="iconfont icon-shouye8"></span>
        <time>湖北</time>
        </div>
      <div class="set">设置</div>
    </div>
    <div class="my clear">
      <header>
        <div class="touxiang">
          <img src="img/touxiang.png" alt="">
        </div>
        <div class="login" ref="lo">
          <span @click="login">登陆</span>/<span @click="register">注册</span>
          <span class="iconfont icon-icon-test61"></span>
        </div>
      </header>
      <div class="juan">
        <div class="yue"><span>0.00</span>元<p>余额</p></div>
        <div class="youhui"><span>0</span>张<p>优惠券</p></div>
      </div>
      <div class="di">
        <div class="title">我的订单</div>
        <div class="all">
          查看全部
          <span class="iconfont icon-icon-test61"></span>
        </div>
      </div>
      <ul class="then">
        <li>
          <img src="img/p1.png" alt="">
          <p>待付款</p>
        </li>
        <li>
          <img src="img/p2.png" alt="">
          <p>待发货</p>
        </li>
        <li>
          <img src="img/p3.png" alt="">
          <p>待收货</p>
        </li>
        <li>
          <img src="img/p4.png" alt="">
          <p>待评价</p>
        </li>
        <li>
          <img src="img/p5.png" alt="">
          <p>退换货</p>
        </li>
      </ul>
      <div class="di">
        <div class="title">我的服务</div>
      </div>
      <ul class="then tr">
        <li>
          <img src="img/d1.png" alt="">
          <p>健康档案</p>
        </li>
        <li>
          <img src="img/d2.png" alt="">
          <p>看过买过</p>
        </li>
        <li>
          <img src="img/d3.png" alt="">
          <p>我的收藏</p>
        </li>
        <li>
          <img src="img/d4.png" alt="">
          <p>联系客服</p>
        </li>
      </ul>
      <div class="home">
        <img src="img/home.jpg" alt="">
      </div>
      <div class="di">
        <div class="title">专属药师</div>
      </div>
       <div class="xin">
        <img src="img/xin.png" alt="">
      </div>
      <div class="di">
        <div class="title">福利中心</div>
      </div>
      <ul class="then tr d">
        <li>
          <img src="img/f1.png" alt="">
          <p>领卷中心</p>
        </li>
        <li>
          <img src="img/f2.png" alt="">
          <p>领奖励金</p>
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "myself",
  components: {
  },
  mounted:function () {
    if(window.localStorage.username){
      this.$refs.lo.innerHTML = JSON.parse(window.localStorage.username).username

    }
  },
  methods:{
    login(){
      this.$router.push({path:"/login"})
    },
    register(){
      this.$router.push({path:"/register"})
    }
  }
};
</script>
<style lang="scss" scoped>
  .user-top{
    width:750px;
    height: 236px;
    background: linear-gradient(#908bff,#9bb3ff);
    text-align: center;
    color: #fff;
    display: flex;
    justify-content: space-between;
    font-size: 30px;
    box-sizing: border-box;
    padding: 60px 30px 0 30px;
    box-sizing: border-box; 
    span{
      font-size: 40px;
    }
  }
  .my{
    position: absolute;
    top: 140px;
    left: 15px;
    width: 720px;
    background: #fff;
    border-radius:15px; 
    box-shadow: 0 0.02666667rem 0.64rem 0 rgba(38,45,86,.0);
    margin-bottom:110px; 
    header{
      width: 100%;
      height: 150px;
      display: flex;
      align-items: center;
      .touxiang{
        width: 100px;
        height: 100px;
        margin:0 20px;
        img{
          width: 100%;
          height: 100%;
          border-radius:50%; 
        } 
        .login{
          font-size: 30px;
          color: #262d56;
          .iconfont{
            font-size: 12px;
            margin-left: 10px;
          }
        }
      }
    }
    .juan{
      width: 100%;
      height: 100px;
      color: #262d56;
      display: flex;
      justify-content: space-between;
      font-size: 26px;
      align-items: center;
      text-align: center;
      .yue{
        width: 50%;
        height: 100%;
        span{
          font-size: 36px;
          margin-right: 4px;
        }
      }
      .youhui{
        width: 50%;
        height: 100%;
        span{
          font-size: 36px;
          margin-right: 4px;
        }
      }
      p{
        font-size: 26px;
        margin-left: 4px;
      }
    }
    .di{
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 30px;
      color: #262d56;
      margin-top: 20px;
      .title{
        margin-left: 10px;
      }
      .all{
        margin-right: 10px;
        font-size: 26px;
        span{
          font-size: 12px;
          padding-left: 10px;
        }
      }
    }
    .then{
      width: 100%;
      height: 156px;
      display: flex;
      justify-content: space-between;
      color: #262d56;
      li{
        width: 20%;
        height: 100%;
        text-align: center;
        img{
          width: 44px;
          height: 44px;
          margin-top: 30px;
        }
        p{
          padding-top: 10px;
          font-size: 26px;
        }
      }
    }
    .tr{
      li{
        width: 25%;
      }
    }
    .home{
      width: 100%;
      height: 116px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .xin{
      width: 100%;
      height: 145px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
