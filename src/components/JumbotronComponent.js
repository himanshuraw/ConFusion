import React,{Component}  from "react";
import '../App.css'

class Jumbotron extends Component{
  render(){
    return(
      <div className="jumbotron">
        <div className ="container ">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
                <h1>Ristorante Con Fusion</h1>
                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary sense!</p>
            </div>
          </div>
        </div>
      </div>
    
    )
  }
}

export default Jumbotron;