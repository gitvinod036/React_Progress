import { useContext } from "react"
import { Usercontext } from "./maincomponent2"

export const GrandChild2=()=>{
    const data=(useContext(Usercontext))
    return <div>
    <h3>GrandChild 2</h3>
    <p>{data.name}</p>
    </div>
}