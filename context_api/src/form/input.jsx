import { useState } from "react"
import { Submit } from "./submit"

export const Input=()=>{
    const [input,setInput]=useState("")
    
    const handleinput=(e)=>{
        e.preventDefault()
    }
     function inputval(e){
        setInput(e.target.value)
     }
     console.log(input)

    return <div>
        <h4>Form</h4>
        <form onSubmit={handleinput}>
        <input type="text" onChange={inputval}/>
        <Submit input={input}/>
        </form>
    </div>
}