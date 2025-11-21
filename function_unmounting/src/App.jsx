import { useState } from "react"
import { Counter } from "./component/counter"
import { ClearApi } from "./component/rendering"
import {NetworkStatus} from './component/Networkstatus'

export function App(){
  const[state,setState]=useState(true)

   function handle(){
    setState(!state)
   }

  return <>
  <button onClick={handle}>{state?"Hide":"Show"}</button>
  {state && <Counter/>}
  {state && <ClearApi/>}
  <NetworkStatus/>
  </>
}