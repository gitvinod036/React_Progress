import React, { useReducer } from 'react'

const regReducer=(state,action)=>{
    switch(action.type){
        case "name":
            return {...state,setname:action.payload}
        case "email":
            return {...state,setemail:action.payload}
        case "password":
            return {...state,setpassword:action.payload}
        case "number":
            return {...state,setage:action.payload}
        case "reset":
            return {...state,setname:"",setemail:"",setpassword:"",setage:""}
    }
      
}

const initialstate={
    setname:"",
    setemail:"",
    setpassword:"",
    setage:"",
    reset:""
}
const Register = () => {
    const [state,dispatch]=useReducer(regReducer,initialstate)
    
    const reset=()=>{
        dispatch({type:"reset"})
    }

  return (
    <div>
      <form>
        <p>Username :{state.setname}</p>
        <input type="text" onChange={(e)=>dispatch({type:"name",payload:e.target.value})} value={state.setname}/>
        <p>Email {state.setemail}</p>
        <input type="email" onChange={(e)=>dispatch({type:"email",payload:e.target.value})} value={state.setemail}/>
        <p>Password {state.setpassword}</p>
        <input type='password' onChange={(e)=>dispatch({type:"password",payload:e.target.value})} value={state.setpassword}/>
        <p>Age {state.setage}</p>
        <input type="number" onChange={(e)=>dispatch({type:"number",payload:e.target.value})} value={state.setage}/>
        <button onClick={reset}>reset</button>
      </form>
    </div>
  )
}
//  * SET_NAME
//   * SET_EMAIL
//   * SET_PASSWORD
//   * SET_AGE
//   * RESET_FORM

export default Register;
