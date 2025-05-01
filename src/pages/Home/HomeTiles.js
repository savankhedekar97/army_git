import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Optional: if you want to add specific styles
const images = [
  "/assets/gallery/IMG_0031.jpg",
  "/assets/gallery/IMG_0041.jpg",
  "/assets/gallery/IMG_0065.jpg",
  "/assets/gallery/IMG_0085.jpg",
];
const HomeCards = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImageStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    // minHeight: "100vh",

    display: "flex",
    flexDirection: "column",
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={backgroundImageStyle}>
      <div className="home-tile">
        <div className="card-section ">
          <div className="home-card">
            <h2 className="card-title">NOAI</h2>
            <a
              href="/assets/document/NOAI History.docx"
              download
              className="btn-download /sub-card-title"
            >
              NAOI History
            </a>
          </div>

          <div className="home-card">
            <h2 className="card-title">Org NOAI</h2>
            <a
              href="/assets/document/Org NOAI (Pending).pptx"
              download
              className="btn-download sub-card-title"
            >
              Organization NAOI
            </a>
          </div>
        </div>

        <div className="card-section">
          <div className="home-card">
            <h2 className="card-title">Events</h2>
            <Link className="sub-card-title" to="/domestic-sailing-calendar">
              Calendar
            </Link>
            <Link className="sub-card-title" to="/results">
              Results
            </Link>
          </div>

          <div className="home-card">
            <h2 className="card-title">Multimedia</h2>
            <Link className="sub-card-title" to="/videos">
              Videos
            </Link>
            <Link className="sub-card-title" to="/images">
              Photo Gallery
            </Link>
          </div>

          <div className="home-card">
            <h2 className="card-title">Contact</h2>
            <Link className="sub-card-title" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
