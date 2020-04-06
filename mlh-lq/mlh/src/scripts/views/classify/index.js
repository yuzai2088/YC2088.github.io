import "./index.scss"
import React, { Component } from "react"
import Head from "~/components/head";
import { connect } from "react-redux";
import { getGoodList, getGoodType } from "../../actions";
import UploadImg from "~/components/uploadImg";
import { history } from "&";

import {
    WhiteSpace,
    Tabs
} from "antd-mobile"

import List from "~/components/list"
import {
    Link
} from "react-router-dom"


@connect(
    state => {
        return {
            goodList: state.getIn(['data', 'goodList']),
            goodType: state.getIn(['data', 'goodType'])
        }
    }
)

class Classify extends Component {
    componentDidMount() {
        const {
            dispatch,
            goodList,
            goodType
        } = this.props;
        if (!goodList.length > 0) {
            dispatch(getGoodList({ url: "/react/goodlist" }))
        }

        if (!goodType.length > 0) {
            dispatch(getGoodType({ url: "/react/nav" }))
        }
    }


    render() {
        const {
            goodList,
            goodType,
        } = this.props;
        console.log("goodtype", goodType)
        console.log("goodlist", goodList)
        console.log("goodlist--type", typeof goodList)
        const tabs = goodType.map((item) => {
            item.title = item.name
            return item;
        })
        return (
            <div>
                <div className="class-top">
                    <Link to="/main/mine">
                        {
                            sessionStorage.token && <div className="tou">
                                <UploadImg style={{ width: "100%" }}></UploadImg>
                            </div>

                        }
                        {
                            !sessionStorage.token && <div className="tou">
                                <span className="iconfont">&#xe60c;</span>
                            </div>
                        }
                    </Link>
                    <Link className="inp" to="/search">
                        <span className="iconfont">&#xe631;</span>
                        <input type="text" placeholder="请输入商品名称" />
                    </Link>
                    <Link to="/main/cart">
                        <span className="iconfont">&#xe619;</span>
                    </Link>
                </div>
                <div className="c-main">
                    <Tabs tabs={tabs}
                        initialPage={0}
                        tabBarUnderlineStyle={{ borderColor: "orange" }}
                        tabBarActiveTextColor="orange"
                        className="ant-tabs-ink-bar"
                    >
                        {
                            goodType.map((val, i) => {
                                return (
                                    <List
                                        key={i}
                                        tab={val}
                                        good={goodList.filter(item => item.listType == val.name)}
                                    >

                                    </List>
                                )
                            })
                        }
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default Classify;