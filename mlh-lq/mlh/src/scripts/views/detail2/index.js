import "./index.scss"
import React, { Component } from "react";
import Head from "~/components/head"
import { connect } from "react-redux"
import { axios } from "&"
import { getGoodDetail } from "../../actions";


import {
    WingBlank,
    WhiteSpace,
    Card,
    Stepper,
    Button,
    Modal,
    Toast
} from "antd-mobile"
import { history } from "&"

const alert = Modal.alert;

const showAlert = () => {
    const alertInstance = alert('提示', '已加入购物车，去结算？', [
        { text: '取消', onPress: () => console.log('取消操作'), style: 'default' },
        { text: '同意', onPress: () => history.push("/main/cart") },
    ]);
    setTimeout(() => {
        // 可以调用close方法以在外部close
        console.log('auto close');
        alertInstance.close();
    }, 500000);
};


@connect(
    state => {
        return {
            goodDetail: state.getIn(['data', 'goodDetail']),
            pic: state.getIn(['user', 'pic'])
        }
    }
)
class Detail2 extends Component {
    constructor() {
        super();
        this.state = {
            goodDetail: [],
            count: 1
        }
    }

    componentDidMount() {
        const goodId = this.props.match.params.goodId;
        console.log("goodId", goodId)
        const goodname = this.props.match.params.goodname;
        console.log("goodname", goodname)
        console.log('goodname-type', typeof goodname)

        // const keyword = new URLSearchParams(location.search).get("name")
        // console.log("keyworde", keyword)
        //     const {
        //         dispatch,
        //         goodDetail
        //     } = this.props;
        //     if (!goodDetail.length > 0) {
        //         dispatch(getGoodDetail({ url: "/react/getGoodById", params: { goodId } }))
        //     }


        axios.get("/react/getGoodById", {
            params: {
                goodId
            }
        }).then(res => {
            console.log("res", res.data.result)
            this.setState({
                goodDetail: res.data.result[0].products.filter(item => item.productId == goodname)

            })
        })
    }

    changeCount = (val) => {
        console.log(val);
        this.setState({ count: val })
    }

    addToCar = () => {
        // 加入购物车  
        axios.post("/react/addToShopcar", {
            count: this.state.count,
            good: this.state.goodDetail,
            goodId: this.props.match.params.goodname,
        }).then(res => {

        })
    }

    buyNow = () => {
        // 加入购物车  
        axios.post("/react/showbuy", {
            count: this.state.count,
            good: this.state.goodDetail,
            goodId: this.props.match.params.goodname,
        }).then(res => {

        })
    }

    goCar = () => {
        history.push("/main/cart")
    }



    render() {
        const {
            item,
            location,
            match,
            pic
        } = this.props

        const {
            goodDetail
        } = this.state;

        console.log("goodDetail2", goodDetail)
        console.log(typeof goodDetail)
        return (
            <div className="detail2">
                {
                    goodDetail.map((g, i) => {
                        return (
                            <div key={i}>
                                <div style={{ position: "fixed", top: "0", width: "100%" }}>
                                    <Head show={true} detail2={true} title={g.brandName}></Head>
                                </div>
                                <div className="dimg">
                                    <p>¥{g.price}</p>
                                    <img src={g.imageUrl} alt="" />
                                </div>
                                <div className="dmsg">
                                    <h2>{g.productName}</h2>
                                    <p className="del">¥  {g.marketPrice}</p>
                                    <div className="price">
                                        <h3>¥{g.price}</h3>
                                        <span>{g.discount}折</span>
                                        <span>买手推荐</span>
                                    </div>
                                    {g.productSizes && <div className="serve">
                                        <span className="s1">尺码</span>
                                        {
                                            g.productSizes.map((p, i) => {
                                                return (
                                                    <span className="size" key={i}>{p.size}</span>
                                                )
                                            })
                                        }
                                    </div>}
                                    <div className="serve">
                                        <span className="s1">服务</span>
                                        <span>
                                            全场满688包邮 | 正品保障 | 买手推荐 | 不支持七天无理由退货
                                        </span>
                                    </div>
                                </div>
                                <WingBlank size="lg">
                                    <div style={{
                                        width: "60%",
                                        textAlign: "left",
                                        display: "flex",
                                        alignItems: "center"
                                    }}>
                                        <span style={{ fontSize: "16px", fontWeight: "bolder", marginLeft: "0.2rem" }}>购买数量:</span>
                                        <Stepper
                                            style={{ width: '50%', minWidth: '100px' }}
                                            showNumber
                                            min={1}
                                            value={this.state.count}
                                            onChange={this.changeCount}
                                        />
                                    </div>
                                </WingBlank>

                                <div
                                    className="dibu"
                                    style={{
                                        width: "100%",
                                        height: "1rem",
                                        position: "fixed",
                                        bottom: 0,
                                        left: 0,
                                        zIndex: 999,
                                        overflow: "hidden"
                                    }}
                                >
                                    <ul style={{ width: "100%", height: "100%" }}>
                                        <div onClick={this.buyNow}>
                                            <li style={{ width: "39%", color: "#dd2828" }} onClick={showAlert}>立即购买</li>
                                        </div>
                                        <li style={{ width: "39%" }} onClick={this.addToCar}>加入购物车</li>
                                        <li style={{ width: "20%" }} onClick={this.goCar}>购物袋</li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default Detail2;