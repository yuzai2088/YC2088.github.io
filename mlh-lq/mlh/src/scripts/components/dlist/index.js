import "./index.scss"
import React, { Component } from "react";

export class Dlist extends Component {
    render() {
        const {
            goodId,
            goods
        } = this.props
        console.log("goods",goods)
        return (
            <div>
                <h2>{goodId}</h2>
                <h2>{goods.siloCategory}</h2>
            </div>
        )
    }
}