import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px 30px",
      }}>
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="/contact">
          <p>Contact</p>
        </NavLink>
      </div>
  )
}
export default Navbar;
