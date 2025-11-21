import { useState,useEffect } from "react"

export function NetworkStatus(){
    const[status,SetStatus]=useState(true)

    window.addEventListener("online",()=>{
        SetStatus(true)
    })
    window.addEventListener("offline",()=>{
        SetStatus(false)
    })
    console.log(navigator.onLine)
    return <div>
    <h2> Active Status</h2>
    {status?<h3 style={{color:"green"}} >You are Online</h3>:<h3 style={{color:"red"}} >You are Offline</h3>}
    </div>
}