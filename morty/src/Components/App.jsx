// src/components/App.js
import React from 'react'
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Seasons from "./Seasons";
import  Webshop from "./Webshop";
import NavBar from "./NavBar";


function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/profile">
          <Profile />
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