import React, { Component } from "react";

export default class StudentDetails extends Component {
   
    render() {
          console.log(this.props)
        return <div style={{border:"1px solid black", width:"400px",height:"500px",borderRadius:"10px",backgroundColor:"skyblue" ,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h1>Student Identity Card</h1>
            <img src={this.props.imgUrl} width={80} height={80} style={{borderRadius:"10px"}}></img>
            <h4>{this.props.name}</h4>
            <h4>{this.props.class}</h4>
            <p>{this.props.Rollno}</p>
            <p >{this.props.hobbies.map((val,i)=><li key={i}>{val}</li>)}</p>
            {this.props.children}
        </div>
    }
}