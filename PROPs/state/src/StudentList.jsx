import { Component } from "react";
import { Showdetails } from './showdetails'

export class Student extends Component {
    render() {
        return <div>
            <h1>Hello {this.props.title}</h1>
            <table cellPadding={5} cellSpacing={0} border="1px solid black">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Grade</th>
                </tr>
              
                    {this.props.details.map((value, index) => < Showdetails studentdetails={value} i={index} />)}
                
            </table>
        </div>
    }
}