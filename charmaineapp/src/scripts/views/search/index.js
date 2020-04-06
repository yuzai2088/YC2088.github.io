import "./index.scss"
import React, {Component} from "react"
import Head from "~/components/head"
import {
    WingBlank,
    SearchBar
} from  "antd-mobile"
export default class Search extends Component{

    handleSubmit(keyword){
        console.log(keyword)
    }

    render(){
        return (
            <div>
                <Head title="搜索" show={true} search={true} ></Head>
                <WingBlank>
                    <SearchBar placeholder="请输入关键字" onSubmit={this.handleSubmit.bind(this)}  />    
                </WingBlank>
            </div>
        )
    }
}