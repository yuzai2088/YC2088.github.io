<template>
    <footer>
        <van-tabbar v-model="active">
            <van-tabbar-item 
                v-for="(f,i) in foots" 
                :key="i" 
                :icon="f.icon"
                @click="changeView(f.name)"
            >
                {{f.txt}}
            </van-tabbar-item>
        </van-tabbar>
    </footer>
</template>


<script>
export default {
    // 返回上一级 active 高亮 没有变化 
    mounted(){
        var name = this.$route.name;
        this.foots.forEach((item,index)=>{
            if(item.name==name){
                this.active = index;
            }
        });
        // this.setData()
    },
    data(){
        return {
            active:3,      // 控制 高亮 
            foots:[
                {txt:"电影",path:"/main/movie",name:"movie",icon:"home-o"},
                {txt:"影院",path:"/main/cinema",name:"cinema",icon:"gem-o"},
                {txt:"点评",path:"/main/good",name:"good",icon:"records"},
                {txt:"我",path:"/main/mine",name:"mine",icon:"friends-o"}
			]
        }
    },
    methods:{
        changeView(name){
            this.$router.push({name:name})
        }
    }
}
</script>

<style scoped>
footer{
    position:fixed;
	width:100%;
	height:.9rem;
	left:0;
	bottom:0;
    background:#fff;
    border-top:1px solid rgb(214, 207, 207);
}
</style>
