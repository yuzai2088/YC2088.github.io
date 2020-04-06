<template>
  <div class="get">
    <search ref="searchFrom"></search>
    <div class="img">
      <img src="img/te.png" alt />
    </div>
    <div class="ul">
      <ul class="clear">
        <li v-for="(item,index) in list" :key="item.id" @click="get(item.id,index)" :class="item.id == goodsid ? 'active' : ''">{{item.name}}</li>
      </ul>
      <div class="yao">
        <bannerinner></bannerinner>
        <div>
          <div class="name">{{name}}</div>
          <div class="deer">
            <ol class="clear">
              <li v-for="item in right" :key="item.id" @click="goto()">
                <div class="list">
                  <img :src="item.icon" alt="">
                </div>
                <span>{{item.name}}</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import search from "@/components/home/Search.vue";
import bannerinner from "@/components/get/Banner.vue";

export default {
  components: {
    search,
    bannerinner
  },
  created: function() {
    var that = this;
    this.$axios({
      method: "get",
      url: "https://api.myjson.com/bins/149ac8"
    }).then(function(result) {
      that.list = result.data.data;
      that.right = result.data.data[0].chlidren;
      that.name = result.data.data[0].name;
    });
  },
  data: function() {
    return {
      list: [],
      right: [],
      name:[],
      goodsid: 1001447
    };
  },
  methods: {
    get(id, index) {
      window.console.log(id);
      this.goodsid = id;
      var that = this;
      this.$axios({
        method: "get",
        url: "https://api.myjson.com/bins/149ac8"
      }).then(function(result) {
        that.right = result.data.data[index].chlidren;
        that.name = result.data.data[index].name;
        // this.$router.push({path:`/get/:${that.goodsid}`})
      });
    },
    goto(){
      this.$router.push({path:"/shoppinglist"})
    }
  }
};
</script>
<style lang="scss" scoped>
.img {
  margin-top: 88px;
  width: 750px;
  height: 88px;
  img {
    width: 100%;
    height: 100%;
  }
}
.ul {
  width: 750px;
  height: 800px;
  ul {
    height: 1050px;
    overflow-y: scroll;
    width: 186px;
    float: left;
    font-size: 28px;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    background: #f7f7f7;
    li {
      height: 88px;
      width: 186px;
      padding: 0 20px;
      box-sizing: border-box;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      line-height: 88px;
      overflow: hidden;
      color: #333;
    }
    .active {
      background: #fff;
      border-left: 4px #ff6666 solid;
      color: #ff6666;
    }
  }
  .yao {
    // height: 100%;
    width: 542px;
    float: right;
    height: 1050px;
    overflow-y: scroll;
    .name {
      font-size: 32px;
      color: #333;
      width: 100%;
      height: 80px;
      margin-top: 20px;
      line-height: 80px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    .deer {
      width: 542px;
      height: 800px;
      ol {
        width: 100%;
        padding: 40px 10px 0 0;
        box-sizing: border-box;
        height: 100%;
        li {
          width: 176px;
          height: 176px;
          margin-bottom: 30px;
          float: left;
          overflow: hidden;
          text-align: center;
          .list {
            width: 116px;
            height: 116px;
            margin: 0 30px 20px 28px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          span {
            color: #555;
            font-size: 24px;
          }
        }
      }
    }
  }
}
</style>
