


import React from "react"
import ReactDOM from "react-dom";
import ImmutableCoutner from "./components"
import {Provider} from "react-redux"
import store from "./store"

export default class ImmutableDemo extends React.Component{
    render(){
        
        return (
            <div>
                <h2>redux  + immutable --- 操作 immutable 实现内存优化</h2>
                <h2>操作 数组和对象 变成了immutable (不可变对象操作 ) </h2>
                <ImmutableCoutner></ImmutableCoutner>
            </div>
        )
    }
}


const hotRender = ()=>{
    ReactDOM.render(
        <Provider store={store} >
            <ImmutableDemo/>
        </Provider> ,
        document.getElementById('root')
    )
}

hotRender();

