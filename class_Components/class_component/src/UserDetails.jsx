import React, { Component } from "react";

export default class UserDetails extends Component {
    render() {
        const {user}=this.props;
        return <div>
            <h3>Rendering</h3>
            <p>Name :{this.props.user.name}</p>
            <p>Email :{this.props.user.email}</p>
            <p>Hobbies :{this.props.user.hobbies.map((val, ind) => <li key={ind}>{val}</li>)}</p>
        </div>
    }
}