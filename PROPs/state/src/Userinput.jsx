import { Component } from "react";

export class InputTag extends Component{
      constructor(){
        super();
        this.state={inputTag:"",print:""}
      }
     input(event){
        this.setState({inputTag:event.target.value})
     }
     print=()=>{
        let pr=prompt("Enter your name")
        this.setState({print:this.state.inputTag +" "+pr})
     }

    render(){
        return <div>
           <input type="text" placeholder="enter text" onChange={(event)=>{this.input(event)}}/>
           <button onClick={this.print}>print</button>
           <p>{this.state.print}</p>
        </div>
    }
}