import React, {useState} from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function Navigation({currentPage, handlePageChange}) {
  


  return (
        <Navbar className="barnav"  variant="dark">
        <Container>
          <Navbar.Brand href="#home" onClick={() => handlePageChange('Home')}>Jide's Portfolio</Navbar.Brand>
          <Nav>
            <Nav.Link href="#About-me" onClick={() => handlePageChange('AboutMe')}>About me</Nav.Link>
            <Nav.Link href="#Projects" onClick={() => handlePageChange('Projects')}>Projects</Nav.Link>
            <Nav.Link href="#Background" onClick={() => handlePageChange('Background')}>Background</Nav.Link>
            <Nav.Link href="#Education" onClick={() => handlePageChange('Education')}>Education</Nav.Link>
            <Nav.Link href="#Contact" onClick={() => handlePageChange('Contact')}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar> 
  );
}

export default Navigation;
