import "./index.scss"
import React, { Component } from "react";
import {
    PullToRefresh,
    WhiteSpace,
    WingBlank
} from "antd-mobile"

import {
    Link
} from "react-router-dom"


export default class List extends Component {
    constructor() {
        super();
        this.state = {
            refreshing: false
        }
    }
    render() {
        const {
            tab,
            good,
            goodList
        } = this.props;
        // console.log("good",good)
        return (
            < div className="goodlist">
                <PullToRefresh
                    damping={10}
                    ref={el => this.ptr = el}
                    style={{
                        overflow: 'auto',
                    }}
                    indicator={{ deactivate: '上拉可以刷新' }}
                    direction={'down'}
                    refreshing={this.state.refreshing}
                    onRefresh={
                        () => {
                            this.setState({ refreshing: true });  // 正在刷新 
                            setTimeout(() => {
                                this.setState({ refreshing: false });
                            }, 1000);
                        }
                    }
                >
                    {
                        good.map((m, i) => {
                            return (
                                <div key={i}>
                                    <Link to={"/detail/" + m.listType + "?name=" + m.listType}>
                                        <div className="banner">
                                            <div className="content">
                                                <h1>{m.banners[0].main_title}</h1>
                                                <h2>{m.banners[0].sub_title}</h2>
                                                <h2>{m.banners[0].description}</h2>
                                            </div>
                                            <img src={m.banners[0].main_image} alt="" />
                                        </div>

                                        <div className="newevent">
                                            <div className="today">
                                                <span>今日上新</span>
                                                <div>
                                                    <p>NEW</p>
                                                    <p>ARRIVAL</p>
                                                </div>
                                            </div>
                                            {
                                                m.lists.map((list, i) => {
                                                    return (
                                                        <div key={i} className="product">
                                                            <img src={list.imageUrl} alt="" />
                                                            <div className="context">
                                                                <h2>{list.englishName}</h2>
                                                                <p>{list.chineseName}</p>
                                                                <p>{list.discountText}</p>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }

                                        </div>

                                    </Link>


                                </div>

                            )
                        })
                    }

                </PullToRefresh>
            </div >
        )
    }

}


