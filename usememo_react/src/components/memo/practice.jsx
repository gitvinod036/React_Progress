import React from 'react'
import { memo } from 'react'
export const Practice =React.memo ((props) => {
    console.log("practice")
    console.log(props)
  return (
    <div>
      <p>Practice</p>
      <h3>UserEmail {props.details.email}</h3>
      <h3>Mobile {props.details.mobile}</h3>
    </div>
  )
})

