import React,{Component} from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Container} from 'reactstrap';
import Jumbotron from "./JumbotronComponent";
import { NavLink } from 'react-router-dom';
//Since I'm using bootstrap 5 so idh jumbotron
//therefore i created a jumbotron component
class Header extends Component{

  constructor(props){
    super(props);

    this.state={
      isNavOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav(){
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render(){
    return(
      <>
        <Navbar dark expand="md">
          <div className='container'>
            <NavbarToggler onClick={this.toggleNav}/>
            <NavbarBrand className='mr-auto' href="/">
              <img src='assets/images/logo.png' height='30' width='41' alt='Ristorante Con Fusion'/>
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span>Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg"></span>About us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg"></span>Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg"></span>Contact us
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron/>
      </>
    )
  }
}

export default Header;