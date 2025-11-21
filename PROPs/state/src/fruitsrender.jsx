import { Component  } from "react";
import { Show } from "./showfruits";

export class Fruits extends Component{
    render(){
        return <div>
        <h1>{this.props.title}</h1>
        {this.props.data.map((value,ind)=><Show Fruits={value} index={ind} />)}
    </div>
    }

}