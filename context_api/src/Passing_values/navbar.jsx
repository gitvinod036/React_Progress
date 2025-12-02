import { Profile } from "./profile"
import { userdata } from "./data"

export const Navbar=()=>{
    console.log()
    return <div>
        <h3>Dashboard</h3>
        <ul style={{display:"flex",flexDirection:"row", textDecoration:"none",justifyContent:"space-evenly"}}>
            <li style={{fontSize:"large"}}>Home</li>
            <li><input type="text" placeholder="search" width={400} height={50}/></li>
           <li>Profile</li>
        </ul>
        <Profile/>
    </div>
}