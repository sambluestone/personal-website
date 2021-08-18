import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" id="myNavbar">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" id="myNavItem">
          <Nav.Link href="/about" id="myNavItem">About</Nav.Link>
          <Nav.Link href="/projects" id= "myNavItem">Projects</Nav.Link>
          <Nav.Link href="/contact" id= "myNavItem">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;