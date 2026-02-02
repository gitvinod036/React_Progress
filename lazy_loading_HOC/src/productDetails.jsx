import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'

export const productDetails = () => {
  const {id}=useParams()
 const [data,setData]=useState({})
   const [loading,setLoading]=useState(false)
   const [error,setError]=useState("")
    useEffect(()=>{
      setLoading(true)
        axios.get("https://fakestoreapi.com/products"+id)
        .then(res=>setData(res.data),setLoading(false),setError(""))
        .catch(err=>console.log(err.message),setLoading(false),setError())
    },[])
   console.log(data)
}


