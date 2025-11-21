import { NavLink ,Link} from "react-router-dom"


export const Navbar=()=>{
    return <div>
    <ul style={{display:"flex", justifyContent:"space-evenly" ,padding:"50px" ,backgroundColor:"lightcoral" ,listStyleType:"none",textDecoration:"none"}}>
        <NavLink to="/" style={{textDecoration:"none" }}><li>Home</li></NavLink>
       <NavLink to="/contact/"><li>Contact</li></NavLink>
        <Link to="/service"><li>Service</li></Link>
        <NavLink to="/login">Login</NavLink>
    </ul>
    </div>
}