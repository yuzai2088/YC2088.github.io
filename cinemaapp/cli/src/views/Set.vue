<template>
  <div>
    <Head title="设置" :show="true"></Head>

    <van-cell is-link>
      <div class="pep">
        <span>账号ID</span>
        <span style="color:#999;font-size:13px">{{userinfo.mobile}}</span>
      </div>
    </van-cell>

    <div class="pass">
      <van-cell @click="gochangpwd" is-link>
        <div class="pep">
          <span>登录密码</span>
          <span style="color:#999;font-size:13px">修改</span>
        </div>
      </van-cell>
      <van-cell is-link>
        <div class="pep">
          <span>安全密码</span>
          <span style="color:#999;font-size:13px">修改</span>
        </div>
      </van-cell>
    </div>

    <div class="version">
      <van-cell is-link>
        <div class="pep">
          <span>软件版本</span>
          <span style="color:#999;font-size:11px">版本号：5.0.10</span>
        </div>
      </van-cell>
      <van-cell is-link>
        <span>意见反馈</span>
      </van-cell>
    </div>

    <van-cell is-link>
      <div class="pep">
        <span>清除缓存</span>
        <span style="color:#999;font-size:13px">30.0 MB</span>
      </div>
    </van-cell>

    <button class="btn-out" @click="outLogin">退出登录</button>
  </div>
</template>
<script>
export default {
  methods: {
    outLogin() {
      //   this.userinfo.username = false;
      sessionStorage.token = false;
      this.$router.push({ name: "mine" });
    },
    gochangpwd() {
      this.$router.push({ name: "changpwd" });
    }
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
  }
};
</script>
<style lang="scss"  >
.btn-out {
  width: 100%;
  height: 0.7rem;
  position: fixed;
  bottom: 0;
  font-size: 13px;
  color: red;
  border: 0;
  outline: none;
  background: white;
}

.pass {
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
}
.version {
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
}
.pep{
  display: flex;
  justify-content: space-between
}
</style>