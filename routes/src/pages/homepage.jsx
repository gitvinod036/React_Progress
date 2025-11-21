import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"
import axios from "axios"


export function Homepage(){
   const [Products,setProducts]=useState([])
   const students=[{id:1,name:"vinod",class:"10th"},{id:2,name:"jerry",class:"10th"}]
   const navigate=useNavigate()

    useEffect(()=>{
           axios.get("https://fakestoreapi.com/products")
           .then(res=>setProducts(res.data))
           .catch(err=>console.log(err))
    },[])
  

    return <>
    <h2> Welcome Home page </h2>
    {students.map((val,i)=><div key={i} onClick={()=>navigate("/student/"+ val.id)}><p>{val.name}</p><p>{val.class}</p></div>)}
    <Link to="/contact/">Go to Contact</Link>

    {Products.map(product => <div key={product.id} onClick={()=>navigate(`/products/${product.id}/${product.title}`)}>
        <p>{product.title}</p>
        <img src={product.image} width={200} height={200}/>
    </div>)}
   
    </>
}