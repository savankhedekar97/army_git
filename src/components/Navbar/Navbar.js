import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><NavLink to="/" className="nav-link">Home</NavLink></li>

        <li className="nav-item mega-menu">
          <span className="nav-link">Menu</span>
          <div className="mega-content">
            
            <div className="mega-column">
              <h4>Events</h4>
              <ul>
                <li><NavLink to="/domestic-sailing-calendar">Domestic Sailing Calendar</NavLink></li>
                <li><NavLink to="/nor">NOR</NavLink></li>
                <li><NavLink to="/results">Results</NavLink></li>
                <li><NavLink to="/view-calendar">View Calendar</NavLink></li>
              </ul>
            </div>
            
            <div className="mega-column">
              <h4>Multimedia</h4>
              <ul>
                <li><NavLink to="/images">Photo Gallery</NavLink></li>
                <li><NavLink to="/videos">Videos</NavLink></li>
              </ul>
            </div>
            
            <div className="mega-column">
              <h4>Documents &amp; Rules</h4>
              <ul>
                <li><NavLink to="/constitution">Constitution</NavLink></li>
                <li><NavLink to="/optimist-rules">Optimist Rules</NavLink></li>
                <li><NavLink to="/forms/new-club-membership">New Club Membership</NavLink></li>
                <li><NavLink to="/forms/issue-opti-sail-number">Issue of OpTi Sail Number</NavLink></li>
              </ul>
            </div>

          </div>
        </li>

        <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
      </ul>
    </nav>
  );
}
