import React, { lazy, Suspense, useState } from 'react'

//return default lazy
const DemoLazy=React.lazy(()=>import ('./DemoLazy'))
const DemoLazy2=lazy(()=>import ('./DemoLazy2').then((module)=>({default:module.DemoLazy2})))

import {Routes,Route, Link} from 'react-router-dom'
// import Home from './pages/Home'
// import Service from './pages/Service'
// import PageNotFound from './pages/PageNotFound'
// import Contact from './pages/Contact'
const Home=React.lazy(()=>import('./pages/Home'))
const Service=lazy(()=>import ('./pages/Service'))
const Contact=lazy(()=>import('./pages/Contact').then((module)=>({default:module.Contact})))
const PageNotFound=lazy(()=>import ("./pages/PageNotFound").then((module)=>(({default:module.PageNotFound}))))
const productDetails=lazy(()=>import('./productDetails').then((m)=>({default:m.productDetails})))

const App = () => {
  const [show,setShow]=useState(false)
  return (
    <>
    <ul>
      <li><Link to={"/"}>Home</Link></li>
      <li><Link to={"/contact"}>contact</Link></li>
      <li><Link to={"/service "}>Service</Link></li>
      <li><Link to={"*"}>Not Found</Link></li>
      <li><Link to={"/product/:id"}>Prod Details</Link>
      </li>
    </ul>
   <Suspense fallback={<h3>Loading</h3>}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path="*" element={<PageNotFound/>}/>
      <Route path="/product/:id" element={<productDetails/>}/>
    </Routes>
    </Suspense>
      <h3>App</h3>
      <button onClick={()=>setShow(!show)}>{show?"hide":"show"}</button>
      <Suspense fallback={<h3>Loading</h3>}>
      {show && <DemoLazy/>}
      {show && <DemoLazy2/>}
      </Suspense>
    </>
  )
}

export default App
