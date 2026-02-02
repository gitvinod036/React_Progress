
import { Container, Card, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { UseFetch } from '../HOC/fetch'


const ProductsList = () => {
    //    const [data,setData]=useState([])
    const navigate = useNavigate()

    const obj= {url:"https://fakestoreapi.com/products" ,method:"get"}
    const products = UseFetch(obj.url)
    console.log(products)


    //    console.log(UseFetch(url))
    // function fetchAllProducts(){
    //      axios.get("https://fakestoreapi.com/products")
    //      .then(res=>setData(res.data))
    //      .catch(err=>console.log(err))
    // }
    // console.log(data)
    // useEffect(()=>{
    //    fetchAllProducts()
    // },[])
    return (
        <div>
            {
                products === null ? <h3>Loading</h3> :
                    products.map(item => <Card key={item.id} style={{ width: "15rem" }} onClick={() => navigate(`/productsdetails/${item.id}`)}>
                        <Card.Img src={item.image} />
                        <Card.Title>{item.title}</Card.Title>
                    </Card>)
            }

    </div >
  )
}

export default ProductsList
