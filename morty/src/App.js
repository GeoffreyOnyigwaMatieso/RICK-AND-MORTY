import React  from 'react'
import { Route, Switch } from "react-router-dom";
import AllCharacter from './Components/AllCharacterContainer/AllCharacter';
import Home from './Components/Home/Home';
import CharacterContainer from './Components/CharacterContainer/charactercontainer';
import NavBar from './Components/NavBar/NavBar';

function App() {

  return (
    <div className="App">
    <NavBar />
    <Switch>
    <Route exact path ="/characterhint">
    <AllCharacter />
    </Route>

    <Route exact path ="/allcharacter">
  
    <CharacterContainer />
    </Route>

    <Route exact path ="/">
    <Home />
    </Route>
    </Switch> 
    </div>
  );   
}

export default App;
