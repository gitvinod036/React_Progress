import { useState } from "react";
import {Font} from './font'
export function LightDark(){
  const[Light,SetTheme]=useState(false)
  const[Types,SetType]=useState(["car","Bike","Jeep"])
  
  const HandleTheme=()=>{
     SetTheme(!Light)
  }

  return <>
   <div className={Light ?"Light-on":"Light-off"} style={{backgroundColor:Light?"lightskyblue":"lightgray"}}>
   <p> {Light?"LightTheme":"DarkTheme"}</p>
   <button onClick={()=>HandleTheme()}>{Light ?"Dark":"Light"}</button>
   </div>
   {/* <Font Theme={Light} /> <{Types.map((ele)=><Font type={ele}/>)}/>  */}
   {/* <{Types.map((ele)=><Font model_type={ele}/>)}/> */}
   {Types.map((ele)=> <Font models={ele}/>)}
  </>
}