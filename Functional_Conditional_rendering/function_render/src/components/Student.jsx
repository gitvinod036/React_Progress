
export function Student(props){
    console.log(props)
    return <>
      <h3>{props.title}</h3>
       {props.studentdetails.map((item,key)=><ul>
        <li>{item}</li>
     </ul>
    )}
    </>

}