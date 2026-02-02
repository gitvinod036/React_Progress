import React, { lazy, useEffect, useState } from 'react'
import axios from 'axios'
// import ProductList from './ProductList'
 
const ProductList=lazy(()=>import ('./ProductList')) //.then((module)=>({default:module.ProductList}))
// const LoadingHOC=lazy(()=>import ('../HOC/loadingHOC'))
import LoadingHOC from '../HOC/loadingHOC'

//Hoc
const Products=LoadingHOC(ProductList)


const Home = () => {
   const [data,setData]=useState([])
   const [loading,setLoading]=useState(false)
   const [error,setError]=useState("")
    useEffect(()=>{
      setLoading(true)
        axios.get("https://fakestoreapi.com/products")
        .then(res=>setData(res.data),setLoading(false),setError(""))
        .catch(err=>console.log(err.message),setLoading(false),setError())
    },[])

  return ( 
    <div>
      <h4>Home</h4>
      <Products data={data} isLoading={loading} iserror={error}/>
      
    </div>
  )
}

export default Home
