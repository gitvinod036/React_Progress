import { Navigate, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export const Dashboard=()=>{
    const navigate=useNavigate()

    const handleLogOut =()=>{
        toast.error("LogOut")
      navigate("/")
    }


   return <>
   <h2>Dashboard</h2>
   <button onClick={handleLogOut}>Logout</button>
   </>   
}