import { useLocation } from "react-router-dom"

export const Thankyou=()=>{
    const UserInfo=useLocation()
    console.log(UserInfo)
       return <div>
        <h4>Thank you {UserInfo.state?.name}</h4>
        <p>We Connect Through this Email {UserInfo.state?.email}</p>
        <img src="https://img.freepik.com/free-vector/thank-you-lettering_1262-6963.jpg?semt=ais_hybrid&w=740&q=80"/>
    </div>
}