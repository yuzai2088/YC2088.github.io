<template>
  <div>
    <Head title="注册" :show="true"></Head>
    <div @click="gomine" class="banner">
      <img src="../assets/login.png" alt />
    </div>
    <div class="inp">
      <input
        @focus="jujiao"
        :error-message="errorusername"
        v-model="register.mobile"
        required
        type="user"
        placeholder="手机号"
      />
      <input
        @focus="jujiao"
        :error-message="errormobile"
        v-model="register.username"
        required
        type="user"
        placeholder="用户名"
      />
      <input
        @focus="jujiao"
        :error-message="errorpassword"
        v-model="register.password"
        required
        type="user"
        placeholder="密码"
      />
      <input
        @focus="jujiao"
        :error-message="errordbpwd"
        v-model="register.dbpwd"
        type="user"
        placeholder="确认密码"
      />
      <p @click="gologin">已有账号？去登陆</p>
    </div>
    <button class="btn-login" @click="todoRegister">注册</button>
  </div>
</template>
<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      register: {},
      errorusername: "",
      errormobile: "",
      errorpassword: "",
      errordbpwd: ""
    };
  },
  methods: {
    jujiao() {
      this.errordbpwd = this.errorusername = this.errormobile = this.errorpassword =
        "";
    },
    gologin() {
      this.$router.push({ name: "login2" });
    },
    // todoRegister() {
    //   this.$axios.post("/vue/register", this.register).then(res => {
    //     console.log("register", res);
    //     if (!!res.data.type) {
    //       this.active = 0;
    //       this.$router.push({ name: "login2" });
    //       this.login.mobile = res.data.result[0].mobile;
    //     }
    //   });
    // },
    todoRegister() {
      // console.log(this.register.mobile)
      var reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
      var rep = /^\w{5,10}\w$/;
      var rem = /^\w{5,10}\w$/;
      if (
        this.register.username &&
        this.register.mobile &&
        this.register.password &&
        this.register.dbpwd
      ) {
        const username = this.register.username;
        const mobile = this.register.mobile;
        const password = this.register.password;
        const dbpwd = this.register.dbpwd;
        if (
          rem.test(username) &&
          rep.test(password) &&
          reg.test(mobile) &&
          password == dbpwd
        ) {
          this.$axios.post("/vue/register", this.register).then(res => {
            if (!!res.data.type) {
              this.active = 0;
              this.login.mobile = res.data.result[0].mobile;
            }
          });
        } else {
          if (!rem.test(username)) {
            this.errorusername = "用户名长度为6-11位";
            Dialog.alert({
              message:this.errorusername
            });
          }
          if (!reg.test(mobile)) {
            this.errormobile = "手机号格式错误";
             Dialog.alert({
              message:this.errormobile
            });
          }
          if (!rep.test(password)) {
            this.errorpassword = "密码长度为6-11位";
              Dialog.alert({
              message:this.errorpassword
            });
          }
          if (password != dbpwd) {
            this.errordbpwd = "两次密码输入不一致！";
              Dialog.alert({
              message:this.errordbpwd
            });
          }
        }
      } else {
        Dialog.alert({
          message: "请输入完整信息！"
        }).then(() => {
          // on close
        });
      }
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