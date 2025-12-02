import { useState ,createContext, useContext} from "react"
import { Count_Increment } from "./Count_Increment"
import { Count_Decrement } from "./Count_decrement"


export const Count=()=>{
    const [count,setCount]=useState(0)
    // console/log(data)
    // const {theme,setTheme}=useContext(Themecontext)
    // console.log(theme)
    return <div>
        
        <h3>Count {count}</h3>
        <Count_Increment setCount={setCount} count={count}/><Count_Decrement setCount={setCount} count={count}/>
    </div>
}