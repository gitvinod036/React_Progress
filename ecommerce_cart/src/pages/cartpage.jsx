import { useContext } from "react"
import { cartContext } from "../contextApi/CartContext"
import { Card, Container } from "react-bootstrap"

export const CartPage=()=>{
    const {setCart,cart}=useContext(cartContext)
   
    const deleteFromCart=(id)=>{
       const deletedelement=cart.filter(product=>product.id!==id)
       setCart(deletedelement)

    }

    return <div>
        <div>
            Your shopping Cart Page
        </div>
        
        {cart.length > 0 ? <div>
           { cart.map(item => <Card key={item.id} width={"20rem"}>
                <Card.Header>
                    <Card.Img  src={item.image_url}/>
                </Card.Header>
                <Card.Body>
                    <Card.Text>{item.title}</Card.Text>
                    
                </Card.Body>
                <Card.Footer>
                    <button onClick={()=>deleteFromCart(item.id)}>Delete</button>
                </Card.Footer>
            </Card>)}
            </div>: <div>cart is empty</div>}
    </div>
}