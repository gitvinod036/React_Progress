
import { useEffect, useState } from "react"
import axios from "axios"

export function Filter() {
    const [user, setUser] = useState([])
    const [gender, setGenders] = useState([])
    const [select, setSelect] = useState("All")

    const Fetchdata = async () => {
        if (select == "All") {
            try {
                const res = await axios.get("https://dummyjson.com/users")
                for (const val of res.data.users) {
                    if (!gender.includes(val.gender)) {
                        gender.push(val.gender) 
                    }
                }
                setGenders(gender)
                setUser(res.data.users)
            } catch (error) {
                console.log(error)
            }
        }
        else {
            try {
                const res = await axios.get(`https://dummyjson.com/users/filter?key=gender&value=${select}`)
                setUser(res.data.users)
            }
            catch (error) {
                console.log(error)
            }
        }

    }
    useEffect(() => {
        Fetchdata()
    }, [select])
    return <div>
        <h2>Filtering</h2>
        <div>
            <div>
                <select onChange={(e) => setSelect(e.target.value)}>
                    <option value="All">All</option>
                    {gender.map((ele) => <option value={ele}>{ele}</option>)}
                </select>
            </div>
            {user.length > 0 ? user.map((ele) => <ul key={ele.id}><li>{ele.firstName}</li><li>{ele.gender}</li></ul>) : <p>Loading</p>}
        </div>
    </div>
}