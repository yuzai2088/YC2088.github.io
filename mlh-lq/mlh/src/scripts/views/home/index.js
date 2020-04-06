import "./index.scss"
import React, { Component } from "react"
import Head from "~/components/head";
import { axios } from "&";
import {
    WingBlank,
    WhiteSpace,
    Carousel,
    Accordion,
    List,
    Button
} from "antd-mobile"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { changeCount, changeCity, getBanner } from "../../actions";

@connect(
    state => {
        return {
            count: state.getIn(['data', 'count']),
            city: state.getIn(['data', 'city']),
            banner: state.getIn(['data', 'banner'])
        }
    }
)

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            banner: []
        }
    }

    // componentDidMount() {
    //     // axios.get("/vue/maizuo/banner")
    //     //     .then(res => {
    //     //         console.log(res);
    //     //         this.setState({
    //     //             banner: res.data.result.data
    //     //         })
    //     //     })
    //     if (!this.props.banner.length > 0) {
    //         this.props.dispatch(getBanner({
    //             url: "/vue/movie",
    //             cb() {
    //                 console.log("get banner")
    //             }
    //         }))
    //     }
    // }

    render() {
        // const {
        //     banner
        // } = this.state;
        const {
            count,
            city,
            banner,
            dispatch
        } = this.props
        // console.log("home",this.props)
        return (
            <div>
                <Head title="首页"></Head>
                <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite
                    >
                        {/* {
                            banner.map((item, i) => {
                                return (
                                    <Link to="/" key={i} style={{ display: 'inline-block', width: '100%', height: 250 }}>
                                        <img
                                            src={item.poster
                                            }
                                            alt=""
                                            style={{ width: '100%', height: 300, verticalAlign: 'top' }}
                                            onLoad={() => {
                                                // fire window resize event to change height
                                                window.dispatchEvent(new Event('resize'));
                                            }}
                                        />
                                    </Link>
                                )

                            })
                        } */}
                    </Carousel>
                    <Button onClick={() => dispatch(changeCount(10))} inline type="warning">coutnadd-{count}</Button>
                    <Button onClick={() => dispatch(changeCity("巴黎"))} inline type="warning">coutncity-{city}</Button>
                </WingBlank>
                <WhiteSpace />
            </div>
        )
    }
}


export default Home;