// src/pages/Event/ViewCalendar.js

import React, { useState, useEffect } from "react";
import "./ViewCalendar.css"; // ✅ CSS bhi dunga abhi
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const images = [
  "/assets/gallery/IMG_0031.jpg",
  "/assets/gallery/IMG_0041.jpg",
  "/assets/gallery/IMG_0065.jpg",
  "/assets/gallery/IMG_0085.jpg",
];

const ViewCalendar = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="view-calendar-page"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="calendar-overlay">
        <div className="back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back
        </div>
        <h1 className="calendar-title">Domestic Sailing Calendar 2025</h1>

        <div className="pdf-viewer-container">
          <iframe
            src="/assets/documents/domestic_sailing_calendar_2025.pdf"
            title="Domestic Sailing Calendar 2025"
            frameBorder="0"
            className="pdf-frame"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ViewCalendar;
