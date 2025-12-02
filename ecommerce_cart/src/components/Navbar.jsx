import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CartPage } from "../pages/cartpage"
import { cartContext} from "../contextApi/CartContext"
import { Badge } from "react-bootstrap"
import { ThemeContextvalue } from "../contextApi/Themecontext"

export const NavBar=()=>{
    const {cart}=useContext(cartContext)
    console.log(ThemeContextvalue)
    return <div>
        <div style={{display:"flex", justifyContent:"space-around", backgroundColor:"lightblue" ,padding:"30px",textDecoration:"none"}}>
            <NavLink to="/" id="Link">Home</NavLink>
            <NavLink to="/cart" id="Link">Cart <Badge bg="secondary">{cart.length}</Badge></NavLink>
            <NavLink to="*" id="Link">Page Not Found</NavLink>
        </div>
    </div>
}