import { useContext } from "react"
import { userdata } from "./data"


export const Profile=()=>{
     const data=useContext(userdata)
     console.log(data)
    return <div>
        <h3>Profile</h3>
    </div>
}