import { useState } from "react";

export function RegisterForm() {
    const [name, setName] = useState("")
    const [Age, setAge] = useState("")
    const [Gender, setGender] = useState("")
    const [Bio, SetBio] = useState("")
    const [nameError, setnameError] = useState("")
    const [AgeError, setAgeError] = useState("")

    const Submit = (e) => {
        e.preventDefault()
        console.log("Submit")
        if (name.length <= 0) {
            setnameError("Enter Name")
            console.log(name)
        }
        function HandleAge(e) {
        const agetonum = parseInt(e.target.value)
        if (agetonum > 0 && agetonum < 100) {
            setAge(e.target.value)
            setAgeError("")
        } else {
            setAgeError("Need Age in 0 to 100")
        }
    }
    }

    return <>
        <form onSubmit={Submit}>
            <p>Username</p>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <p>{nameError}</p>
            <p>Age</p>
            <input type="number" onchange={() => {HandleAge(e)}} />
            <p>{AgeError}</p>

            <button>Submit</button>
        </form>
    </>
}