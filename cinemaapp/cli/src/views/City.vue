<template>
  <div>
    <Head title="城市" :show="true"></Head>
    <van-index-bar>
      <div v-for="(p,i) in pylist" :key="i">
        <van-index-anchor :index="p" />
        <van-cell
          @click="changeCity(c)"
          v-for="(c,k) in citylist.filter(val=>val.pinyin.indexOf(p.toLowerCase())==0)"
          :key="k"
          :title="c.name"
        />
      </div>
    </van-index-bar>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      pylist: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ]
    };
  },

  computed: {
    ...mapState(["citylist"])
  },
  methods: {
    ...mapMutations(["changCityInfo"]),
    changeCity(city) {
        this.changCityInfo(city)
      this.$router.push({ name: "movie" });
    },
    ...mapActions(["getcitylistAsync"])
  },
  mounted() {
    if (!this.citylist.length > 0) {
      this.getcitylistAsync({
        url: "/vue/city"
      });
    }
    // this.$axios.get("/vue/city").then(res => {
    //   console.log("city", res);
    //   this.$nextTick(() => {
    //     this.city = res.data.result;
    //   });
    // });
  }
};
</script>