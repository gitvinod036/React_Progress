export const Count_Decrement=(props)=>{
    const {count,setCount}=props
    return <div>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
}