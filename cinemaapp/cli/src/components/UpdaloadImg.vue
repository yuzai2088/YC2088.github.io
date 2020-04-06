<template>
    <div>
        <img :src="pic" alt="" class="touxiang" @click="handleclick"  >
        <input type="file" class="inpfile" ref="file"  @change="sendImgFile"    />
    </div>
</template>

<script>
import initPic from "@/assets/images/photo.png";
import {baseURL} from "@/utils"
export default {
    data(){
        return {
            pic:""
        }
    },
    mounted(){
        // 先判断 localStorage 
        // 有 再判断手机号 
        // 手机号相同  直接 取值
        var userInfo = localStorage.userInfo;
        if(userInfo){
            userInfo = JSON.parse(userInfo);
            if(userInfo.mobile==sessionStorage.mobile){
                this.pic = userInfo.pic;
            }else{
                this.getServerPic();
            }
        }else{
            this.getServerPic();
        }
    },
    methods:{
        getServerPic(){
            this.$axios.post("/vue/getAvatarImg")
            .then(res=>{
                if(!!res.data.type){
                    this.pic = res.data.result.pic.replace(/public/,baseURL);
                }else{
                    this.pic = initPic;
                }
            })
        },
        handleclick(){
            this.$refs.file.click(); 
        },
        sendImgFile(){
            console.log('send file');
            var file = this.$refs.file.files[0];  // 需要发送服务端的图片数据  
            console.log(file);
            var  data = new FormData();  //  实例化表单数据  
            data.append("avatar",file);
            // 图片上传  
            this.$axios({
                url:"/vue/uploadImg",
                method:"POST",
                data,
            }).then(res=>{
                this.pic = res.data.pic.replace(/public/,baseURL);
                let userInfo = {
                    pic:res.data.pic.replace(/public/,baseURL),
                    mobile:res.data.mobile
                }
                localStorage.setItem("userInfo",JSON.stringify(userInfo));
            })
        }
    }
}
</script>

<style scoped>
.touxiang{
    width: 100%;
    height: 100%
}
.inpfile{
    display: none;
}
</style>
