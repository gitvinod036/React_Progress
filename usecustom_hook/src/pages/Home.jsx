import React, { lazy, useState } from 'react'
import ProductsList from '../components/ProductsList'
import { Suspense } from 'react'
//named Export 
const DemoComponent=React.lazy(()=>import ('../components/DemoComponent').then((module)=>({default:module.DemoComponent})))
// default Export 
const Demo2=lazy(()=>import ('../components/Demo2'))


export const Home = () => {
  const [show,setShow]=useState(false)
  return (
    <div>
   
   <Suspense fallback={<h3>Loading...</h3>}>
    {show && <Demo2/>}
    {show && <DemoComponent/>}
    </Suspense>
    <button onClick={()=>setShow(!show)}>{show? "hide":"show"}</button>
      <ProductsList/>
    </div>
  )
}


