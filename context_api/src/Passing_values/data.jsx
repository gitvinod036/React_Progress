import { createContext, useState } from "react"
import { Navbar } from "./navbar"

export const userdata=createContext()
export const Data=()=>{
    const [userdetails,setdetails]=useState({id:1,name:"vinod",age:22},
                                       {id:2,name:"Ram",age:12})
    return <div>
        <h3>User Data</h3>
        <userdata.Provider value={userdetails}>
             <Navbar/>
        </userdata.Provider>
    </div>
}