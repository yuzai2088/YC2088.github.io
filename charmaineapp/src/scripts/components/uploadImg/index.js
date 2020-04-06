import "./index.scss";
import React ,{ Component } from "react";
import {axios,baseURL}  from "&"
import initPic from "@/assets/images/Pikachu.jpg"
export default class UploadImg extends  Component{
    constructor(){
        super();
        this.state = {
            pic:null
        }
    }

    componentDidMount(){
        let userInfo = localStorage.userInfo;
        if(userInfo){
            userInfo = JSON.parse(userInfo);
            if(userInfo.mobile==sessionStorage.mobile){
                this.setState({
                    pic:userInfo.pic
                })
            }else{
                this.getInitPic()
            }
        }else{
            this.getInitPic()
        }
    }

    getInitPic = ()=>{
        axios.post("/react/getlastPic")
        .then(res=>{
            if(!!res.data.type){
                this.setState({
                    pic:res.data.result.pic.replace(/public/,baseURL)
                })
            }else{
                this.setState({
                    pic:initPic
                })
            }
        })
    }

    handleClick=()=>{
        this.fileImg.click();
    }


    handleChange=()=>{
        console.log("文件上传");
        const file = this.fileImg.files[0];
        console.log(file);
        var data = new FormData();
        data.append("avatar",file);
        
        axios({
            url:"/react/uploadImg",
            method:"POST",
            data,
        }).then(res=>{
            if(!!res.data.type){
                var pic = res.data.pic.replace(/public/,baseURL);
                const userInfo = JSON.stringify({
                    mobile:res.data.mobile,
                    pic
                })
                localStorage.userInfo = userInfo;
                this.setState({
                    pic
                })
            }else{
                localStorage.userInfo = "";
            }
        })
    }

    render(){
        const {
            pic
        } = this.state; 
        return (
            <div>
                <img src={pic} alt="" className="touxiang"  onClick={this.handleClick}   />
                <input type="file" style={{display:'none'}} onChange={this.handleChange}  ref={el=>this.fileImg=el}   />
            </div>
        )
    }
}