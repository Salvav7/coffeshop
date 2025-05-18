// src/components/Header.js
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Cafetería Aurora"
            style={{ height: "100px", width: "auto", marginRight: "10px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" activeStyle={{ color: "#ff6f61" }}>
              Inicio
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/menu"
              activeStyle={{ color: "#ff6f61" }}
            >
              Menú
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/stores"
              activeStyle={{ color: "#ff6f61" }}
            >
              Tiendas
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
