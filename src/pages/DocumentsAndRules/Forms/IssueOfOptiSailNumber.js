import React, { useEffect, useState } from 'react';
import './IssueOfOptiSailNumber.css';

function IssueOfOptiSailNumber() {
  const images = [
    '/assets/images/contact_bg1.jpg',
    '/assets/images/contact_bg2.jpg',
    '/assets/images/contact_bg1.jpg',
    '/assets/images/contact_bg2.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="form-page"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="form-overlay">
        <div className="form-container animate-form">
          <h1 className="title">Issue of OPTI Sail Number Form</h1>
          <p className="subtitle">
            View or Download the official OPTI Sail Number Form easily.
          </p>

          <div className="form-buttons">
            <a
              href="/assets/documents/application_for_allotment_of_sail_number.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-view"
            >
              View Form
            </a>
            <a
              href="/assets/documents/application_for_allotment_of_sail_number.pdf"
              download
              className="btn-download"
            >
              Download Form
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IssueOfOptiSailNumber;
