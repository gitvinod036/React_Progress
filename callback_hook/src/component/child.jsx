import React, { useCallback, useEffect, useState } from 'react'

export const Child = React.memo((props) => {
   const [names,setNames]=useState([])
    const {getNames}=props
    useEffect(()=>{
        console.log("get names")
         setNames(getNames())
    },[getNames])
    console.log("child")

    // function deleteName(){
    //     const del=names.filter((val,ind)=>ind!=i)
    //     setNames(del)
    // }
    const delname=useCallback((i)=>{ 
        const del=names.filter((v,ind)=>ind!=i)
        setNames(del)
    },[])
  return (
    <div>
      <p>Name</p>
      {names.map(val,ind=><ul key={ind}><li>{val}
        <button onClick={()=>delname}>Delete</button></li></ul>)}
    </div>
  )
})

