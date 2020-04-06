<template>
  <div class="login2">
    <Head title :show="true"></Head>
    <div @click="gomine" class="banner">
      <img src="../assets/login.png" alt />
    </div>
    <div class="inp">
      <input
        @focus="jujiao"
        :error-message="errormobile"
        v-model="login.mobile"
        required
        type="user"
        placeholder="用户名"
      />
      <input
        @focus="jujiao"
        :error-message="errorpassword"
        v-model="login.password"
        type="user"
        placeholder="密码"
      />
      <p @click="goregister">还没账号？去注册！</p>
    </div>
    <button class="btn-login" @click="todoLogin">登录</button>
  </div>
</template>
<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      login: {},
      errormobile: "",
      errorpassword: ""
    };
  },
  methods: {
    jujiao() {
      this.errormobile = this.errorpassword = "";
    },
    todoLogin() {
      var reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
      var rep = /^\w{5,10}\w$/;
      if (this.login.mobile && this.login.password) {
        const mobile = this.login.mobile;
        const password = this.login.password;
        // console.log(mobile,password)
        if (reg.test(mobile) && rep.test(password)) {
          // console.log(mobile,password)
          this.$axios.post("/vue/login", this.login).then(res => {
            if (!!res.data.type) {
              this.$router.push({ name: "mine" });
              sessionStorage.token = res.data.token;
              sessionStorage.mobile = this.login.mobile;
            } else {
              sessionStorage.token = "";
            }
          });
        } else {
          if (!rep.test(password)) {
            this.errorusername = "密码长度为6-11位";
            Dialog.alert({
              message: this.errorusername
            });
          }
          if (!reg.test(mobile)) {
            this.errormobile = "手机号格式错误";
            Dialog.alert({
              message: this.errormobile
            });
          }
        }
      } else {
        Dialog.alert({
          message: "请输入完整信息！"
        });
      }
    },
    goregister() {
      this.$router.push({ name: "register" });
    },
    gomine() {
      this.$router.push({ name: "mine" });
    }
  }
};
</script>

<style lang="scss" >
.login2 {
  background: white;
}
.btn-login {
  width: 100%;
  height: 0.8rem;
  border: 0;
  outline: none;
  background: orangered;
  color: orange;
  font-size: 14px;
  letter-spacing: 3px;
  margin-top: 1.1rem;
}
.banner {
  width: 100%;
  height: 3rem;
  //   background: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 1.3rem;
    height: 1.3rem;
  }
}
.inp {
  padding: 0.4rem;
  box-sizing: border-box;
  input {
    width: 100%;
    height: 1.1rem;
    outline: none;
    border: 0;
    border-bottom: 1px solid rgb(238, 229, 229);
    text-indent: 10px;
    letter-spacing: 4px;
    font-size: 14px;
  }
  p {
    margin-top: 0.4rem;
    color: red;
    font-size: 12px;
  }
}
</style>