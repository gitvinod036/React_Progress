import { Routes,Route } from "react-router-dom"
import { HomePage } from "./pages/Homepage"
import { CartPage } from "./pages/cartpage"
import { PageNotFound } from "./pages/PagenotFound"
import { NavBar } from "./components/Navbar"
import { createContext, useState } from "react"
import { cartContext } from "./contextApi/CartContext"


export const App=()=>{
  const [cart ,setCart]=useState([])
  const cartContextValue={cart ,setCart}

  return <cartContext.Provider value={cartContextValue}>
   <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
   
  </cartContext.Provider>
}