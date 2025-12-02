
export const Grandchild=(props)=>{
    const {userdata}=props
    return <div>
      <h4>Grand Child </h4>
      <p>{userdata.name}</p>
      <p>{userdata.age}</p>
    </div>
}