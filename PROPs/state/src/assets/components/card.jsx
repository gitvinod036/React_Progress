import { Component } from "react";

export class Card extends Component{
    render(){
        console.log(this.props)
        return <div key={this.props.i} style={{display:"inline-block", width:"500px",height:"500px",border:"1px solid black",borderRadius:"10px"}} >
        <div>
            <div style={{margin:"50px 70px"}}>
            <img src={this.props.productData.image} width={200} height={200} style={{}} />
            <h4 >{this.props.productData.title}</h4>
            <h5>$ {this.props.productData.price}</h5>
            </div>
        </div>
     </div>
    }
}