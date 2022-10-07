import React, { useState, useEffect}from "react";
import { CharacterList } from "../CharacterList/CharacterList";
import { Search } from "../Search/Search";



 function CharacterContainer() {
    const [Characters, setCharacters] = useState([]);
    const [search, setSearch] = useState("")

    useEffect(() =>{
        const lookup = () =>{
          fetch(`http://localhost:8001/charactersprofile?q=${search}`)
          .then(resp => resp.json())
          .then(data => setCharacters(data))
        };
        if(search.length === 0 || search.length > 2) lookup();
      },[search])

  return (
    <div>
      <Search search = {setSearch}/>
      
      <CharacterList Characters = {Characters}/>
    </div>
  )
}

export default CharacterContainer
