import { Component } from "react";
import { Card } from "./card";
// import products from './productsdata.json'

export class Product extends Component{
    render(){
        return <div>
            <h1>{this.props.cardtitle}</h1>
            {this.props.products.map((product,index)=><Card productData={product} i={index} cardtitle="Deals Card"/>)}
        </div>
    }
}