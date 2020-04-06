<template>
  <div class="home">
     <h2 ref="one">wuhan1910-daydayup === {{count}}</h2>
     <Demo v-if="false"></Demo>
     <p><input type="text" v-model="word"></p>
     <p>word === {{word}}</p>
     <p><button @click="changehello" >ref 点击修改 子组件 </button></p>
     <Hello 
     idx="1910" 
     message="this is static props" 
     :num = "count"
     :flag = "flag"
     :word="word"
     ref="hello"
     v-on:changecount="getNewCount"
     >
        <div>
          <h2>这是 slot  内容分发 父传子 </h2>
        </div>
        <template v-slot:wh1910 >
          <h2>这是 slot 具名插槽  </h2>
        </template>
     </Hello>
     <p>wuhan-武汉</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data(){
    return {
      count:2020,
      flag:true,
      word:"越努力越幸运"
    }
  },
  methods:{
    changehello(){
        this.$refs.hello.msg = "我被 Home 组件 修改了...."
        this.$refs.hello.send('daydayup');
    },
    getNewCount(count){
      this.count += count;
    }
  },
  mounted(){
    this.$refs.one.style.color = "red";
  },
  components:{
    Demo,
    Hello
  }
}
</script>
