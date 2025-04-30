import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import ImageCarousel from "../../components/Carousel";

const Home = () => {
  return (
    <div className="home-container">
       <ImageCarousel/>
       <div className="card-section">
        <div className="home-card">
          <h2>NOAI</h2>
          <a href="/assets/document/NOAI History.docx" download className="btn-download">
             NAOI History
            </a>
        </div>

        <div className="home-card">
          <h2>Org NOAI</h2>
          <a href="/assets/document/Org NOAI (Pending).pptx" download className="btn-download">
             Organization NAOI 
            </a>
        </div>

      </div>
      <div className="card-section">
        <div className="home-card">
          <h2>Events</h2>
          <Link to="/domestic-sailing-calendar">Calendar</Link>
          <Link to="/results">Results</Link>
        </div>

        <div className="home-card">
          <h2>Multimedia</h2>
          <Link to="/videos">Videos</Link>
          <Link to="/images">Photo Gallery</Link>
        </div>

        <div className="home-card">
          <h2>Contact</h2>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
