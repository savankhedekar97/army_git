import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMobileMenu = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <div className="menu-bar sticky-top">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid justify-content-between align-items-center">
            {}
            <div className="d-flex align-items-center w-100 justify-content-between">
              {/* Brand Logo */}
              <div className="brand-box" onClick={() => navigate("")}>
                <img
                  src="/assets/images/LOGO NOAI.jpg"
                  alt="NOAI Logo"
                  className="brand-logo"
                />
                <div className="text-wrapper">
                  <h3 className="brand-text">
                    National Optimist
                    <br />
                    Association of <span>India</span>
                  </h3>
                </div>
              </div>

              {}
              <div
                className="mobile-menu-icon d-lg-none"
                onClick={toggleMobileMenu}
              >
                <span
                  className="navbar-toggler-icon"
                  style={{ color: "white" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-list"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                    />
                  </svg>
                </span>
              </div>
            </div>

            
            <div
              className="collapse navbar-collapse d-none d-lg-flex"
              id="navbarNav"
            >
              <ul className="navbar-nav ms-auto me-5">
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown hover-dropdown">
                  <span className="nav-link dropdown-toggle" role="button">
                    Events
                  </span>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/domestic-sailing-calendar"
                      >
                        Domestic Sailing Calendar
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/nor">
                        NOR
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/results">
                        Results
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown hover-dropdown">
                  <span className="nav-link dropdown-toggle" role="button">
                    Multimedia
                  </span>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/images">
                        Images
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/videos">
                        Videos
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown hover-dropdown">
                  <span className="nav-link dropdown-toggle" role="button">
                    Documents & Rules
                  </span>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/constitution">
                        Constitution
                      </Link>
                    </li>
                    <li className="dropdown-submenu">
                      <span
                        className="dropdown-item dropdown-toggle"
                        role="button"
                      >
                        Forms
                      </span>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/forms/new-club-membership"
                          >
                            New Club Membership Form
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/forms/issue-opti-sail-number"
                          >
                            Issue OPTI Sail Number Form
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/optimist-rules">
                        Optimist Class Rules
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/news">
                    News
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

    
      <div className={`mobile-nav-canvas ${isModalOpen ? "open" : ""}`}>
        {isModalOpen && (
          <button className="close-button" onClick={toggleMobileMenu}>
            ×
          </button>
        )}
        <ul className="mobile-nav-links">
          <li>
            <Link to="" onClick={toggleMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/domestic-sailing-calendar" onClick={toggleMobileMenu}>
              Domestic Sailing Calendar
            </Link>
          </li>
          <li>
            <Link to="/nor" onClick={toggleMobileMenu}>
              NOR
            </Link>
          </li>
          <li>
            <Link to="/results" onClick={toggleMobileMenu}>
              Results
            </Link>
          </li>
          <li>
            <Link to="/images" onClick={toggleMobileMenu}>
              Images
            </Link>
          </li>
          <li>
            <Link to="/videos" onClick={toggleMobileMenu}>
              Videos
            </Link>
          </li>
          <li>
            <Link to="/constitution" onClick={toggleMobileMenu}>
              Constitution
            </Link>
          </li>
          <li>
            <Link to="/forms/new-club-membership" onClick={toggleMobileMenu}>
              New Club Membership Form
            </Link>
          </li>
          <li>
            <Link to="/forms/issue-opti-sail-number" onClick={toggleMobileMenu}>
              Issue OPTI Sail Number Form
            </Link>
          </li>
          <li>
            <Link to="/optimist-rules" onClick={toggleMobileMenu}>
              Optimist Class Rules
            </Link>
          </li>
          <li>
            <Link to="/news" onClick={toggleMobileMenu}>
              News
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
