/** @format */

import React from "react";
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavbarMenu = () => {
  return (
    <div>

  <Navbar  expand="lg" variant="dark" style={{ backgroundColor: '#042f6c', color: '#fff' }}>
  <Container fluid>
  <Navbar.Brand href="/" className="text-white">
        <img
          alt=""
          src="https://icons-for-free.com/iconfiles/png/512/finance+money+growth+business+plant-1320567853018089765.png"
          width="40"
          height="40"
          className="d-inline-block align-top text-white"
        />{' '}
      App Finanzas yosmarweb
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/" className="text-caption">Home</Nav.Link>
        
      </Nav>
      <Form className="d-flex">
       {/*  <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        /> */}
        <Button variant="outline-primary">Calculadora</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};

export default NavbarMenu;
