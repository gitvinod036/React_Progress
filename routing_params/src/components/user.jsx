import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"



export const User = () => {
    const [data, setData] = useState("")
    const navigate=useNavigate()
    const users = [{ id: 1, name: "Vinod", batch: "47r" }, { id: 2, name: "ganesh", batch: "66r" }, { id: 3, name: "Charan", batch: "44r" }]

    const { id } = useParams()
    const userId = Number(id)
    const user = users.find(u => u.id === userId)

     const handleLogOut=(e)=>{
        e.preventDefault()
        navigate('/')
     }

    console.log(useParams())
    return <>
        <h3>Welcome Users</h3>
        <div>{user.id}</div>
        <div>{user.name}</div>
        <div>{user.batch}</div>
        <button onClick={handleLogOut}>Go to Home</button>
    </>
}