import { Grandchild } from "./grandchild"

export const Child=(props)=>{
    const {userInfo}=props
    return <div>
        <h3>Child Component</h3>
        {/* <p>{userInfo.name}</p> */}
        <Grandchild userdata={userInfo}/>
    </div>
}