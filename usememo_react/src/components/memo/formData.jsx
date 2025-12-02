import React from 'react'


export const FormData=React.memo((props)=>{
    console.log("form")
    console.log(props)
     return <div>
          <p>Form Data</p>
     <p>{props.userData.username}</p>
     <p>{props.userData.password}</p>
     </div>
}
)

// const FormData = (props) => {
//     console.log("form")
//   return (
//     <div>
//       <p>Form Data</p>
//       <p>{props.username}</p>
//       <p>{props.password}</p>
//     </div>
//   )
// }

// export default FormData;
