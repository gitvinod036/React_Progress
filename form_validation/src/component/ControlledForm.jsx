import { useState } from "react";

export function FormValidation(){
   const [email,setEmail]=useState("")
   const [inputError,setError]=useState("")
   const [password,setPassword]=useState("")
   const [passerror,setPassError]=useState("")
   const [got,setGot]=useState(false)
//    const Eref=useRef(false)
//    const Pref=useRef(false)
//   console.log(Eref.current)

    const handle=(e)=>{
        e.preventDefault()
        if(!email.includes("@")){
            setError("Email should contain @")
            setGot(false)
        }if(password.length<=8){
            setPassError("Password should be above 8 characters")
            setGot(false)

        }if(email.includes("@") && password.length>=8){
           setPassError("")
           setError("")
           setGot(true)
           }
      }
      console.log(got)
    
    return <div>
        <h3>Form Validation</h3>
        <form onSubmit={handle}>
            <fieldset>
                <legend>Registration Form</legend>
                <h4>Email</h4>
                <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
                <p>{inputError}</p>
                <h4>Password</h4>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} />
                <p>{passerror}</p>
                <button>Submit</button>
            </fieldset>
            <div>
                {got?<p>Sucessfully Registered !!</p>:<p></p>}
            </div>
        </form>
    </div>
}