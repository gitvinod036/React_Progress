import { useEffect, UseEffect, useState } from 'react';
import axios from 'axios';

export function Fetch_id() {
    const [data, setData] = useState([])
    const [number, setNumber] = useState(null)
    console.log(number)

    const fetchdata = async () => {
        if (number != null) {
            try {
                const res = await axios.get(`https://dummyjson.com/users/${number}`)
                setData(res.data)
            }
            catch (error) {
                console.log(error)
            }
        }
        // else{
        //     const res=await axios.get("https://dummyjson.com/users/")
        //     setData(res.data)
        // }

    }
    useEffect(() => {
        fetchdata()
    }, [number])
    console.log(data)
    return <div>
        <h2>Fetch Through id</h2>
        <input type="number" onChange={(e) => (setNumber(e.target.value))} />
        <p>Entered id :{number}</p>
        data?<ul><li>Name :{data.firstName}</li>
            <li>Age :{data.age}</li>
            <li>Email :{data.email}</li></ul>
    </div>
}

