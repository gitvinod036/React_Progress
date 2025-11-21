import { useParams } from "react-router-dom"

export const Student=()=>{
     const students=[{id:1,name:"vinod",class:"10th"},{id:2,name:"jerry",class:"12th"}]
       

     const {id}=useParams()
      const data=students.find(v=>v.id=id)
    return <>
       <h1>Studenty Details Page</h1>
       <p>name {data.name}</p>
       <p>Class {data.id}</p>
    {}
    </>
}