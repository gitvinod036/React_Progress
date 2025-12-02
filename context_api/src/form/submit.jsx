
export const Submit=(props)=>{
 const {input}=props
      
    return <div>
        <button onClick={()=>input }>submit</button>
        <h3>To see {input}</h3>
    </div>
}