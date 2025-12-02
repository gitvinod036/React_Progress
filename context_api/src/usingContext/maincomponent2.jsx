import { Child2 } from "./child2"
import { createContext, useState } from "react"

export const Usercontext=createContext()

export const Maincomponent2=()=>{
    const [user,setUser]=useState({name:"Vinod",age:22})
    return <div>
        <h2>Main component 2</h2>
        <Usercontext.Provider value={user}>
            <Child2/>
        </Usercontext.Provider>
       
    </div>
}