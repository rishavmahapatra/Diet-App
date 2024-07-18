import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Bar() {
  return (
    <Navbar collapseOnSelect expand="lg"  bg="success" data-bs-theme="dark" sticky='top'>
      <Container>
        
        <Navbar.Brand href="#home">SANSFIT</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#services">Transformations</Nav.Link>
            <Nav.Link href="#pricing">Testimonials</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

