import { Component } from "react";

export class Showdetails extends Component {
    render() {
        return   <tr>
                    <td>{this.props.studentdetails.id}</td>
                    <td>{this.props.studentdetails.name}</td>
                    <td>{this.props.studentdetails.grade}</td>
                </tr>
    }
}