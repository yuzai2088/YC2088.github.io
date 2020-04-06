<template>
  <div class="movie">
    <button @click="gotoCity" class="city">
      {{cityInfo.name}}
      <van-icon color="#e90e0e" name="location" />
    </button>
    <van-swipe :autoplay="2000" show-indicators>
      <van-swipe-item v-for="(b,i) in banner" :key="i">
        <img class="m-img" :src="b.imgUrl" alt />
      </van-swipe-item>
    </van-swipe>
    <!-- <Carousel id="b1" :swiper-options="swiperOptions">
      <Carousel-item v-for="(b,i) in banner" :key="i">
        <img class="m-img" :src="b.imgUrl" alt />
      </Carousel-item>
    </Carousel>-->
    <van-tabs @click="onClick">
      <van-tab title="正在热映">
        <div class="mlist" v-for="(h,i) in hot" :key="i">
          <div class="mimg">
            <img :src="h.poster" alt />
          </div>
          <div @click="det(h.filmId)" class="msg">
            <h5>
              {{h.name}}
              <span>{{h.item.name}}</span>
            </h5>
            <span style="font-size:10px;display:flex;">主演:</span>
            <span class="mname" v-for="(a,i) in h.actors" :key="i">{{a.name}}</span>
            <p>
              <span style="font-size:13px">{{h.nation}} | {{h.runtime}} 分钟</span>
            </p>
          </div>
          <div class="buy">
            <button>购票</button>
          </div>
        </div>
      </van-tab>
      <van-tab title="即将上映">
        <!-- <div v-for="(p,i) in pre" :key="i" @click="det(p.filmId)">
          <p>{{p.name}}</p>
          <img class="m-img" :src="p.poster" alt />
        </div>-->
        <div class="mlist" v-for="(p,i) in pre" :key="i">
          <div class="mimg">
            <img :src="p.poster" alt />
          </div>
          <div @click="det2(p.filmId)" class="msg">
            <h5>
              {{p.name}}
              <span>{{p.item.name}}</span>
            </h5>
            <span style="font-size:10px;display:flex;">主演:</span>
            <span class="mname" v-for="(a,i) in p.actors" :key="i">{{a.name}}</span>
            <p>
              <span style="font-size:13px">{{p.nation}} | {{p.runtime}} 分钟</span>
            </p>
          </div>
          <div class="buy">
            <button>预购</button>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>


<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["data", "cityInfo"])
  },
  data() {
    return {
      banner: [],
      hot: [],
      pre: [],
      imgs: [
        require("@/assets/images/slide1.png"),
        require("@/assets/images/slide2.png"),
        require("@/assets/images/slide3.png"),
        require("@/assets/images/slide4.png")
      ],
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 1600
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  mounted() {
    // this.$http.get("http://localhost:1910/vue/maizuo/banner")
    // .then(res=>{
    //     console.log(res);
    //     // 将回调延迟下一次DOM更新之后执行 Swiper 实例化 setTimeout
    //     this.$nextTick(()=>{
    //         this.banner = res.data.result.data
    //     })
    // })
    // this.$dialog.alert({
    //   title: "友情提示",
    //   message: "请选择所在城市"
    // }).then((res) => {
    //   console.log(res);
    //     if(res){
    //       this.$router.push({name:"city"})
    //     }
    // });

    this.$axios.get("/vue/maizuo/banner").then(res => {
      console.log("banner", res);
      this.$nextTick(() => {
        this.banner = res.data.result.data;
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
  methods: {
    gotoCity() {
      this.$router.push({ name: "city" });
    },
    onClick(name, title) {
      this.$toast(title);
    },
    det(id) {
      this.$router.push({ name: "detail", query: { id } });
    },
    det2(id) {
      this.$router.push({ name: "detail2", query: { id } });
    }
  }
};
</script>

<style lang="scss" scoped>
.movie {
  margin-bottom: 1rem;
  background: white;
  position: relative;
  .city {
    width: 1rem;
    height: 0.5rem;
    position: absolute;
    top: 0.7rem;
    left: 0.8rem;
    z-index: 10;
    border: 0;
    outline: none;
    line-height: 0.5rem;
    border-radius: 0.25rem;
    background: rgba(199, 202, 198, 0.3);
    font-size: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
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
    width: 15%;
    height: 100%;
    // background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      width: 80%;
      color: orange;
      border: 1px solid orange;
      background: none;
      font-size: 15px;
    }
  }
}
</style>


