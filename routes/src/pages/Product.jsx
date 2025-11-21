import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Products=()=>{
    const [data,setData]=useState({})
    const {id}=useParams()
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(data=>setData(data.data))
        .catch(err=>console.log(err))
    })
   return <>
    <div>
        Product Details
    </div>
    <p>{data.title}</p>
    <img src={data.image}/>
    <p>{data.price}</p>

   </>
}