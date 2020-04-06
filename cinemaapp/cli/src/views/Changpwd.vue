<template>
  <div class="cp">
    <Head title="修改密码" :show="true"></Head>
    <div @click="gomine" class="banner">
      <img src="../assets/login.png" alt />
    </div>
    <div class="inp">
      <input v-model="pwd.oldpwd" type="user" placeholder="旧密码" />
      <input v-model="pwd.newpwd" type="user" placeholder="新密码" />
      <p @click="goregister">还没账号？去注册！</p>
      <p @click="gologin">已有账号？去登陆！</p>
    </div>
    <button class="btn-login" @click="changpwd">修改</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pwd: {}
    };
  },
  methods: {
    goregister() {
      this.$router.push({ name: "register" });
    },
    gologin() {
      this.$router.push({ name: "login2" });
    },
    gomine() {
      this.$router.push({ name: "mine" });
    },
    changpwd(id) {
      this.$axios
        .post("/vue/changpwd",this.pwd)
        .then(res => {
          console.log("pwd", res);
          this.$router.push({ name: "login2" });
        });
    }
  }
};
</script>
<style lang="scss" >
.cp {
  background: white;
}
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