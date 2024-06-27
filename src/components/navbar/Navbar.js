import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Navbar.css';

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="mx-auto">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/companies">Companies</Nav.Link>
          <NavDropdown title="Placements" id="navbarDropdown">
            <NavDropdown.Item as={NavLink} to="/placementForm">Placement Form</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/placementData">Placement Data</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/medainPlacemnts">Reports</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={NavLink} to="https://postgraduation-frontend.vercel.app/" target="_blank" rel="noopener noreferrer">Higher Studies</Nav.Link>
          <Nav.Link as={NavLink} to="https://edcell-fp-frontend.vercel.app/" target="_blank" rel="noopener noreferrer">Ed Cell</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
