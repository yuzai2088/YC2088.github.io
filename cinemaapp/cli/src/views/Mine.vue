<template>
  <div class="mine">
    <div v-if="userinfo.username">
      <!-- <van-button type="primary" @click="gotoLogin">马上登录</van-button> -->
      <div class="top">
        <div class="pic">
          <UploadImg></UploadImg>
        </div>
        <h2 @click="gopepinfo">{{userinfo.username}}******{{userinfo.mobile}}</h2>
      </div>
      <div class="shopcar">
        <div class="goods">
          <van-icon class="ico" name="coupon" />
          <span>电影订单</span>
        </div>
        <div class="goods">
          <van-icon class="ico" name="graphic" />
          <span>商品订单</span>
        </div>
      </div>
      <div class="set">
        <van-cell is-link>
          <div class="menu">
            <van-icon size="0.4rem" color="#e60e36" name="credit-pay" />
            <span>卖座劵</span>
          </div>
        </van-cell>
        <van-cell is-link>
          <div class="menu">
            <van-icon size="0.4rem" color="#d1a162" name="bill-o" />
            <span>组合红包</span>
          </div>
        </van-cell>
        <van-cell is-link>
          <div class="menu">
            <van-icon size="0.4rem" color="#c77a17" name="balance-o" />
            <span>余额</span>
            <span style="margin-left: 4rem;">￥0.00</span>
          </div>
        </van-cell>
        <van-cell @click="goset" is-link>
          <div class="menu">
            <van-icon size="0.4rem" color="#928c84" name="discount" />
            <span>设置</span>
          </div>
        </van-cell>
      </div>
    </div>
    <div v-else>
      <!-- <van-button type="primary" @click="gotoLogin">马上登录</van-button> -->
      <div @click="gotoLogin" class="top">
        <div class="pic"></div>
        <h2>立即登录</h2>
      </div>
      <div class="shopcar">
        <div class="goods">
          <van-icon class="ico" name="coupon" />
          <span>电影订单</span>
        </div>
        <div class="goods">
          <van-icon class="ico" name="graphic" />
          <span>商品订单</span>
        </div>
      </div>
      <div class="set">
        <van-cell is-link @click="gotoLogin">
          <div class="menu">
            <van-icon size="0.4rem" color="#e60e36" name="credit-pay" />
            <span>卖座劵</span>
          </div>
        </van-cell>
        <van-cell is-link @click="gotoLogin">
          <div class="menu">
            <van-icon size="0.4rem" color="#d1a162" name="bill-o" />
            <span>组合红包</span>
          </div>
        </van-cell>
        <van-cell is-link @click="gotoLogin">
          <div class="menu">
            <van-icon size="0.4rem" color="#c77a17" name="balance-o" />
            <span>余额</span>
            <span style="margin-left: 4rem;">￥0.00</span>
          </div>
        </van-cell>
        <van-cell is-link>
          <div class="menu">
            <van-icon size="0.4rem" color="#928c84" name="discount" />
            <span>设置</span>
          </div>
        </van-cell>
      </div>
    </div>
  </div>
</template>


<script>
import UploadImg from "@/components/UpdaloadImg.vue";
export default {
  components: {
    UploadImg
  },
  data() {
    return {
      userinfo: {}
    };
  },
  mounted() {
    this.$axios.get("/vue/getInfo").then(res => {
      if (res.data.code == 200) {
        this.userinfo = res.data.result;
      }
    });
  },
  methods: {
    gotoLogin() {
      this.$router.push({ name: "login2", query: { active: "login2" } });
    },
 
    goset(){
       this.$router.push({ name: "set"});
    },
    gopepinfo(){
       this.$router.push({ name: "pepinfo"});
    }

  }
};
</script>
<style lang="scss" scoped>

.top {
  width: 100%;
  height: 2.5rem;
  background: url("../assets/images/lb.png") no-repeat center;
  background-size: cover;
  overflow: hidden;
  position: relative;
  .pic {
    width: 1.3rem;
    height: 1.3rem;
    background: url("../assets/images/tou.png") no-repeat center;
    background-size: cover;
    border-radius: 2rem;
    margin-top: 0.6rem;
    margin-left: 0.5rem;
    overflow: hidden;
  }
  h2 {
    margin-top: -42px;
    margin-left: 2.2rem;
    color: white;
  }
}
.shopcar {
  width: 100%;
  height: 1.5rem;
  background: rgb(255, 255, 255);
  display: flex;
  .goods {
    // background: red;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .ico {
      font-size: 24px;
      color: orange;
      margin-bottom: 0.1rem;
    }
    span {
      color: rgb(182, 173, 173);
      font-size: 12px;
      letter-spacing: 2px;
    }
  }
}
.set {
  width: 100%;
  background: white;
  margin-top: 0.2rem;
  overflow: hidden;
  .menu {
    display: flex;
    align-items: center;
    span {
      margin-left: 0.3rem;
    }
  }
}
</style>
