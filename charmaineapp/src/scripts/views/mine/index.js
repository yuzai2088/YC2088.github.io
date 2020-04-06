import "./index.scss"
import React, {Component} from "react"
import Head from "~/components/head"
import {
    Button
} from "antd-mobile"
import {axios} from "&"
import UploadImg from "~/components/uploadImg"
export default class Mine extends Component{

    constructor(props){
        super(props);
        this.state = {
            isLogin:!!sessionStorage.token,
            mobile:null
        }
    }

    componentDidMount(){
        axios.post("/react/getMobile")
        .then(res=>{
            this.setState({
                mobile:res.data.result
            })
        })
    }

    handleGotoLogin=()=>{
        this.props.history.push("/login");
    }

    render(){
        const {
            isLogin,
            mobile
        } = this.state;
        return (
            <div>
                <Head title="个人中心"></Head>
                {
                    isLogin&&<div>
                        <h2>Mine- mine - 个人中心....</h2>
                        <h2>欢迎你 ----- {mobile} </h2> 
                        <h2>token == {sessionStorage.token}</h2>
                        <UploadImg></UploadImg>
                    </div>
                }
                {
                    !isLogin&&<div>
                        <h2>你还没登录,请马上登录</h2>
                        <Button type="warning" inline onClick={this.handleGotoLogin}>我要登录</Button>
                    </div>
                }
                
                
            </div>
        )
    }
}