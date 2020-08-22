import React from 'react'
import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
    return(
      <Navbar className="navbar-expand-sm bg-dark" sticky="top">
        <Navbar.Brand href="#home">
            <img
                src="https://react-bootstrap.github.io/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Link to="/search" className="ml-auto">Search</Link>
      </Navbar>
    );
}