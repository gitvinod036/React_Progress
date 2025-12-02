import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

export const Contact=()=>{
    const [name,setname]=useState("")
    const [email,setEmail]=useState("")
    const Goto=useNavigate()


   const handleSubmit=(e)=>{
     e.preventDefault()
    //  console.log(name)
    //  console.log(email)
    Goto("/thankyou" ,{state:{name:name,email:email}})
   }


    return <>
    <h3>Welcome to Contact</h3>
    <p>Name</p>
    <input type="text" onChange={(e)=>setname(e.target.value)}/>
    <p>Email</p>
    <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
    <button onClick={handleSubmit}>Submit</button>
    </>
}