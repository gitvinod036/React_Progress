import { useState } from "react";
import { Student } from "./Student";
import { StudentScore } from "./StudentScore";
import { Product_Card } from "./Prod_card";

export function Toggle() {
    const [Color, SetColor] = useState(true)
    const [Message, SetMessage] = useState(true)
    const [Students, SetStudent] = useState(["Sharath", "Riya", "Karan", "Neha"])

    const handle = () => {
        SetColor(!Color)
    }
    const Hide = () => {
        SetMessage(!Message)
    }
    const products = [
        { name: "Laptop", price: 60000 },
        { name: "Headphones", price: 2000 },
        { name: "Smartwatch", price: 5000 }
    ];

    return <div style={{ display: "flex", justifyContent: 'space-evenly', flexWrap: "wrap" }}>
        <div>
            <p>My Favourite color is <span style={{ color: Color ? "blue " : " red" }}>{Color ? " Blue" : "Red"}</span></p>
            <button onClick={handle}>Change Color</button>
        </div>
        <div>
            {Message ? <h3>Welcome to React Hooks</h3> : <h3></h3>}
            {Message ? <button onClick={Hide} style={{ position: "static" }}>Hide</button> : <button onClick={Hide} style={{ position: "static" }}>Show</button>}
        </div>
        <div>
            <Student studentdetails={Students} title="Student Details" />
        </div>
        <div>
            <StudentScore name="Riya" score={90} />
            <StudentScore name="Karan" score={45} />
            <StudentScore name="Sharuk" score={65} />
        </div>
        <div>
            <Product_Card proddetails={products} title="Product Details" />
        </div>
    </div>
}