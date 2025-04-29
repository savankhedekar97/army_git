import React, { useEffect, useState } from 'react';
import './NOR.css';

const NOR = () => {
  const images = [
    '/assets/images/contact_bg1.jpg',
    '/assets/images/contact_bg2.jpg',
    '/assets/images/contact_bg1.jpg',
    '/assets/images/contact_bg2.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="nor-page"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="nor-overlay">
        <div className="nor-container">
          <h1 className="title">Notice of Race (NOR)</h1>
          <p className="subtitle">View or Download the official NOR documents easily.</p>
          <div className="buttons">
            <a
              href="/assets/documents/nor_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-view"
            >
              View NOR
            </a>
            <a
              href="/assets/documents/nor_2025.pdf"
              download
              className="btn-download"
            >
              Download NOR
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NOR;
