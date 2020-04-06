<template>
    <footer>
        <div v-for="(foot,i) in foots" :key="i"> 
            <router-link
                :to="{name:foot.name}"
            >
                <i class="iconfont" v-html="foot.icon">  </i>
                <span> {{foot.txt}}</span>
                <van-tag v-if="i==foots.length-1" class="hot" type="success">5</van-tag>
            </router-link>
        </div>
    </footer>
</template>

<script>
export default {
    name:'foot',
    data(){
        return {
            foots:[
                {txt:"电影",path:"/main/movie",name:"movie",icon:"&#xe8ae;"},
                {txt:"影院",path:"/main/cinema",name:"cinema",icon:"&#xe8c0;"},
                {txt:"资讯",path:"/main/good",name:"good",icon:"&#xe619;"},
                {txt:"我",path:"/main/mine",name:"mine",icon:"&#xe614;"}
			],
        }
    }
}
</script>


<style lang="scss" scoped>
footer{
	position:fixed;
	width:100%;
	height:.9rem;
	left:0;
	bottom:0;
	background:#fff;
	display:flex !important;
    z-index:100;
    border-top:1px solid black;
	div{
		flex:1;
		height:0.9rem;
		a{
			display: block;
			width:100%;
			height:100%;
			display:flex;
			flex-direction:column;
			box-sizing:border-box;
			padding:0.06rem 0;
			text-align:center;
			font-family:"微软雅黑";
			color:#999;
			position: relative;
			i{
			width:100%;
			height:0.45rem;
			line-height:0.45rem;
			font-size:0.42rem !important;
			}
			span{
				width:100%;
				height:0.35rem;
				line-height:0.35rem;
				font-size:0.26rem;
			}
			.hot{
				position: absolute;
				top:0;
				left:60%;
				display: inline;
                width:.25rem;
                border-radius: 50%;
			}
		}
		.nav-active,.router-link-exact-active{
			color:orange;
		    border-color:orange;
		}

	}
}
</style>