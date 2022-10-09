import React from 'react'
import { NavLink} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"

//styling our NavBar 



function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid  "> 
      <NavLink 
        class="nav-link active"
        to="/"
        exact
      >
        Home
      </NavLink>

      <NavLink
        to="/allcharacter"
        exact
      >
        CharacterList 
      </NavLink>

      <NavLink
        to="/characterhint"
        exact
      >
        Character Hint 
      </NavLink>
      </div>
      </nav>
   
  )
}

export default NavBar








