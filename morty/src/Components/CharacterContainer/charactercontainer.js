import React, { useState, useEffect}from "react";
import { Search } from "../Search/Search";

import CharacterList from "../CharacterList/CharacterList";
// import Character from "../Characters/Character";
import AddCharacterForm from "../AddCharacterForm/AddCharacterForm";



 function CharacterContainer() {
    const [Characters, setCharacters] = useState([]);
    const [search, setSearch] = useState("")

    //console.log(Characters);

    useEffect(() =>{
        const lookup = () =>{
          fetch(`http://localhost:8001/charactersprofile?q=${search}`)
          .then(resp => resp.json())
          .then(data => setCharacters(data))
        };
        if(search.length === 0 || search.length > 2) lookup();
      },[search])

      //console.log(data)

      // add new character function 
      function AddedCharacter (newCharacter){
        const updatedCharacter = [...Characters, newCharacter];
        setCharacters(updatedCharacter);
        //console.log(updatedCharacter)
      }

  return (
    <div>
      <Search search = {setSearch}/>
      <AddCharacterForm charaterForm={AddedCharacter} />
      <CharacterList Characters = {Characters}/>
    </div>
  )
}

export default CharacterContainer
