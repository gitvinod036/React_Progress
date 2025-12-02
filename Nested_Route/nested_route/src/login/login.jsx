import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const [Email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const navigate=useNavigate()

    const users=[
        { email:"john@gmail.com", password:"123456",role:"Student" ,name:"John"},
        {email:"trainer@gmail.com" ,password:"123456",role:"trainer",name:"Sundhar ayya " }]


    const data=users.find(item=>(item.email==Email && item.password===password) )
    console.log(data)

    const Submit = (e) => {
        e.preventDefault()
        console.log(data.role)
        if(data.role=="Student"){
            navigate("/dashboard",{state:{name:data.name}})
        }
        else{
            navigate("/Trainer_dashboard",{state:{name:data.name}})
        }
    }

    return <>
        <h2>Login </h2>
        <form>
            <h3>Email</h3>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
            <h3>Password</h3>
            <input type="password" onChange={(e) => setpassword(e.target.value)} />
            <button onClick={Submit}>Login</button>
        </form>
    </>
}