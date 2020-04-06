<template>
  <div class="head">
    <van-nav-bar :title="title" :left-text="show?'返回':''" :left-arrow="show" @click-left="goBack">
      <!-- <van-icon v-if="!search" @click="gotoSearch" name="search" slot="right" />
      <van-icon v-if="!login" @click="gotoLogin" class="h-login" name="ellipsis" slot="right" /> -->
    </van-nav-bar>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["data", "cityInfo"])
  },
  props: ["title", "show", "search", "login"],
  methods: {
    goBack() {
      console.log("back");
      this.$router.go(-1);
    },
    gotoSearch() {
      this.$router.push({ name: "search" });
    },
    gotoLogin() {
      this.$router.push({ name: "login", query: { active: "login" } });
    },
    gotoCity() {
      this.$router.push({ name: "city" });
    }
  }
};
</script>


<style>
.head {
  position: relative;
}

.h-login {
  margin-left: 5px;
}
</style>
