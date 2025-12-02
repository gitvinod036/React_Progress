import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import axios from "axios"
import { NavLink } from "react-router-dom"

export const Home=()=>{
   const navigate=useNavigate()
   const users=[{id:1,name:"Vinod",batch:"47r"},{id:2,name:"ganesh",batch:"66r"},{id:3,name:"Charan",batch:"44r"}]
   const [products,setProducts]=useState()

   useEffect(()=>{
     axios.get("https://fakestoreapi.com/products/")
     .then(res=>setProducts(res.data))
     .catch(err=>console.log(err))

   },[])
   console.log(products)


    return <>
    <div>
        <NavLink to="/contact"><p>Contact</p></NavLink>
    </div>
    <h2>Home Page </h2>
    {users.map((item=><div key={item.id} onClick={()=>navigate(`users/${item.id}`)}><ul><li>{item.id}</li>
                               <li>{item.name}</li>
                               <li>{item.batch}</li></ul> </div>))}


    <h2>Products</h2>
    <div >
    {products?.map((item=><div key={item.id} onClick={()=>navigate(`products/${item.id}`)}>
     <h3>{item.title}</h3>
        <img src={item.image}/>
        <h3>{item.price}</h3></div>))}
        </div>
    </>

}
