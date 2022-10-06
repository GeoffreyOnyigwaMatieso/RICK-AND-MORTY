// src/components/App.js
import React from 'react'
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home"
import AllCharacter from "./Pages/AllCharacters/AllCharacter"
import Seasons from "./Components/Seasons/Seasons";
import  Webshop from "./Components/Webshop/Webshop";
import NavBar from "./Components/NavBar/NavBar";


function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/allcharacter">
          <AllCharacter />
        </Route>
        
        <Route exact path="/seasons">
          <Seasons />
        </Route>
        <Route exact path="/webshop">
          <Webshop />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App