import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import './Home.css'

function Home() {
  return (
    <div>
      <div className="welcome">
                <div className="welcome">
                <h1 className="ubuntu my-4">Rick & <span className="text-primary">Morty</span> </h1>
                <div className="getstarted">
                <img src="Images/bgone.png" alt="" img-fluid/>    
                </div>
                <h1 className="ubuntu my-4">Rick & <span className="text-primary">Morty</span> </h1>
                    <span style={{color:'White'}}>
                    <p className ="fs-6  fw-bold font-monospace" > Rick and Morty is an American adult animated science <br />fiction sitcom created by Justin Roiland and Dan 
                     <br />Harmon for Cartoon Network's late night programming block Adult swim </p>
                    </span>
                </div>
              
            </div>
    </div>
  )
}

export default Home


