import React, { useCallback, useState } from 'react'
import './callback.css'
import { Child } from './child'

export const Callback_Example = () => {
   const [theme,setTheme]=useState(false)
   const [data,setData]=useState("")


   const handleTheme=()=>{
    setTheme(!theme)
    console.log("theme")
   }
   const seperateNames=()=>{
    console.log("seperatenames")
    const names=data.split(",")
    return names
   }
   const memoSeperateNames=useCallback(()=>{
          return seperateNames
   },[data]) 

  console.log("example parent")
  return (
    <div className={theme?'dark':'light'} >
        <button onClick={handleTheme}>{theme?"light":"dark"}</button>
      <h4>Example CallBack</h4>
      <input type='text' value={data} placeholder='Enter multiple names' onChange={(e)=>setData(e.target.value)}/>

      <Child getNames={memoSeperateNames}/>
    </div>
  )
}

