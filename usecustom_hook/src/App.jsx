import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { ProductDetails } from './pages/ProductDetails'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/productsdetails/:id" element={<ProductDetails/> }/>
      </Routes>
    </div>
  )
}

export default App
