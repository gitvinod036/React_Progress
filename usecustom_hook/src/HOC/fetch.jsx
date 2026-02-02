import axios from "axios"
import { useEffect, useState } from "react"

export const UseFetch=(url)=>{
    const [data,setData]=useState(null)
    function  fetch(){
        // if(url.method=="get"){
        //     axios.get(url.url)
        //     .then(res=>setData(res.data))
        //     .catch(err=>console.log(err))
        // }
         axios.get(url)
            .then(res=>setData(res.data))
            .catch(err=>console.log(err))
    }
    useEffect(()=>{
        fetch()
    },[url])      

    return data
}