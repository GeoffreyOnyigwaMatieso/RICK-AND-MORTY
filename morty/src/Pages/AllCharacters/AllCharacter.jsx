import React, { useState, useEffect}from "react";

function AllCharacter() {
  
  const [characterList ,setCharacterList] = useState([]);


  // fetching data from the api
  useEffect(()=>{
    fetch("https://rickandmortyapi.com/api/character")
    .then(resp => resp.json())
    .then(data => console.log(data))

  },[])
  return (
    <div>
      <h1> Main Characters! </h1>

    </div>
  )
}

export default AllCharacter