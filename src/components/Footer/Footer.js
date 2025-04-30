import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="army-footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Events</h4>
          <ul>
            <li><Link to="/domestic-sailing-calendar">Calendar</Link></li>
            <li><Link to="/results">Results</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Documents & Rules</h4>
          <ul>
            <li><Link to="/constitution">Constitution</Link></li>
            <li><Link to="/results">Forms</Link></li>
            <li><Link to="/optimist-rules">Optimist Class Rules</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Multimedia</h4>
          <ul>
            <li><Link to="/videos">Videos</Link></li>
            <li><Link to="/images">Photo Gallery</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
