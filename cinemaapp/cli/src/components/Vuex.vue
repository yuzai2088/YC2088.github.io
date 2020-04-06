<template>
  <div>
    <h2>vuex --案例</h2>
    <button v-if="false" @click="vadd">num++</button>
    <h2>store----{{count1}}</h2>
    <h2>count2----{{count2}}</h2>
    <h2>city1---{{city1}}</h2>
    <h2>word1---{{word1}}</h2>
    <h2>city2---{{city2}}</h2>
    <h2>count3---{{count3}}---newcount--{{newcount}}</h2>
    <h2>msg1---{{msg1}}---newmsg---{{newmsg}}</h2>
    <van-button @click="countAdd" type="primary">count add</van-button>
    <van-button @click="changc" type="primary">count changge</van-button>
    <van-button @click="changw" type="info">word changge</van-button>
    <van-button @click="changm" type="info">msg changge</van-button>
    <van-button @click="CM('拉阿拉啦啦')" type="info">Msg changge</van-button>
    <van-button @click="cma" type="info">cma</van-button>
    <p>
      <input :value="word1" @input="changi" type="text" />
    </p>
    <p>
      <van-button type="primary" @click="getMvAsync({url:'/vue/movie',limit:18})">异步获取 电影mv</van-button>
    </p>
    <p v-for="(m,i) in data1.mv" :key="i">{{m.title}} -- {{m.year}}</p>
  </div>
</template>
<script>
import { bus } from "@/utils";
import store from "@/store";
export default {
  mounted() {
    console.log(this.$store);
  },

  methods: {
    getMvAsync() {
      this.$store.dispatch("getMvAsync", {
        url: "/vue/maizuo/banner",
        limit: 10
      });
    },
    cma() {
      this.$store.dispatch("changMsgAsync");
    },
    vadd() {
      bus.$emit("gadd", 40);
    },
    countAdd() {
      // this.$store.commit("countadd")
      this.$store.dispatch("countadd");
    },
    CM(m) {
      this.$store.dispatch("changCity", m);
    },
    changc() {
      this.$store.commit("changcount", 100);
    },
    changw() {
      this.$store.commit("changmsg", "重庆");
    },
    changm() {
      this.$store.commit("changMsg", "哈哈哈");
    },
    changi(e) {
      this.$store.commit("changmsg", e.target.value);
    }
  },
  computed: {
    data1() {
      return this.$store.state.data;
    },
    word1() {
      return this.$store.state.word;
    },
    city2() {
      return this.$store.state.city;
    },
    count3() {
      return this.$store.state.count;
    },
    msg1() {
      return this.$store.state.msg;
    },
    newcount() {
      return this.$store.getters.newcount;
    },
    newmsg() {
      return this.$store.getters.newmsg;
    }
  },
  data() {
    return {
      count1: store.state.count,
      count2: this.$store.state.count,
      city1: this.$store.state.city
    };
  }
};
</script>