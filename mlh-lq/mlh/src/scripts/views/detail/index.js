import "./index.scss"
import React, { Component } from "react";
import Head from "~/components/head"
import { connect } from "react-redux"
import { getGoodDetail } from "../../actions";
import { Dlist } from "../../components/dlist";
import { axios } from "&"
import {
    Link
} from "react-router-dom"
import Detail2 from "../detail2";




@connect(
    state => {
        return {
            goodDetail: state.getIn(['data', 'goodDetail'])
        }
    }
)
class Detail extends Component {

    constructor() {
        super();
        this.state = {
            goodDetail: []
        }
    }

    componentDidMount() {
        const goodId = this.props.match.params.goodId;
        console.log("goodId", goodId)
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
                goodDetail: res.data.result

            })
        })
    }


    render() {
        const {
            item,
            location,
            match,
            // goodDetail
        } = this.props
        // console.log("goodDetail", goodDetail)

        const {
            goodDetail
        } = this.state;
        console.log("goodDetail1", goodDetail)
        return (
            <div>
                <Head title={new URLSearchParams(location.search).get('name').slice(0, 12)} show={true}  ></Head>
                {/* <h2>goodID == {match.params.goodId} </h2> */}
                < div className="detail" >
                    <div className="yun">
                        <span>免运</span>
                        <p>满688元全场免运</p>
                    </div>

                    <div >
                        {
                            goodDetail.map((m, i) => {
                                return (
                                    <div key={i}  className="product" >
                                        {
                                            m.products.map((g, n) => {
                                                return (
                                                    <div key={n} className="plist" >
                                                        <Link   style={{ color: "black" }} to={"/detail2/" + m.siloCategory+"/"+g.productId}>
                                                            <img src={g.imageUrl} alt="" />
                                                            <div className="msg">
                                                                <span>买手推荐</span>
                                                                <h3>{g.brandName}</h3>
                                                                <p>{g.productName}</p>
                                                                <div className="price">
                                                                    <div className="subprice">
                                                                        <h2>¥{g.price}</h2>
                                                                        <span>{g.marketPrice}</span>
                                                                    </div>
                                                                    <span>{g.discount}折</span>
                                                                </div>
                                                            </div>
                                                    </Link>
                                                        </div>
                                                )
                                            })
                                        }
                                    </div>

                                )
                            })
                        }
                    </div>
                </div >
            </div >
        )
    }
}

export default Detail



