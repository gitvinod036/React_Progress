import { useState } from "react"
import { Child } from "./child"


export const Maincomponent=()=>{
    const [user,setUser]=useState({name:"vinod",age:22})
    return <>
    <p>Main Component</p>
    <Child userInfo={user}/>
    </>
}