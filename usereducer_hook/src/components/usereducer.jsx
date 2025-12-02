import React, { useReducer } from 'react'

const countReducer=(state,action)=>{
    console.log(state,action) 
   switch(action.type){
    case "inc":
        return {...state,count:state.count+1}
    case "dec":
        return {...state,count:state.count-1}
    case "reset":
        return {...state,count:0}
    case "name":
        return {...state,inputval:action.payload}
    case "submit":
        return {...state,data:state.inputval,inputval:""}
    default:
        return state
    }
    

}
const initialstate={
    count:0,
    inputval:"",
    data:""
}
const UseReducer = () => {
   const [state ,dispatch]=useReducer(countReducer,initialstate)
   
   const inc=()=>{
     dispatch({type:"inc"})
   }
   const dec=()=>{
      dispatch({type:"dec"})
   }
   const reset=()=>{
       dispatch({type:"reset"})
   }

  return (
    <div>
      <p>Count UseReducer </p>
      <p>Count {state.count}</p>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <button onClick={reset}>reset</button>
      <p>{state.data}</p>
      <input type='text' placeholder='Enter name' onChange={(e)=>dispatch({type:"name",payload:e.target.value})} value={state.inputval}/>
      <button onClick={()=>dispatch({type:"submit"})}>Submit</button>
    </div>
  )
}

export default UseReducer;
