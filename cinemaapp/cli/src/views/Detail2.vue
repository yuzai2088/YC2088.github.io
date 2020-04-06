<template>
  <div class="hot">
    <div class="top">
      <Head title="正在热映" :show="true"></Head>
    </div>
    <div class="detail">
      <div class="dbanner">
        <img :src="pre.poster" alt />
      </div>

      <div class="msg1">
        <h3>
          {{pre.name}}
          <span class="tp">{{pre.item.name}}</span>
          <div class="gr">
            <i>{{pre.grade}}</i>
            <span class="grade"></span>
          </div>
        </h3>
        <p>{{pre.category}}</p>
        <p>2019-11 上映</p>
        <p>{{pre.nation}} | {{pre.runtime}} 分钟</p>
      </div>
      <div class="msg2">
        <van-collapse v-model="activeNames">
          <van-collapse-item
            title="详细信息"
          
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{pre.synopsis}}</van-collapse-item>
        </van-collapse>
      </div>

      <div class="dpep">
        <h2>演员列表</h2>
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="(item,i) in pre.actors" :key="i">
            <!-- <h3 class="medium">{{ item.avatarAddress }}</h3> -->
            <img :src="item.avatarAddress" alt />
            <p class="p1">{{item.name}}</p>
            <p class="p2">{{item.role}}</p>
          </el-carousel-item>
        </el-carousel>
      </div>
       <button>预定座位</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pre: [],
      id: this.$route.query.id,
      activeNames: ["1"]
    };
  },

  created() {
    this.$axios.get("/vue/pre").then(res => {
      console.log("pre2", res);
      this.$nextTick(() => {
        this.pre = res.data.result.filter(item => {
          return item.filmId == this.$route.query.id;
        })[0];
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.hot {
    button{
    width: 100%;
    height: 1rem;
    border: 0;
    outline: none;
    background:rgb(221, 110, 7);
    color: white;
    font-weight: 200;
    text-decoration: underline;
  }
  .detail {
    margin-top: 0.8rem;
  }
  .top {
    width: 100%;
    position: fixed;
    top: 0;
  }
  .dbanner {
    width: 100%;
    height: 5rem;
    overflow: hidden;
    img {
      width: 100%;
      margin-top: -1.5rem;
    }
  }
  .msg1 {
    width: 100%;
    padding: 0.3rem 0.3rem;
    box-sizing: border-box;
    background: white;
    p {
      font-size: 12px;
      margin-top: 0.1rem;
      color: rgb(160, 158, 158);
    }
    h3 {
      position: relative;
      .gr {
        position: absolute;
        right: 0;
        top: 0;
      }
      .tp {
        background: rgb(221, 217, 217);
        color: white;
        border-radius: 10%;
        font-size: 9px;
        margin-left: 0.1rem;
        text-decoration: underline;
      }
      i {
        // margin-left: 3.8rem;
        color: orange;
      }
      .grade {
        font-size: 10px;
        margin-left: 0.1rem;
        color: orange;
      }
    }
  }
  .msg2 {
    margin-bottom: 0.5rem;
    van-collapse-item {
      text-indent: 32px;
    }
  }
  .dpep {
    width: 100%;
    height: 100%;
    padding: 0.3rem 0.3rem;
    background: white;
    box-sizing: border-box;
    .el-carousel__item img {
      width: 70%;
      height: 70%;
    }
    .el-carousel__item {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: #fff;
    }
    .p1 {
      font-size: 12px;
      margin-top: 0.1rem;
      margin-bottom: 0.1rem;
    }
    .p2 {
      font-size: 11px;
      font-weight: 100;
    }

    // .el-carousel__item:nth-child(2n) {
    // }

    // .el-carousel__item {
    // }

    // .el-carousel__item:nth-child(2n + 1) {
    //   background-color: #fff;
    // }
  }
}
</style>