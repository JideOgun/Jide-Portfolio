import React, {useState} from "react";
import { Navbar, Nav } from "react-bootstrap";

function Navigation({currentPage, handlePageChange}) {
  console.log(currentPage)


  return (
        <Navbar className="barnav"  variant="dark">
        <div className='header-container'>
          <Navbar.Brand id="navBrandText" href="#home" onClick={() => handlePageChange('Home')}>Jide Ogunbanjo</Navbar.Brand>
          <Nav className="navText">
            <Nav.Link  href="#Projects" onClick={() => handlePageChange('Projects')}>Projects</Nav.Link>
            <Nav.Link href="#Background" onClick={() => handlePageChange('Background')}>Background</Nav.Link>
            <Nav.Link href="#About-me" onClick={() => handlePageChange('AboutMe')}>About me</Nav.Link>
            <Nav.Link href="#Contact" onClick={() => handlePageChange('Contact')}>Contact</Nav.Link>
          </Nav>
        </div>
      </Navbar> 
  );
}

export default Navigation;
