import { Routes, Route, Link ,NavLink } from "react-router-dom"
// import { Home } f
import './App.css'
import { Homepage } from "./pages/homepage"
import { Contact } from "./pages/contact"
import { Errorpage } from "./pages/errorpage"
import { Navbar } from "./components/navbar"
import { Login } from "./pages/login"
import { Dashboard } from "./pages/dashboard"
import { ToastContainer } from "react-toastify"
import { Student } from "./pages/student"
import { Products } from "./pages/Product"

export function App() {
  return <>


   <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/contact/" element={<Contact/>} />
      <Route path="*" element={<Errorpage/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/student/:id" element={<Student/>}></Route>
      <Route path="/Products/:id/:name" element={<Products/>}></Route>
    </Routes>
    <ToastContainer/>
    
  </>
}