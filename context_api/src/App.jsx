import { Maincomponent } from "./normalprops/maincomponent"
import { Maincomponent2 } from "./usingContext/maincomponent2"
import { Count } from "./Count/Count"
import { Input } from "./form/input"
import { Data } from "./Passing_values/data"
import { createContext,useContext,useState } from "react"
import { Parent } from "./Memo/parent"


export const App=()=>{
  // const [theme,setTheme]=useState(true)
  // const ThemeContext=useContext()
  return (
    <div>
      {/* <UseMemo/> */}
      <Parent/>
      <Data/>
      <Count/>
      {/* <Input/>
       <Maincomponent/>
      <Maincomponent2/>  */}
    </div>
    
  )
}