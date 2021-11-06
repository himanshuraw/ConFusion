import React,{Component} from "react";
import { Navbar, NavbarBrand} from 'reactstrap';
import Jumbotron from "./JumbotronComponent";
//Since I'm using bootstrap 5 so idh jumbotron
//therefore i created a jumbotron component
class Header extends Component{
  render(){
    return(
      <>
        <Navbar dark>
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Jumbotron/>
      </>
    )
  }
}

export default Header;