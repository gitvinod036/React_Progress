import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductList = (props) => {
  const { data } = props
  const navigate = useNavigate()
  return (
    <div>
      {
        data.map(product => <div key={product.id} onClick={() => navigate("/products" + product.id)}>
          <img src={product.image} alt={product.image} loading='lazy' />
          <p>{product.title}</p>
        </div>)
      }
    </div>
  )
}

export default ProductList
