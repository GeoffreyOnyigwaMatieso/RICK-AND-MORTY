import React from 'react'
import  Character from '../Characters/Character'

// This component Displays the Character in form of a list 

/*
map the data coming from the Character in the table
hold the mapped data in a characterList variable 
*/

 function CharacterList({Characters}) {
    // map data from character in the table store them in a variable characterlist variable
    const characterList = Characters.map(item=>{
        return <Character key={item.id} item = {item}/>
    })

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">name</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">status</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">LastKnownLocation</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Firstseenin</h3>
          </th>
        </tr>
        {characterList}
      </tbody>
    </table>
  )
}
export default CharacterList