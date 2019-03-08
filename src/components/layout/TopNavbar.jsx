import React from 'react';
import { Navbar } from 'reactstrap';

const TopNavbar = () => (
  <Navbar expand="lg" fixed="top" className="navbar-trans navbar-default">
    <div className="container">
      <button
        className="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarDefault"
        aria-controls="navbarDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <a className="navbar-brand text-brand" href="index.html">
        <span className="color-b">Anant</span>
      </a>

      <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" href="login.html">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="signup.html">Sign Up</a>
          </li>
        </ul>
      </div>
    </div>
  </Navbar>
);

export default TopNavbar;
