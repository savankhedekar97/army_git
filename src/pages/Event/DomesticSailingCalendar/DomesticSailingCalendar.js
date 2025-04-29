import React, { useState, useEffect } from "react";
import "./DomesticSailingCalendar.css";
import { FaEye, FaDownload } from "react-icons/fa";

const images = [
  "/assets/gallery/IMG_0031.jpg",
  "/assets/gallery/IMG_0041.jpg",
  "/assets/gallery/IMG_0065.jpg",
  "/assets/gallery/IMG_0085.jpg",
];

const DomesticSailingCalendar = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div style={backgroundImageStyle}>
      <div className="domestic-overlay">
        <div className="calendar-card">
          <h1>Domestic Sailing Calendar 2025</h1>
          <p>View or Download the official NAOI Sailing Calendar easily.</p>
          <div className="calendar-buttons">
            <a
              href="/assets/documents/domestic_sailing_calendar_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="view-button"
            >
              <FaEye className="button-icon" /> View Calendar
            </a>
            <a
              href="/assets/documents/domestic_sailing_calendar_2025.pdf"
              download
              className="download-button"
            >
              <FaDownload className="button-icon" /> Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomesticSailingCalendar;
