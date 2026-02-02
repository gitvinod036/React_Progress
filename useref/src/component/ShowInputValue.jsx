import { useEffect, useRef, useState } from "react"

export function ShowInput() {
    //   const h2ref=useRef("vinod")
    //   const count=useRef(0)

    //   const inc=()=>{
    //     count.current=count.current+1
    //      console.log(count.current)
    //   }
    //     const changeText=()=>{
    //         h2ref.current="Bye Vinod"
    //         // console.log(h2ref.current)
    //     }
    //    console.log(h2ref.current)
    //    return <>
    //    {console.log("render")}
    //    <h2 >{h2ref.current}</h2>
    //    <button onClick={changeText}>change</button>
    //     <div>
    //         <p> count {count.current}</p>
    //         <button onClick={inc}>inc</button>
    //     </div>
    //    </>




    // const h2ref = useRef()
    // const [name,setName]=useState("")
    const inputtag=useRef()


    // function click (){
    //     h2ref.current.innerText="Boom Boomm"
    //     h2ref.current.style.color="blue"
    //     h2ref.current.style.background="red"
    // // console.log(h2ref)
    // }
    // function changeclick(){
    //     h2ref.current.value="Boommm Boom"
    //     h2ref.current.style.color="brown"
    // }
    // useEffect(()=>{
    //      const h1= document.createElement("h1")
    //      h1.innerText="Hello From React"
    //      h1.style.color="blue"
    //      h2ref.current.appendChild(h1)
    // },[])

    //   function input(e){
    //     setName(e.target.value)
    //   }
   useEffect(()=>{
      console.log("input" ,inputtag)
    function enter(){
        console.log(inputtag.current.value)

    }

   })
    console.log("input" ,inputtag)
    function enter(){
        console.log(inputtag.current.value)

    }

    return <>
        <h3>Dom Manipulation</h3>
        {/* <h2 ref={h2ref}></h2>
        <button onClick={click}>click</button>
        <button onClick={changeclick}>Change Text</button> */}
        <input type="text"  ref={inputtag} name="enter" />
        <button onClick={enter}>Enter</button>
        {/* <p>see {inputtag.current.value}</p> */}
        {/* if(inputtag.current.value===undefined){<p>See  </p>}else{<p>See {inputtag.current.value}</p>} */}
        <p>{inputtag.current.value}</p>
    </>





}