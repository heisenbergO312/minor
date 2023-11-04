import React from "react"
import {NavLink,Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
    <Navbar expand="lg" className="bg-body-tertiary gradient-background">
      <Container>
      <Link to="/" className="navbar-brand" style={{padding:'0 10em 0 1em'}}>Unlimited Insurance</Link>
        {/* <Navbar.Brand href="#home" style={{padding:'0 10em 0 1em'}}>Unlimited Insurance</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav me-auto dropdowns mb-2 mb-lg-0">
            <NavDropdown title="Claims" id="basic-nav-dropdown">
              <NavDropdown.Item><NavLink to="/kycapp" className="nav-link" >Kyc Application</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/documents" className="nav-link" >Document Upload</NavLink></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resources" id="basic-nav-dropdown">
            <NavDropdown.Item><NavLink to="/downloads" className="nav-link" >Download</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/about" className="nav-link" >About Us</NavLink></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Support" id="basic-nav-dropdown">
              <NavDropdown.Item><NavLink to="/contact" className="nav-link" >Contact Us</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/policy" className="nav-link" >Policy</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/login" className="nav-link" >Login</NavLink></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
