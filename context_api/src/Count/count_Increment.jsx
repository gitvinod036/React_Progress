export const Count_Increment=(props)=>{
    const {setCount,count}=props
    return <div>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
}