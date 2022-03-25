import React, {useState} from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Home from "./Home";

function Navigation({currentPage, handlePageChange}) {
  

// const handleRender = (e) => {
//   console.log(e.target.textContent)
//   if(e.target.textContent === 'Home') {
//     return <Home/>
//   }
//   if(e.target.textContent === 'About') {
    
//   }
// }

  return (
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Jide's Portfolio</Navbar.Brand>
          <Nav>
            <Nav.Link href="#About-me" onClick={() => handlePageChange('AboutMe')}>About me</Nav.Link>
            <Nav.Link href="#Projects" onClick={() => handlePageChange('Projects')}>Projects</Nav.Link>
            <Nav.Link href="#Background" onClick={() => handlePageChange('Background')}>Background</Nav.Link>
            <Nav.Link href="#Education" onClick={() => handlePageChange('AboutMe')}>Education</Nav.Link>
            <Nav.Link href="#Contact" onClick={() => handlePageChange('Contact')}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar> 
  );
}

export default Navigation;
