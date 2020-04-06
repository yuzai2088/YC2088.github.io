<template>
    <van-swipe class="guide" show-indicators >
        <van-swipe-item v-for="(img,i) in imgs" :key="i">
            <img class="g-img" :src="img" alt="">
            <van-button @click="gotoMain" v-if="i==imgs.length-1" class="g-btn"  type="warning">点击进入主页</van-button>
        </van-swipe-item>
    </van-swipe>
</template>


<script>
import router from "@/router"
export default {
    name:'guide',
    methods:{
        gotoMain(){
            this.$router.push({name:'movie'})
        }
    },
    mounted(){
        if(window.localStorage){
            if(localStorage.visitcount){
                // 之前已经访问
                localStorage.visitcount++;
                if(localStorage.visitcount>3){
                    this.$router.push({name:'movie'})
                }
            }else{
                localStorage.visitcount = 1;
            }
        }else{
            alert("浏览器不支持 localStorage")
        }
        
    },
    data(){
        return {
            imgs:[
                require("@/assets/images/slide1.png"),
                require("@/assets/images/slide2.png"),
                require("@/assets/images/slide3.png"),
                require("@/assets/images/slide4.png")
            ]
        }
    }
}
</script>


<style scoped>
.test{
    width:2rem;
    height:2rem;
    background: darkgoldenrod;
}

.g-img{
    width:100%;
    height:100vh;
}

.g-btn{
    position: absolute;
    z-index:10;
    left:0;
    top:0;
    right:0;
    bottom:0;
    margin:auto;
}
</style>

