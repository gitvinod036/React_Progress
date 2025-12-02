import { useState, useEffect } from "react"
import axios from "axios"
import { Container, Row, Col, Card, Spinner } from "react-bootstrap"
import { useContext } from "react"
import { cartContext } from "../contextApi/CartContext"

export const ProductList = () => {
    const [data, setData] = useState([])
    const {setCart,cart}=useContext(cartContext)

    useEffect(() => {
        axios.get("https://my-site-django-1.onrender.com/mobiles/")
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    },[])
    console.log(data)
    const AddtoCart=(product)=>{
      const checkProduct=cart.some((v)=>v.id===product.id)
      if (checkProduct){
        alert("already exists")
      }else{
          setCart([product,...cart])
      }
       

    }
    return <div>
        <div>
            <p className="h3 text-center">Products</p>
        </div>

        {data.length > 0 ? (<Container><Row>
            {data.map(product => <Col>
                <Card key={product.id} style={{ width: "10rem", height: "17rem" }}>
                    <Card.Header className="w-75">
                        <Card.Img src={product.image_url} width={200}/></Card.Header>
                    <Card.Body className="w-20"><Card.Title>{product.title}</Card.Title>
                    <Card.Footer><Card.Title>{product.brand}</Card.Title></Card.Footer>
                    <button onClick={()=>AddtoCart(product)}>Add to cart</button>
                </Card.Body></Card>
            </Col>)} </Row></Container>)
            : (<div className="text-center"><Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
            /> Loading...</div>)}
    </div>
}