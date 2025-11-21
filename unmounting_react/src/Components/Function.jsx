import { useState } from "react";

export const Func = function () {
    const [count, SetCount] = useState(1)
    const [input, SetInput] = useState("")
    const [number, setNumber] = useState()

    function reset() {
        SetCount(0)
    }
    const user_input = (e) => {
        SetInput(e.target.value)
    }
    const update_number = (e) => {
        setNumber(e.target.value)
    }

    return <div style={{margin:'6%  32%'}}>
        <div style={{ border: '1px solid black', width: '400px', height: '400px',padding:'50px' ,backgroundColor:'lightcoral'}}>
            <div style={{padding:'40px',backgroundColor:'lightskyblue' }}>
                <h2>Functional Component</h2>
                <h1>{count}</h1>
                <button onClick={() => SetCount(count + 1)}>+</button>
                <button onClick={() => SetCount(count - 1)}>-</button>
                <button onClick={reset}>reset</button><br></br>
                <div style={{paddingTop:'10px'}}>
                <label>Input</label>
                <input type="text" onChange={(e) => user_input(e)} style={{padding:'3px'}}/></div>
                <p>Entered : {input}</p>
                <input type="number" onChange={(e) => update_number(e)} />
                <h3>Live Number :{number}</h3>
            </div>
        </div>
    </div>
}