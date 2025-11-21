import { Component } from "react";
import products from './assets/products.json'
import {Card} from './card'
export class Product extends Component{
    render(){
        return <div>
         {products.map((prod,ind)=><Card ProductData={prod} i={ind}/>)}
        </div>
    }
}