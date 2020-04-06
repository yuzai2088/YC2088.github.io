

import React, {Component} from "react"
import ReactDOM , {render} from "react-dom"

import ReactReduxDemo from "./components";
import ContainerUI from "./components/container"
import store from "./store"
import {Provider } from "react-redux";

console.log(store.getState());
class MainDemo extends Component {
    render(){
        return (
            <div>
                <h2>react-redux  </h2>
                <h2>没有改变 redux 的 数据原理  只是拆分组件 </h2>
                <ContainerUI></ContainerUI>
            </div>
        )
    }
}

// this.context.store.getState()
const hotRender = ()=>{
    render(
        <Provider store={store} >     
            <MainDemo/>
        </Provider>,
        document.getElementById("root")
    )
}

hotRender();