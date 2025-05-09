import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="menu-bar sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          {/* Brand Logo & Text */}
          <div className="brand-box" onClick={() => navigate("/")}>
            <img
              src="/assets/images/LOGO NOAI.jpg"
              alt="NOAI Logo"
              className="brand-logo"
            />
            <div className="text-wrapper">
              <h3 className="brand-text">
                National Optimist<br />
                Association of <span>India</span>
              </h3>
            </div>
          </div>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-5">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown hover-dropdown">
                <span className="nav-link dropdown-toggle" role="button">Events</span>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/domestic-sailing-calendar">Domestic Sailing Calendar</Link></li>
                  <li><Link className="dropdown-item" to="/nor">NOR</Link></li>
                  <li><Link className="dropdown-item" to="/results">Results</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown hover-dropdown">
                <span className="nav-link dropdown-toggle" role="button">Multimedia</span>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/images">Images</Link></li>
                  <li><Link className="dropdown-item" to="/videos">Videos</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown hover-dropdown">
                <span className="nav-link dropdown-toggle" role="button">Documents & Rules</span>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/constitution">Constitution</Link></li>
                  <li className="dropdown-submenu">
                    <span className="dropdown-item dropdown-toggle" role="button">Forms</span>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/forms/new-club-membership">New Club Membership Form</Link></li>
                      <li><Link className="dropdown-item" to="/forms/issue-opti-sail-number">Issue OPTI Sail Number Form</Link></li>
                    </ul>
                  </li>
                  <li><Link className="dropdown-item" to="/optimist-rules">Optimist Class Rules</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news">News</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}