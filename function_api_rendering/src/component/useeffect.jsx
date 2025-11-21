import { useState, useEffect } from "react"
import {Filter} from './gender'
import axios from "axios"

export function UseEffect() {
    const [user, setUser] = useState([])

    function fetchdata(){
             axios.get("https://dummyjson.com/users")
            .then(res => setUser(res.data.users))
            .catch(err => console.log(err))
    }

    useEffect(() => {
         fetchdata()
    }, []);
    return <>
        <h3>UseEffect</h3>
        {user.length > 0 ?user.map((ele)=><ul key={ele.id}><li>{ele.firstName}--{ele.email}</li></ul>):<p>Loading</p>}
        <Filter/>
    </>
}