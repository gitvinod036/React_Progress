import React, { Component } from "react";
import UserDetails from "./UserDetails";

export default class UserDetailsmain extends Component{
    render(){
     const user={name:"Alice" , 
        email:"alice@gmail.com",
        hobbies:["Reading","Coding","Traveling"]}
        
        return <div>
             <UserDetails user={user}/>
        </div>
    }
}

