import { Outlet } from "react-router-dom"
import { Link,NavLink } from "react-router-dom"
import { Profile } from "./profile"
import { Settings } from "./settings"
import { useParams } from "react-router-dom"
import { useLocation } from "react-router-dom"

export function Dashboard(){
    const userInfo=useLocation()
    return <>
     <h2>{userInfo.state.name} Dashboard</h2>
     <ul>
        <Link><li><Profile/> </li></Link>
        <Link><li><Settings/></li></Link>
        <Link><li>About</li></Link>
     </ul>
     
     
     <Outlet/>
    </>
}