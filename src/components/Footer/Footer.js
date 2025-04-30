import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
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
            <li><Link to="/forms/new-club-membership">New Club Membership Form</Link></li>
            <li><Link to="/forms/issue-opti-sail-number">Issue OPTI Sail Number Form</Link></li>
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
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Indian Optimist Association. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
