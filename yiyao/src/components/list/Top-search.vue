<template>
  <div>
    <div class="bar">
      <!-- 搜索 -->
      <div class="search">
        <p>
          <a href="javascript: window.history.go(-1)">
            <span class="iconfont icon-icon-test59"></span>
          </a>
        </p>
        <p>
          <span class="iconfont icon-icon-test12"></span>
          <input type="text" v-model="inp"/>
        </p>
        <p>
          <span class="iconfont icon-shouye10" @click="go"></span>
        </p>
      </div>
      <!-- 筛选 -->
      <ul>
        <li @click="changPrice" >
          <span>价格排序</span>
          <span :class="priceIcon"></span>
        </li>
        <li @click="changId" >
          <span>综合排序</span>
          <span :class="idIcon"></span>
        </li>
        <li>
          <span>大图</span>
          <span class="iconfont icon-icon-test32"></span>
        </li>
        <li>
          <span>筛选</span>
          <span class="iconfont icon-shouye29"></span>
        </li>
      </ul>
      <ol>
        <li>1药网自营</li>
        <li>
          促销
          <span class="iconfont icon-icon-test69"></span>
        </li>
        <li>
          品牌
          <span class="iconfont icon-icon-test69"></span>
        </li>
        <li>
          剂型
          <span class="iconfont icon-icon-test69"></span>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { DropdownMenu, DropdownItem } from "vant";
Vue.use(DropdownMenu).use(DropdownItem);
export default {
  data: function() {
    return {
      priceIcon: "iconfont icon-icon-test69",
      idIcon: "iconfont icon-icon-test69",
      showPrice: false,
      showId:false,
      value1: "全部商品",
      value2: "a",
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ],
      inp:"",
    };
  },
  watch:{
    inp:function(val){
        this.$emit('closepop',val);
    } 
  },
  
  methods: {
    changPrice() {
      this.showPrice = !this.showPrice;
      this.showPrice
        ? (this.priceIcon = "iconfont icon-icon-test68")
        : (this.priceIcon = "iconfont icon-icon-test69");
      if(this.showPrice){
      this.info.sort(function(a,b){ // 这是比较函数
          return parseInt(b.price.replace("￥","")) - parseInt(a.price.replace("￥","")); 
      })

      }else{
        this.info.sort(function(a,b){ // 这是比较函数
            return parseInt(a.price.replace("￥","")) - parseInt(b.price.replace("￥",""));
        })
      }
    },
    changId(){
      this.showId = !this.showId;
      this.showId
        ? (this.idIcon = "iconfont icon-icon-test68")
        : (this.idIcon = "iconfont icon-icon-test69");
      if(this.showId){
        this.info.sort(function(a,b){ // 这是比较函数
            return b.id - a.id;
        })

      }else{
        this.info.sort(function(a,b){ // 这是比较函数
            return a.id - b.id;
        })
      };
    },
    go(){
      this.$router.push({path:"/"})
    }
  
  },
  props:["info"],
}
</script>

<style lang="scss" scoped>

.bar {
  width: 750px;
  height: 247px;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 20;
  .search {
    height: 88px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      height: 60px;
      line-height: 60px;
      span {
        font-size: 60px;
        color: #686b85;
      }
      &:nth-of-type(3) {
        width: 100px;
        text-align: center;
        span {
          margin-left: 8px;
          font-size: 45px;
        }
      }
      &:nth-of-type(2) {
        flex: 1;
        border-radius: 30px;
        border: 2px solid #d7d7d7;
        box-sizing: border-box;
        padding-right: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          font-size: 40px;
          color: rgba(104, 107, 133, 0.46);
          margin: 0 20px;
        }
        input {
          flex: 1;
          border: 0;
          background: transparent;
        }
      }
      &:first-of-type {
        width: 86px;
        text-align: center;
      }
    }
  }
  ul {
    width: 750px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #e7e7e7;
    .active{
      color: #ff394e;
    }
    li {
      height: 80px;
      font-size: 30px;
      color: #333;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 80px;
      .iconfont {
        color: rgba(38, 45, 86, 0.6);
        font-size: 26px;
        margin-left: 4px;
      }
      .icon-icon-test69，icon-icon-test68{
        font-size: 36px;
        margin-left: 8px;
      }
      &:first-of-type,
      &:nth-of-type(2) {
        flex: 2;
      }
      &:nth-of-type(3),
      &:nth-of-type(4) {
        flex: 1;
      }
      &:nth-of-type(3),
      &:nth-of-type(4) {
        flex: 1;
      }
    }
  }
  ol {
    width: 750px;
    height: 80px;
    border-bottom: 2px solid #e7e7e7;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      width: 164px;
      height: 60px;
      color: #262d56;
      background: #f3f3f3;
      border-radius: 30px;
      font-size: 26px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 30px;
      span {
        font-size: 36px;
        color: rgba(38, 45, 86, 0.6);
        margin-left: 2px;
      }
    }
  }
}
</style>