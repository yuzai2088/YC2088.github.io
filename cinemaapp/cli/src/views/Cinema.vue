<template>
  <div class="cinema">
    <div class="top">
      <Head title="影院" :show="true"></Head>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />
      </van-dropdown-menu>
    </div>

    <div v-for="(m,i) in ima.filter(val=>val.districtName.indexOf(value1)==0)" :key="i" class="box">
      <p>
        <span style="font-size:13px">{{m.name}}</span>
        <span style="font-size:14px;color:red;">
          <span style="font-size:9px">￥</span> {{m.lowPrice | priceFormat('.')}}
          <span style="font-size:9px">起</span>
        </span>
      </p>
      <h3>
        <span class="km">{{m.address}}</span>
        <span style="font-size:10px">距离未知</span>
      </h3>
    </div>
  </div>
</template>


<script>
export default {
  filters:{
    priceFormat(value,str){
      if(!value) return "";
      str = str || "";
      value = value.toString().split("");
      value.splice(2,0,str);
      return value.join("");
    }
  },
  data() {
    return {
      ima: [],
      value1: "",
      value2: "a",
      value3: "e",
      option1: [{ text: "全城", value:""},{ text: "青山区", value: "青山区" },{ text: "洪山区", value: "洪山区" }, { text: "武昌区", value: "武昌区" },{ text: "硚口区", value: "硚口区" },{ text: "江汉区", value: "江汉区" },{ text: "江夏区", value:"江夏区" },{ text: "江岸区", value:"江岸区" }],
      option2: [
        { text: "APP订票", value: "a" },
        { text: "前台兑换", value: "b" }
      ],
      option3: [
        { text: "最近去过", value: "e" },
        { text: "离我最近", value: "f" }
      ]
    };
  },
  mounted() {
    this.$axios.get("/vue/ima").then(res => {
      console.log("ima", res);
      this.$nextTick(() => {
        this.ima = res.data.result;
      });
    });
  }
};
</script>


<style lang="scss" scoped>
.cinema {
  margin-top: 1.8rem;
  margin-bottom: 1rem;
  background: white;
}
.top {
  width: 100%;
  position: fixed;
  top: 0;
}
.box {
  width: 100%;
  height: 1.3rem;
  background: white;
  border-bottom: 1px solid rgb(226, 219, 219);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5px 5px;
  box-sizing: border-box;
  h3 {
    color: rgb(133, 127, 127);
    display: flex;
    justify-content: space-between;
    .km {
      display: inline-block;
      width: 80%;
      font-size: 12px;
    }
  }
  p {
    display: flex;
    justify-content: space-between;
  }
}
</style>