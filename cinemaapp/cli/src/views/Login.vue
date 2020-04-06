<template>
    <div>
        <Head title="登录&注册" :show="true" :login="true" ></Head>
        <van-tabs 
            v-model="active"
            title-active-color="#0f0"
        >
            <van-tab title="登录">
                <van-cell-group class="l-login">
                    <van-field
                        v-model="login.mobile"
                        required
                        clearable
                        label="手机号"
                        right-icon="question-o"
                        placeholder="请输入手机号"
                    />
                    <van-field
                        v-model="login.password"
                        type="password"
                        label="密码"
                        placeholder="请输入密码"
                        required
                    />
                    <van-button  @click="todoLogin" type="primary" size="large">登录</van-button>
                </van-cell-group>
            </van-tab>
            <van-tab title="注册">
                <van-cell-group class="l-login">
                    <van-field
                        v-model="register.mobile"
                        required
                        clearable
                        label="手机号"
                        placeholder="请输入手机号"
                        
                    />
                     <van-field
                        v-model="register.username"
                        required
                        clearable
                        label="用户名"
                        placeholder="请输入用户名"
                    />
                    <van-field
                        v-model="register.password"
                        type="password"
                        label="密码"
                        placeholder="请输入密码"
                        required
                    />
                    <van-field
                        v-model="register.dbpwd"
                        type="password"
                        label="确认密码"
                        placeholder="请输入确认密码"
                        required
                    />
                    <van-button @click="todoRegister" type="danger" size="large">注册</van-button>
                </van-cell-group>
            </van-tab>
            <van-tab title="验证码">
                <van-cell-group class="l-login">
                    <van-field
                        v-model="mobile"
                        required
                        clearable
                        label="手机号"
                        right-icon="question-o"
                        placeholder="请输入手机号"
                    />
                    <van-field
                        v-model="sms"
                        center
                        clearable
                        label="短信验证码"
                        placeholder="请输入短信验证码"
                    >
                        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
                    </van-field>
                     <van-button type="info" size="large">校验登录</van-button>
                </van-cell-group>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
    mounted(){
        console.log("login-mounted")
        this.active = this.$route.query.active=='login'?0:1;
    },
    updated(){

    },
    data(){
        return {
            active:1,
            login:{

            },
            register:{

            },
            mobile:"",
            sms:""
        }
    },
    methods:{
        todoLogin(){
            this.$axios.post("/vue/login",this.login)
            .then(res=>{
                if(!!res.data.type){
                    this.$router.push({name:'mine'});
                    sessionStorage.token  = res.data.token;
                    sessionStorage.mobile  = this.login.mobile;

                }else{
                    sessionStorage.token = "";
                }
            })
        },
        todoRegister(){
            this.$axios.post("/vue/register",this.register)
            .then(res=>{
                console.log('register',res)
                if(!!res.data.type){
                    this.active = 0;
                    this.login.mobile = res.data.result[0].mobile
                }
            })
        }
    }

}
</script>


<style scoped>
.l-login{
    width:100%;
    padding: 10px;
    box-sizing: border-box;
}
</style>
