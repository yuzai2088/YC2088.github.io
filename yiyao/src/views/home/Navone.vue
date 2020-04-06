<template>
<div class="navone">
  <ul>
     <li v-for="item in list" :key="item.id" @click="get(item.id)">
       <span>
         <img :src="item.adPic" >
       </span>
       <i>{{item.adTitle}}</i>
     </li>
  </ul>
  <div class="hr"></div>
</div>
</template>
<script>
export default {
  data:function(){
    return {
      list:null,
    }
  },
  created:function(){
      var that = this;
      this.$axios({
      method: "post",
      url: "http://gateway.fangkuaiyi.com/mobile/home/getHeadData?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1578283527970&signature=****&siteid=9&deviceCode=9bbf0EBA-BBbe-4076-99C7-bbBb0fE00cCd&locatecityname=%E6%AD%A6%E6%B1%89&locateprovinceid=18",
      }).then(function(result) {
          that.list=result.data.data.templatedata[0].contentList;
      });
    },
    methods:{
      get:function(id){
        window.console.log(id)
        this.$router.push({path:`/get`})
      }
    }
}
</script>

<style lang="scss" scoped>
  .navone{
    width: 750px;
    height: 370px;
    box-sizing: border-box;
    padding: 30px 0 36px 0;
    position: relative;
    ul{
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      align-content: space-between;
      padding: 0 5px;
      height: 100%;
      li{
        width: 146px;
        height: 140px;
        text-align: center;
        span{
          width: 100%;
          height: 88px;
          display: block;
          margin-bottom:16px; 
          img{
            width: 88px;
            height: 88px;
            text-align: center;
          }
        }
        i{
          font-style: normal;
        }
      }
    }
    .hr{
      position: absolute;
      bottom: 0;
      height: 16px;
      width: 750px;
      background: #f7f7f7;
    }
  }
</style>