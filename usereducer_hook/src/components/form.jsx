import React, { useReducer } from 'react'


const formReducer=(state,action)=>{
    console.log(action)
    switch(action.type){
        case "clothings":
            return {...state,subcategory:["Mens clothing","women's clothing","kids","summer wear","winter wear"]}
        case "Electronics":
            return {...state,subcategory:["Laptops","Camera","Device"]}
        
        default:
            return {...state,subcategory:[]}
    }
}


const initialstate={
    catergory:["clothings","Electronics"],
    subcategory:[]
}


const Form = () => {
    const [state,dispatch]=useReducer(formReducer,initialstate)
  return (
    <div>
     <form>
        <p>Select Category</p>
        <select onChange={(e)=>{dispatch({type:e.target.value})}}>
            <option value={""}>Select any option</option>
            {state.catergory.map((val)=><option key={val} value={val}>{val}</option>)}
        </select>

        <p>Select sub category</p>
        <select onChange={(e)=>dispatch({type:e.target.value})}>
            <option value={""}>select any sub_category</option>
            {state.subcategory.map((val)=><option key={val} value={val}>{val}</option>)}
        </select>
     </form>
    </div>
  )
}

export default Form
