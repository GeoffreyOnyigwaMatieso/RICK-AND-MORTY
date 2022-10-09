import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"

function Home() {
  return (
    <div>
      <div className="welcome">
                <div className="welcomeText">
                <h1 className="ubuntu my-4">Rick & <span className="text-primary">Morty</span> </h1>
                    <p> Rick and Morty is an American adult animated science <br />fiction sitcom created by Justin Roiland and Dan 
                     <br />Harmon for Cartoon Network's late night programming block Adult swim </p>
                </div>
                <div className="getstarted">
                    <h2>I love Rick and Morty </h2>
                    <img src="./Assets/slide_1.png" alt=" " />   
                </div>
            </div>
    </div>
  )
}

export default Home


