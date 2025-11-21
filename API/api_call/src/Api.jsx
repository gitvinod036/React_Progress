import { Component } from "react";
import axios from 'axios'

export class Api_call extends Component {
    constructor() {
        super();
        this.state = { Products: [], Pro: {} ,Todo:[]}
    }
    fetchData() {
        fetch("https://fakestoreapi.com/products/").then(data => data.json())
            .then(data => this.setState({ Products: data }))
    }
    fetchdata() {
        axios.get("https://django-crud-ug9o.onrender.com/get_user/")
            .then(res => this.setState({ Pro: res.data }))
    }
    fetchToDo(){
        axios.get("https://jsonplaceholder.typicode.com/todos").then(data=>this.setState({Todo:data}))
    }
    componentDidMount() {
        this.fetchData()
        this.fetchdata()
        this.fetchToDo()
    }
    render() {
        console.log(this.state.Todo)
        return <>
            <h2>Fake Store Products</h2>
            <div style={{ display: 'flex', flexWrap: "wrap" }}>
                {this.state.Products.map((items, ind) => <div key={ind} style={{borderRadius:'10px' ,border: "1px solid black", width: '300px', height: '400px', paddingLeft: '55px', paddingTop: '20px' }}>
                    <img src={items.image} width={200} height={300} />
                    <p>{items.title}</p>
                </div>)}
            </div>
            <h2>ACTORS</h2>
            <div style={{display:'flex', flexWrap:'wrap', margin:'20px'}}>
                {this.state.Pro.details === undefined ? <center><h1>........LOADING.......</h1></center> : this.state.Pro.details.map((value, ind) => <div key={ind} style={{borderRadius:'10px' ,border:'1px solid black', width:'400px', height:'450px',
                 paddingLeft:'40px'
                }}>
                    <img src={value.profile_pic} width={350} height={400} />
                    <p style={{fontFamily:'sans-serif', fontSize:'large'}}>ActorName : {value.stu_name}</p>
                </div>)}     
            </div>
            <h2>TODO'S</h2>
            <h4>TODO List:</h4>
            {this.state.Todo.data===undefined ?<><h3>LOADING.....</h3></>:this.state.Todo.data.map((val=><div key={val.userId}>
                <ul>
                    <li>{val.title}</li>
                </ul>
            </div>))}
        </>
    }
}