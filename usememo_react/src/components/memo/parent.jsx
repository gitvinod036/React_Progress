import React, { useMemo, useState } from 'react'
import  { ChildMemo } from './child'
import { FormData } from './formData'
import { Practice } from './practice'


const Parent = () => {
   const [count,setCount]=useState(0)
   const [number,setNumber]=useState(0)
   const [username,setUsername]=useState("")
   const [password,setPassword]=useState("")
    const [data,SetData]=useState("")

   const [email,setemail]=useState("")
   const [daata,setdata]=useState("")
   const [mobile,setmobile]=useState("")

   const practice=(e)=>{
       e.preventDefault()
       setdata({mobile:mobile,email:email})
       setemail("")
       setmobile("")
   }

   const Submit=(e)=>{
    e.preventDefault()
    SetData({username:username,password:password})
    setPassword("")
    setUsername("")
   }


   const memocount=useMemo(()=>{
    console.log("memo")
        return count
   },[count])
   console.log("parent")
   
  return (<div>
    <div>
       <h3>Parent Count</h3> 
       <p>Count {count}</p>
       <button onClick={()=>setCount(count+1)}>+</button>
       <button onClick={()=>setCount(count-1)}>-</button>
       <button onClick={()=>setNumber(Math.random())}>Generate</button>
      <ChildMemo number={number}/>
      <ChildMemo count={count}/>
    </div>
    <form onSubmit={Submit}>
        <p>Username</p>
        <input type="text" onChange={(e)=>setUsername(e.target.value)}/>
         <p>Password</p>
        <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
         <button>Login</button>
    </form>
     <FormData userData={data}/>





     <form onSubmit={practice}>
        <input type="text" onChange={(e)=>setemail(e.target.value)}/>
        <input type="number" onChange={(e)=>setmobile(e.target.value)}/>
        <button>GET INTO</button>
     </form>
   <Practice details={daata}/>
    </div>
  )
}

export default Parent;
