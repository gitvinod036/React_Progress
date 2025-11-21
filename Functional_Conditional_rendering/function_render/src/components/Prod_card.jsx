export function Product_Card(props){
    console.log(props)
    return <>
     <h3>{props.title}</h3>
     {props.proddetails.map((element,index)=>
    <p key={index}>{element.name} --<span>{element.price}</span></p>)}
    </>
}