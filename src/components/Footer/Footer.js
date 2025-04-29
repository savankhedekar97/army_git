import './Footer.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-glass">
        <div className="footer-columns">
          
          {/* Column 1: About */}
          <div className="footer-col">
            <h3>About NAOI</h3>
            <p>National Association of Optimist India (NAOI) promotes sailing, organizes events, and nurtures young talent in the Optimist class.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/videos">Videos</a></li>
              <li><a href="/images">Images</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div className="footer-col">
            <h3>Follow Us</h3>
            <div className="footer-social">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>

        </div>
        <hr />
        <p className="footer-copy">© {new Date().getFullYear()} NAOI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
