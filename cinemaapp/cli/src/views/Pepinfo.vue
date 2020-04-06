<template>
  <div>
    <Head title="我的资料" :show="true"></Head>

    <van-cell is-link>
      <div class="pep">
        <span>头像</span>
        <span class="pimg"><UploadImg></UploadImg></span>
      </div>
    </van-cell>
    <van-cell is-link>
      <div style="color:#999;font-size:13px" class="pep">
        <span>昵称</span>
        <span>{{userinfo.username}}</span>
      </div>
    </van-cell>
    <van-cell is-link>
      <div style="color:#999;font-size:13px" class="pep">
        <span>手机号</span>
        <span>{{userinfo.mobile}}</span>
      </div>
    </van-cell>
    <van-cell is-link>
      <div style="color:#999;font-size:13px" class="pep">
        <span>性别</span>
        <span>未设置</span>
      </div>
    </van-cell>
    <van-cell is-link>
      <div style="color:#999;font-size:13px" class="pep">
        <span>出生日期</span>
        <span>未设置</span>
      </div>
    </van-cell>
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
    gopepinfo() {
      this.$router.push({ name: "pepinfo" });
    }
  }
};
</script>
<style lang="scss">
.pep {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.pimg{
    display: inline-block;
    width: 20%;
    height: 20%;
}
</style>