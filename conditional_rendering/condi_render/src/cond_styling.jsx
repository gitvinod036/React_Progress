import { Component } from "react";

class Conditional_styling extends Component{
    constructor(){
        super()
        this.state={isLogin:false}
    }
    handle=()=>{
        this.setState({isLogin:!this.state.isLogin})
    }

    render(){
        return <div>
        <div style={{backgroundColor:this.state.isLogin? "black":"lightgrey",color:this.state.isLogin?"white":"black",fontFamily:this.state.isLogin?"serif":"monospace" }}>
           {this.state.isLogin?<div><p>Login Success Welcome</p></div>:<div><p>Please Login</p></div>}
           {this.state.isLogin?<button onClick={this.handle}>Log Out</button>:<button onClick={this.handle}>Log In</button>}
        </div>
        </div>
    }
}

export default Conditional_styling;