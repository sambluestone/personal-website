import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from 'react-bootstrap'
import React from "react";

const NavBar = () => {
  return (
    <header>
      <Container>
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" id="myNavbar">
        <Navbar.Brand href="#" id="brand">Sam Bluestone</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" id="myNavItem">
              <Nav.Link href="#about" id="about">About</Nav.Link>
              <Nav.Link href="#work" id= "work">Work Experience</Nav.Link>
              <Nav.Link href="#projects" id= "projects">Projects</Nav.Link>
              <Nav.Link href="#contact" id= "contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default NavBar;