import React from 'react'
import { NavLink } from 'react-bootstrap'

const NavBar = () => {
  return (
    <div style={{backgroundColor:"skyblue", padding:"10px"}}>
        <NavLink to="/">Home</NavLink>
    </div>
  )
}

export default NavBar
