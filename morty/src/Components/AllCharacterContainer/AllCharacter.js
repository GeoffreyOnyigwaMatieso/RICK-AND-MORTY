import React, { useState,useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import { Card } from '../Card/Card';


function AllCharacter() {
    // setting our page number to one 
  let [pageNumber,setPageNumber] = useState(1);

  // state holding character information 
  let [fetchedData,updateFetchedData] = useState([])
  // destructuring our array 
  let {info , results } = fetchedData

  // console.log(results)
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`

  // using useEffect to fetch Data
  useEffect(()=>{
    // using IFFE i.e immediately invoked function 
    (async function(){
      // fetch our data 
      let data = await fetch(api).then(res => res.json())
      //  console.log(data.results)
      updateFetchedData(data)

    })()

  },[api]) // whenever our API changes fetch new Data 
  return (
    <div className="App">
     <h1 className="text-center ubuntu my-4">
      Rick & Morty  <span className="text-primary"> Hint Webpage </span> 
     </h1>  
     <div className="container">
      <div className="row">
        <div className="col-3">
        </div>
        <div className="col-8">
          <div className="row">
           <Card results={results}/>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
}

export default AllCharacter