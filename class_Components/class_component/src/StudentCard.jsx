import React, { Component }  from "react";


export default class StudentCard extends Component{
    render(){
        return <div>
            <div>
                <h3 style={{color:"orange"}}>Name:{this.props.name}</h3>
                <h3 >Age:{this.props.Age}</h3>
                <h3>Course:{this.props.Course}</h3></div>
        </div>
    }
}