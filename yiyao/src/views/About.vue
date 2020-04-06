<template>
  <div>
    <bannertips></bannertips>
    <ul>
      <li v-for="item in list" :key="item.id">
        <img :src="item.module.imgSrc">
      </li>
    </ul>
  </div>
</template>

<script>
import bannertips from "@/components/about/Banner.vue";
export default {
  components:{
    bannertips
  },
  created:function(){
    var that = this;
    this.$axios({
    method: "get",
    url: "https://api.myjson.com/bins/1afbe8",
    }).then(function(result) {
      that.list=result.data.moduleList;
      window.console.log(result)
    });
  },
  mounted:function(){
    this.$store.commit("setflag",false);
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    // console.log(to);
  
      next()
    //this.$bus.$emit("setNav",true);
      this.$store.commit("setflag",true);
    
  },
  data:function(){
    return {
      list:[],
    }
  }
}
</script>
<style lang="scss" scoped>
  ul{
    li{
      img{
        width: 750px;
        height: auto;
      }
    }
  }
</style>