import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/companies">Companies</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/placementData">Placements</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/home">Higher Studies</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
