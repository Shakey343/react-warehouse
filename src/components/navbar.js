import React from "react";
import "./navbar.scss";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export const NavbarW = (props) => {
  return (
    <Navbar bg="light" expand="lg" className="Navbar">
      <Container>
        <Navbar.Brand href="#home" onClick={props.onHomeClick}>
          The Warehouse
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="me-0">
            <Nav.Link href="#lfo" onClick={props.onLfoClick}>
              LFO
            </Nav.Link>
            <Nav.Link href="#rosspople" onClick={props.onRpClick}>
              Ross Pople
            </Nav.Link>
            <NavDropdown title="The Spaces" id="basic-nav-dropdown">
              <NavDropdown.Item href="#spaces/1">Studio 1</NavDropdown.Item>
              <NavDropdown.Item href="#spaces/2">Studio 2</NavDropdown.Item>
              <NavDropdown.Item href="#spaces/events">Events</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#gallery" onClick={props.onGalleryClick}>
              Gallery
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
