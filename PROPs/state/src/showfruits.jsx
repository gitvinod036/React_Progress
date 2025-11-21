import { Component  } from "react";

export class Show extends Component{
    render(){
        return<>
        <ul key={this.props.index}>
            <li>{this.props.Fruits}</li>
        </ul>
        </>
    }
}