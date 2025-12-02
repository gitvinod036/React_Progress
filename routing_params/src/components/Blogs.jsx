import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Blog = () => {
    const naviage = useNavigate()
    const [data, setData] = useState()

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(data => setData(data.data))

    }, [])
    const { id } = useParams()
    console.log(data)

    return <div style={{  display: "flex" }}>

            <div>

            <img src={data?.image} width={450} height={550} />
            </div>
            <div>
            <h3>{data?.title}</h3>
            <p>{data?.description}</p>
            <h4>{data?.price}</h4>
            <button onClick={()=>naviage("/")}>Go To Home</button>
            </div>
        
    </div>
}