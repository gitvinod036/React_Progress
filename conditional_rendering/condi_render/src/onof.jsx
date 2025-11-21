import { Component  } from "react";

export class OnOff extends Component{
    constructor(){
        super()
        this.state={isOn:false}
    }
    fly=()=>{
        console.log("clicked")
        this.setState({isOn:false})
    }
    land=()=>{
        console.log("clicked")
         this.setState({isOn:true})
    }
    render(){
        if(this.state.isOn===true){
            return <div>
             <h2>The plain on land</h2>
            <button onClick={this.fly}>Fly</button>
            </div>
        }else{
            return <div>
            <h2>The plain is on Air</h2>
            <button onClick={this.land}>Land</button>
            </div>
        }
    }
}

export class BikeStarted extends Component{
    constructor(){
        super()
        this.state={Bikeon:false}
    }
    Off=()=>{
        this.setState({Bikeon:false})
    }
    On=()=>{
        this.setState({Bikeon:true})
    }
    render(){
        return <>
        {this.state.Bikeon==true? <h2>Bike Is On</h2> : <h2>Bike Is Off</h2>}
        {this.state.Bikeon==true? <button onClick={this.Off}>Off The Bike</button>:<button onClick={this.On}>On the Bike</button>}
        <NotOn BikeStarted={this.state.Bikeon}/>
        </>
    }
}
export default BikeStarted;


// export class NotOn extends Component{


//      render(){
//         if(this.BikeStarted.Bikeon==true){
//             return <><h1>Bike Lights</h1>
//             <h1>Bike ON</h1>
//             </>
//         }else{
//          return  <><h1>Bike Lights</h1>
//            <h2>Bike Off</h2>
//          </>
//         }
//      }
// }