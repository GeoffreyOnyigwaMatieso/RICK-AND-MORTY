import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import './Home.css'

function Home() {
  return (
    <div>
      <div className="getstarted">
                <img src="Images/bgone.png" alt="" img-fluid/>    
                </div>
                <div class="text-center">
                <img src="Images/logo.png" alt ="" img-fluid/>
                </div>
                <h1 className="ubuntu my-4">Rick & <span className="text-primary">Morty</span> </h1>
                    <span style={{color:'White'}}>
                    <p class="fs-6  fw-bold font-monospace" > Rick and Morty is an American adult animated science <br />fiction sitcom created by Justin Roiland and Dan 
                     <br />Harmon for Cartoon Network's late night programming block Adult swim </p>
                    </span>
            </div>
    
  )
}

export default Home


