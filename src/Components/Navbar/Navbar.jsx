import React from "react";
import "./Navbar.css";
import logo from "../../Assest//images/logo.png";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header className="full_nav">
        <div className="header">
          <div className="container">
            <nav className="navbar navbar-expand-lg">
              <NavLink to="/" className="navbar-brand" href="#">
                <img src={logo} alt="logo" />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-stream navbar-toggler-icon"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <NavLink to="/" className="nav-link">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/about" className="nav-link">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/product" className="nav-link">
                      Product
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/gallery" className="nav-link">
                      Gallery
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/contact" className="nav-link">
                      Contact
                    </NavLink>
                  </li>
                </ul>
                <div className="header_right">
                  <div className="text-lg-end">
                    <span>Call US !</span>
                    <span className="phone_number">+9159868149688</span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
