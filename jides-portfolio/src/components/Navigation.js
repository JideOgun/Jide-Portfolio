import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function Navigation() {
const handleRender = (e) => {
  console.log(e.target.textContent)
}

  return (
    
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Jide's Portfolio</Navbar.Brand>
          <Nav>
            <Nav.Link href="#About-me" onClick={handleRender}>About me</Nav.Link>
            <Nav.Link href="#Projects" onClick={handleRender}>Projects</Nav.Link>
            <Nav.Link href="#Background" onClick={handleRender}>Background</Nav.Link>
            <Nav.Link href="#About-me" onClick={handleRender}>Education</Nav.Link>
            <Nav.Link href="#contact" onClick={handleRender}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
  );
}

export default Navigation;
