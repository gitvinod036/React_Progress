import React from 'react'
import { memo } from 'react'

 const Child =(props) => {
    console.log("child")
  return (
    <div>
      <p>Random Number {props.number}</p>
    </div>
  )
}

export const ChildMemo=React.memo(Child)
 