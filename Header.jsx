import { useState } from "react";
import {NavLink,Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from '@mui/material/Button';

function Header() {
  const [showClaims, setShowClaims] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [showSupport, setShowSupport] = useState(false);

  const handleClaimsMouseEnter = () => {
    setShowClaims(true);
  };

  const handleClaimsMouseLeave = () => {
    setShowClaims(false);
  };

  const handleResourcesMouseEnter = () => {
    setShowResources(true);
  };

  const handleResourcesMouseLeave = () => {
    setShowResources(false);
  };

  const handleSupportMouseEnter = () => {
    setShowSupport(true);
  };

  const handleSupportMouseLeave = () => {
    setShowSupport(false);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary gradient-background " style={{ color:"white" }} >
      <Container>
        <Link to="/" className="navbar-brand" style={{ padding: '0 10em 0 1em',color:"white" }}>
          {/* ClaimQuick */}
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav me-auto dropdowns mb-2 mb-lg-0" >
            <NavDropdown
              title="Claims"
              id="claims-dropdown"
              onMouseEnter={handleClaimsMouseEnter}
              onMouseLeave={handleClaimsMouseLeave}
              show={showClaims}
              
            >
              <NavDropdown.Item >
                {/* <NavLink to="/kycapp" className="nav-link"  >
                  Kyc Application
                </NavLink> */}
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/documents" className="nav-link">
                  Document Upload
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Resources"
              id="resources-dropdown"
              onMouseEnter={handleResourcesMouseEnter}
              onMouseLeave={handleResourcesMouseLeave}
              show={showResources}
            >
              <NavDropdown.Item>
                <NavLink to="/downloads" className="nav-link">
                  Download
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/about" className="nav-link">
                  About Us
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Support"
              id="support-dropdown"
              onMouseEnter={handleSupportMouseEnter}
              onMouseLeave={handleSupportMouseLeave}
              show={showSupport}
            >
              <NavDropdown.Item>
                <NavLink to="/contact" className="nav-link">
                  Contact Us
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/policy" className="nav-link">
                  Policy
                </NavLink>
              </NavDropdown.Item>
              {/* <NavDropdown.Item>
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </NavDropdown.Item> */}
            </NavDropdown>
            <NavLink to="/login" className="nav-link">
              <Button
                variant="outlined"
                style={{ marginLeft: "15em", fontFamily: 'Nunito', color: "#fff", border: '1px solid white' }}
              >
                Login
              </Button>
              </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;