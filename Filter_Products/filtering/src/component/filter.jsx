import { Component } from "react";
import axios from 'axios'

export class Filter extends Component {
    constructor() {
        super();
        this.state = { Products: [], category: "all" }
    }
    fetchdata() {
        axios.get("https://fakestoreapi.com/products/").then(data => this.setState({ Products: data.data }))
    }
    componentDidMount() {
        this.fetchdata()
    }
    category(input) {
        this.setState({ category: input })
    }

    render() {
        return <>
            <button onClick={() => { this.category("all") }}>all</button>
            <button onClick={() => { this.category("men's clothing") }}>men's clothing</button>
            <button onClick={() => { this.category("jewelery") }}>jewelery</button>
            <button onClick={() => { this.category("electronics") }}>electronics</button>
            <button onClick={() => { this.category("women's clothing") }}>women's clothing</button>
            {/* <div style={{display:"flex" , flexWrap:"wrap"}}>
            {this.state.Products.map((value)=><div key={value.id} style={{border:"1px solid green", width:"300px" , height:"400px"
            }}>
                <img src={value.image} width={250} height={300}/>
                <h2>{value.category}</h2>
                <p>{value.price}</p>
            </div>)}
            </div> */}
            {/* {this.state.Products.map((value)=> value.category===this.state.category? <div key={value.id}>
                <img src={value.img}/></div>:<>Loading...</>)}

                 */}
            {this.state.Products
                .filter(value =>
                    this.state.category === "all" || value.category === this.state.category
                )
                .map(value => (
                    <div key={value.id} style={{ border: "1px solid green", width: "300px", height: "400px" }}>
                        <img src={value.image} width={250} height={300} alt={value.title} />
                        <h2>{value.category}</h2>
                        <p>{value.price}</p>
                    </div>
                ))
            }
        </>
    }
}