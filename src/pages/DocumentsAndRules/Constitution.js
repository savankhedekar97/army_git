import React, { useEffect, useState } from "react";
import "./constitution.css";

function Constitution({ page = "home" }) {
  const images = [
    "/assets/documents/constitution_NOAI/Constitution NOAI 2012 000.jpg",
    "/assets/documents/constitution_NOAI/Constitution NOAI 2012 001.jpg",
    "/assets/documents/constitution_NOAI/Constitution NOAI 2012 002.jpg",
    "/assets/documents/constitution_NOAI/Constitution NOAI 2012 003.jpg",
    "/assets/documents/constitution_NOAI/Constitution NOAI 2012 004.jpg",
    "/assets/documents/constitution_NOAI/Constitution NOAI 2012 005.jpg",
    "/assets/documents/constitution_NOAI/Constitution NOAI 2012 006.jpg",
    "/assets/documents/constitution_NOAI/Constitution NOAI 2012 007.jpg",
    "/assets/documents/constitution_NOAI/Constitution NOAI 2012 008.jpg",
    "/assets/documents/constitution_NOAI/Constitution NOAI 2012 009.jpg",
    "/assets/documents/constitution_NOAI/Constitution NOAI 2012 010.jpg",
    "/assets/documents/constitution_NOAI/Constitution NOAI 2012 011.jpg",
    "/assets/documents/constitution_NOAI/Constitution NOAI 2012 012.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, [images.length]);
  console.log("@AM", page);

  return (
    <div
      className={`${
        page === "home" ? "home-constitution-page" : "constitution-page"
      }`}
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      <div className="constitution-overlay">
        <div className="constitution-container animate-constitution">
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
