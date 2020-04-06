<template>
  <div >
    <!-- <div v-if="cont.length">fsdfafd</div>
    <div v-else>暂无数据</div> -->
    <Head title="查看评论" :show="true"></Head>
    <div class="cbox">
      <div class="cimg">
        <img :src="hot.poster" alt />
      </div>
      <div class="cmsg">
        <h2>{{hot.name}}</h2>
        <p>{{hot.category}}</p>
        <p>
          <span v-for="(item,i) in hot.actors" :key="i">{{item.name}}</span>
        </p>
        <p>{{hot.nation}} / {{hot.runtime}} 分钟</p>
      </div>
    </div>
   <div v-if="cont.length" class="comment">
      <h3>全部评论</h3>
      <hr />
      <div class="conlist" v-for="(c,i) in cont" :key="i">
        <p style="color:#999;">来自： {{c.username}} 用户的评论</p>
        <p class="ccon">{{c.con}}</p>
        <p class="ctime">{{c.time | timeSx('/')}}</p>
        <hr />
      </div> 
    </div> 
    <div v-else>
        <h3>讨论</h3>
      <hr />
        <p>暂无数据！</p>
        
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hot: [],
      userinfo: {},
      cont: [],
      id: this.$route.query.id
    };
  },
  filters:{
    timeSx(value, str) {
      if (!value) return "";
      str = str || "-";
      value = new Date(value);
      var year = value.getFullYear();
      var month = value.getMonth() + 1;
      var day = value.getDate();
      var hour = value.getHours();
      var min = value.getMinutes();
      var sec = value.getSeconds();
      return `${year}${str}${month}${str}${day} ${hour}:${min}:${sec}`;
    }

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

    this.$axios.post("/vue/getcomment?id=" + this.id).then(res => {
      console.log("getcomment", res);
      this.$nextTick(() => {
        this.cont = res.data.result;
      });
    });
  }
};
</script>

<style lang="scss" >
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
.comment {
  width: 100%;
  height: 100%;
  background: white;
  padding: 0.2rem 0.2rem;
  h3{
      letter-spacing:2px;
  }
  hr {
    border: 1px solid rgb(216, 210, 210);
  }
  .conlist {
    width: 100%;
    p {
      margin-bottom: 0.3rem;
      font-size:13px;
      
    }
    .ctime{
        margin-left:4.8rem;
        color:#999;
    }
    .ccon{
        font-size:15px;
    }
  }
}
</style>