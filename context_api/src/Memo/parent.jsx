import { useState,useMemo } from "react"
import { Child } from "./child"

export const Parent=()=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [data,setData]=useState("")
   console.log("parent")
    const Submit=(e)=>{
       e.preventDefault()
       setData({name:name,email:email})
       setName("")
       setEmail("")
    }
    

   console.log("parent")
    return <div>
        <h4>Parent</h4>
        <form onSubmit={Submit}>
            <p>Name</p>
             <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
             <p>Email</p>
             <input type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                <button>Submit</button>
        </form>
        <Child Userdata={data}/>
    </div>
}