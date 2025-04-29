import React, { useState, useEffect } from "react";
import "./OptimistRules.css";
import { FaEye, FaDownload } from "react-icons/fa";

const images = [
  "/assets/gallery/IMG_0031.jpg",
  "/assets/gallery/IMG_0041.jpg",
  "/assets/gallery/IMG_0065.jpg",
  "/assets/gallery/IMG_0085.jpg",
];

const OptimistRules = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="rules-page"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="rules-overlay">
        <div className="rules-card">
          <h1>Optimist Class Rules</h1>
          <p>Explore or download the official Optimist Class Rules easily.</p>
          <div className="rules-buttons">
            <a
              href="/assets/documents/optimist_class_rules.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rules-button view"
            >
              <FaEye className="button-icon" /> View Rules
            </a>
            <a
              href="/assets/documents/optimist_class_rules.pdf"
              download
              className="rules-button download"
            >
              <FaDownload className="button-icon" /> Download Rules
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptimistRules;
