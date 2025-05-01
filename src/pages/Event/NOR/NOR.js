import React, { useState, useEffect } from "react";
import "./NOR.css";
import { FaEye, FaDownload } from "react-icons/fa";

const images = [
  "/assets/gallery/IMG_0041.jpg",
  "/assets/gallery/IMG_0065.jpg",
  "/assets/gallery/IMG_0085.jpg",
  "/assets/gallery/IMG_0031.jpg",
];

const NOR = () => {
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
          <h1>Notice of Race (NOR) 2025</h1>
          <p>View or Download the official NOR for YAI Youth National 2025.</p>
          <div className="calendar-buttons">
            <a
              href="/assets/documents/nor_yai_youth_national_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="view-button"
            >
              <FaEye className="button-icon" /> View NOR
            </a>
            <a
              href="/assets/documents/nor_yai_youth_national_2025.pdf"
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

export default NOR;
