import React from "react";
import { useMemo } from "react";
export const Child=React.memo((props)=>{
    console.log(props)
    console.log("child")
    return <div>
        <p>preview {props.Userdata.name}</p>
        <p></p>
    </div>
})
