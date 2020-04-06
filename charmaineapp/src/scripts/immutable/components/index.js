

import React from "react";
import {connect} from "react-redux"
import {Button} from "antd-mobile"
import { countAdd, countDesc, changeCount, changeCity, changeMsg, getMVAsync } from "../actions";

@connect(
    // mapStateToProps 
    state=>{
        console.log(state)
        return {
            // data:state.data error
            data:state.get("data"),
            count:state.getIn(['data','count']),
            city:state.getIn(['data','city']),
            msg:state.getIn(["data",'msg']),
            mv:state.getIn(['banner','mv'])
        }
    }
)
class ImmutableCoutner extends React.Component{

    handleChangeMsg=()=>{
        var value = this.inp.value;
        this.props.dispatch(changeMsg(value))
    }

    componentDidMount(){
        this.props.dispatch(getMVAsync({
            url:"http://zuozhaoxi.com:3333/top/playlist/highquality"
        }))
    }

    render(){
        console.log(this.props);
        const {
            count,
            city,
            data,
            dispatch,
            msg,
            mv
        } = this.props
        return (
            <div>
                <hr/>
                <h2>
                    immutable 实现 计数器 
                </h2>
                <h2>count == {count} --- {data.get("count")}</h2>
                <h2>city == {city} --- {data.get("city")}</h2>
                <h2>msg === {data.get("msg")} </h2>
                <p><input ref={el=>this.inp=el} type="text" value={msg} onChange={this.handleChangeMsg} /></p>
                <Button onClick={()=>dispatch(countAdd)} type="warning" inline>count add </Button>
                <Button onClick={()=>dispatch(countDesc())} type="warning" inline>count desc </Button>
                <Button onClick={()=>dispatch(changeCount(100))} type="warning" inline> changeCount + 100  </Button>
                <Button onClick={()=>dispatch(changeCity('我想去 千岛湖... '))} type="primary" inline>changtCity </Button>
                {
                    mv.map((m,i)=>{
                        return (
                            <div key={i}> 
                                key==={i}
                                 <img  src={m.coverImgUrl} alt=""/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


export default ImmutableCoutner;