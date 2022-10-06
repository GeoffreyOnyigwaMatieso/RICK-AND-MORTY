import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import { Card } from "./Components/Card/Card";
import { Filters } from "./Components/Filters/Filters";
function App() {
  return (
    <div className="App">
     <h1 className="text-center ubuntu my-4">
      Rick & Morty  <span className="text-primary"> Webpage </span> 
     </h1>  
     <div className="container">
      <div className="row">
        <div className="col-3">
          <Filters />
        </div>
        <div className="col-8">
          <div classsName="row">
           <Card />
          </div>
        </div>
      </div>
     </div>
    </div>
  );   
}

export default App;
