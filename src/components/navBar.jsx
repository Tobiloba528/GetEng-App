import React, {Component} from 'react';
import Logo from "../logo.png"
import "./navBar.css"
import { NavLink} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div id="nav">
        <Navbar light expand="md">
          <NavbarBrand>
            <NavLink to="/" className="text-light navlink">
              <img src={Logo} alt="GetEng" width="40px" style={{position: "relative", bottom: "7px"}}/>{" "}
              <span style={{ fontSize: "30px", fontFamily: "sans-serif" }}>
                GetEng
              </span>
            </NavLink>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="ml-auto" id="toggler"/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="navItem">
                <NavLink to="/" className="text-light navlink">
                  Resoures
                </NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink to="/jobs" className="text-light navlink">
                  Jobs
                </NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink to="/" className="text-light navlink">
                  Success stories
                </NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink to="/" className="text-light navlink">
                  Articles
                </NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink to="/" className="text-light navlink">
                  For Companies
                </NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink to="/login" className="text-light navlink">
                  Login
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
 
export default NavBar;