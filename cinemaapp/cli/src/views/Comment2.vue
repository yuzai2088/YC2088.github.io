<template>
  <div class="addcomment">
    <Head title="添加评论" :show="true"></Head>
      <div class="cbox">
      <div class="cimg">
        <img :src="hot.poster" alt />
      </div>
      <div class="cmsg">
        <h2>{{hot.name}}</h2>
        <p>{{hot.category}}</p>
        <p>
          <span v-for="item in hot.actors">{{item.name}}</span>
        </p>
        <p>{{hot.nation}} / {{hot.runtime}} 分钟</p>
      </div>
    </div>
    <h2>添加评论</h2>
    <van-cell-group>
      <van-field type="textarea" autosize v-model="comment.con" placeholder="请输入评论内容" />
      <button @click="addcomment(hot.filmId)">评论</button>
    </van-cell-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hot: [],
      userinfo: {},
      comment: {
      }
    };
  },
  created() {
    this.$axios.get("/vue/movie").then(res => {
      console.log("hot", res);
      this.$nextTick(() => {
        this.hot = res.data.result.filter(item => {
          return item.filmId == this.$route.query.id;
        })[0];
      });
    });
  },
  mounted() {
    this.$axios.get("/vue/getInfo").then(res => {
      if (res.data.code == 200) {
        this.userinfo = res.data.result;
      }
    }); 
  },
  methods: {
    addcomment(id) {
      this.$axios.post("/vue/comment?id="+this.hot.filmId, this.comment).then(res => {
        console.log("comment", res);
        this.$router.push({ name: "comment", query: { id } });
      });
    }
  }
};
</script>
<style lang="scss" >
.addcomment{
  background: white;
}
 .cbox {
  width: 100%;
  background: rgb(3, 19, 4);
  display: flex;
  padding: 0.2rem 0.2rem;
  box-sizing: border-box;
  .cimg {
    width: 26%;
    height: 2.5rem;
    background: red;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .cmsg {
    width: 74%;
    height: 2.5rem;
    padding: 0.1rem 0.3rem;
    box-sizing: border-box;
    h2 {
      color: white;
      margin-bottom: 0.6rem;
    }
    p {
      color: #999;
      font-size: 10px;
      margin-bottom: 0.07rem;
    }
    span {
      font-size: 10px;
      color: #999;
      margin-right: 0.06rem;
    }
  }
}   

</style>