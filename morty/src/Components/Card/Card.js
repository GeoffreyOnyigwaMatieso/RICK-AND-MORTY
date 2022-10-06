import React from 'react'

export const Card = ({results}) => {
    // console.log(results)

    // conditional rendering of the results 
    let display;
    if(results){
        // using map function to automatically display our cards 
        display = results.map(x=>{
            // destructuring our x variable holder 
            let {id, name} = x 
            return(<div key={id} className='col-4'>{name}</div>)
        })
    } else{
     display =  "No Characters Found"
    }
  return (
    <div>{display}</div>
  )
}
