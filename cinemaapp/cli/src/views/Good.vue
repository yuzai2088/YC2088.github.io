<template>
  <div class="good">
    <div class="top">
      <Head title="电影点评" :show="true"></Head>
    </div>
     <div class="mlist" v-for="(h,i) in hot" :key="i">
          <div class="mimg">
            <img :src="h.poster" alt />
          </div>
          <div  @click="det(h.filmId)" class="msg">
            <h5>
              {{h.name}}
              <span>{{h.item.name}}</span>
            </h5>
            <span style="font-size:10px;display:flex;">主演:</span>
            <span class="mname" v-for="a in h.actors" >{{a.name}}</span>
            <p>
              <span style="font-size:13px">{{h.nation}} | {{h.runtime}} 分钟</span>
            </p>
          </div>
          <div class="buy">
            <p><button @click="gotocoment2(h.filmId)">添加评论</button></p>
            <p><button @click="gotocoment(h.filmId)">查看评论</button></p>
          </div>
        </div>
      
  </div>
</template>

<script>
import VuexDemo from "@/components/Vuex.vue";
import { bus } from "@/utils";
export default {
  data() {
    return {
      news: [],
      hot:[],
      pre:[]
    };
  },
  components: {
    VuexDemo
  },
  mounted() {
    this.$axios.get("/vue/new").then(res => {
      console.log("new", res);
      this.$nextTick(() => {
        this.news = res.data.result;
      });
    });

       this.$axios.get("/vue/movie").then(res => {
      console.log("hot", res);
      this.$nextTick(() => {
        this.hot = res.data.result;
      });
    });

       this.$axios.get("/vue/pre").then(res => {
      console.log("pre", res);
      this.$nextTick(() => {
        this.pre = res.data.result;
      });
    });
  },
  methods:{
    gotocoment(id){
     this.$router.push({ name: "comment", query: { id } });
    },
     gotocoment2(id){
     this.$router.push({ name: "comment2", query: { id } });
    },
      det(id) {
      this.$router.push({ name: "detail", query: { id } });
    },
  }
};
</script>

<style lang="scss" scode>
    .top{
        width: 100%;
        position: fixed;
        top: 0
    }
    .good{
      margin-top: 0.7rem;
      margin-bottom: 0.9rem
    }
  .movie {
  margin-bottom: 1rem;
  background: white;
  position: relative;
}
.m-img {
  width: 100%;
  height: 3.5rem;
}

.mlist {
  width: 100%;
  height: 2rem;
  // background: pink;
  margin-bottom: 2px;
  padding: 5px 2px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(236, 233, 233);
  .mimg {
    width: 20%;
    height: 100%;
    // background: red;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .msg {
    width: 60%;
    height: 100%;
    // background: red;
    overflow: hidden;
    i {
      font-size: 10px;
    }
    .mname {
      width: 60%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-right: 5px;
      font-size: 10px;
    }
    h5 {
      font-size: 15px;
      margin-bottom: 0.2rem;
      span {
        display: inline-block;
        background: rgb(212, 208, 208);
        color: white;
        font-size: 12px;
        border-radius: 4px;
        margin-left: 3px;
      }
    }
  }
  .buy {
    width: 19%;
    height: 100%;
    // background: red;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    button {
      width: 100%;
      color: orange;
      border: 1px solid orange;
      background: none;
      font-size: 11px;
    }
  }
}
</style>