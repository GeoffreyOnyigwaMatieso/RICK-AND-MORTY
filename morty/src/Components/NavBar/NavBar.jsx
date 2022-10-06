import React from 'react'
import { NavLink} from "react-router-dom"

//styling our NavBar 

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>

      <NavLink
        to="/allcharacter"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        AllCharacters 
      </NavLink>

      <NavLink
        to="/seasons"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Seasons 
      </NavLink>

      <NavLink
        to="/webshop"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Webshop 
      </NavLink>
    </div>
  )
}

export default NavBar