import { Component } from "react";

export class Card extends Component{
    render(){
        return<div key={i}>
            <img src={this.props.ProductData.image}/>
            {/* <p>this.props.ProductData.title</p> */}
        </div>
    }
}