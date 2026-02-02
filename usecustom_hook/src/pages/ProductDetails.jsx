
import { useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { UseFetch } from '../HOC/fetch'

export const ProductDetails = () => {
    // const [data,setData]=useState({})
   const {id}=useParams()
   
  //  function fetchProduct(){
  //      const url=`https://fakestoreapi.com/products/${id}`
  //      axios.get(url)
  //      .then(res=>setData(res.data))
  //      .catch(err=>console.log(err))
  //  }

  //  useEffect(()=>{
  //     fetchProduct()
  //  },[])
   const url=`https://fakestoreapi.com/products/${id}`
   const data=UseFetch(url)
   console.log(data)


  return (
    <div>
        <h2>Product Details</h2>
        {data?  <Card style={{width:"20rem"}}>
        <Card.Title>{data.title}</Card.Title>
        <Card.Img src={data.image}/>
        <Card.Text>{data.description}</Card.Text>
        <Card.Title>Price $ {data.price}</Card.Title>
      </Card> :<h4>Loading...</h4>}
      
    </div>
  )
}

