import { Component } from "react"
import { Unmount } from "./Unmount"
import {Func} from './Components/Function'

export class App extends Component {
  constructor() {
    super();
    this.state = { visible: true }
  }
  handle = () => {
    this.setState({ visible: !this.state.visible })
  }
  render() {
    // return <>
    //   <h1>Counter Mounting</h1>
    //   {/* {this.state.visible ? <button onClick={this.handle}>Stop</button> : <button onClick={this.handle}>Start</button>} */}
    //   <button onClick={this.handle}>{this.state.visible?"Stop":"Start"}</button>
    //   {this.state.visible &&<Unmount/>}
    // </>
    return <> 
    <Func/>
    
    </>
  }
}

export default App
