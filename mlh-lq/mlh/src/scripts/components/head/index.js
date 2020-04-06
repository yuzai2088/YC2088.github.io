import "./index.scss";
import React, { Component } from "react";
import { NavBar, Icon, Popover, ActionSheet } from "antd-mobile";
import { history } from "&";

import {observer} from "mobx-react"
import shopcar from "~/mobx/shopcar"
@observer  
class Head extends Component {
	handleGoBack(show) {
		if (show) {
			history.goBack();
		}
	}

	handleGoSearch() {
		history.push("/search");
	}

	render() {
		const { title, show, search, detail2, cart ,mine} = this.props;
		console.log(title);
		return (
			<NavBar
				mode="light"
				icon={show && <Icon style={{color:"black"}} type="left" />}
				onLeftClick={() => this.handleGoBack(show)}
				rightContent={[
					!search && (
						<Icon
							onClick={this.handleGoSearch.bind(this)}
							key="0"
							type="search"
							style={{ marginRight: "16px" }}
							color="black"
						/>
					),
					<Pop scan={this.props.scan} login={this.props.login} key={1} />
				]}
			>
				{" "}
				{title}{" "}
			</NavBar>
		);
	}
}

const Item = Popover.Item;

// const myImg = src => (
// 	<img
// 		src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`}
// 		className="am-icon am-icon-xs"
// 		alt=""
// 	/>

// );
class Pop extends Component {
	state = {
		visible: false,
		selected: ""
	};

	handleVisibleChange = visible => {
		this.setState({
			visible
		});
	};
	onSelect = opt => {
		console.log(opt.props.value);
		this.setState({
			visible: false,
			selected: opt.props.value
		});

		if (opt.props.value == "classfly") {
			history.push("/main/classify");
		} else if (opt.props.value == "cart") {
			history.push("/main/cart");
		} else {
			history.push("/main/mine");
		}
	};

	// showActionSheet = () => {
	// 	const BUTTONS = ["拍照", "从手机相册选择", "使用相机拍照", "删除", "取消"];
	// 	ActionSheet.showActionSheetWithOptions(
	// 		{
	// 			options: BUTTONS,
	// 			cancelButtonIndex: BUTTONS.length - 1,
	// 			destructiveButtonIndex: BUTTONS.length - 2,
	// 			// title: 'title',
	// 			message: "wh1910-app",
	// 			maskClosable: true,
	// 			"data-seed": "logId",
	// 			wrapProps: {
	// 				onTouchStart: e => e.preventDefault()
	// 			}
	// 		},
	// 		buttonIndex => {
	// 			console.log(buttonIndex);
	// 		}
	// 	);
	// };

	render() {
		const { scan, login } = this.props;
		return (
			<Popover
				mask
				overlayClassName="fortest"
				overlayStyle={{ color: "currentColor" }}
				visible={this.state.visible}
				overlay={[
					!scan && (
						<Item
							key="4"
							value="classfly"
							data-seed="logId"
						>
							<span style={{marginRight:"0.1rem"}} className="iconfont">&#xe62a;</span>
							首页
						</Item>
					),
					<Item
						key="5"
						value="cart"
						style={{ whiteSpace: "nowrap" }}
					>
						<div>
							<span style={{marginRight:"0.1rem"}} className="iconfont">&#xe778;</span>
							购物袋 (<span style={{color:"red",fontWeight:"bolder"}}>{shopcar.carTotal}</span>)
						</div>
					</Item>,
					!login && (
						<Item key="6" value="mine" >
							<span style={{marginRight:"0.1rem"}} className="iconfont">&#xe60c;</span>
							<span style={{ marginRight: 5 }}>个人中心</span>
						</Item>
					)
				]}
				align={{
					overflow: { adjustY: 0, adjustX: 0 },
					offset: [-10, 0]
				}}
				onVisibleChange={this.handleVisibleChange}
				onSelect={this.onSelect}
			>
				<Icon style={{color:"black"}} type="ellipsis" />
			</Popover>
		);
	}
}


export default Head;
