export function StudentScore(props){
    console.log(props)
    return <>
    <h3>{props.name}</h3>
     {/* {props.score >50 ?<p style={{color:"green"}}>{props.score}</p>:<p style={{color:"red"}}>{props.score}</p>} */}
     <p style={{color:props.score>50?"green":"red"}}>{props.score}</p>
    </>
}