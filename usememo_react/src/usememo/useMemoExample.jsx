import React, { useState,useMemo } from 'react'

export  const UseMemoExample = () => {
    const [random,setRandom]=useState(0)
    const [number,setNumber]=useState(0)

console.log("Main Component")

    const sumofnumbers=()=>{
        console.log("sum values")
        let val=0
        for (let i=0;i<=1000;i++){
            val+=i
        }
        return val+number
    }

    const sumvalue=useMemo(()=>{
        return sumofnumbers()
    },[number])
  return (
    <div>
      <h1>Use Memo Component</h1>
      <p>Random Number {random}</p>
      <button onClick={()=>setRandom(Math.random())}>Generate</button>
      <input type="number" onChange={(e)=>setNumber(e.target.value)}/>
     <p>{sumvalue}</p>
    </div>
  )
}


