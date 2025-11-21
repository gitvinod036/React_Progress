import { useState, useEffect } from "react"
import axios from "axios"


export function Counter() {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
       const timer =setInterval(() => {
        setCount(count + 1)
    }, 1000)
     
    return ()=>{
         clearInterval(timer)    
    }
    }, [count])
    console.log(count)
    return <div>
        <h2>Counter</h2>
        <p>Count {count}</p>
    </div>
}