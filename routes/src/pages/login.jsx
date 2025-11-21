import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";


export const Login=()=>{
   const [email,setEmail]=useState("")
   const [password,setpassword]=useState("")
   const navigate=useNavigate()

   const handle=(e)=>{
     e.preventDefault()
     const users=[{email:"vinod@gmail.com",password:"123456"},{email:"tom@gmail.com",password:"654321"}]
     const data=users.find(item => item.email===email &&item.password===password)
     if(data){
        toast.success("Login sucess")
        navigate("/dashboard")
     }else{
         toast.error("login failed")
        
     }
 
    }

    return <div>
        <h2>Login Page</h2>

        <form onSubmit={handle}>
            <fieldset>
                <legend>Login</legend>
                <h3>Email</h3>
                <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
                <h3>Password</h3>
                <input type="password" onChange={(e)=>setpassword(e.target.value)}/>
                <button>Login</button>       
    
            </fieldset>
        </form>
    </div>
}