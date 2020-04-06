import "./index.scss"
import React, {Component} from "react"
import Head from "~/components/head";
import {axios} from "&";
import {
    WingBlank,
    WhiteSpace,
    Carousel,
    Accordion,
    List
} from "antd-mobile"
import {Link} from "react-router-dom"

export default class Home extends Component{

    constructor(props){
        super(props)
        this.state = {
            banner:[]
        }
    }

    componentDidMount(){
        axios.get("/vue/maizuo/banner")
        .then(res=>{
            console.log(res);
            this.setState({
                banner:res.data.result.data
            })
        })
    }

    render(){
        const {
            banner
        }  = this.state;
        return (
            <div>
                <Head title="首页"></Head>
                <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite 
                    >
                        {
                            banner.map((item,i)=>{
                                return (
                                    <Link to="/" key={i}  style={{ display: 'inline-block', width: '100%', height: 300 }}>
                                        <img 
                                            src={item.imgUrl} 
                                            alt=""
                                            style={{ width: '100%',height:300 , verticalAlign: 'top' }}
                                            onLoad={() => {
                                                // fire window resize event to change height
                                                window.dispatchEvent(new Event('resize'));
                                            }}
                                            />
                                    </Link>
                                )

                            })
                        }
                    </Carousel>
                </WingBlank>
                <WhiteSpace/>
                <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
                    <Accordion.Panel header="Title 1">
                        <List className="my-list">
                        <List.Item>content 1</List.Item>
                        <List.Item>content 2</List.Item>
                        <List.Item>content 3</List.Item>
                        </List>
                    </Accordion.Panel>
                    <Accordion.Panel header="Title 2" className="pad">this is panel content2 or other</Accordion.Panel>
                    <Accordion.Panel header="Title 3" className="pad">
                        text text text text text text text text text text text text text text text
                    </Accordion.Panel>
                </Accordion>
            </div>
        )
    }
}