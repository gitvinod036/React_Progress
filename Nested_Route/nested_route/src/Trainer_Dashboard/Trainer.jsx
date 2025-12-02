import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"
export const Trainer=()=>{
    const {state}=useLocation()
  
    return <div>
        <h3>{state.name} Dashboard</h3>
         <Outlet/>
    </div>
}