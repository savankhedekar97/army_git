import React, { useEffect, useState } from "react";
import "./constitution.css";

function Constitution({ page = "home" }) {
  const images = [
    "/assets/gallery/IMG_0031.jpg",
    "/assets/gallery/IMG_0041.jpg",
    "/assets/gallery/IMG_0065.jpg",
    "/assets/gallery/IMG_0085.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundImageStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    // minHeight: "100vh",
    height: page === "home" ? "60vh" : "100vh",
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
    <div
      className={`${
        page === "home" ? "home-constitution-page" : "constitution-page"
      }`}
      style={backgroundImageStyle}
    >
      <div className="constitution-overlay">
        <div className="constitution-container  animate-constitution">
          <h1 className="title">NAOI Constitution 2012</h1>
          <p className="subtitle">
            View or Download the full Constitution Document easily and securely.
          </p>
          <div className="buttons">
            <a
              href="/assets/documents/constitution.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-view"
            >
              View Constitution
            </a>
            <a
              href="/assets/documents/constitution.pdf"
              download
              className="btn-download"
            >
              Download Constitution
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Constitution;
